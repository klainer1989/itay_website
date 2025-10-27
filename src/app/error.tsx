'use client'

export default function Error({
  error,
  reset,
}: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: 24, direction: 'rtl', fontFamily: 'sans-serif' }}>
      <h1>אופס — משהו השתבש</h1>
      <p style={{ color: '#555' }}>{error?.message}</p>
      <button
        onClick={() => reset()}
        style={{ marginTop: 12, padding: '8px 14px', border: '1px solid #ccc', borderRadius: 8 }}
      >
        נסו לרענן את הדף
      </button>
    </div>
  )
}