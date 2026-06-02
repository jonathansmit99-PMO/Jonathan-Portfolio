import React from "react";
import { motion } from "motion/react";
import { Award, ArrowRight, Settings } from "lucide-react";
import { le, dA } from "../data";

export const ProfileHero: React.FC = () => {
  return (
    <section id="profile" className="pt-28 pb-16 relative overflow-hidden grid-bg">
      {/* Decorative SVG grid/curves */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
        <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 100 C 250 100, 350 400, 550 400" stroke="#0d9488" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M50 200 C 200 200, 250 300, 550 500" stroke="#0d9488" strokeWidth="1.5" />
          <path d="M100 50 C 300 50, 400 250, 500 550" stroke="#0d9488" strokeWidth="3" opacity="0.5" />
          <circle cx="280" cy="270" r="4" fill="#0d9488" className="animate-pulse" />
          <circle cx="430" cy="415" r="4.5" fill="#0d9488" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start mt-4">
          {/* Main profile brief */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-teal-50 border border-teal-200/50 rounded-full text-teal-800 text-xs font-mono tracking-wider uppercase"
            >
              <Award className="w-3.5 h-3.5" />
              <span>SEACOM Senior Product Management</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-stone-900 tracking-tight leading-none"
            >
              Innovation <span className="text-teal-600 font-extrabold">In Digital & Telecom</span> Growth Specialist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-stone-600 font-medium leading-relaxed font-sans"
            >
              Bridging Navigating the nexus of high-level commercial strategy and the deep-tier execution of commercial models, platforms, and carrier-grade infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 text-stone-600 font-sans leading-relaxed text-sm sm:text-base border-l-2 border-stone-200 pl-4 py-1"
            >
              {le.aboutMeParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-all shadow-md hover:shadow-teal-600/10"
                id="hero_projects_cta"
              >
                <span>View Strategic Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#credentials"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-white text-stone-700 border border-stone-200 rounded-lg text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-all"
                id="hero_credentials_cta"
              >
                <span>Credentials & Specialization</span>
              </a>
            </motion.div>
          </div>

          {/* Siderun panels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Long-term Career Vision */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm bg-gradient-to-br from-white to-stone-50/50 relative overflow-hidden"
              id="cpo_vision_card"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full filter blur-xl -mr-6 -mt-6" />
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-stone-900 text-sm">Long-Term Executive Vision</h3>
                  <p className="text-[10px] text-stone-500 font-mono tracking-wider uppercase">
                    Chief Product Officer (CPO)
                  </p>
                </div>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed italic pr-2 font-medium">
                "{le.vision}"
              </p>
            </motion.div>

            {/* Active Initiatives Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-stone-900 text-white rounded-2xl shadow-xl space-y-6"
              id="current_initiatives_panel"
            >
              <div className="flex items-center space-x-2">
                {/* Slow spinning cog */}
                <Settings className="w-4 h-4 text-teal-400 animate-spin" style={{ animationDuration: "8s" }} />
                <h3 className="font-display font-semibold text-sm tracking-wide text-stone-100 uppercase">
                  Active Strategic Scope
                </h3>
              </div>
              <div className="space-y-5">
                {dA.map((initiative, index) => (
                  <div key={index} className="space-y-1.5 group border-b border-stone-880 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <h4 className="font-display font-medium text-sm text-stone-100 group-hover:text-teal-400 transition-colors">
                        {initiative.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed pl-4 font-sans font-light">
                      {initiative.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
