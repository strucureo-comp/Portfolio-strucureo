"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative pt-32 pb-12 px-6 md:px-12 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-[100%] blur-[80px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
        <span className="text-gray-400 text-sm mb-6 tracking-widest uppercase">Wanna boost your project?</span>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[8rem] font-medium tracking-tighter text-white mb-12 leading-none"
        >
          Just work<br />with me.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="mailto:legierskif@gmail.com?subject=I’ve got an amazing idea!"
            className="inline-block bg-white text-black px-10 py-5 rounded-full font-medium text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 mb-24"
          >
            Let's talk
          </Link>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="https://contra.com/kedavvra" target="_blank" className="hover:text-white transition-colors">Contra</Link>
            <Link href="https://dribbble.com/Strucureo" target="_blank" className="hover:text-white transition-colors">Dribbble</Link>
            <Link href="https://x.com/kedavrio" target="_blank" className="hover:text-white transition-colors">X (Twitter)</Link>
            <Link href="https://www.instagram.com/Strucureo/" target="_blank" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="https://www.linkedin.com/in/filip-legierski-5a5654147/" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <span className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              <ArrowUp size={16} />
            </span>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
