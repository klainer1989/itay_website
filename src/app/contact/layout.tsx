import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר | איתי קליינר דיאטן קליני בראשון לציון",
  description:
    "יצירת קשר עם איתי קליינר, דיאטן קליני ותזונאי בריאטרי בראשון לציון. ייעוץ וליווי תזונתי, ירידה במשקל, ניתוחים בריאטריים, תזונת ילדים וטיפול בהשמנה.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "צור קשר | איתי קליינר דיאטן קליני",
    description:
      "לתיאום פגישה וייעוץ תזונתי עם איתי קליינר בראשון לציון בתחומי בריאטריה, ירידה במשקל, השמנה ותזונת ילדים.",
    url: "https://klainerhealth.co.il/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}