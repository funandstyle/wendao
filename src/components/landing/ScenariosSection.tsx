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
            <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-auto opacity-60" viewBox="0 0 400 200">
              {active === 0 ? (
                <>
                  <rect x="30" y="80" width="80" height="100" fill="none" stroke="var(--border-subtle)" strokeWidth="1" rx="4" />
                  <rect x="130" y="60" width="80" height="120" fill="none" stroke="var(--border-subtle)" strokeWidth="1" rx="4" />
                  <rect x="230" y="90" width="80" height="90" fill="none" stroke="var(--border-subtle)" strokeWidth="1" rx="4" />
                  <ellipse cx="200" cy="165" rx="35" ry="20" fill="#141f3a" stroke="#4ecdc4" strokeWidth="1.5" />
                  <circle cx="185" cy="160" r="4" fill="#e07800" />
                  <circle cx="215" cy="160" r="4" fill="#e07800" />
                  <circle cx="120" cy="140" r="12" fill="none" stroke="#6b7a99" strokeWidth="1.5" />
                  <rect x="230" y="155" width="25" height="15" rx="2" fill="none" stroke="#e07800" strokeWidth="1.5" />
                </>
              ) : (
                <>
                  <circle cx="60" cy="50" r="25" fill="none" stroke="var(--border-subtle)" strokeWidth="1" />
                  <circle cx="340" cy="60" r="30" fill="none" stroke="var(--border-subtle)" strokeWidth="1" />
                  <path d="M0 140 Q100 100 200 130 Q300 160 400 120 L400 200 L0 200 Z" fill="#141f3a" opacity="0.5" />
                  <ellipse cx="280" cy="145" rx="30" ry="18" fill="#141f3a" stroke="#4ecdc4" strokeWidth="1.5" />
                  <circle cx="268" cy="140" r="3" fill="#e07800" />
                  <circle cx="292" cy="140" r="3" fill="#e07800" />
                  <circle cx="150" cy="125" r="10" fill="none" stroke="#6b7a99" strokeWidth="1.5" />
                  <circle cx="180" cy="155" r="8" fill="none" stroke="#e07800" strokeWidth="1.5" />
                </>
              )}
            </svg>
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
