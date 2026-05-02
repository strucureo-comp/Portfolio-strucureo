"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    id: 1,
    title: "Paytee",
    category: "Mobile App Design",
    desc: "Simplifies finances with tools for payments, tracking, and budgeting.",
    color: "from-blue-500/20 to-purple-500/20",
    link: "https://Strucureo.me/works/paytee"
  },
  {
    id: 2,
    title: "Hiver",
    category: "Web & Product Design",
    desc: "Platform where teams align, collaborate effectively, and achieve goals seamlessly.",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://Strucureo.me/works/hiver"
  },
  {
    id: 3,
    title: "Wearly AI",
    category: "Web & Product Design",
    desc: "Wearly is an AI-driven fashion platform that transforms the way users discover and curate their style.",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://Strucureo.me/works/wearly-ai"
  },
  {
    id: 4,
    title: "Data Furnishing",
    category: "Web & Product Design",
    desc: "Makes credit reporting simple with tools that help businesses manage and share credit data effortlessly.",
    color: "from-slate-500/20 to-gray-500/20",
    link: "https://Strucureo.me/works/data-furnishing"
  }
];

function WorkCard({ work, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group relative flex flex-col md:flex-row gap-8 items-center bg-[#151518] rounded-[2rem] p-6 md:p-10 mb-8 border border-white/5 card-hover-effect overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

      <div className="w-full md:w-3/5 h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative bg-[#1c1c20]">
        {/* Placeholder for project image, using animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
          <span className="text-white/20 text-4xl font-bold tracking-tighter">{work.title}</span>
        </div>
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ y: "100%" }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="w-full md:w-2/5 flex flex-col z-10">
        <div className="text-sm text-gray-400 mb-2">{work.category}</div>
        <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">{work.title}</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          {work.desc}
        </p>

        <Link
          href={work.link}
          target="_blank"
          className="inline-flex items-center gap-2 text-white border border-white/20 rounded-full px-6 py-3 w-fit hover:bg-white hover:text-black transition-colors duration-300"
        >
          View Case <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
            Selected Works
          </h2>
          <Link
            href="https://dribbble.com/Strucureo"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
          >
            Check my recent works from dribbble
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col">
          {works.map((work, idx) => (
            <WorkCard key={work.id} work={work} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
