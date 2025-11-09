"use client";

import { useState, useEffect } from "react";
import styles from "./accessibility.module.css";

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState({
    bigText: false,
    highContrast: false,
    grayscale: false,
    highlightLinks: false,
    readableFont: false,
  });

  // טעינת הגדרות מה-localStorage
  useEffect(() => {
    const saved = localStorage.getItem("a11y-settings");
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  // עדכון מחלקות ו-localStorage
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("a11y-bigtext", settings.bigText);
    html.classList.toggle("a11y-contrast", settings.highContrast);
    html.classList.toggle("a11y-grayscale", settings.grayscale);
    html.classList.toggle("a11y-highlight", settings.highlightLinks);
    html.classList.toggle("a11y-readable", settings.readableFont);
    localStorage.setItem("a11y-settings", JSON.stringify(settings));
  }, [settings]);

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* כפתור צף */}
      <button
        className={styles.fab}
        aria-label="תפריט נגישות"
        onClick={() => setOpen(!open)}
      >
        ♿
      </button>

      {/* תפריט */}
      {open && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <h3>התאמות נגישות</h3>
            <button onClick={() => setOpen(false)} aria-label="סגור">✖</button>
          </div>

          <ul className={styles.list}>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={settings.bigText}
                  onChange={() => toggle("bigText")}
                />
                הגדלת טקסט
              </label>
            </li>

            <li>
              <label>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={() => toggle("highContrast")}
                />
                ניגודיות גבוהה
              </label>
            </li>

            <li>
              <label>
                <input
                  type="checkbox"
                  checked={settings.grayscale}
                  onChange={() => toggle("grayscale")}
                />
                גווני אפור
              </label>
            </li>

            <li>
              <label>
                <input
                  type="checkbox"
                  checked={settings.highlightLinks}
                  onChange={() => toggle("highlightLinks")}
                />
                הדגשת קישורים
              </label>
            </li>

            <li>
              <label>
                <input
                  type="checkbox"
                  checked={settings.readableFont}
                  onChange={() => toggle("readableFont")}
                />
                פונט קריא
              </label>
            </li>
          </ul>

          <button
            className={styles.reset}
            onClick={() =>
              setSettings({
                bigText: false,
                highContrast: false,
                grayscale: false,
                highlightLinks: false,
                readableFont: false,
              })
            }
          >
            איפוס התאמות
          </button>
        </div>
      )}
    </>
  );
}