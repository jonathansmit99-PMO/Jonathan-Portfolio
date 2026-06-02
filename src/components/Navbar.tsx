import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Network, Linkedin, Mail, Menu, X } from "lucide-react";
import { le } from "../data";

interface NavbarProps {
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Profile", href: "#profile" },
    { label: "Strategic Capabilities", href: "#competencies" },
    { label: "Featured Projects", href: "#projects" },
    { label: "Credentials", href: "#credentials" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-stone-200/60 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-sm shadow-teal-600/30">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-semibold text-stone-900 tracking-tight block text-base leading-none">
                {le.name}
              </span>
              <span className="text-[10px] text-teal-600 font-mono tracking-wider uppercase block mt-0.5">
                Senior PM / Portfolio
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-stone-600 hover:text-teal-600 font-medium transition-colors rounded-lg hover:bg-stone-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href={le.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-500 hover:text-teal-600 transition-colors rounded-lg hover:bg-stone-50"
              title="LinkedIn Profile"
              id="navbar_linkedin_link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${le.email}`}
              className="p-2 text-stone-500 hover:text-teal-600 transition-colors rounded-lg hover:bg-stone-50"
              title="Send Direct Email"
              id="navbar_email_link"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenChat}
              className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-all shadow-sm"
              id="navbar_chat_cta"
            >
              Ask AI Twin
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-stone-600 hover:text-teal-600 transition-colors"
              aria-label="Toggle menu"
              id="mobile_menu_toggle"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-stone-200"
            id="mobile_dropdown_menu"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-stone-700 hover:text-teal-600 hover:bg-stone-50 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-stone-100 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenChat();
                  }}
                  className="w-full px-4 py-2.5 bg-teal-600 text-white rounded-lg text-sm font-medium text-center shadow-sm"
                >
                  Ask AI Twin
                </button>
                <div className="flex justify-center space-x-6 py-2">
                  <a
                    href={le.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-stone-500 hover:text-teal-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${le.email}`} className="p-2 text-stone-500 hover:text-teal-600">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
