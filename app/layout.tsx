import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'

export const metadata: Metadata = {
  metadataBase: new URL('https://theacademicnest.com'),
  title: 'Academic Nest – Online Programming Tutor (Python, Java, Data, ML) – $35/hr | Free Intro',
  description: 'Master programming with personalised, online 1:1 tutoring. Python, Java, Data Analytics, Web, ML/NLP. $35/hour (USD). Free 30-min intro. 10+ years’ experience.',
  openGraph: {
    title: 'Academic Nest – Online Programming Tutor – $35/hr',
    description: '1:1 online tutoring in Python, Java, Data, ML/NLP. Free 30-min intro.',
    url: '/',
    siteName: 'Academic Nest',
    type: 'website'
  },
  alternates: { canonical: '/' },
  other: { 'theme-color': '#2563EB' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <a
          href={`https://wa.me/918218899149`}
          aria-label="Chat on WhatsApp"
          className="fixed md:hidden bottom-4 right-4 bg-brand text-white w-14 h-14 rounded-full flex items-center justify-center shadow-card"
        >
          WA
        </a>
        <footer className="border-t border-border bg-white" id="contact">
          <div className="container py-10 grid md:grid-cols-4 gap-8">
            <div>
              <a href="/" className="flex items-center gap-3 mb-3" aria-label="Academic Nest Home">
                <img src="/logo.svg" alt="" className="w-8 h-8 rounded-lg" />
                <span className="font-semibold text-ink">Academic Nest</span>
              </a>
              <p className="small">Online Computer Science tutoring worldwide. Zoom/Teams. $35/hour USD. Free 30‑min intro.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 small">
                <li><a href="/#services">Services</a></li>
                <li><a href="/#pricing">Pricing</a></li>
                <li><a href="/#faq">FAQs</a></li>
                <li><a href="/#testimonials">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Policies</h4>
              <ul className="space-y-2 small">
                <li><a href="/refund-policy">Refund Policy</a></li>
                <li><a href="/terms">Terms &amp; Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 small">
                <li>Email: <a href="mailto:academicnest100@gmail.com">academicnest100@gmail.com</a></li>
                <li>WhatsApp: <a href="https://wa.me/918218899149" target="_blank">+91 8218899149</a></li>
              </ul>
              <a href="/#book" className="btn btn-secondary mt-3">Book Free Intro</a>
            </div>
          </div>
          <div className="divider-gradient" />
          <div className="container py-8 small">
            <h4 className="font-semibold text-ink mb-2">Company Address</h4>
            <p>HPC Infotech<br/>8/2, Wing No - 6, Premnagar<br/>Dehradun, Uttarakhand, 248007<br/>India</p>
          </div>
          <div className="border-t border-border py-6 text-center small">&copy; {new Date().getFullYear()} Academic Nest — Online Tutoring By HPC Infotech</div>
        </footer>
      </body>
    </html>
  )
}
