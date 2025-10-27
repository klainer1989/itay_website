'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'הכנה רגשית לניתוח בריאטרי - כל מה שצריך לדעת',
      excerpt: 'ניתוח בריאטרי הוא לא רק שינוי פיזי אלא גם טלטלה רגשית, כיצד להתכונן נכון מבחינה רגשית?',
      date: '2024-10-10',
      category: 'בריאטריה',
      readTime: '5 דקות קריאה',
      image: '🧠',
    },
    {
      id: 2,
      title: '10 טיפים לתזונה נכונה לילדים',
      excerpt: 'איך לוודא שהילדים שלכם מקבלים את כל החומרים התזונתיים הנדרשים להתפתחות תקינה',
      date: '2024-10-05',
      category: 'תזונת ילדים',
      readTime: '7 דקות קריאה',
      image: '🍎',
    },
    {
      id: 3,
      title: 'מה לאכול בשבועות הראשונים אחרי ניתוח בריאטרי',
      excerpt: 'מדריך מפורט לתזונה בתקופת ההחלמה הראשונה אחרי הניתוח',
      date: '2024-09-28',
      category: 'בריאטריה',
      readTime: '8 דקות קריאה',
      image: '🥗',
    },
    {
      id: 4,
      title: 'איך להתמודד עם הפן הרגשי של שינוי תזונתי',
      excerpt: 'הצד הרגשי של ירידה במשקל ואיך להתמודד עם אכילה רגשית',
      date: '2024-09-20',
      category: 'בריאות נפש',
      readTime: '6 דקות קריאה',
      image: '❤️',
    },
    {
      id: 5,
      title: 'מדריך לתרופות לירידה במשקל',
      excerpt: 'סקירה מקיפה של תרופות להרזיה הזמינות בישראל ומתי הן מתאימות',
      date: '2024-09-15',
      category: 'טיפולים',
      readTime: '10 דקות קריאה',
      image: '💊',
    },
    {
      id: 6,
      title: 'המתכונים הטובים ביותר לאחר ניתוח',
      excerpt: 'אוסף מתכונים טעימים ובריאים המותאמים למי שעבר ניתוח בריאטרי',
      date: '2024-09-10',
      category: 'מתכונים',
      readTime: '4 דקות קריאה',
      image: '👨‍🍳',
    },
  ]

  const categories = ['הכל', 'בריאטריה', 'תזונת ילדים', 'בריאות נפש', 'טיפולים', 'מתכונים']
  const [activeCat, setActiveCat] = useState('הכל')
  const filtered = activeCat === 'הכל' ? articles : articles.filter(a => a.category === activeCat)

  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">בלוג ומאמרים</h1>
        <p className="text-slate-700">מידע מקצועי, טיפים שימושיים והכוונה לחיים בריאים יותר</p>
      </section>

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="font-semibold mb-3">סינון לפי קטגוריה:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  activeCat === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(article => (
            <article key={article.id} className="rounded-2xl border border-slate-200 shadow-sm bg-white p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{article.image}</span>
                <span className="text-sm text-slate-500">{article.category}</span>
              </div>
              <h2 className="text-lg font-bold mb-2 leading-snug">
                <Link href={`/blog/${article.id}`} className="hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="text-slate-700 text-sm mb-3">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>{new Date(article.date).toLocaleDateString('he-IL')}</span>
                <span>{article.readTime}</span>
              </div>
              <Link href={`/blog/${article.id}`} className="text-sm font-medium underline">
                קרא עוד
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">צריכים ייעוץ אישי?</h2>
        <p className="text-slate-200 mb-4">
          המאמרים מועילים, אבל ייעוץ אישי יכול לעזור לכם הרבה יותר
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="bg-white text-slate-900 px-5 py-2 rounded-full font-medium">
            קבע פגישה אישית
          </Link>
          <Link href="/services" className="border border-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-slate-900">
            צפה בשירותים
          </Link>
        </div>
      </section>
    </main>
  )
}