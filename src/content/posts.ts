// src/content/posts.ts

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;   // HTML (p/strong/div/ul/li/br/h2/h3)
  image?: string;    // אופציונלי: שם קובץ תחת public/blog/
};

export const posts: Post[] = [
  {
    slug: "bariatric-five-things",
    title: "5 דברים שחשוב לדעת לפני ניתוח בריאטרי",
    excerpt:
      "לפני שנכנסים לחדר הניתוח, חשוב להבין שההצלחה מתחילה עוד הרבה קודם. חמישה היבטים קריטיים שיעזרו לכם להיערך נכון לתהליך הבריאטרי.",
    date: "2025-11-02",
    category: "בריאטריה",
    readTime: "8 דקות קריאה",
    image: "bariatric-five-things.jpg",
    content: `
<p><strong>מבוא:</strong> ניתוח בריאטרי הוא הרבה יותר מהליך כירורגי – הוא נקודת מפנה בתהליך שינוי משמעותי, פיזי ורגשי. מטופלים שמגיעים לשלב הזה חשוב שיהיו מוכנים לא רק לניתוח עצמו, אלא גם לכל מה שמגיע אחריו. בתור דיאטן קליני שמלווה מטופלים לפני ואחרי ניתוח, אני משתף כאן חמישה דברים קריטיים שכדאי לדעת – כדי שתגיעו לניתוח חזקים, מודעים ומוכנים להצליח.</p>

<div class="separator"></div>
<strong class="subhead">1) הניתוח הוא חלק מהתהליך – לא הפתרון כולו</strong>
<p>הניתוח לא "פותר את הבעיה", אלא יוצר הזדמנות לשינוי דפוסים ישנים, הקשבה לגוף ובניית הרגלים חדשים לחיים בריאים יותר. בלי עבודה תזונתית ורגשית מסביב, קיים סיכון לחזרה לעלייה במשקל גם אחרי הצלחה ראשונית.</p>

<strong class="subhead">2) הגוף משתנה – אבל חשוב לשנות גם את היחסים עם האוכל</strong>
<p>רבים מתמודדים עם אכילה רגשית, אכילה מתוך שעמום או תחושת אובדן שליטה. לאחר הניתוח יש מגבלות אכילה פיזיות, אך הרגשות וההרגלים עדיין קיימים. שילוב ליווי תזונתי עם תמיכה רגשית הוא קריטי.</p>

<strong class="subhead">3) תהליך הסתגלות מדורג</strong>
<p>השלבים אחרי הניתוח כוללים מעבר מתזונה נוזלית לרכה ובהמשך למוצקה, לצד התאמה מדויקת של כמויות ומרקמים. זה לא רק <em>מה</em> אוכלים – אלא <em>איך</em> אוכלים: קצב, לעיסה והקשבה לגוף הופכים לחלק מהשגרה.</p>

<strong class="subhead">4) תוספים – לא המלצה, אלא הכרח</strong>
<p>לאחר הניתוח משתנה הספיגה של ויטמינים ומינרלים. מעקב תזונתי וביוכימי חיוניים כדי למנוע חסרים (עייפות, נשירת שיער ועוד). ליווי דיאטנית בריאטרית יסייע בבחירת התוספים והמינונים הנכונים.</p>

<strong class="subhead">5) תמיכה לאורך זמן = הצלחה לאורך זמן</strong>
<p>מחקרים וניסיון קליני מראים שליווי מתמשך – תזונתי, רגשי או קבוצתי – מעלה משמעותית את הסיכוי לשימור ההישגים. בנו לעצמכם מערך תמיכה שמתאים בדיוק לכם.</p>

<div class="separator"></div>
<p><strong>סיכום:</strong> ניתוח בריאטרי הוא לא סוף הדרך – הוא רק ההתחלה. עם הכנה נכונה וליווי מותאם אישית, אפשר להפוך את השינוי למציאות יציבה ובריאה לאורך זמן.</p>

<h3>References</h3>
<ol class="text-left ltr">
  <li>Obesity in Adults. Lingvay I, Cohen RV, Roux CWL, Sumithran P. <em>Lancet</em>. 2024;404(10456):972-987. doi:10.1016/S0140-6736(24)01210-8.</li>
  <li>Mechanick JI, Youdim A, Jones DB, et al. <em>Clinical Practice Guidelines...</em> Obesity (Silver Spring). 2013;21 Suppl 1:S1-27. doi:10.1002/oby.20461.</li>
  <li>O'Kane M. <em>Nutritional Consequences of Bariatric Surgery</em>. <em>Curr Opin Gastroenterol</em>. 2021;37(2):135-144. doi:10.1097/MOG.0000000000000707.</li>
  <li>Reytor-González C, Frias-Toral E, Nuñez-Vásquez C, et al. <em>Nutrients</em>. 2025;17(5):741. doi:10.3390/nu17050741.</li>
  <li>Hansen D, Decroix L, Devos Y, et al. <em>Towards Optimized Care After Bariatric Surgery by Physical Activity...</em> <em>Obes Surg</em>. 2020;30(3):1118-1125. doi:10.1007/s11695-020-04390-x.</li>
</ol>
`
  },

  {
    slug: "bariatric-preparation-importance",
    title: "למה כל כך חשוב להתכונן לניתוח בריאטרי?",
    excerpt:
      "ההכנה לניתוח בריאטרי היא לא רק שלב טכני – היא הבסיס להצלחה: מפחיתה חרדה, מונעת חסרים ומבססת הרגלים יציבים.",
    date: "2025-11-03",
    category: "בריאטריה",
    readTime: "8 דקות קריאה",
    image: "bariatric-prep-importance.jpg",
    content: `
<p><strong>מבוא:</strong> רבים בטוחים שהשלב הקשה מתחיל “אחרי הניתוח”. בפועל, ההצלחה מתחילה עוד קודם. ההכנה לניתוח היא שלב קריטי שמשפיע על התוצאה, הבריאות והיכולת לשמר הישגים לאורך זמן.</p>

<strong class="subhead">הבנה עמוקה של התהליך</strong>
<ul>
  <li>מה משתנה בגוף: עיכול, רעב, ספיגת ויטמינים ומינרלים.</li>
  <li>כלים להתמודד עם אכילה רגשית או אכילה בלתי מודעת.</li>
  <li>זיהוי מחסומים ובניית הרגלים חדשים כבר לפני השינוי הפיזי.</li>
</ul>

<strong class="subhead">שינוי תודעתי לפני שינוי פיזי</strong>
<p>ללא הכנה, קל לצפות שהניתוח “יפתור את כל הבעיות”. בפועל, הצלחה תלויה ביכולת להקשיב לגוף, בבחירות שאתם עושים בסופר ובמטבח, ובהתמודדות עם סיטואציות חברתיות וסטרס. ההכנה המנטלית מכניסה לתהליך עם רגליים על הקרקע, גישה מציאותית ומחוזקת.</p>

<strong class="subhead">הסתגלות לשינויים תזונתיים</strong>
<ul>
  <li>אכילה איטית ולעיסה מרובה.</li>
  <li>צריכת חלבון יומית מספקת.</li>
  <li>שתייה נכונה (ללא נוזלים בזמן הארוחה).</li>
  <li>תרגול שלבי מעבר: נוזלים → טחונים → רכים → מוצקים.</li>
</ul>
<p>הטמעת ההרגלים מראש מונעת הפתעה ותסכול ומאפשרת הסתגלות מיטבית.</p>

<strong class="subhead">מניעת חסרים תזונתיים</strong>
<ul>
  <li>בדיקות דם: ברזל, B12, ויטמין D, חומצה פולית ועוד.</li>
  <li>מדדים מטבוליים: סוכר, שומנים, תפקודי כבד.</li>
</ul>
<p>מילוי חסרים לפני הניתוח מפחית סיבוכים לאחריו. תכנון מוקדם של תוספים, תזונה וחלוקת ארוחות מקל מאוד בתקופת ההחלמה.</p>

<strong class="subhead">תמיכה והפחתת חרדה</strong>
<ul>
  <li>חששות מהכאב ומהאשפוז.</li>
  <li>פחד מאובדן שליטה על אוכל.</li>
  <li>התמודדות עם תגובות מהסביבה.</li>
</ul>
<p>ליווי מקצועי יוצר תחושת ביטחון, מפחית חששות ומחזיר שליטה.</p>

<div class="separator"></div>
<p><strong>סיכום:</strong> ההכנה לניתוח בריאטרי היא הליבה של הצלחת התהליך. מי שנכנס לניתוח מתוך הבנה, מוכנות וכלים—יתאושש טוב יותר, ירגיש בטוח יותר וישמר תוצאות לאורך זמן.</p>

<h3>References</h3>
<ol class="text-left ltr">
  <li>Preoperative Nutrition in Bariatric Surgery. Simancas-Racines D, Frias-Toral E, Campuzano-Donoso M, et al. <em>Nutrients</em>. 2025;17(3):566. doi:10.3390/nu17030566.</li>
  <li>Sherf-Dagan S, Sinai T, Goldenshluger A, et al. <em>Nutritional Assessment and Preparation...</em> <em>Adv Nutr</em>. 2021;12(3):1020-1031. doi:10.1093/advances/nmaa121.</li>
  <li>Tang X, Reidlinger DP, Crichton M, et al. <em>J Acad Nutr Diet</em>. 2025;125(6):761-784.e6. doi:10.1016/j.jand.2024.09.007.</li>
  <li>Thibault R, Huber O, Azagury DE, Pichard C. <em>Clin Nutr</em>. 2016;35(1):12-17. doi:10.1016/j.clnu.2015.02.012.</li>
</ol>
`
  },

  {
    slug: "bariatric-post-surgery-followup",
    title: "ניתוח בריאטרי הוא רק ההתחלה – למה ליווי אחרי הניתוח הוא המפתח להצלחה ארוכת טווח",
    excerpt:
      "הליווי שלאחר הניתוח הוא גורם מרכזי בשימור תוצאות, מניעת חסרים וביסוס שגרה יציבה – גופנית ורגשית.",
    date: "2025-11-04",
    category: "בריאטריה",
    readTime: "9 דקות קריאה",
    image: "bariatric-followup.jpg",
    content: `
<p>רבים רואים בניתוח הבריאטרי את שיאו של התהליך – אך בפועל, השלב הקריטי ביותר קורה דווקא אחרי. המעבר לחיים עם קיבה מוקטנת, צורך בתוספים ושינויים רגשיים ותזונתיים – מצריך ליווי מקצועי צמוד, מותאם ותומך.</p>

<strong class="subhead">שימור תוצאות והפחתת סיכון לעלייה חוזרת</strong>
<p>ללא מסגרת מקצועית, חלק מהמטופלים עולים במשקל תוך שנים. ליווי תזונתי מספק מעקב קבוע על הרגלי אכילה ותוספים, התאמות למצבים משתנים (עבודה, חגים, סטרס) ותמיכה לא שיפוטית בתקופות קשות.</p>

<strong class="subhead">אכילה רגשית לא נעלמת</strong>
<p>הניתוח משנה את גודל הקיבה – לא את יחסי הגוף־אוכל. ליווי תזונתי־רגשי מעניק כלים מודעים לזיהוי טריגרים, לשינוי התנהגות הדרגתי ולבניית מערכת יחסים מאוזנת עם אוכל.</p>

<strong class="subhead">ניטור תוספים ומניעת חסרים</strong>
<ul>
  <li>בדיקות דם סדירות והתאמה אישית של מינונים.</li>
  <li>תשומת לב לברזל, ויטמין B12, ויטמין D, סידן ועוד.</li>
  <li>זיהוי מוקדם של סימני חסר: עייפות, חולשה, נשירת שיער.</li>
</ul>

<strong class="subhead">תמיכה רגשית והתאקלמות</strong>
<p>הירידה המהירה במשקל משנה דימוי עצמי, יחסים ומרחבים חברתיים. מרחב טיפולי בטוח מאפשר לעבד שינוי, להפחית חרדה ולבסס יציבות.</p>

<strong class="subhead">מסגרת, סדר וביטחון</strong>
<p>כמו כל שינוי משמעותי – גם כאן נדרשת שגרה ברורה: מסגרת יציבה, מקום לשאלות והתאמות לאורך הדרך. כך מאזנים בין ריאליות לתקווה ושומרים על איכות חיים.</p>

<div class="separator"></div>
<p><strong>סיכום:</strong> ניתוח בריאטרי הוא לא פתרון קסם אלא התחלה של מסע. ליווי מתמשך—תזונתי ורגשי—הוא תנאי אמיתי להצלחה, לבריאות ולשקט נפשי לאורך שנים.</p>

<h3>References</h3>
<ol class="text-left ltr">
  <li>Mingrone G, Bornstein S, Le Roux CW. <em>Optimisation of Follow-Up After Metabolic Surgery</em>. <em>Lancet Diabetes Endocrinol</em>. 2018;6(6):487-499. doi:10.1016/S2213-8587(17)30434-5.</li>
  <li>O'Kane M. <em>Nutritional Consequences of Bariatric Surgery</em>. <em>Curr Opin Gastroenterol</em>. 2021;37(2):135-144. doi:10.1097/MOG.0000000000000707.</li>
  <li>Reytor-González C, Frias-Toral E, Nuñez-Vásquez C, et al. <em>Nutrients</em>. 2025;17(5):741. doi:10.3390/nu17050741.</li>
  <li>Nuzzo A, Czernichow S, Hertig A, et al. <em>Prevention and Treatment of Nutritional Complications After Bariatric Surgery</em>. <em>Lancet Gastroenterol Hepatol</em>. 2021;6(3):238-251. doi:10.1016/S2468-1253(20)30331-9.</li>
  <li>Elmaleh-Sachs A, Schwartz JL, Bramante CT, et al. <em>Obesity Management in Adults</em>. <em>JAMA</em>. 2023;330(20):2000-2015. doi:10.1001/jama.2023.19897.</li>
</ol>
`
  },

  {
    slug: "bariatric-supplements-essentials",
    title: "תוספי תזונה אחרי ניתוח בריאטרי – לא המלצה, אלא הכרח בריאותי",
    excerpt:
      "הגוף משתנה לאחר הניתוח – וגם הספיגה. אילו תוספים חשוב לקחת, למה, ומה הסיכון באי־נטילה? מדריך קליני מסודר עם דגשים למעקב נכון.",
    date: "2025-11-02",
    category: "בריאטריה",
    readTime: "8 דקות קריאה",
    image: "bariatric-supplements.jpg",
    content: `
<p><strong>אחד הנושאים החשובים (והפחות מדוברים) אחרי ניתוח בריאטרי</strong> הוא נטילה קבועה של תוספי תזונה. מטופלים רבים מרגישים מצוין ויורדים יפה במשקל, ומניחים שתוספים הם “המלצה”. בפועל מדובר <strong>בצורך רפואי</strong>: הגוף והספיגה משתנים, והחסר לא תמיד מורגש — עד שמאוחר מדי.</p>

<div class="separator"></div>
<strong class="subhead">למה צריך תוספים אחרי ניתוח?</strong>
<ul>
  <li>נפח הקיבה קטן → אוכלים פחות → מתקבל פחות ויטמינים ומינרלים מהמזון.</li>
  <li>בחלק מהניתוחים יש גם <strong>ירידה בספיגה במעי הדק</strong>.</li>
  <li>נפגעת ספיגת מינרלים חיוניים (ברזל, סידן, מגנזיום וכו’).</li>
</ul>
<p>לכן, גם תזונה “בריאה” לבדה <strong>אינה מספיקה</strong>.</p>

<strong class="subhead">אילו תוספים חשוב לקחת?</strong>
<p>ההרכב המדויק משתנה לפי סוג הניתוח והבדיקות, אך לרוב יכלול:</p>

<table>
  <thead>
    <tr>
      <th>תוסף</th>
      <th>למה הוא חשוב?</th>
      <th>תסמיני חוסר אופייניים</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>מולטי־ויטמין מותאם לבריאטריה</td>
      <td>כיסוי רחב של ויטמינים ומינרלים</td>
      <td>עייפות, חיוורון, ירידה בחיסון</td>
    </tr>
    <tr>
      <td>ויטמין B12</td>
      <td>חיוני למערכת העצבים ולהמטופויזה</td>
      <td>עייפות, נימולים, קושי בריכוז</td>
    </tr>
    <tr>
      <td>ברזל</td>
      <td>מניעת אנמיה ושמירה על אנרגיה</td>
      <td>חולשה, סחרחורות, נשירת שיער</td>
    </tr>
    <tr>
      <td>סידן + ויטמין D</td>
      <td>בריאות עצם ומניעת דלדול</td>
      <td>כאבי שרירים/עצמות, ירידה בצפיפות</td>
    </tr>
    <tr>
      <td>ויטמין D</td>
      <td>ספיגת סידן, חיסון, מצב רוח</td>
      <td>עייפות, כאבי עצמות, דכדוך</td>
    </tr>
    <tr>
      <td>לעיתים: אבץ / מגנזיום / חומצה פולית</td>
      <td>בהתאם לבדיקות ולמצב קליני</td>
      <td>משתנה לפי רכיב</td>
    </tr>
  </tbody>
</table>

<p><strong>חשוב:</strong> לא ליטול תוספים “על דעת עצמכם”. ההתאמה נעשית בליווי מקצועי ועל סמך <strong>בדיקות דם</strong>.</p>

<strong class="subhead">מה הסיכונים באי־נטילת תוספים?</strong>
<ul>
  <li><strong>אנמיה</strong> (חסר ברזל/B12) — חולשה, קוצר נשימה, סחרחורות.</li>
  <li><strong>נשירת שיער</strong> משמעותית ופגיעה באיכות החיים.</li>
  <li><strong>פגיעה עצבית</strong> — נימולים, חולשה, ירידה בזיכרון/ריכוז.</li>
  <li><strong>אוסטיאופורוזיס</strong> ודלדול עצם.</li>
  <li>עייפות קיצונית, ירידה במצב הרוח.</li>
</ul>
<p>לעיתים התסמינים מופיעים רק לאחר חודשים — ואז הטיפול ארוך ומורכב יותר.</p>

<strong class="subhead">למה מעקב לא פחות חשוב מנטילה?</strong>
<ul>
  <li>בדיקה שהמינונים <strong>תואמים</strong> את הצורך הקליני שלך.</li>
  <li>ווידוא <strong>ספיגה</strong> (ערכים עולים/יציבים בבדיקות הדם).</li>
  <li>בדיקת <strong>התנגשויות</strong> בין רכיבים (למשל, עיתוי ברזל לעומת סידן).</li>
</ul>
<p>לכן חשוב לבצע <strong>בדיקות דם תקופתיות</strong> וללוות את הנטילה אצל דיאטן/ית קליני/ת המומחה/ית בבריאטריה.</p>

<div class="separator"></div>
<p><strong>סיכום והמלצות מעשיות</strong></p>
<ul>
  <li>קבעו <strong>פרוטוקול תוספים</strong> אישי לפי סוג הניתוח והבדיקות.</li>
  <li>שריינו <strong>תזמון חכם</strong> לנטילה (למשל, ברזל בנפרד מסידן; B12 לפי ההמלצה).</li>
  <li>עקבו אחר <strong>בדיקות דם</strong> והיו בקשר רציף עם הצוות המטפל.</li>
  <li>זכרו: התוספים הם <strong>חלק מהטיפול הרפואי</strong> — לא “תוספת אופציונלית”.</li>
</ul>
<p>כמו שלא הייתם מוותרים על תרופה חשובה, כך גם כאן: נטילה קבועה, מדויקת ומותאמת של תוספים מונעת סיבוכים ושומרת על הבריאות לאורך זמן.</p>

<h3>References</h3>
<ol class="text-left ltr">
  <li>Reytor-González C, Frias-Toral E, Nuñez-Vásquez C, et al. <em>Nutrients</em>. 2025;17(5):741. doi:10.3390/nu17050741.</li>
  <li>O'Kane M. <em>Nutritional Consequences of Bariatric Surgery</em>. <em>Curr Opin Gastroenterol</em>. 2021;37(2):135-144. doi:10.1097/MOG.0000000000000707.</li>
  <li>Nuzzo A, Czernichow S, Hertig A, et al. <em>Lancet Gastroenterol Hepatol</em>. 2021;6(3):238-251. doi:10.1016/S2468-1253(20)30331-9.</li>
  <li>Wong DH, Kim E, Rim DS, et al. <em>Obes Surg</em>. 2023;33(10):3127-3132. doi:10.1007/s11695-023-06802-0.</li>
  <li>Mechanick JI, Youdim A, Jones DB, et al. <em>Clinical Practice Guidelines...</em> Obesity (Silver Spring). 2013;21 Suppl 1:S1-27. doi:10.1002/oby.20461.</li>
</ol>
`
  },

  {
    slug: "bariatric-preoperative-nutrition",
    title: "טיפול תזונתי לפני ניתוח בריאטרי – למה הוא חיוני?",
    excerpt:
      "הטיפול התזונתי לפני ניתוח בריאטרי הוא גורם קריטי בהצלחת הניתוח ובמניעת סיבוכים. כך תיקון חסרים, הערכה מוקדמת והכנה תזונתית תורמים לתוצאה טובה ובטוחה יותר.",
    date: "2025-11-05",
    category: "בריאטריה",
    readTime: "8 דקות קריאה",
    content: `
<h2>טיפול תזונתי לפני ניתוח בריאטרי – למה הוא חיוני?</h2>

<p>הטיפול התזונתי לפני ניתוח בריאטרי חשוב משום שהוא <strong>משפר את בטיחות הניתוח</strong>, <strong>מפחית סיכונים סביב־ניתוחיים</strong>, ומשפיע באופן משמעותי על <strong>תוצאות ארוכות הטווח</strong>. הערכה והתערבות תזונתית טרום ניתוח נועדו לזהות ולתקן <strong>חסרים תזונתיים שכיחים</strong> – כגון ברזל, ויטמין D, ויטמין B12, חומצה פולית ואחרים – אשר נפוצים בקרב מטופלים עם השמנת יתר חמורה ועלולים לגרום לסיבוכים חמורים לאחר הניתוח אם לא יטופלו מראש.[1][2][3]</p>
<p>תיקון החסרים הללו לפני הניתוח מפחית את הסיכון ל<strong>אנמיה לאחר הניתוח</strong>, <strong>דלדול עצם (אוסטיאופורוזיס)</strong> ו<strong>הפרעות נוירולוגיות</strong>.[1][2]</p>

<hr/>

<h3>ייעוץ תזונתי והסתגלות מוקדמת</h3>
<p>ייעוץ תזונתי לפני הניתוח עוזר למטופלים <strong>להסתגל להרגלי אכילה חדשים</strong> ולהתכונן לשינויים הפיזיולוגיים הצפויים לאחריו. ההכנה הזו משפרת את <strong>ההיענות להנחיות התזונתיות</strong> ומפחיתה סיכונים כגון <strong>תסמונת הצפה (Dumping Syndrome)</strong> ועלייה חוזרת במשקל.[4][6][7]</p>
<p>גישה רב־תחומית הכוללת <strong>דיאטנים ואנשי מקצוע נוספים</strong> מומלצת להערכה מקיפה ולהדרכה נכונה של המטופלים.[6][8]</p>

<hr/>

<h3>ניטור ותיקון חסרים תזונתיים</h3>
<p>מומלץ לבצע <strong>בדיקות דם שגרתיות לפני הניתוח</strong> ולהכין <strong>תוכנית השלמה אישית של תוספי תזונה</strong>, במטרה להפחית את הסיכון לחסרים גם לפני וגם מיד לאחר הניתוח.[9][3]</p>
<p>החברות המקצועיות – <strong>ASMBS</strong> ו־<strong>BOMSS</strong> – ממליצות על <strong>מעקב תזונתי ותוספי תזונה לכל החיים</strong>, כדי למנוע סיבוכים תזונתיים.[10]</p>

<hr/>

<h3>סיכום</h3>
<p>הטיפול התזונתי לפני ניתוח בריאטרי הוא חלק בלתי נפרד מהצלחת התהליך כולו. הוא נועד <strong>לתקן חסרים</strong>, <strong>להפחית סיכונים ניתוחיים</strong>, ולהכין את המטופלים לשינויים התזונתיים לאחר הניתוח – ובכך לשפר את התוצאות <strong>הקצרות והארוכות טווח</strong>.[4][9][6][5][1][2][3][8][10]</p>

<h3>References</h3>
<ol class="text-left ltr">
  <li>Reytor-González C, Frias-Toral E, Nuñez-Vásquez C, et al. <em>Nutrients</em>. 2025;17(5):741. doi:10.3390/nu17050741.</li>
  <li>Roust LR, DiBaise JK. <em>Curr Opin Clin Nutr Metab Care</em>. 2017;20(2):138-144. doi:10.1097/MCO.0000000000000352.</li>
  <li>Thibault R, Huber O, Azagury DE, Pichard C. <em>Clin Nutr</em>. 2016;35(1):12-17. doi:10.1016/j.clnu.2015.02.012.</li>
  <li>Simancas-Racines D, Frias-Toral E, Campuzano-Donoso M, et al. <em>Nutrients</em>. 2025;17(3):566. doi:10.3390/nu17030566.</li>
  <li>Bettini S, Belligoli A, Fabris R, Busetto L. <em>Rev Endocr Metab Disord</em>. 2020;21(3):297-306. doi:10.1007/s11154-020-09571-8.</li>
  <li>Sherf-Dagan S, Sinai T, Goldenshluger A, et al. <em>Adv Nutr</em>. 2021;12(3):1020-1031. doi:10.1093/advances/nmaa121.</li>
  <li>Frias-Toral E, Chapela S, Gonzalez V, et al. <em>Nutrients</em>. 2025;17(4):688. doi:10.3390/nu17040688.</li>
  <li>Obesity in Adults. Lingvay I, et al. <em>Lancet</em>. 2024;404(10456):972-987. doi:10.1016/S0140-6736(24)01210-8.</li>
  <li>Tang X, Reidlinger DP, Crichton M, et al. <em>J Acad Nutr Diet</em>. 2025;125(6):761-784.e6. doi:10.1016/j.jand.2024.09.007.</li>
  <li>O'Kane M. <em>Curr Opin Gastroenterol</em>. 2021;37(2):135-144. doi:10.1097/MOG.0000000000000707.</li>
</ol>
`
  },

  {
    slug: "bariatric-supplements-guidelines",
    title: "תוספי תזונה אחרי ניתוח בריאטרי – לפי ההנחיות העדכניות ביותר",
    excerpt:
      "לאחר ניתוח בריאטרי יש צורך בתוספי תזונה קבועים לכל החיים, כדי למנוע חסרים תזונתיים וסיבוכים. אלו ההנחיות המעודכנות של האגודות המקצועיות המובילות בעולם.",
    date: "2025-11-06",
    category: "בריאטריה",
    readTime: "9 דקות קריאה",
    content: `
<h2>תוספי תזונה אחרי ניתוח בריאטרי – לא המלצה, אלא הכרח בריאותי</h2>

<p>הקונצנזוס המקצועי העדכני ביותר קובע כי <strong>יש ליטול תוספי תזונה לכל החיים</strong> לאחר ניתוח בריאטרי, כדי <strong>למנוע ולטפל בחסרים תזונתיים</strong>. האגודות הבינלאומיות המובילות – <strong>AACE</strong>, <strong>TOS</strong> ו־<strong>ASMBS</strong> – ממליצות על תוספי הליבה הבאים למטופלים לאחר ניתוח <strong>Roux-en-Y (RYGB)</strong> ו־<strong>Sleeve Gastrectomy (SG)</strong>:</p>

<ul>
  <li>מולטי־ויטמין למבוגרים (שכולל <strong>ברזל, חומצה פולית ותיאמין</strong>)</li>
  <li><strong>סידן (ציטראט)</strong> – 1200–1500 מ״ג/יום במנות מחולקות</li>
  <li><strong>ויטמין D</strong> – לפחות 3000 יחב״ל/יום, בהתאמה לרמות 25(OH)D &gt; 30 ng/mL</li>
  <li><strong>ויטמין B12</strong> – פומי/תת־לשוני/הזרקה לפי צורך לשמירה על ערכים תקינים</li>
  <li><strong>ברזל</strong> – 45–60 מ״ג ברזל יסוד/יום (במיוחד RYGB, נשים במחזור)</li>
</ul>

<hr/>

<h3>תוספים נוספים לפי צורך אישי</h3>
<ul>
  <li>חומצה פולית: 400–800 מק״ג/יום</li>
  <li>אבץ: 10–16 מ״ג/יום</li>
  <li>נחושת: 1–2 מ״ג/יום (במיוחד אם נוטלים אבץ קבוע)</li>
  <li>ויטמינים מסיסי שומן: A, K, E</li>
  <li>תיאמין (B1): 12–50 מ״ג/יום לאוכלוסיות בסיכון</li>
</ul>
<p>בניתוחים עם מרכיב תת־ספיגה (כמו <strong>BPD-DS</strong>) יתכן צורך במינונים גבוהים יותר ואף מתן תוך־ורידי.</p>

<hr/>

<h3>צורת נטילה והקפדה על ספיגה</h3>
<p>בשלבים הראשונים לאחר הניתוח מומלץ להשתמש <strong>בתוספים ללעיסה או נוזליים</strong> לשיפור ספיגה. תכשירים ייעודיים לבריאטריה עשויים לשפר היענות, אך מחקרים מראים כי <strong>יעילותם ועלותם דומות</strong> לשילוב של תוספים רגילים בנפרד.</p>

<hr/>

<h3>מעקב תזונתי קבוע</h3>
<p>מעקב ובדיקות דם תקופתיות הם קריטיים למניעת <strong>אנמיה</strong>, <strong>אוסטיאופורוזיס</strong> ו<strong>הפרעות נוירולוגיות</strong>, ולהתאמת מינונים אישית.</p>

<hr/>

<h3>סיכום</h3>
<p>לאחר ניתוח בריאטרי, השילוב של <strong>מולטי־ויטמין עם מינרלים</strong>, <strong>סידן ציטראט</strong>, <strong>ויטמין D</strong>, <strong>ברזל</strong> ו־<strong>ויטמין B12</strong> הוא חובה. תוספים נוספים מותאמים לפי סוג הניתוח וממצאי המעבדה. ההנחיות של <strong>The Obesity Society</strong>, <strong>AACE</strong> ו־<strong>ASMBS</strong> מדגישות שתוספים הם חלק בלתי נפרד מהטיפול ארוך הטווח.</p>

<h3>References</h3>
<ol class="text-left ltr">
  <li>Mechanick JI, Youdim A, Jones DB, et al. <em>Clinical Practice Guidelines...</em> Obesity (Silver Spring). 2013;21 Suppl 1:S1-27. doi:10.1002/oby.20461.</li>
  <li>Mingrone G, Bornstein S, Le Roux CW. <em>Optimisation of Follow-Up After Metabolic Surgery</em>. <em>Lancet Diabetes Endocrinol</em>. 2018;6(6):487-499. doi:10.1016/S2213-8587(17)30434-5.</li>
  <li>Elmaleh-Sachs A, Schwartz JL, Bramante CT, et al. <em>Obesity Management in Adults</em>. <em>JAMA</em>. 2023;330(20):2000-2015. doi:10.1001/jama.2023.19897.</li>
  <li>Nuzzo A, Czernichow S, Hertig A, et al. <em>Lancet Gastroenterol Hepatol</em>. 2021;6(3):238-251. doi:10.1016/S2468-1253(20)30331-9.</li>
  <li>Wong DH, Kim E, Rim DS, et al. <em>Obes Surg</em>. 2023;33(10):3127-3132. doi:10.1007/s11695-023-06802-0.</li>
  <li>Reytor-González C, Frias-Toral E, Nuñez-Vásquez C, et al. <em>Nutrients</em>. 2025;17(5):741. doi:10.3390/nu17050741.</li>
  <li>Chappard H, Sami O, Sakka I, et al. <em>SOARD</em>. 2025;S1550-7289(25)00901-3. doi:10.1016/j.soard.2025.08.023.</li>
</ol>
`
  },

  {
    slug: "kids-healthy-nutrition",
    title: "תזונה בריאה והרגלי אכילה בילדים – בין הבית, המסגרת והמדיניות הציבורית",
    excerpt:
      "תזונה נכונה בילדות מושפעת מדפוסי אכילה, מהסביבה המשפחתית, מהמודל ההורי ומהתערבויות חינוכיות. שילוב של חינוך, נגישות מזון בריא ודוגמה אישית הוא המפתח להצלחה.",
    date: "2025-11-06",
    category: "תזונת ילדים",
    readTime: "9 דקות קריאה",
    content: `
<h2>תזונה בריאה והרגלי אכילה בילדים – מה משפיע באמת?</h2>

<p>הרגלי האכילה והתזונה של ילדים מתעצבים מתוך שילוב של <strong>דפוסי תזונה, סביבה משפחתית, חיקוי הורי והתערבויות חינוכיות</strong>. תזונה בריאה לילדים כוללת <strong>פירות, ירקות, דגנים מלאים, חלבונים רזים ומוצרי חלב דלי שומן</strong>, תוך צמצום של <strong>סוכרים מוספים, נתרן ומזונות אולטרה־מעובדים</strong>.[1][2][3] הקפדה על <strong>ויטמין D, סידן ואשלגן</strong> חשובה להתפתחות, מאחר שחסרים בהם שכיחים.[1]</p>

<h3>תפקיד ההורים: הרגלים, חיקוי וסביבה</h3>
<ul>
  <li>חשיפה חוזרת למזונות חדשים (8–10 פעמים ואף יותר).</li>
  <li>מתן <strong>חופש בחירה</strong> ללא לחץ/כפייה.</li>
  <li>הימנעות מהאכלה שיפוטית או מגבילה מדי.</li>
</ul>
<p>האקדמיה האמריקאית לרפואת ילדים מדגישה את חשיבות <strong>הארוחות המשפחתיות</strong>—קשורות לאיכות תזונה טובה יותר, משקל תקין ומצב רגשי־חברתי יציב יותר.[5]</p>

<h3>מוסדות חינוך כגורם משנה מציאות</h3>
<p>התערבויות חינוכיות, תפריטים מאוזנים ושינויים סביבתיים במסגרות החינוך משפרים את איכות התזונה ומעלים צריכת פירות; ההשפעה על ירקות ו-BMI אינה תמיד עקבית.[8][9] מדיניות ציבורית (למשל רגולציה על פרסום מזון לילדים או סבסוד מזון בריא) תומכת בשינוי רחב־היקף.[10]</p>

<h3>סיכום</h3>
<p>הצלחת תזונת ילדים נשענת על שילוב של <strong>נגישות למזון בריא</strong>, <strong>דוגמה הורית</strong>, <strong>ארוחות משפחתיות</strong> ו<strong>מדיניות ציבורית</strong>. הגישה צריכה להיות הוליסטית—בית, חינוך וקהילה.</p>

<h3>References</h3>
<ol class="text-left ltr">
  <li>Hess J, Slavin J. <em>Nutrients</em>. 2014;6(11):4750-9. doi:10.3390/nu6114750.</li>
  <li>Welker EB, Jacquier EF, Catellier DJ, et al. <em>J Nutr</em>. 2018;148(9S):1536S-1546S. doi:10.1093/jn/nxx053.</li>
  <li>Eliason J, Acciai F, DeWeese RS, Vega-López S, Ohri-Vachaspati P. <em>Nutrients</em>. 2020;12(8):E2322. doi:10.3390/nu12082322.</li>
  <li>Haines J, Haycraft E, Lytle L, et al. <em>Appetite</em>. 2019;137:124-133. doi:10.1016/j.appet.2019.02.007.</li>
  <li>Muth ND, Bolling C, Hannon T, Sharifi M. <em>Pediatrics</em>. 2024;153(3):e2023065480. doi:10.1542/peds.2023-065480.</li>
  <li>Gibson EL, Kreichauf S, Wildgruber A, et al. <em>Obes Rev</em>. 2012;13 Suppl 1:85-95. doi:10.1111/j.1467-789X.2011.00939.x.</li>
  <li>Scaglioni S, De Cosmi V, Ciappolino V, et al. <em>Nutrients</em>. 2018;10(6):E706. doi:10.3390/nu10060706.</li>
  <li>Yoong SL, Lum M, Wolfenden L, et al. <em>Cochrane Database Syst Rev</em>. 2023;8:CD013862. doi:10.1002/14651858.CD013862.pub3.</li>
  <li>Andueza N, Navas-Carretero S, Cuervo M. <em>Nutrients</em>. 2022;14(2):372. doi:10.3390/nu14020372.</li>
  <li>Chan J, Conroy P, Phongsavan P, Raubenheimer D, Allman-Farinelli M. <em>Obes Rev</em>. 2025;26(6):e13897. doi:10.1111/obr.13897.</li>
</ol>
`
  },

  {
    slug: "bariatric-activity-after-surgery",
    title: "פעילות גופנית לאחר ניתוח בריאטרי – מתי להתחיל וכיצד להתקדם",
    excerpt:
      "הנעה מוקדמת והתקדמות הדרגתית מפחיתות סיכונים ומקדמות הצלחה ארוכת טווח אחרי ניתוח בריאטרי. המדריך המעשי לעיתוי, עצימות וסוגי הפעילות – עם דגשים לשימור מסת שריר ומעקב נכון.",
    date: "2025-11-07",
    category: "בריאטריה",
    readTime: "7 דקות קריאה",
    image: "bariatric-activity.jpg",
    content: `
<p><strong>תקציר:</strong> הנעה מוקדמת ופעילות גופנית מבוקרת לאחר ניתוח בריאטרי הן חלק בלתי נפרד מההחלמה ומהצלחת התהליך לטווח ארוך. כאן תמצאו עיתוי מומלץ, עצימות וסוגי פעילות—עם דגשים לשילוב אימוני התנגדות, מניעת ישיבה ממושכת וליווי מקצועי רציף.</p>

<div class="separator"></div>
<strong class="subhead">הנעה מוקדמת והתקדמות הדרגתית</strong>
<p>מומלץ להתחיל בהליכות קצרות <strong>בהקדם האפשרי</strong> לאחר הניתוח, ולהגדיל בהדרגה את משך ותדירות ההליכה לאורך החודש הראשון—במקביל להפחתת <strong>זמן ישיבה ממושכת</strong>.</p>
<p>בהמשך, יש להתקדם ל־<strong>150–300 דקות בשבוע</strong> של פעילות אירובית בעצימות מתונה (הליכה מהירה, רכיבה, שחייה). אימונים מובנים ו<strong>אימוני התנגדות</strong> ניתן לשלב <strong>לאחר 4–6 שבועות</strong>. תרגילי בטן/עצימות גבוהה—רצוי לדחות ל־<strong>8–12 שבועות</strong>.</p>

<strong class="subhead">למה זה חשוב?</strong>
<ul>
  <li>ירידה גדולה יותר במסת שומן ובמשקל לאורך זמן.</li>
  <li>שיפור במדדים מטבוליים ובלחץ הדם.</li>
  <li>חיזוק שרירים ושיפור בכוח ובכושר.</li>
  <li>שיפור איכות החיים הכללית.</li>
</ul>
<p><strong>אימוני התנגדות</strong> חשובים במיוחד לשימור כוח ומניעת אובדן מסת גוף רזה.</p>

<strong class="subhead">ליווי, ניטור וכלים מעשיים</strong>
<ul>
  <li>תכנון פעילות מותאם אישית בליווי דיאטן/ית ומדריך/ה מוסמך/ת.</li>
  <li>ניטור צעדים/דקות מאמץ (שעון/אפליקציה) מעלה היענות לעומת הנחיות כלליות בלבד.</li>
  <li>שילוב הדרגתי: אירובי בסיסי ➜ הוספת התנגדות ➜ העלאת עצימות לפי התאוששות והתקדמות.</li>
</ul>

<div class="separator"></div>
<p><strong>סיכום:</strong> התחילו מוקדם, התקדמו בהדרגה, שלבו אירובי עם התנגדות, והיעזרו בליווי מקצועי וכלי ניטור. כך תשמרו על התוצאות, תחזקו את הגוף ותבססו אורח חיים בריא ובר־קיימא.</p>

<h3>References</h3>
<ol class="text-left ltr">
  <li>Fernández-Alonso M, Bejarano G, Creel DB, et al. <em>Surg Obes Relat Dis</em>. 2025;21(5):606-614. doi:10.1016/j.soard.2024.11.005.</li>
  <li>Kanaley JA, Colberg SR, Corcoran MH, et al. <em>Med Sci Sports Exerc</em>. 2022;54(2):353-368. doi:10.1249/MSS.0000000000002800.</li>
  <li><em>ACSM Consensus Statement: Physical Activity and Excess Body Weight</em>.</li>
  <li>Jang HN, Park YS, Choi SH, et al. <em>Sci Rep</em>. 2025;15(1):35305. doi:10.1038/s41598-025-19383-y.</li>
  <li>Moriconi D, Manca L, Rebelos E, et al. <em>Am J Surg</em>. 2024;234:143-149. doi:10.1016/j.amjsurg.2024.04.020.</li>
  <li>Fontana AD, Lopes AD, Lunardi AC. <em>Obes Surg</em>. 2019;29(8):2442-2448. doi:10.1007/s11695-019-03859-8.</li>
  <li>Gallé F, Marte G, Cirella A, et al. <em>PLOS ONE</em>. 2020;15(10):e0241336. doi:10.1371/journal.pone.0241336.</li>
  <li>Hansen D, Decroix L, Devos Y, et al. <em>Obes Surg</em>. 2020;30(3):1118-1125. doi:10.1007/s11695-020-04390-x.</li>
  <li>Creel DB, Schuh LM, Reed CA, et al. <em>Obesity (Silver Spring)</em>. 2016;24(8):1660-8. doi:10.1002/oby.21548.</li>
</ol>
`
  },

  {
    slug: "emotional-eating",
    title: "אכילה רגשית – גורמים, מנגנונים וטיפול מבוסס ראיות",
    excerpt:
      "אכילה רגשית נובעת לרוב ממתח, חרדה או דיכאון ומתבטאת באכילה כתגובה לרגש ולא לרעב. סקירה מקצועית על המנגנונים והטיפולים היעילים ביותר — עם דגש על CBT.",
    date: "2025-11-10",
    category: "תזונה והתנהגות",
    readTime: "7 דקות קריאה",
    image: "emotional-eating-cover.jpg",
    content: `
<p>אכילה רגשית נובעת בעיקר מתחושות שליליות כגון מתח, חרדה או דיכאון, ומתבטאת באכילה כתגובה רגשית ולא מתוך רעב פיזיולוגי. הגורמים המרכזיים כוללים קושי בוויסות רגשי, תגובתיות רגשית גבוהה, קושי בשליטה בדחפים ואסטרטגיות התמודדות לא מותאמות. אכילה רגשית נקשרת לסיכון מוגבר להשמנה, לדפוסי אכילה לא בריאים, ולעיתים משמשת כמתווך בין דיכאון להשמנה.<sup>[1][2][3][4]</sup></p>

<p>גורמים תורמים עשויים לכלול פגיעוּת גנטית, שיבוש בציר ההורמונלי-עצבי (HPA axis), מודעות ירודה לתחושות גופניות פנימיות (interoceptive awareness), ולחצים סביבתיים כגון סטיגמה משקלית או חוויות חיים שליליות.<sup>[5][1][6][7]</sup></p>

<h2>גישות טיפול מבוססות ראיות</h2>
<p>הטיפולים הזמינים מתמקדים בהתערבויות פסיכולוגיות והתנהגותיות. הקו הראשון והמבוסס ביותר הוא <strong>טיפול קוגניטיבי־התנהגותי (CBT)</strong>, שהוכח כמפחית אכילה רגשית ומקדם ירידה מתונה במשקל.<sup>[8][9][7]</sup> CBT מטפל בדפוסי חשיבה והתנהגות לא מסתגלים, מחזק ויסות רגשי ומלמד חלופות התמודדות.</p>

<p>גישות נוספות כוללות <strong>ACT</strong> (קבלה ומחויבות) המדגישה קבלה של רגשות קשים והתנהגות מונחית-ערכים, וכן התערבויות הבונות מיומנויות ויסות עצמי וסבילות למצוקה.<sup>[10][11][12]</sup> מומלץ לבצע <strong>סקר לאכילה רגשית</strong> ולהתאים התערבות אישית במסגרת שירותי ניהול משקל.<sup>[9]</sup></p>

<h2>אסטרטגיות משלימות</h2>
<p>חינוך תזונתי, פעילות גופנית לשיפור מצב הרוח והפחתת חרדה, וטכנולוגיות דיגיטליות (אפליקציות תמיכה בזמן אמת; נוירו-מודולציה במעגלי ויסות רגשי) יכולים לשמש כתוספת לטיפול.<sup>[5][6][10]</sup> טיפול תרופתי אינו קו ראשון, ונשקל בעיקר בקיום קומורבידיות פסיכיאטריות/מטבוליות או בבינג׳ אכילה—מחקרי רה־פרופוזינג נמשכים.<sup>[5][7]</sup></p>

<h2>סיכום</h2>
<p><strong>CBT</strong> הוא הטיפול המרכזי והמבוסס ביותר לאכילה רגשית. שילוב ACT, חינוך תזונתי ותמיכה דיגיטלית עשוי לשפר היעילות וההתמדה בטיפול.<sup>[8][9][10]</sup></p>

<h3>References</h3>
<ol class="text-left ltr">
  <li>van Strien T. <em>Causes of Emotional Eating and Matched Treatment of Obesity.</em> <em>Curr Diab Rep</em>. 2018;18(6):35. doi:10.1007/s11892-018-1000-x.</li>
  <li>Dakanalis A, Mentzelou M, Papadopoulou SK, et al. <em>Nutrients</em>. 2023;15(5):1173. doi:10.3390/nu15051173.</li>
  <li>Konttinen H. <em>Proc Nutr Soc</em>. 2020;79(3):283-289. doi:10.1017/S0029665120000166.</li>
  <li>Wen J, Inauen J, Miao M. <em>Appetite</em>. 2025;213:108049. doi:10.1016/j.appet.2025.108049.</li>
  <li>Treasure J, Bektas S, Mutwalli H, et al. <em>Proc Nutr Soc</em>. 2022;81(3):255-263. doi:10.1017/S0029665122000994.</li>
  <li>Godet A, Fortier A, Bannier E, et al. <em>Rev Endocr Metab Disord</em>. 2022;23(4):807-831. doi:10.1007/s11154-021-09700-x.</li>
  <li>Gibson EL. <em>Behav Pharmacol</em>. 2012;23(5-6):442-60. doi:10.1097/FBP.0b013e328357bd4e.</li>
  <li>Smith J, Ang XQ, Giles EL, Traviss-Turner G. <em>IJERPH</em>. 2023;20(3):2722. doi:10.3390/ijerph20032722.</li>
  <li>Power D, Jones A, Keyworth C, et al. <em>J Hum Nutr Diet</em>. 2025;38(1):e13410. doi:10.1111/jhn.13410.</li>
  <li>Kudlek L, Jones RA, Hughes C, et al. <em>Appetite</em>. 2024;193:107138. doi:10.1016/j.appet.2023.107138.</li>
  <li>Juarascio AS, Parker MN, Manasse SM, et al. <em>Appetite</em>. 2020;150:104634. doi:10.1016/j.appet.2020.104634.</li>
  <li>Annesi JJ, Johnson PH. <em>Appetite</em>. 2020;155:104818. doi:10.1016/j.appet.2020.104818.</li>
</ol>
`
  },
];