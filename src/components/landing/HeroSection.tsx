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
            <img
              src="/wendao/images/robot-dog-hero.png"
              alt="四足机器狗概念图"
              className="w-full h-full object-contain animate-[floatDog_6s_ease-in-out_infinite] drop-shadow-[0_20px_60px_rgba(224,120,0,0.2)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
