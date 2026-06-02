import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Network, ShoppingCart, Users, AlertTriangle, Calendar, ArrowRight, ArrowUpRight, X, Check, Lightbulb, TrendingUp } from "lucide-react";
import { Q0, ProjectData } from "../data";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [filterType, setFilterType] = useState<string>("all");

  const filterTabs = [
    { key: "all", label: "All Strategic Cases" },
    { key: "infrastructure", label: "Core Infrastructure" },
    { key: "e-commerce", label: "Digital Transformation" },
    { key: "pmo", label: "PMO & Enterprise" },
    { key: "crisis", label: "Crisis Management" },
  ];

  const filteredProjects =
    filterType === "all" ? Q0 : Q0.filter((p) => p.category === filterType);

  const getCategoryIcon = (category: string, className = "w-4 h-4") => {
    switch (category) {
      case "infrastructure":
        return <Network className={className} />;
      case "e-commerce":
        return <ShoppingCart className={className} />;
      case "pmo":
        return <Users className={className} />;
      case "crisis":
        return <AlertTriangle className={className} />;
      default:
        return <Network className={className} />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "infrastructure":
        return "Core Telecom Infra";
      case "e-commerce":
        return "Digital Commerce & ERP";
      case "pmo":
        return "PMO & Enterprise Integration";
      case "crisis":
        return "Contractual Continuity";
      default:
        return "Strategic Focus";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-semibold tracking-wider text-teal-600 uppercase">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight mt-1">
              Delivering <span className="font-semibold text-teal-700">Tangible Business Value</span>
            </h2>
            <p className="text-stone-600 font-sans mt-3 text-base">
              Jonathan has spearheaded massive migrations and telecom expansions. Filter projects below and click to read the detailed business case, metrics, and reflections.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200/60 max-w-sm w-full">
            <div>
              <span className="block font-display font-bold text-teal-600 text-lg leading-none">R50M+</span>
              <span className="text-[10px] text-stone-500 uppercase font-mono tracking-wider block mt-1">
                Revenue Boost
              </span>
            </div>
            <div>
              <span className="block font-display font-bold text-teal-600 text-lg leading-none">99.9%</span>
              <span className="text-[10px] text-stone-500 uppercase font-mono tracking-wider block mt-1">
                Network Uptime
              </span>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-100 pb-5">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilterType(tab.key)}
              className={`px-4 py-2 text-xs font-medium tracking-wide transition-all rounded-lg font-mono ${
                filterType === tab.key
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-stone-50 text-stone-600 hover:bg-stone-100/80"
              }`}
              id={`filter_tab_${tab.key}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const mainResult = project.results[0];
              const resultDetailWord = mainResult ? mainResult.description.split(" ")[0] : "Growth";

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-stone-50/50 hover:bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-teal-500/30 transition-all flex flex-col justify-between"
                  id={`project_card_${project.id}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center space-x-1.5 text-xs text-teal-700 bg-teal-50 border border-teal-200/40 px-2.5 py-1 rounded-md font-mono">
                        {getCategoryIcon(project.category, "w-3.5 h-3.5")}
                        <span>{getCategoryLabel(project.category)}</span>
                      </span>
                      {project.period && (
                        <span className="flex items-center space-x-1 text-xs text-stone-400 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{project.period}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-display font-semibold text-stone-900 group-hover:text-teal-700 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed font-sans line-clamp-3">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-semibold text-stone-800">
                        {mainResult?.metric || "Success"}
                      </span>
                      <span className="text-xs text-stone-500 font-sans">
                        ({resultDetailWord}...)
                      </span>
                    </div>

                    <span className="inline-flex items-center text-xs font-semibold text-teal-600 font-mono group-hover:translate-x-1 transition-transform">
                      <span>Open Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Slidedown / Overlay Drawer for Case Study details */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Dark Overlay backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-stone-900 z-50 pointer-events-auto"
              />

              {/* Side Drawer Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-full md:max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto border-l border-stone-200"
                id="project_case_drawer"
              >
                {/* Drawer Sticky Top Header */}
                <div className="sticky top-0 bg-white border-b border-stone-100 py-4 px-6 sm:px-8 flex items-center justify-between z-10">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-stone-400" />
                    <span className="text-xs font-mono font-medium text-stone-500 uppercase tracking-wider">
                      Business Case Study
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all"
                    id="close_case_study"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Content Body */}
                <div className="p-6 sm:p-8 space-y-8 pb-16">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center space-x-1.5 text-xs text-teal-800 bg-teal-50 border border-teal-200/20 px-3 py-1 rounded-md font-mono">
                        {getCategoryIcon(selectedProject.category, "w-3.5 h-3.5")}
                        <span>{getCategoryLabel(selectedProject.category)}</span>
                      </span>
                      {selectedProject.period && (
                        <span className="px-2.5 py-1 text-xs bg-stone-100 rounded-md font-mono text-stone-500">
                          {selectedProject.period}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-stone-900 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-stone-550 text-xs font-mono">
                      Location: {selectedProject.company} South Africa Portfolio
                    </p>
                  </div>

                  {/* Challenge details */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-stone-400 uppercase tracking-wider font-semibold border-b border-stone-100 pb-1">
                      I. The Challenge Strategy
                    </h4>
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans font-light">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* Metric Results */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-stone-400 uppercase tracking-wider font-semibold border-b border-stone-100 pb-1">
                      II. Documented Results / Business Value
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedProject.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="bg-teal-50/40 border border-teal-500/10 rounded-xl p-4 space-y-1 align-middle"
                        >
                          <span className="block font-display font-bold text-teal-850 text-xl leading-none">
                            {result.metric}
                          </span>
                          <span className="text-xs text-stone-600 leading-relaxed font-sans block">
                            {result.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategic Execution Details */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-mono text-stone-400 uppercase tracking-wider font-semibold border-b border-stone-100 pb-1">
                      III. Strategic Execution Framework
                    </h4>
                    <div className="space-y-2.5">
                      {selectedProject.strategicExecution.map((step, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-stone-700">
                          <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-sans leading-relaxed font-medium">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Critical reflection review block */}
                  <div className="p-5 sm:p-6 bg-stone-900 text-white rounded-2xl relative overflow-hidden space-y-4 shadow-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full filter blur-xl -mr-8 -mt-8" />
                    <div className="flex items-center space-x-2 text-teal-400">
                      <Lightbulb className="w-4 h-4" />
                      <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                        Critical Review & Reflection
                      </h4>
                    </div>
                    <blockquote className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans tracking-wide italic pl-1 leading-normal">
                      "{selectedProject.reflection}"
                    </blockquote>
                    <div className="pt-2 border-t border-stone-800 text-[10px] text-stone-400 font-mono flex items-center justify-between">
                      <span>Authority: {Q0.find(p=>p.id===selectedProject.id)?.company === "Hewlett Packard" ? "Jonathan Smit, HP Lead" : "Jonathan Smit, Senior PM"}</span>
                      <span>Review Category: Lessons Learned</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
