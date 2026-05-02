"use client";

import { motion } from "framer-motion";

const services = [
  { id: "01", title: "Web Design", desc: "Crafting beautiful, responsive, and high-converting websites tailored to your brand's unique identity." },
  { id: "02", title: "App Design", desc: "Designing intuitive and engaging mobile experiences that users love to interact with every day." },
  { id: "03", title: "Branding", desc: "Building strong visual identities from the ground up, ensuring your brand stands out in the market." },
  { id: "04", title: "UI/UX Design", desc: "Obsessing over the user journey to turn complex problems into simple, elegant digital solutions." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-[#121214] border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col mb-16">
          <span className="text-gray-400 text-sm mb-4 tracking-widest uppercase">Services</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white max-w-2xl">
            Looking to boost your digital presence?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-4 group"
            >
              <div className="text-gray-500 font-mono text-sm border-b border-white/10 pb-4 group-hover:text-white transition-colors">
                {service.id}
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-[#a0a0a0] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
