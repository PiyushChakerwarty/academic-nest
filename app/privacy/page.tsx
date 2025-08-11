export const metadata = { title: 'Privacy Policy – Academic Nest' }

export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h1 mb-6">Privacy Policy</h1>
        <p className="small">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="h3 mt-8">What We Collect</h2>
        <ul className="list-disc list-inside">
          <li>Contact details: name, email, country/time zone.</li>
          <li>Service details: your goals, focus areas, preferred times.</li>
          <li>Operational data: session history, communications, limited technical logs.</li>
          <li>Optional: brief/syllabus files you upload (PDF/DOCX/ZIP/Images).</li>
        </ul>

        <h2 className="h3 mt-6">Why We Collect It</h2>
        <p>To schedule sessions, provide quotes, deliver services, process payments, improve quality, and send necessary notifications.</p>

        <h2 className="h3 mt-6">Payment Processing</h2>
        <p>Payments are processed securely by Razorpay. Academic Nest does not store full card details.</p>

        <h2 className="h3 mt-6">Data Sharing</h2>
        <p>We do not sell personal data. We share information only with service providers (hosting, payments, email) under contract and for the purposes listed above.</p>

        <h2 className="h3 mt-6">Data Retention</h2>
        <p>We retain account and billing records as required for tax/accounting. You may request deletion of your data; we will retain what is legally required.</p>

        <h2 className="h3 mt-6">Security</h2>
        <p>We use industry‑standard encryption in transit and restrict access to authorized personnel.</p>

        <h2 className="h3 mt-6">Your Rights</h2>
        <p>You may request access, correction, or deletion of your data, and opt out of non‑essential emails at any time.</p>

        <h2 className="h3 mt-6">Minors</h2>
        <p>If under 18, a parent/guardian should approve the service and payments.</p>

        <h2 className="h3 mt-6">Contact</h2>
        <p>Email: <a href="mailto:academicnest100@gmail.com" className="underline">academicnest100@gmail.com</a></p>
      </div>
    </main>
  )
}
