import React from "react";
import { Award, Shield, Check, Database, Layers } from "lucide-react";
import { hA, cc } from "../data";

export const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-20 border-t border-stone-200 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-teal-600 uppercase">
            Validation & Tools
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight mt-1">
            Professional <span className="font-semibold text-teal-700">Development</span> & Tech Stack
          </h2>
          <p className="text-stone-600 font-sans mt-3 text-base">
            Verified academic credentials from premier institutions and deep structural proficiency across modern enterprise resources planning (ERP), agile, and wireframing tools.
          </p>
        </div>

        {/* Credentials ledger grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Executive Certifications Column (Spans 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono tracking-wider font-bold uppercase text-stone-500 mb-4 pb-2 border-b border-stone-200 flex items-center space-x-2">
              <Award className="w-4 h-4 text-teal-600" />
              <span>Executive Certifications</span>
            </h3>

            <div className="space-y-6 relative border-l-2 border-stone-200 pl-6 py-1 ml-3">
              {hA.map((cert, idx) => (
                <div key={idx} className="relative group space-y-1.5" id={`cert_block_${idx}`}>
                  {/* Timeline round bullet */}
                  <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-teal-600 group-hover:bg-teal-600 transition-colors" />

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-bold text-stone-900 text-sm sm:text-base">
                      {cert.title}
                    </span>
                    {cert.year && (
                      <span className="px-2 py-0.5 bg-teal-50 border border-teal-200/50 text-[10px] font-mono font-bold text-teal-750 rounded">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-500 font-mono tracking-wide uppercase font-semibold">
                    {cert.institution}
                  </p>
                  <p className="text-stone-600 text-xs sm:text-sm pl-1 font-sans leading-relaxed">
                    {cert.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms lists Column (Spans 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Governance Frameworks Card */}
            <div
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4"
              id="governance_frameworks_panel"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-teal-600" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                  Governance & Frameworks
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {cc.frameworks.map((fw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-stone-50 border border-stone-200 text-xs font-medium text-stone-700 rounded-lg hover:border-teal-500 hover:bg-stone-50 hover:shadow-sm transition-all"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            {/* Systems & Software Platforms Card */}
            <div
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4"
              id="platforms_panel"
            >
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-teal-600" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                  Systems & Software Platforms
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {cc.platforms.map((plat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-stone-50 border border-stone-200 text-xs font-medium text-stone-700 font-sans rounded-lg flex items-center space-x-1.5 hover:border-teal-500 hover:shadow-sm transition-all"
                  >
                    <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>{plat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Core Portfolio Specialisms Card */}
            <div
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4"
              id="specialisms_panel"
            >
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-teal-600" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                  Core Portfolio Specialisms
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {cc.specialisms.map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-teal-50/50 border border-teal-500/10 text-xs font-medium text-teal-800 font-sans rounded-lg hover:bg-teal-50 hover:shadow-sm transition-all"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
