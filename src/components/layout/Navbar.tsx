'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { navLinks } from '@/data/content'
import { Layers, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[1000] px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#060a14]/80 shadow-lg' : 'bg-transparent'
      }`}
    >
      <Link href="/" className="flex items-center gap-2 text-[#f0e6d3] font-bold text-lg tracking-tight">
        <Layers className="w-6 h-6 text-[#e07800]" />
        <span>CompanionBot</span>
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="relative text-sm font-medium text-[#a89f91] hover:text-[#f0e6d3] transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e07800] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      <button className="md:hidden text-[#f0e6d3]" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#0d1426]/95 backdrop-blur-xl border-b border-[var(--border-subtle)] md:hidden"
        >
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[#a89f91] hover:text-[#f0e6d3]" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
