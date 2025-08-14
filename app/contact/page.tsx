import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Contact – Academic Nest',
  description: 'Get in touch with Academic Nest for tutoring, questions, or scheduling.',
}

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container max-w-3xl">
        <h1 className="h1">Contact</h1>
        <p className="mt-3 text-body">
          Have a question or want to book your free intro? Send a message here, or reach out directly via email/WhatsApp.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <a className="card" href="mailto:academicnest100@gmail.com">
            <h3 className="font-semibold text-ink">Email</h3>
            <p className="small mt-1">academicnest100@gmail.com</p>
          </a>
          <a className="card" href="https://wa.me/919999991234" target="_blank">
            <h3 className="font-semibold text-ink">WhatsApp</h3>
            <p className="small mt-1">+91 99999 91234</p>
          </a>
        </div>

        <div className="card mt-8">
          <h2 className="h3">Send a message</h2>
          <p className="small mb-4">We usually reply within 12–24 hours.</p>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
