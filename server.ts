import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { le, hs, fA, Q0, dA, hA, cc } from "./src/data.js";

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Chat route
  app.post("/api/chat", async (req: express.Request, res: express.Response) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Invalid dynamic message payload." });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback static responses when key is unconfigured
        const lastMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
        let reply = `I am currently operating in offline sandbox mode (Configuring your GEMINI_API_KEY in the Secrets panel will enable the real-time AI Twin conversation). Here is a summary of Jonathan's background:
- 17+ years of telecom portfolio strategy and digital systems leadership.
- Senior Product Manager at SEACOM, directing billing, Acumatica ERP deployments, and wholesale contract negotiations with 13 suppliers.
- Proven leadership directing high-performing PMO offices and leading Salesforce mergers.

What specific strategic case or credential should I outline for you?`;
        
        if (lastMsg.includes("role") || lastMsg.includes("cpo")) {
          reply = `Jonathan's CPO vision is centered on bridging the gap between high-level commercial strategy and deep billing, platform, and infrastructure execution. At SEACOM, he protects double-digit margins and implements scalable SaaS/network lifecycles, and is ready for high-impact CPO transitions or enterprise leadership roles. Configure your GEMINI_API_KEY in the Secrets panel to ask further details directly!`;
        } else if (lastMsg.includes("salesforce") || lastMsg.includes("migration")) {
          reply = `Jonathan led complex SF org mergers and SAP to Acumatica integrations at SEACOM. This involved mapping thousands of pricing attributes, connecting geolocation price-quoting APIs, and establishing automated order-to-cash pipelines that accelerated quote-to-fulfillment.`;
        } else if (lastMsg.includes("covid") || lastMsg.includes("exposure") || lastMsg.includes("35")) {
          reply = `During the COVID supply peaks, Jonathan navigated a high-risk R35 Million contractual liability exposure with a vital network carrier. He developed robust contingency models, renegotiated SLA agreements to replace expensive legacy lines with high-performance fiber, and maintained flawless business continuity.`;
        }

        res.json({ text: reply });
        return;
      }

      // Initialize Google GenAI
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      // Construct system instruction based on data
      const systemInstruction = `You are Jonathan Smit's interactive AI twin. You speak on behalf of Jonathan, a Senior Product Manager with over 17 years of experience in telecom portfolio strategy, PMO management, and large-scale digital system modernizations (SAP, Acumatica, Salesforce).
Recruiters and hiring managers study this portfolio to assess if Jonathan fits senior telecom or CPO leadership roles.

Here is Jonathan's verified profile data from his resume:
- Name: ${le.name}
- Current Title: Senior Product Manager at SEACOM South Africa
- Email: ${le.email}
- LinkedIn: ${le.linkedin}
- Career Vision: ${le.vision}

About Jonathan:
${le.aboutMeParagraphs.join("\n")}

Active Strategic Focus Areas:
${dA.map(i => `- ${i.title}: ${i.description}`).join("\n")}

Core Competencies:
${hs.map(c => `- ${c.title}: ${c.description}\n  Details:\n${c.details.map(d => `    * ${d}`).join("\n")}`).join("\n")}

Featured Projects & Case Studies:
${Q0.map(p => `- ${p.title} (at ${p.company}):
  * Challenge: ${p.challenge}
  * Execution: ${p.strategicExecution.join("; ")}
  * Key Results: ${p.results.map(r => `${r.metric} (${r.description})`).join(", ")}
  * Critical Reflection: ${p.reflection}`).join("\n")}

Certifications & Academics:
${hA.map(c => `- ${c.title} from ${c.institution} (${c.year || ""}): ${c.details}`).join("\n")}

Technical Skills Matrices:
- Frameworks: ${cc.frameworks.join(", ")}
- Platforms: ${cc.platforms.join(", ")}
- Specialisms: ${cc.specialisms.join(", ")}

Response Rules:
- Adopt Jonathan's exact voice—highly analytical, commercially sharp, impact-driven, professional, but approachable and helpful.
- Reference his direct experience (specifically SEACOM, Hewlett Packard, University of Johannesburg, King's College London certs).
- Be extremely cohesive and clear. Keep response lengths reasonable (approx 100-250 words) so they fit nicely in a mobile drawer interface.
- Bold key numbers, metrics, or technologies to make your response visually professional and highly scannable.`;

      // Map messages for GenAI chat
      const chatContents = messages.map(msg => ({
        role: msg.role === "assistant" ? "model" as const : "user" as const,
        parts: [{ text: msg.content }],
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: chatContents,
        config: {
          systemInstruction,
          temperature: 0.75,
        },
      });

      res.json({ text: response.text || "I was unable to synthesize a response. Let's try again!" });
    } catch (err: any) {
      console.error("Express Gemini /api/chat error:", err);
      res.status(500).json({ error: "Failed to communicate with AI core." });
    }
  });

  // Serve static assets or mount Vite dev server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server started on http://localhost:${PORT}`);
  });
}

startServer();
