"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Digital designer helping<br className="hidden md:block" /> your ideas take off.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="mailto:legierskif@gmail.com?subject=I’ve got an amazing idea!"
            className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300"
          >
            Let's talk about your idea
            <span className="bg-black text-white p-1 rounded-full group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
