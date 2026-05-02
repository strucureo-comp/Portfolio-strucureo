"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Warsaw",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(`${formatter.format(now)} GMT+1`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4 glass-nav" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium tracking-tight text-white hover:opacity-70 transition-opacity">
            Filip Legierski
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#works" className="hover:text-white transition-colors">Works</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#footer" className="hover:text-white transition-colors">Hire me</Link>
          </nav>

          <div className="hidden md:flex flex-col items-end text-xs text-gray-500">
            <span>Based in Poland</span>
            <span>{time}</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0f0f11] flex flex-col items-center justify-center gap-8 text-2xl"
          >
            <Link href="#works" onClick={() => setMobileMenuOpen(false)}>Works</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="#footer" onClick={() => setMobileMenuOpen(false)}>Hire me</Link>
            <div className="mt-8 text-sm text-gray-500 text-center">
              <div>Based in Poland</div>
              <div>{time}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
