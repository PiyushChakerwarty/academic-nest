export const metadata = { title: 'Refund Policy – Academic Nest' }

export default function RefundPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h1 mb-6">Refund Policy</h1>
        <p className="small">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="h3 mt-8">Free Intro</h2>
        <p>The 30‑minute introductory call is free and non‑obligatory.</p>

        <h2 className="h3 mt-6">Tutoring Sessions</h2>
        <ul className="list-disc list-inside">
          <li>Reschedule or cancel at least 24 hours before your session at no charge.</li>
          <li>Late cancellations (&lt;24 hours) or no‑shows are charged in full.</li>
          <li>If Academic Nest must reschedule, you may choose a priority rebooking or a full refund for that session.</li>
        </ul>

        <h2 className="h3 mt-6">Bundles</h2>
        <ul className="list-disc list-inside">
          <li>Full refund within 14 days if no hours were used (processor fees may apply).</li>
          <li>If some hours were used, refund = amount paid – value of used hours at the standard hourly rate.</li>
          <li>Bundles are non‑transferable.</li>
        </ul>

        <h2 className="h3 mt-6">Projects / Assignments (if applicable)</h2>
        <ul className="list-disc list-inside">
          <li>30% deposit after scope is agreed to secure your slot and initial work.</li>
          <li>If you cancel before work starts, the deposit is refundable (minus payment processor fees, if any).</li>
          <li>Once work has started, the deposit becomes non‑refundable; additional refunds are pro‑rated to work completed.</li>
        </ul>

        <h2 className="h3 mt-6">Technical Issues</h2>
        <p>If a session is disrupted by connectivity or platform failure, we’ll extend or rebook at no extra cost.</p>

        <h2 className="h3 mt-6">How to Request a Refund</h2>
        <p>Email <a className="underline" href="mailto:academicnest100@gmail.com">academicnest100@gmail.com</a> or message via WhatsApp with your booking ID. Refunds are processed to the original payment method within 5–10 business days.</p>
      </div>
    </main>
  )
}
