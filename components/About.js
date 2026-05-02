"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#0f0f11]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 flex flex-col justify-start">
            <span className="text-gray-400 text-sm mb-4 tracking-widest uppercase">Who's behind the scene?</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight sticky top-24">
              Over 10 years<br />in the game.
            </h2>
          </div>

          <div className="md:col-span-7 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-light text-gray-300 leading-snug"
            >
              Crafting pixels and playing with designs is my kind of fun. UI Designer at <span className="text-white font-medium italic">Riotters</span>.
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
            >
              I obsess over the details, 'cause that's what turns good into great. Mixing styles, stirring in dynamic animations, and always staying ahead of trends - I bring the clean, sharp look your brand needs to stand out.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4"
            >
              <Link 
                href="https://contra.com/kedavvra" 
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#151518] hover:bg-[#1f1f23] text-white px-6 py-4 rounded-full border border-white/10 transition-colors duration-300"
              >
                <div className="w-6 h-6 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-[10px] font-bold">C</div>
                Verified as Top Independent on Contra
                <ArrowUpRight size={16} className="text-gray-400" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
