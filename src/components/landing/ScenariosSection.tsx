'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { scenarios } from '@/data/content'

export default function ScenariosSection() {
  const [active, setActive] = useState(0)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mb-16"
      >
        <div className="text-sm font-semibold tracking-[0.15em] uppercase text-[#4ecdc4] mb-4">Target Scenarios</div>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          真实场景，<br />真实陪伴
        </h2>
        <p className="text-lg text-[#a89f91]">从清晨的菜市场到午后的公园草地，机器狗在每一个日常场景中成为值得信赖的伙伴。</p>
      </motion.div>

      <div className="flex gap-4 mb-8">
        {scenarios.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              active === i
                ? 'bg-[#e07800] text-white'
                : 'bg-[#141f3a] text-[#a89f91] hover:text-[#f0e6d3]'
            }`}
          >
            {s.tag}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: active === 0 ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: active === 0 ? 40 : -40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#0d1426] border border-[var(--border-subtle)] rounded-3xl overflow-hidden"
        >
          <div className={`h-64 md:h-80 relative overflow-hidden ${
            active === 0 ? 'bg-gradient-to-br from-amber-950/30 to-[#0d1426]' : 'bg-gradient-to-br from-emerald-950/30 to-[#0d1426]'
          }`}>
            <div className="absolute top-6 left-6 px-4 py-2 bg-[#060a14]/80 backdrop-blur-md rounded-full border border-[var(--border-subtle)] text-xs font-bold tracking-wider uppercase text-[#e07800]">
              {scenarios[active].tag}
            </div>
            <img
              src={active === 0 ? '/wendao/images/scene-elderly-market.png' : '/wendao/images/scene-child-park.png'}
              alt={scenarios[active].title}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1426] via-[#0d1426]/30 to-transparent" />
          </div>
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{scenarios[active].title}</h3>
            <p className="text-[#a89f91] leading-relaxed">{scenarios[active].desc}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
