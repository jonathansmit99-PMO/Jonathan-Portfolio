import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Check, Copy, Send } from "lucide-react";
import { le } from "../data";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const templates = [
    {
      label: "Schedule Interview",
      text: "Hi Jonathan, I reviewed your executive portfolio website. We are recruiting strategic leaders with your exact 17+ years of telecom portfolio strategy and PMO leadership experience, and we would love to schedule an introductory call. Let us know when you're available!",
    },
    {
      label: "Discuss Fiber Project",
      text: "Hi Jonathan, we are exploring a major network modernization initiative spanning carrier integrations and Salesforce/Acumatica mapping. Your work at Seacom with R50M+ revenue growth is highly relevant. Let's discuss a contract/consulting opportunity.",
    },
    {
      label: "CPO Exploration",
      text: "Hi Jonathan, following your outlined career vision towards a Chief Product Officer role, we are looking for high-impact leaders capable of managing cross-functional teams and C-suite relations. We'd love to chat further.",
    },
  ];

  const handleApplyTemplate = (text: string) => {
    setFormData((prev) => ({ ...prev, message: text }));
  };

  const handleCopyDetails = () => {
    const formattedText = `To: ${le.email}
Name: ${formData.name}
Company: ${formData.company || "N/A"}
Message: ${formData.message}`;

    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const emailSubject = encodeURIComponent(`Strategic Portfolio Inquiry - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hi Jonathan,\n\n${formData.message}\n\nBest regards,\n${formData.name}${
        formData.company ? `\nCompany: ${formData.company}` : ""
      }\nEmail: ${formData.email}`
    );

    window.location.href = `mailto:${le.email}?subject=${emailSubject}&body=${emailBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-4">
          {/* General briefs & Quick templates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-teal-600 uppercase">
                Contact & Collaboration
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight leading-tight">
                Let's Build <span className="font-semibold text-teal-700">Digital Value</span> Together
              </h2>
              <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
                Jonathan's background in telecom, core network operations, and complex ERP systems is highly valuable. Send a fast notification directly, or apply one of our templates to auto-fill.
              </p>
            </div>

            {/* Direct Contact links card */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${le.email}`}
                className="flex items-center space-x-3.5 p-4 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200/50 transition-colors"
                id="contact_page_email_lnk"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-500 font-mono tracking-wider uppercase font-semibold">
                    Direct Email Address
                  </span>
                  <span className="block text-sm font-semibold text-stone-800 font-sans break-all">
                    {le.email}
                  </span>
                </div>
              </a>

              <a
                href={le.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3.5 p-4 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200/50 transition-colors"
                id="contact_page_linkedin_lnk"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-500 font-mono tracking-wider uppercase font-semibold">
                    LinkedIn Workspace
                  </span>
                  <span className="block text-sm font-semibold text-stone-800 font-sans">
                    linkedin.com/in/jonathan-smit-3594b162
                  </span>
                </div>
              </a>
            </div>

            {/* Templates blocks list */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider font-semibold block">
                Quick Template Auto-Fillers:
              </span>
              <div className="flex flex-wrap gap-2">
                {templates.map((tmpl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleApplyTemplate(tmpl.text)}
                    className="py-1.5 px-3 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium text-stone-700 hover:bg-teal-50 hover:border-teal-300 transition-colors font-sans text-left"
                    id={`apply_template_${idx}`}
                  >
                    {tmpl.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form column (Spans 7) */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="form-submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-6"
                >
                  <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-medium text-xl text-stone-900">Email Client Launched!</h3>
                    <p className="text-stone-605 text-sm max-w-md mx-auto font-sans leading-relaxed">
                      Thank you, <strong className="text-stone-800">{formData.name}</strong>! We have launched your default email application prefilled with the inquiry. If your application did not open automatically, please click below to copy the prefilled draft and email it directly to <strong className="text-stone-900">{le.email}</strong>!
                    </p>
                  </div>

                  <div className="bg-white border border-stone-200 rounded-xl p-4 text-left space-y-2 shadow-sm max-w-lg mx-auto">
                    <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-stone-500 uppercase pb-1.5 border-b border-stone-100">
                      <span>Inquiry Preview Draft</span>
                      <button
                        type="button"
                        onClick={handleCopyDetails}
                        className="text-teal-600 hover:text-teal-800 flex items-center space-x-1"
                        id="copy_completed_message_btn"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Details Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Details</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-stone-650 italic font-sans leading-relaxed whitespace-pre-wrap">
                      {"To: " + le.email}
                      <br />
                      {"From: " + formData.name + " (" + (formData.company || "No Company") + ")"}
                      <br />
                      <br />
                      {formData.message}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ name: "", company: "", email: "", message: "" });
                        setSubmitted(false);
                      }}
                      className="text-xs font-mono font-bold text-teal-600 hover:text-teal-800 uppercase tracking-wider"
                    >
                      ← Send another notification
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  id="contact_form_element"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-stone-500 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="w-full text-sm font-sans px-4 py-2.5 bg-white border border-stone-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                        placeholder="Steve Jobs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-stone-500 uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="w-full text-sm font-sans px-4 py-2.5 bg-white border border-stone-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                        placeholder="Telecommunications Ltd"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-stone-500 uppercase tracking-wider">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full text-sm font-sans px-4 py-2.5 bg-white border border-stone-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="steve@company.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono font-medium text-stone-500 uppercase tracking-wider">
                        Inquiry Message *
                      </label>
                      {formData.message && (
                        <button
                          type="button"
                          onClick={handleCopyDetails}
                          className="text-[10px] font-mono text-teal-600 hover:text-teal-800 flex items-center space-x-1"
                          id="copy_draft_message_btn"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy Draft</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      className="w-full text-sm font-sans px-4 py-2.5 bg-white border border-stone-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="Write your professional offer, request for introduction, or apply a template from the left."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Send Portfolio Alert</span>
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
