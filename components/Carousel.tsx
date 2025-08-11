'use client'
import { useEffect, useMemo, useRef, useState } from 'react'

type Item = { quote: string, name: string, country: string, university: string }

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join('')
}

export default function Carousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(3)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth
      setPerView(w < 640 ? 1 : (w < 1024 ? 2 : 3))
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const pages = useMemo(() => {
    const res: Item[][] = []
    for (let i=0; i<items.length; i+=perView) res.push(items.slice(i, i+perView))
    return res
  }, [items, perView])

  function next() { setIndex((i) => (i + 1) % pages.length) }
  function prev() { setIndex((i) => (i - 1 + pages.length) % pages.length) }

  useEffect(() => {
    timeout.current && clearTimeout(timeout.current)
    timeout.current = setTimeout(next, 6000)
    return () => { timeout.current && clearTimeout(timeout.current) }
  }, [index, pages.length])

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
        {pages.map((page, i) => (
          <div key={i} className="min-w-full px-1">
            <div className={`grid gap-6 ${perView===1 ? 'grid-cols-1' : perView===2 ? 'sm:grid-cols-2' : 'lg:grid-cols-3'}`}>
              {page.map((t, j) => (
                <div key={j} className="card flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-brand-subtle text-brand flex items-center justify-center font-semibold">{initials(t.name)}</div>
                    <div>
                      <div className="font-medium text-ink">{t.name}</div>
                      <div className="small">{t.university} · {t.country}</div>
                    </div>
                  </div>
                  <div className="text-yellow-500 mb-2" aria-label="5 star rating">{"★★★★★"}</div>
                  <p className="text-body flex-1">“{t.quote}”</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 -bottom-2 flex items-center justify-between px-2">
        <button onClick={prev} className="btn btn-secondary text-xs h-9 px-3">‹ Prev</button>
        <div className="flex gap-1">
          {pages.map((_, i)=>(<span key={i} aria-label={`Slide ${i+1}`} className={`w-2.5 h-2.5 rounded-full ${i===index ? 'bg-brand' : 'bg-border'}`} />))}
        </div>
        <button onClick={next} className="btn btn-secondary text-xs h-9 px-3">Next ›</button>
      </div>
    </div>
  )
}
