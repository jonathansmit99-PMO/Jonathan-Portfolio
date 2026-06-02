import React, { useState } from "react";
import { MessageSquareDot } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ProfileHero } from "./components/ProfileHero";
import { Competencies } from "./components/Competencies";
import { Projects } from "./components/Projects";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";
import { AIAssistant } from "./components/AIAssistant";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50/20 text-stone-900 selection:bg-teal-150 selection:text-teal-900 antialiased font-sans">
      {/* Dynamic Top Glow Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-teal-600 to-stone-950 fixed top-0 left-0 right-0 z-[100]" />

      {/* Primary Navigation */}
      <Navbar onOpenChat={() => setChatOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        <ProfileHero />
        <Competencies />
        <Projects />
        <Credentials />
        <Contact />
      </main>

      {/* Footer Block */}
      <footer className="border-t border-stone-200 bg-stone-900 text-stone-100 py-10 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 opacity-95" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="font-display font-bold text-stone-100 block text-base tracking-tight leading-none">
                Jonathan Smit
              </span>
              <span className="text-xs text-stone-400 block font-mono">
                Senior Product Manager & Telecom Strategist Portfolio
              </span>
            </div>
            
            <div className="flex items-center space-x-1.5 text-xs text-stone-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse block" />
              <span>Grounded AI Twin Grounding Active</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-500 font-mono leading-relaxed">
              © {new Date().getFullYear()} Jonathan Smit. Constructed with advanced modular React & Gemini intelligence. All rights preserved.
            </p>
            <div className="flex gap-4 text-xs font-mono text-stone-500">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Floating Action Button (FAB) for AI Twin Chat */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-45 bg-stone-900 hover:bg-teal-600 text-teal-400 hover:text-white p-4 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 group cursor-pointer border border-teal-500/10"
        title="Open grounded AI twin assistant drawer"
        id="floating_ai_assistant_fab"
      >
        <MessageSquareDot className="w-6 h-6 animate-pulse-slow group-hover:rotate-6 transition-transform" />
      </button>

      {/* Floating AI Agent Drawer Drawer Container */}
      <AIAssistant isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
