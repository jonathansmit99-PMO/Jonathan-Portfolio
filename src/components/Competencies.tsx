import React, { useState } from "react";
import { motion } from "motion/react";
import { Network, TrendingUp, Cpu, Users, ChevronRight, Check } from "lucide-react";
import { hs, fA } from "../data";

export const Competencies: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Network":
        return <Network className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "Users":
        return <Users className={className} />;
      default:
        return <Network className={className} />;
    }
  };

  return (
    <section id="competencies" className="py-20 border-y border-stone-200 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-teal-600 uppercase">
            Product Executive Ledger
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight mt-1">
            Commercial Strategy meets <span className="font-semibold text-teal-700">Technical Mastery</span>
          </h2>
          <p className="text-stone-600 font-sans mt-3 text-base">
            Over Jonathan's 17+ year background, he has unified the financial, programmatic, and software pillars of telecom engineering. Click each card to dive deeper.
          </p>
        </div>

        {/* Master details grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Competency Selection list (col spans 6) */}
          <div className="lg:col-span-6 space-y-4">
            {hs.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIdx(index)}
                className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start space-x-4 ${
                  activeIdx === index
                    ? "bg-white border-teal-500 shadow-md ring-1 ring-teal-500/10"
                    : "bg-white/80 border-stone-200/60 hover:bg-white hover:border-stone-300"
                }`}
                id={`competency_card_${index}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeIdx === index ? "bg-teal-600 text-white" : "bg-teal-50 text-teal-600"
                  }`}
                >
                  {getIcon(item.iconName, "w-5 h-5")}
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-stone-900 text-base">
                      {item.title}
                    </h3>
                    <ChevronRight
                      className={`w-4 h-4 text-stone-400 transition-transform ${
                        activeIdx === index ? "rotate-90 text-teal-600" : ""
                      }`}
                    />
                  </div>
                  <p className="text-stone-650 text-sm leading-relaxed font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Details display card (col spans 6) */}
          <div className="lg:col-span-6">
            <motion.div
              layout
              className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm h-full"
              id="competency_details_panel"
            >
              {activeIdx !== null ? (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 pb-4 border-b border-stone-100">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                      {getIcon(hs[activeIdx].iconName, "w-5 h-5")}
                    </div>
                    <span className="text-xs font-mono tracking-wider font-semibold uppercase text-stone-500">
                      Inside Scope Details
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-stone-900 leading-tight">
                      {hs[activeIdx].title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed font-sans">
                      {hs[activeIdx].description}
                    </p>
                  </div>

                  <div className="space-y-3.5 pt-2">
                    <h4 className="text-xs font-mono text-teal-600 font-semibold tracking-wide uppercase">
                      Specific Capability Deliveries
                    </h4>
                    <div className="grid gap-3">
                      {hs[activeIdx].details.map((detail, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2.5 p-3 rounded-lg hover:bg-stone-50/50 transition-colors"
                        >
                          <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-stone-700 text-sm leading-relaxed font-sans font-medium">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-stone-400">
                  <p className="text-sm">Select a category on the left to review strategic deliverables.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom Accomplishments / Role Governance section */}
        <div className="mt-16 pt-12 border-t border-stone-200/80">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold tracking-wider text-teal-600 uppercase">
              Management & Governance Scale
            </span>
            <h3 className="text-2xl font-display font-medium text-stone-900 mt-1">
              Leadership & High-Impact Governance
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fA.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:border-teal-500/30 transition-all flex flex-col justify-between"
                id={`accomplishment_card_${index}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-wider font-semibold rounded bg-stone-100 text-stone-600 uppercase">
                      {item.role}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-stone-800 text-base leading-snug">
                    {item.topic}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    {item.details}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                  <span>Scope: International SEACOM Governance</span>
                  <span className="text-teal-600 font-medium">Managed & Coached</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
