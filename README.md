# Academic Nest – Single Page (Next.js 14, Vercel)

Single-page, SEO-friendly site for 1:1 online tutoring. Forms submit to a Google Apps Script that writes to Google Sheets.

## Quick Start
```bash
npm i
cp .env.example .env.local
# set APPS_SCRIPT_URL in .env.local
npm run dev
```

## Deploy to Vercel
- Import the repo into Vercel
- Add env var `APPS_SCRIPT_URL`
- Deploy

## Google Apps Script (Sheet logger)
Create a Google Sheet (tab: `Leads`) and add **Extensions → Apps Script**:

```js
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActive();
    var sh = ss.getSheetByName('Leads') || ss.insertSheet('Leads');
    if (sh.getLastRow() === 0) {
      sh.appendRow(['Timestamp','Name','Email','Timezone','Segment','Focus','Goals','Preferred','Source','_timestamp','_site']);
    }
    sh.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.timezone || '',
      data.segment || '',
      data.focus || '',
      data.goals || '',
      data.preferred || '',
      data.source || '',
      data._timestamp || '',
      data._site || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}
```
Deploy → New Deployment → Web app → Anyone with link.

## Routes
- `/` home (single page with anchors)
- `/terms` Terms & Conditions
- `/privacy` Privacy Policy
- `/refund-policy` Refund Policy
- `/robots.txt`, `/sitemap.xml`
