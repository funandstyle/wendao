'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { positioningCards } from '@/data/content'
import { Image, Heart, Users } from 'lucide-react'

const icons: Record<string, React.ReactNode> = {
  box: <Image className="w-10 h-10 stroke-[#e07800]" strokeWidth={1.5} />,
  heart: <Heart className="w-10 h-10 stroke-[#e07800]" strokeWidth={1.5} />,
  users: <Users className="w-10 h-10 stroke-[#e07800]" strokeWidth={1.5} />,
}

function Card({ card, index }: { card: typeof positioningCards[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative bg-[#0d1426] border border-[var(--border-subtle)] rounded-2xl p-8 md:p-10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:border-[var(--border-glow)] transition-all duration-400"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e07800] to-[#4ecdc4] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
      <div className="mb-6">{icons[card.icon]}</div>
      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{card.title}</h3>
      <p className="text-[#a89f91] text-sm leading-relaxed">{card.text}</p>
    </motion.div>
  )
}

export default function PositioningSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <section className="px-6 md:px-12 py-24 md:py-32" style={{ background: 'linear-gradient(180deg, transparent, rgba(13,20,38,0.6) 50%, transparent)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <div className="text-sm font-semibold tracking-[0.15em] uppercase text-[#4ecdc4] mb-4">Product Positioning</div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            不只是机器，<br />更是家庭一员
          </h2>
          <p className="text-lg text-[#a89f91]">四足机器狗融合前沿AI技术与温情陪伴理念，为家庭带来前所未有的智能伙伴体验。</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {positioningCards.map((card, i) => (
            <Card key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
