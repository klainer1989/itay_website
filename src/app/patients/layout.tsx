import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מטופלים משתפים | איתי קליינר דיאטן קליני",
  description:
    "חוויות ועדויות של מטופלים מתהליכי ליווי תזונתי עם איתי קליינר, דיאטן קליני, בתחומי ירידה במשקל, בריאטריה ושינוי אורח חיים.",
  alternates: {
    canonical: "/patients",
  },
  openGraph: {
    title: "מטופלים משתפים | איתי קליינר",
    description:
      "עדויות וחוויות של מטופלים מתהליכי ליווי תזונתי, ירידה במשקל ושינוי אורח חיים.",
    url: "https://klainerhealth.co.il/patients",
    type: "website",
  },
};

export default function PatientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}