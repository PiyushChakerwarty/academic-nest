export const metadata = { title: 'Terms & Conditions – Academic Nest' }

export default function TermsPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h1 mb-6">Terms &amp; Conditions</h1>
        <p className="small">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="h3 mt-8">1) Services</h2>
        <p>Academic Nest provides online 1:1 tutoring, assignment/project assistance, and career/interview coaching in Computer Science and related fields. Sessions are delivered online via Zoom or Microsoft Teams.</p>

        <h2 className="h3 mt-6">2) Bookings &amp; Payments</h2>
        <ul className="list-disc list-inside">
          <li>Sessions and bundles are prepaid. Project work is quoted individually and may require a 30% upfront payment after scope confirmation.</li>
          <li>Payments are processed via Razorpay or bank transfer. Invoices/receipts are provided.</li>
          <li>Pricing is listed in USD.</li>
        </ul>

        <h2 className="h3 mt-6">3) Rescheduling &amp; Cancellations</h2>
        <p>You may reschedule or cancel sessions at least 24 hours before the start time at no charge. Late cancellations (&lt;24 hours) or no-shows are charged in full. See the <a className="underline" href="/refund-policy">Refund Policy</a> for details.</p>

        <h2 className="h3 mt-6">4) Quotes for Projects</h2>
        <p>Quotes are provided after manual review of your brief and files. Quotes are typically valid for 7 days unless otherwise specified.</p>

        <h2 className="h3 mt-6">5) Use of Materials</h2>
        <p>Any code, notes, examples, or guidance provided are for learning and reference. You are responsible for your submissions and for complying with your institution’s rules and policies.</p>

        <h2 className="h3 mt-6">6) Liability</h2>
        <p>Services are provided “as‑is.” To the maximum extent permitted by law, liability is limited to the amount paid for the relevant service.</p>

        <h2 className="h3 mt-6">7) Changes</h2>
        <p>We may update these Terms at any time. Continued use of the service after changes are posted constitutes acceptance.</p>

        <h2 className="h3 mt-6">8) Contact</h2>
        <p>Email: <a href="mailto:academicnest100@gmail.com" className="underline">academicnest100@gmail.com</a> · WhatsApp: <a className="underline" href="https://wa.me/918218899149">+91 8218899149</a></p>
      </div>
    </main>
  )
}
