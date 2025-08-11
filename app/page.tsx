'use client'

import { useState } from 'react'
import Carousel from '../components/Carousel'

export default function Page() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: data })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      form.reset()
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="section bg-white hero-bg">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1">Master Programming with Personal, Online 1:1 Tutoring</h1>
            <p className="mt-4 text-lg text-body">
              From GCSE/AP to PhD and professional upskilling—get tailored help in Python, Java, Data Analytics,
              Web Development, Machine Learning, NLP, SQL, and more. <strong>10+ years</strong> mentoring worldwide.
            </p>
            <p className="mt-2 text-body font-medium">$35/hour (USD) · Free 30‑minute intro for new students</p>
            <div className="mt-6 flex gap-3">
              <a href="#book" className="btn btn-primary">Book Free Intro</a>
              <a href="https://wa.me/918218899149" className="btn btn-secondary" target="_blank">Chat on WhatsApp</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Python','Java','Data Analytics','Web Development','Machine Learning','NLP','SQL','R'].map(s => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
            <p className="small mt-3">US • UK • Australia • Canada • Global Online · Zoom / Microsoft Teams</p>
          </div>
          <div className="card">
            <h3 className="h3">Book Your Free Intro</h3>
            <p className="small mb-4">Tell me a bit about your goals. I’ll reply with 2–3 time options within 12–24 hours.</p>
            <form onSubmit={handleSubmit}>
              <input className="input mb-3" name="name" placeholder="Name*" required />
              <input className="input mb-3" name="email" type="email" placeholder="Email*" required />
              <input className="input mb-3" name="timezone" placeholder="Country/Time zone*" required />
              <select className="input mb-3" name="segment" required defaultValue="">
                <option value="" disabled>I am a…*</option>
                <option>School</option>
                <option>University</option>
                <option>Professional</option>
                <option>Job Seeker</option>
              </select>
              <input className="input mb-3" name="focus" placeholder="Focus areas (e.g., Python, Data Analytics)" />
              <textarea className="textarea mb-3" name="goals" placeholder="Your goals / What do you need help with?*" required />
              <input className="input mb-3" name="preferred" placeholder="Preferred days & times" />
              <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" required />
                <span className="small">I agree to the <a href="/terms" className="underline">Terms</a> & <a href="/privacy" className="underline">Privacy</a>.</span>
              </div>
              <button className="btn btn-primary w-full" disabled={status==='loading'}>
                {status==='loading' ? 'Submitting…' : 'Submit'}
              </button>
              {status==='success' && <p className="small mt-2 text-green-600">Thanks! Expect 2–3 time options within 12–24 hours.</p>}
              {status==='error' && <p className="small mt-2 text-red-600">Something went wrong. Please try again or email us.</p>}
              <input type="hidden" name="source" value="home_intro_form" />
            </form>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="h2 mb-8">Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div className="card h-full flex flex-col group hover:-translate-y-1" key={s.title}>
                <h3 className="font-semibold text-ink text-xl">{s.title}</h3>
                <p className="mt-2 text-body">{s.desc}</p>
                <ul className="mt-3 list-disc list-inside text-body text-sm space-y-1">
                  {s.points.map((p,i)=>(<li key={i}>{p}</li>))}
                </ul>
                <div className="mt-auto pt-4"><a href={s.ctaHref} className="btn btn-secondary group-hover:translate-y-[-2px]">{s.cta}</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="h2 mb-6">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((s,i)=>(
              <div className="card hover:-translate-y-1" key={i}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="chip">{i+1}</div>
                  <div className="text-2xl">{s.icon}</div>
                </div>
                <h4 className="font-semibold text-ink">{s.title}</h4>
                <p className="small mt-2">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container">
          <h2 className="h2 mb-6">Pricing (USD)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card relative overflow-hidden">
              <span className="absolute top-4 right-4 chip">Best Value</span>
              <h3 className="text-xl font-semibold">Hourly</h3>
              <p className="text-3xl font-bold mt-2">$35<span className="text-base font-medium text-muted">/hour</span></p>
              <p className="small mt-2">Online only (Zoom/Teams). Free 30‑min intro for new students.</p>
              <a href="/#book" className="btn btn-primary mt-4">Book Now</a>
            </div>
            <div className="card ring-1 ring-brand/30">
              <h3 className="text-xl font-semibold">Bundle – 5 hours</h3>
              <p className="text-3xl font-bold mt-2">$166.25<span className="text-base font-medium text-muted"> (save 5%)</span></p>
              <p className="small mt-2">Best for short sprints and exam prep.</p>
              <a href="/#book" className="btn btn-secondary mt-4">Get This Bundle</a>
            </div>
            <div className="card ring-2 ring-brand relative">
              <span className="absolute top-4 right-4 chip">Most Popular</span>
              <h3 className="text-xl font-semibold">Bundle – 10 hours</h3>
              <p className="text-3xl font-bold mt-2">$315.00<span className="text-base font-medium text-muted"> (save 10%)</span></p>
              <p className="small mt-2">Includes 1 late‑reschedule waiver.</p>
              <a href="/#book" className="btn btn-primary mt-4">Get This Bundle</a>
            </div>
          </div>
          <p className="small mt-4">Payments via Razorpay or bank transfer after the intro call.</p>
        </div>
      </section>

      {/* Tech Logos */}
      <section id="stacks" className="section">
        <div className="container">
          <h2 className="h2 mb-6">Technologies & Languages</h2>
          <p className="small mb-6">A selection of stacks we teach and use. Hover to highlight.</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {TECH_LOGOS.map((t)=>(
              <div key={t.label} className="group card flex items-center justify-center h-20 hover:-translate-y-1">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-subtle flex items-center justify-center mb-2">
                    <span className="font-semibold text-brand text-sm">{t.short}</span>
                  </div>
                  <span className="text-sm text-ink">{t.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="section bg-white">
        <div className="container">
          <h2 className="h2 mb-6">Results from Students</h2>
          <Carousel items={TESTIMONIALS} />
        </div>
      </section>

      {/* FAQ single column */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="h2 mb-6">FAQs</h2>
          <div className="grid grid-cols-1 gap-6">
            {FAQS.map((f, i)=>(
              <div className="card" key={i}>
                <h4 className="font-semibold text-ink">{f.q}</h4>
                <p className="mt-2 text-body">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Book form */}
      <section id="book" className="section bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="h2">Book Your Free Intro</h2>
            <p className="mt-2 text-body">Prefer WhatsApp? Message me at <a className="underline" href="https://wa.me/918218899149">+91 8218899149</a>.</p>
            <ul className="mt-4 list-disc list-inside text-body">
              <li>Reschedule/cancel ≥24h: free</li>
              <li>Late cancellations &lt;24h: charged in full</li>
              <li>Online only (Zoom/Teams)</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="h3">Tell me a bit about you</h3>
            <form onSubmit={handleSubmit}>
              <input className="input mb-3" name="name" placeholder="Name*" required />
              <input className="input mb-3" name="email" type="email" placeholder="Email*" required />
              <input className="input mb-3" name="timezone" placeholder="Country/Time zone*" required />
              <select className="input mb-3" name="segment" required defaultValue="">
                <option value="" disabled>I am a…*</option>
                <option>School</option>
                <option>University</option>
                <option>Professional</option>
                <option>Job Seeker</option>
              </select>
              <textarea className="textarea mb-3" name="goals" placeholder="Your goals / What do you need help with?*" required />
              <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" required />
                <span className="small">I agree to the <a href="/terms" className="underline">Terms</a> & <a href="/privacy" className="underline">Privacy</a>.</span>
              </div>
              <button className="btn btn-primary w-full" disabled={status==='loading'}>
                {status==='loading' ? 'Submitting…' : 'Submit'}
              </button>
              {status==='success' && <p className="small mt-2 text-green-600">Thanks! Expect 2–3 time options within 12–24 hours.</p>}
              {status==='error' && <p className="small mt-2 text-red-600">Something went wrong. Please try again or email us.</p>}
              <input type="hidden" name="source" value="book_section_form" />
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

const SERVICES = [
  {
    title: '1:1 Tutoring',
    desc: 'Learn faster with focused sessions tailored to your syllabus, course, or work project.',
    points: ['Online worldwide', 'Python, Java, Data, Web, ML/NLP, R, SQL', '$35/hour USD'],
    cta: 'Book Free Intro',
    ctaHref: '#book'
  },
  {
    title: 'Assignment & Project Help',
    desc: 'Upload your brief and get a tailored plan after the intro.',
    points: ['Any complexity', 'Clean, working examples', 'Clear milestones'],
    cta: 'Get Started',
    ctaHref: '#book'
  },
  {
    title: 'Dissertation & Thesis Help',
    desc: 'Guidance for coding, data analysis, and methodology—ethical support for academic work.',
    points: ['UG/PG/PhD support', 'Python, R, ML/NLP', 'Methodology & evaluation'],
    cta: 'Discuss Your Topic',
    ctaHref: '#book'
  },
  {
    title: 'Career & Interview Prep',
    desc: 'Role‑specific coaching, mock interviews, and a practical study plan.',
    points: ['Data, Backend, Web, ML/NLP', 'Mock interviews + feedback', 'Portfolio projects'],
    cta: 'Plan Your Prep',
    ctaHref: '#book'
  }
]

const TESTIMONIALS = [
  { quote: 'I scored a 5 on AP CS after 6 weeks—super clear explanations and practice.', name: 'Sarah L.', country: 'USA', university: 'AP Computer Science' },
  { quote: 'Delivered my analytics dashboard on time. The guidance saved me weeks.', name: 'Karan S.', country: 'Australia', university: 'Monash University' },
  { quote: 'My NLP dissertation prototype finally worked. Step‑by‑step mentoring.', name: 'Aisha R.', country: 'UK', university: 'UCL' },
  { quote: 'Great structure and patience. My daughter’s GCSE grade improved by two levels.', name: 'M. Patel', country: 'UK', university: 'GCSE' },
  { quote: 'Mock interviews felt real. Landed a data analyst role in 6 weeks.', name: 'J. Chen', country: 'Canada', university: 'Toronto' },
  { quote: 'He unblocked my Java OOP assignment in one session.', name: 'Diego R.', country: 'USA', university: 'Arizona State' },
  { quote: 'Clear SQL coaching helped me ship a BI dashboard at work.', name: 'Priya S.', country: 'India', university: 'IIM' },
  { quote: 'Friendly and effective—ML concepts finally clicked for me.', name: 'Hannah T.', country: 'USA', university: 'UC Berkeley Extension' },
  { quote: 'Great feedback on my web project architecture.', name: 'Leo F.', country: 'Germany', university: 'TU Munich' },
  { quote: 'Practical guidance and examples that I could adapt for my thesis.', name: 'Noura A.', country: 'UAE', university: 'NYU Abu Dhabi' },
]

const FAQS = [
  { q: 'How do I book the free intro?', a: 'Use the form above. You\'ll get 2–3 time options within 12–24 hours.' },
  { q: 'Which platforms do you use?', a: 'Zoom or Microsoft Teams—your choice.' },
  { q: 'Can I reschedule or cancel?', a: 'Yes—≥24 hours before the session is free. <24 hours is charged in full.' },
  { q: 'Do you provide recordings or notes?', a: 'Yes—recordings or summaries are available on request.' },
  { q: 'What if I need urgent help?', a: 'We’ll confirm feasibility first and prioritize accordingly if accepted.' },
  { q: 'What topics do you cover?', a: 'Python, Java, Data Analytics, Web Development, Machine Learning, NLP, SQL, R, and more.' },
  { q: 'Is tutoring online only?', a: 'Yes, all sessions are delivered online via Zoom or Microsoft Teams.' },
  { q: 'How do payments work?', a: 'You can pay after the intro call via Razorpay or bank transfer.' }
]

const TECH_LOGOS = [
  { short: 'Py', label: 'Python' },
  { short: 'JS', label: 'JavaScript' },
  { short: 'TS', label: 'TypeScript' },
  { short: 'Rb', label: 'R' },
  { short: 'SQL', label: 'SQL' },
  { short: 'JV', label: 'Java' },
  { short: 'DA', label: 'pandas' },
  { short: 'NP', label: 'NumPy' },
  { short: 'SK', label: 'scikit-learn' },
  { short: 'TF', label: 'TensorFlow' },
  { short: 'PT', label: 'PyTorch' },
  { short: 'RC', label: 'React' },
]

const STEPS = [
  { icon: '🗓️', title: 'Tell Me Your Goals', text: 'Book a free 30‑minute intro and share what you want to achieve.' },
  { icon: '🧭', title: 'Get a Plan', text: 'I’ll propose topics, timelines, and a cadence that fits your schedule.' },
  { icon: '💻', title: 'Learn & Build', text: 'Meet online via Zoom or Teams. Work through examples, assignments, and code reviews.' },
  { icon: '🏆', title: 'Achieve', text: 'Leave with clarity, skills, and results you can show with confidence.' },
]
