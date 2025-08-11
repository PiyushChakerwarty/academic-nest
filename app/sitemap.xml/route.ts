export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://theacademicnest.com/</loc></url>
    <url><loc>https://theacademicnest.com/terms</loc></url>
    <url><loc>https://theacademicnest.com/privacy</loc></url>
    <url><loc>https://theacademicnest.com/refund-policy</loc></url>
  </urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
