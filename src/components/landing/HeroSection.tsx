'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { heroContent } from '@/data/content'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 md:px-12 pt-32 pb-16 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-sm font-semibold tracking-[0.15em] uppercase text-[#e07800] mb-6"
          >
            {heroContent.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {heroContent.title[0]}
            <span className="block text-[#e07800]">{heroContent.title[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="text-lg md:text-xl text-[#a89f91] max-w-md mb-10"
          >
            {heroContent.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          >
            <Link
              href="/tech/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e07800] to-[#c46a00] text-white font-bold rounded-full hover:-translate-y-0.5 transition-transform duration-300 hover:shadow-[0_12px_40px_rgba(224,120,0,0.3)]"
            >
              {heroContent.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-[10%] border border-[var(--border-glow)] rounded-full animate-[ringPulse_4s_ease-in-out_infinite]" />
            <div className="absolute inset-0 border border-[var(--border-glow)] rounded-full animate-[ringPulse_4s_ease-in-out_infinite_2s]" />
            <svg className="w-full h-full animate-[floatDog_6s_ease-in-out_infinite]" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="四足机器狗概念图">
              <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M140 180 Q120 160 130 130 Q140 100 170 95 L230 95 Q260 100 270 130 Q280 160 260 180 L240 220 Q230 240 200 245 Q170 240 160 220 Z" />
              <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M170 95 L160 60 Q155 40 175 35 L225 35 Q245 40 240 60 L230 95" />
              <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M165 45 L150 20 Q145 10 155 15 L170 35" />
              <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M235 45 L250 20 Q255 10 245 15 L230 35" />
              <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M150 220 L140 290 Q135 310 150 315 L160 310 Q165 300 160 280 L165 230" />
              <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M180 235 L175 300 Q170 320 185 325 L195 320 Q200 310 195 290 L195 240" />
              <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M220 235 L225 300 Q230 320 215 325 L205 320 Q200 310 205 290 L205 240" />
              <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M250 220 L260 290 Q265 310 250 315 L240 310 Q235 300 240 280 L235 230" />
              <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M260 180 Q290 170 300 150 Q310 130 305 120" />
              <ellipse className="fill-[#e07800] [filter:drop-shadow(0_0_8px_#e07800)] animate-[eyePulse_3s_ease-in-out_infinite]" cx="185" cy="70" rx="8" ry="6" />
              <ellipse className="fill-[#e07800] [filter:drop-shadow(0_0_8px_#e07800)] animate-[eyePulse_3s_ease-in-out_infinite]" cx="215" cy="70" rx="8" ry="6" />
              <path className="fill-none stroke-[#4ecdc4] stroke-1 opacity-60" d="M170 140 L230 140" />
              <path className="fill-none stroke-[#4ecdc4] stroke-1 opacity-60" d="M175 160 L225 160" />
              <circle className="fill-[#4ecdc4] opacity-40" cx="155" cy="230" r="5" />
              <circle className="fill-[#4ecdc4] opacity-40" cx="200" cy="240" r="5" />
              <circle className="fill-[#4ecdc4] opacity-40" cx="245" cy="230" r="5" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
