import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send, User, Loader2, AlertCircle, CornerDownLeft } from "lucide-react";
import { le } from "../data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I am Jonathan Smit's interactive AI Agent. Recruiters study my portfolio here to see if my 17+ years of telecom portfolio, PMO, and digital integrations match their leadership roles. How can I help you inspect my record today?",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorVal, setErrorVal] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    {
      text: "CPO role alignment & vision",
      query: "Are you ready for a Chief Product Officer (CPO) role? Describe your long-term CPO vision and how you fit.",
    },
    {
      text: "Salesforce & ERP migrations",
      query: "What is your specific experience directing complex Salesforce org mergers and SAP to Acumatica integrations?",
    },
    {
      text: "The R35M COVID continuity",
      query: "Details on how you managed the robust R35M contractual risk and vendor cutovers during the COVID crisis.",
    },
    {
      text: "Fiber & Telecom background",
      query: "Tell me about your experience leading strategy and lifecycle ops for local/intl network services and fiber.",
    },
  ];

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 200);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updatedMsgs = [...messages, userMsg];

    setMessages(updatedMsgs);
    setInputVal("");
    setLoading(true);
    setErrorVal(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMsgs }),
      });

      if (!res.ok) {
        throw new Error("Failed to contact the portfolio routing server.");
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
    } catch (err: any) {
      console.error("AI Assistant Chat Error:", err);
      setErrorVal("I am temporarily having an issue contacting the AI core. Feel free to contact Jonathan directly at " + le.email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Drawer Backdrop element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 z-50 backdrop-blur-[1px]"
          />

          {/* Assistant Side Drawer container */}
          <motion.div
            initial={{ x: "100%", opacity: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white shadow-2xl z-50 border-l border-stone-200 flex flex-col justify-between"
            id="ai_twin_drawer"
          >
            {/* Drawer Header block */}
            <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between bg-stone-900 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-teal-600/20 text-teal-400 border border-teal-500/25 flex items-center justify-center">
                  <Bot className="w-5 h-5 animate-pulse-slow" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="font-display font-bold text-sm tracking-wide">Jonathan's AI Twin</h3>
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-1.5 h-1.5 rounded-full bg-teal-400 block"
                    />
                  </div>
                  <p className="text-[10px] text-stone-300 font-mono">Grounded Resume Assistant</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-stone-800 rounded-lg text-stone-400 hover:text-white transition-colors"
                id="close_ai_chat_button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrolling Chat history */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-stone-50/50">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-2.5 ${
                      msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0 ${
                        msg.role === "user" ? "bg-stone-900 text-white" : "bg-teal-600 text-white"
                      }`}
                    >
                      {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-stone-900 text-stone-100 rounded-tr-none"
                          : "bg-white border border-stone-200/80 text-stone-800 rounded-tl-none shadow-sm"
                      }`}
                    >
                      <p className="whitespace-pre-line font-sans">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {/* Simulated Thinking state */}
                {loading && (
                  <div className="flex items-start space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="max-w-[80%] rounded-2xl rounded-tl-none px-4 py-3 bg-white border border-stone-200 text-stone-500 text-xs italic flex items-center space-x-2 shadow-sm">
                      <Loader2 className="w-3.5 h-3.5 text-teal-600 animate-spin" />
                      <span className="font-sans">Synthesizing Jonathan's strategic record...</span>
                    </div>
                  </div>
                )}

                {/* Error Banner state */}
                {errorVal && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium font-sans">{errorVal}</span>
                  </div>
                )}

                <div ref={scrollRef} />
              </div>
            </div>

            {/* Sugested topics & Text input Footer */}
            <div className="p-3.5 border-t border-stone-100 bg-white">
              {messages.length === 1 && (
                <div className="space-y-1.5 animate-fade-in">
                  <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block font-bold pl-1">
                    Suggested Recruiter Inquiries:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {suggestions.map((sugg, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(sugg.query)}
                        className="text-left py-1.5 px-3 bg-stone-50 hover:bg-teal-50 hover:border-teal-300 border border-stone-200/60 rounded-lg text-xs text-stone-600 font-medium transition-colors font-sans truncate"
                      >
                        {sugg.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Input Container */}
              <div className="mt-2.5 flex items-center space-x-2 border border-stone-200 rounded-xl px-3 py-2 focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500/10">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage(inputVal);
                  }}
                  placeholder="Ask about credentials, migrations, P&L..."
                  className="flex-1 text-sm bg-transparent outline-none text-stone-850 font-sans"
                  id="ai_chat_text_input"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => handleSendMessage(inputVal)}
                  disabled={!inputVal.trim() || loading}
                  className="p-1.5 bg-stone-900 text-white rounded-lg hover:bg-teal-600 disabled:opacity-30 disabled:hover:bg-stone-900 transition-colors cursor-pointer"
                  id="send_chat_msg_btn"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Small help captions */}
              <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono mt-1.5 px-1 bg-white">
                <span>Status: Grounded Mode</span>
                <span className="flex items-center space-x-1">
                  <CornerDownLeft className="w-2.5 h-2.5" />
                  <span>Enter to Send</span>
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
