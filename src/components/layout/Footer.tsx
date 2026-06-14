'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layers } from 'lucide-react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <footer className="px-6 md:px-12 pt-20 pb-10 text-center border-t border-[var(--border-subtle)]" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Layers className="w-6 h-6 text-[#e07800]" />
          <span className="text-xl font-bold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>CompanionBot</span>
        </div>
        <p className="text-[#a89f91] mb-2">四足机器狗陪伴场景产品 · Cosmos3 Teacher-Student 蒸馏架构</p>
        <p className="text-[#6b7a99] text-sm mt-8"> CompanionBot Architecture Demo</p>
      </motion.div>
    </footer>
  )
}
