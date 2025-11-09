// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div dir="rtl" style={{ padding: "4rem 1rem", textAlign: "center" }}>
      <h1>העמוד לא נמצא</h1>
      <p>אופס… העמוד שחיפשת לא קיים.</p>
      <a href="/" style={{ textDecoration: "underline" }}>חזרה לדף הבית</a>
    </div>
  );
}