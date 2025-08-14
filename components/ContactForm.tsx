'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: data })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input className="input mb-3" name="name" placeholder="Your name*" required />
      <input className="input mb-3" name="email" type="email" placeholder="Your email*" required />
      <input className="input mb-3" name="subject" placeholder="Subject (e.g., Python tutoring)" />
      <textarea className="textarea mb-3" name="message" placeholder="How can we help?*" required />

      <div className="flex items-center gap-2 mb-4">
        <input type="checkbox" required />
        <span className="small">
          I agree to the <a href="/terms" className="underline">Terms</a> & <a href="/privacy" className="underline">Privacy</a>.
        </span>
      </div>

      <button className="btn btn-primary w-full" disabled={status==='loading'}>
        {status==='loading' ? 'Sending…' : 'Send message'}
      </button>

      {status==='success' && <p className="small mt-2 text-green-600">Thanks! We’ll get back to you soon.</p>}
      {status==='error' && <p className="small mt-2 text-red-600">Something went wrong. Please try again.</p>}

      {/* Keep the payload schema compatible with your Google Sheet logger */}
      <input type="hidden" name="source" value="contact_page" />
      <input type="hidden" name="focus" value="" />
      <input type="hidden" name="goals" value="" />
      <input type="hidden" name="timezone" value="" />
      <input type="hidden" name="segment" value="Contact" />
      <input type="hidden" name="preferred" value="" />
    </form>
  )
}
