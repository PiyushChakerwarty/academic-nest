'use client'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/#services', label: 'Services' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contact', label: 'Contact' },
  ]
  return (
    <header className="border-b border-border bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-3" aria-label="Academic Nest Home">
          <img src="/logo.svg" alt="" className="w-8 h-8 rounded-lg" />
          <span className="font-semibold text-ink">Academic Nest</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => <a key={l.href} href={l.href} className="hover:text-ink">{l.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/#book" className="btn btn-primary hidden sm:inline-flex">Book Free Intro</a>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border"
            onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu"
          >☰</button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-border bg-white">
          <div className="container py-3 grid gap-2 text-sm">
            {links.map(l => <a key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>)}
            <a href="/#book" className="btn btn-primary mt-2" onClick={()=>setOpen(false)}>Book Free Intro</a>
          </div>
        </div>
      )}
    </header>
  )
}
