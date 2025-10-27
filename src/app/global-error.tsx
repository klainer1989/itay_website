'use client'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="he" dir="rtl">
      <body style={{ padding: 24, direction: 'rtl', fontFamily: 'sans-serif' }}>
        <h1>תקלה גלובלית</h1>
        <p style={{ color: '#555' }}>{error?.message}</p>
        <button
          onClick={() => reset()}
          style={{ marginTop: 12, padding: '8px 14px', border: '1px solid #ccc', borderRadius: 8 }}
        >
          רענון
        </button>
      </body>
    </html>
  )
}