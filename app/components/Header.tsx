"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const navItems = [
    { label: "Investors", href: "#investors" },
    { label: "Deals", href: "#deals" },
    { label: "Advisory", href: "#advisory" },
    { label: "Contact", href: "#final-cta" },
  ];

  /* SCROLL DETECTION */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SCROLL SPY */
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const handleScroll = () => {
      let current = "";
      let minTop = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
          if (rect.top < minTop) {
            minTop = rect.top;
            current = section.getAttribute("data-section") || "";
          }
        }
      });

      const index = navItems.findIndex(
        (item) => item.href.replace("#", "") === current
      );

      if (index !== -1 && index !== activeIndex) {
        const newDirection = index > activeIndex ? "right" : "left";
        setDirection(newDirection);
        setActiveIndex(index);
      }

      if (!current) setActiveIndex(-1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-2 md:py-3 shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between overflow-hidden">

        {/* BRAND */}
        <div
          className="leading-tight cursor-pointer select-none transition-opacity hover:opacity-80 flex-shrink min-w-0"
          onClick={() => {
            if (window.scrollY > 50) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {/* MOBILE */}
          <h3 className="text-sm font-semibold tracking-[0.12em] uppercase sm:hidden truncate">
            SHANKAR
          </h3>

          {/* DESKTOP */}
          <h3 className="hidden sm:block text-sm sm:text-base md:text-lg font-semibold tracking-[0.08em] truncate">
            Shankar Kohli
          </h3>

          <p className="hidden sm:block text-[8px] sm:text-[9px] md:text-xs text-gray-400 tracking-[0.12em] uppercase leading-tight truncate">
            Luxury Branded Residences Advisor
          </p>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          {navItems.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <a key={i} href={item.href} className="relative px-1 py-1">
                {item.label}

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={i}
                      initial={{
                        scaleX: 0,
                        originX: direction === "right" ? 0 : 1,
                      }}
                      animate={{
                        scaleX: 1,
                        originX: direction === "right" ? 0 : 1,
                      }}
                      exit={{
                        scaleX: 0,
                        originX: direction === "right" ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#C8A45A]"
                    />
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">

          {/* CTA */}
         <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => {
    window.location.href =
      "mailto:info@markrealesstate.com?subject=Consultation Request&body=Hello,%0D%0A%0D%0AI would like to book a consultation.";
  }}
  className="bg-[#C8A45A] text-black 
             px-3 sm:px-4 md:px-6 
             py-2 
             text-[10px] sm:text-xs md:text-sm 
             tracking-[0.12em] 
             flex items-center gap-2 
             whitespace-nowrap"
>
  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
  <span>Book Consultation</span>
</motion.button>
          {/* MENU */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[4px] p-2 -mr-2"
          >
            <span className={`w-5 h-[2px] bg-white transition ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`w-5 h-[2px] bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`w-5 h-[2px] bg-white transition ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black px-6 py-8 border-t border-white/10"
          >
            <div className="flex flex-col gap-6 text-base">
              {navItems.map((item, i) => {
                const isActive = activeIndex === i;

                return (
                  <a
                    key={i}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`pl-3 border-l-2 transition ${
                      isActive
                        ? "border-[#C8A45A] text-white"
                        : "border-transparent text-gray-400"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}