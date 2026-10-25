/**
 * מרוץ לקריירה - קוד המשחק הראשי (JavaScript)
 * מפתח: Antigravity AI
 */

// ================= מאגר קלפים =================
const DEFAULT_CARDS = [
    // קטגוריה 1: תקשורת בין־אישית
    {
        id: "cat1-q1",
        category: 1,
        text: "חבר לצוות לא עונה להודעות דחופות שלך בנוגע לפרויקט משותף שיש לו דדליין מחר. מה תעשה?",
        aiAnswers: [
            "אנסה להתקשר אליו ישירות בטלפון, ואם הוא לא זמין, אשלח לו הודעה מנומסת שמסבירה את הדחיפות ואשאל אם הוא צריך עזרה להשלים את החלק שלו.",
            "אמשיך לעבוד על החלקים שלי, ואשלח לו אימייל מסודר עם העתק למנהל הצוות כדי לעדכן על מצב הפרויקט והחוסרים, תוך שמירה על טון מקצועי.",
            "אבקש שיחת בירור קצרה פנים אל פנים או בוידאו מוקדם בבוקר, כדי להבין אם נוצרו קשיים בלתי צפויים ולראות איך נוכל לחלק את המאמץ כדי לעמוד ביעד."
        ]
    },
    {
        id: "cat1-q2",
        category: 1,
        text: "במהלך מצגת חשובה מול לקוח, קולגה מתקן אותך בצורה קצת מזלזלת לגבי נתון שהצגת. איך תגיב?",
        aiAnswers: [
            "אודה לו על התיקון בצורה רגועה ('תודה על הדיוק, זה באמת נתון חשוב'), ואמשיך במצגת בלי להיגרר לוויכוח או להראות לחץ.",
            "אעצור לרגע, אשאל אותו בנימוס אם יש לו נתונים מעודכנים יותר שאפשר להציג, ואציע שנשווה גרסאות בסוף הישיבה כדי לספק ללקוח את המידע המדויק ביותר.",
            "אתעלם מהטון המזלזל זמנית, אשלב את התיקון שלו במצגת ('נכון מאוד, כפי ששמוליק ציין...'), ואמשיך כרגיל. לאחר הישיבה אשוחח איתו בארבע עיניים לגבי דרך התקשורת."
        ]
    },
    {
        id: "cat1-q3",
        category: 1,
        text: "מנהל המחלקה נותן לך משוב שלילי על פרויקט שהשקעת בו רבות, וחלק מהביקורת מרגישה לך לא הוגנת. כיצד תפעל?",
        aiAnswers: [
            "אקשיב למשוב בריכוז ובלי להתגונן. אבקש דוגמאות ספציפיות לנקודות לשיפור ואציע פגישת מעקב שבה אציג את התוכנית שלי לתיקון הליקויים.",
            "אקשיב לרעיונות שלו, אודה לו על הזמן שהקדיש למשוב, ואסביר בעדינות ובצורה מבוססת עובדות את האתגרים שנתקלתי בהם ואת הסיבות להחלטות שקיבלתי.",
            "אבקש פגישה אישית קצרה כדי לעבור על המשוב באופן ענייני, אציג את העובדות והנתונים שתומכים בגישה שלי, ואשאל איך הוא מציע לגשר על הפערים בראיית הפרויקט להבא."
        ]
    },
    {
        id: "cat1-q4",
        category: 1,
        text: "שני קולגות בצוות שלך נמצאים בעימות מתמשך שמקשה על העבודה המשותפת בפרויקט. מה תעשה?",
        aiAnswers: [
            "אציע לשניהם לשבת יחד איתי לקפה לשיחה לא רשמית, שבה נתמקד במטרות המשותפות של הפרויקט וננסה להגדיר גבולות גזרה ברורים לכל אחד כדי למנוע חיכוך.",
            "אפנה למנהל הצוות ואעדכן אותו שהחיכוך ביניהם פוגע בלוחות הזמנים של הפרויקט, ואבקש ממנו להתערב כדי לפתור את המחלוקת ברמה הניהולית.",
            "אשתדל לשמש כגורם מתווך ואובייקטיבי - אתמקד רק במשימות המקצועיות, אעביר ביניהם מידע בצורה ניטרלית, ואעזור להם להתרכז בפתרון בעיות במקום בהאשמות אישיות."
        ]
    },
    {
        id: "cat1-q5",
        category: 1,
        text: "קיבלת מייל מנוסח בתוקפנות מלקוח פנימי בארגון שטוען שלא סיפקת לו דוח בזמן. איך תגיב?",
        aiAnswers: [
            "לא אגיב מיד במייל תוקפני בחזרה. אקח כמה דקות להירגע, אבדוק את העובדות, ואשיב במייל מקצועי ומנומס עם הדוח המבוקש והסבר ענייני לעיכוב אם היה כזה.",
            "ארים אליו טלפון או אגש לשולחן שלו לשיחה קצרה. שיחה מדוברת פותרת אי-הבנות מהר יותר ומפחיתה את הלהבות שנוצרות לעיתים קרובות בתקשורת כתובה.",
            "אערב את מנהל הצוות שלי בתכתובת כדי שיהיה מודע לטון השיחה, ואענה ללקוח שאני מבין את הדחיפות ואשמח לתאם פגישה קצרה להגדרת לוחות זמנים ברורים להבא."
        ]
    },

    // קטגוריה 2: אינטליגנציה רגשית
    {
        id: "cat2-q1",
        category: 2,
        text: "קיבלת קידום שחבר קרוב שלך בצוות מאוד רצה ולא קיבל. הוא נראה מרוחק ועצוב. מה תעשה?",
        aiAnswers: [
            "אקח אותו לשיחה אישית, אגיד לו שאני מעריך אותו מאוד ומבין שזה מצב מורכב, ואשאל איך אני יכול לתמוך בו ולשמור על החברות שלנו.",
            "אתן לו קצת מרחב וזמן לעבד את הרגשות שלו, ולא אשוויץ בקידום שלי לידו. בהמשך אשתף אותו בהתלבטויות מקצועיות כדי להראות שאני עדיין מעריך את דעתו.",
            "אברך אותו על העבודה הקשה שעשה בעצמי, אשתף אותו שגם אני הייתי מתוסכל במצבים דומים בעבר, ואשמח לעשות איתו סימולציה או לעזור לו להתכונן להזדמנות הבאה."
        ]
    },
    {
        id: "cat2-q2",
        category: 2,
        text: "אתה מרגיש שאתה מוצף רגשית ועומד לקרוס מלחץ בעבודה, מה שגורם לך להיות קצר רוח לחברים לצוות. כיצד תתמודד?",
        aiAnswers: [
            "אקח הפסקה קצרה כדי להירגע, אשתף את המנהל שלי בעומס ואבקש סיוע בתיעדוף משימות, ואתנצל בפני החברים לצוות שהייתי חסר סבלנות כלפיהם.",
            "אזהה את נקודת הקיצון, אקצה זמנים קבועים לעבודה ממוקדת ללא הפרעות, ואשתשמש בטכניקות של נשימות וניהול מתחים במהלך יום העבודה.",
            "אעצור לפסק זמן של כמה דקות בכל פעם שאני מרגיש כעס עולה, ואשתמש במשפטי הרגעה עצמית כגון 'זה לא נגדי אישית' או 'עדיף להגיב ולא להגיב מהבטן'."
        ]
    },
    {
        id: "cat2-q3",
        category: 2,
        text: "עובד בצוות שלך עובר תקופה אישית קשה והתפוקה שלו ירדה משמעותית, דבר שמשפיע על כל הקבוצה. איך תפעל?",
        aiAnswers: [
            "אציע לו תמיכה ועזרה במשימות הדחופות שלו, ואעודד אותו לדבר עם מנהל הצוות כדי לבדוק אפשרות לקחת כמה ימי חופש או להפחית זמנית בעומס.",
            "אפנה אליו ברגישות, אשאל לשלומו ואבהיר לו שאנחנו כאן בשבילו כצוות, תוך חיפוש פתרון קבוצתי לחלוקת הנטל עד שיחזור לעצמו.",
            "אשוחח איתו באופן פרטי ודיסקרטי, אשאל אותו ברוך אם יש משהו שהוא מוכן לשתף ואציע לו גמישות בשעות העבודה במידת האפשר כדי להקל עליו את ההתמודדות."
        ]
    },
    {
        id: "cat2-q4",
        category: 2,
        text: "מנהל הפרויקט החדש שלך מתנהג בצורה ריכוזית מאוד (מיקרו-מנג'מנט) ובוחן כל צעד קטן שלך, מה שיוצר אצלך תסכול רב. מה תעשה?",
        aiAnswers: [
            "אבין שההתנהגות שלו נובעת כנראה מחוסר ביטחון או לחץ. אקפיד לעדכן אותו ביוזמתי בצורה שוטפת עוד לפני שהוא שואל, כדי לבנות אצלו אמון ולגרום לו לשחרר בהדרגה.",
            "אבקש פגישת תיאום ציפיות ואסביר לו בצורה נעימה ובונה שאני עובד בצורה הטובה ביותר כשיש לי מרחב פעולה, ואציע שנקבע נקודות בקרה קבועות במקום בדיקה יומיומית.",
            "אתמקד בביצוע משימות מושלם כדי להוכיח לו שאין לו סיבה לדאגה, ואנסה להסתגל לשיטה שלו זמנית תוך מתן דגש על שקיפות מלאה."
        ]
    },
    {
        id: "cat2-q5",
        category: 2,
        text: "אחד העובדים בצוות שלך הגיב בציניות פוגעת להצעה שהעלית בישיבה. הרגשת מושפל מול כולם. כיצד תנהג?",
        aiAnswers: [
            "לא אגיב בצורה אימפולסיבית בישיבה. אקשיב לדבריו, אשאל אותו בצורה עניינית 'תוכל להסביר מה לדעתך לא יעבוד בהצעה הזו?', ובכך אהפוך את הציניות לדיון מקצועי.",
            "אקח אותו לשיחה פרטית לאחר הישיבה, אשתף אותו בתחושה שהטון שלו פגע בי ואבקש שבעתיד יציג את הביקורת שלו בצורה מכבדת ומקצועית.",
            "אפגין ביטחון עצמי ואתעלם מהנימה שלו, תוך התמקדות בטיעונים הטכנולוגיים של ההצעה שלי ומענה ענייני לעובדות בלבד."
        ]
    },

    // קטגוריה 3: ניהול זמן
    {
        id: "cat3-q1",
        category: 3,
        text: "קיבלת שלוש משימות דחופות משלושה מנהלים שונים במקביל, ואין סיכוי שתספיק את כולן היום. מה תעשה?",
        aiAnswers: [
            "אפנה לשלושת המנהלים (רצוי בקבוצה משותפת או במייל) ואציג להם את תמונת המצב, ואבקש מהם לעזור לי לתעדף איזו משימה הכי קריטית להיום.",
            "אעריך בעצמי את האימפקט של כל משימה, אתחיל בזו שיש לה את ההשפעה הגדולה ביותר על החברה, ואעדכן מראש את המנהלים האחרים על צפי העיכוב והסיבות לכך.",
            "אערוך רשימה של המשימות עם זמני ביצוע משוערים, ואבקש מהמנהל הישיר שלי לתאם מול המנהלים האחרים מי מהפרויקטים מקבל קדימות על פי יעדי המחלקה."
        ]
    },
    {
        id: "cat3-q2",
        category: 3,
        text: "אתה מוצא את עצמך מבזבז שעות רבות ביום על ישיבות שרובן לא רלוונטיות לעבודה שלך. איך תשפר את המצב?",
        aiAnswers: [
            "אבקש ממארגני הפגישות לשלוח אג'נדה מראש, ואם הנושא לא נוגע אליי ישירות, אציע לשלוח עדכון בכתב במקום להשתתף או לבקש להצטרף רק לחלק הרלוונטי.",
            "אעשה סדר ביומן שלי ואגדיר שעות 'חסינות לפגישות' כדי להתמקד בעבודה מעשית, ואשוחח עם המנהל שלי על דרכים לייעל את זמן הישיבות של הצוות.",
            "אבקש לקבל סיכומי פגישות במקום להיות נוכח בהן, או שאבקש לצאת מהפגישה ברגע שהחלק שלי הסתיים, תוך הסבר הגיוני שאני רוצה לנצל את הזמן לקידום הפרויקט."
        ]
    },
    {
        id: "cat3-q3",
        category: 3,
        text: "משימה מסוימת מתארכת הרבה מעבר למתוכנן ואתה עומד לפספס דדליין קריטי של הלקוח. כיצד תנהג?",
        aiAnswers: [
            "אעדכן מיד את מנהל הפרויקט והלקוח על העיכוב הצפוי, אסביר את הסיבות לכך ואציע לוח זמנים חדש וריאלי יחד עם פתרון זמני לבעיה.",
            "אגייס עזרה מחברים לצוות אם הדבר מתאפשר, אתמקד אך ורק בדרישות החובה של המשימה כדי לשחרר גרסה ראשונית בזמן, ואשלים את השאר בהמשך.",
            "אפצל את המשימה הגדולה לתתי-משימות קטנות, אשלח ללקוח גרסת טיוטה ראשונית לעיון כדי להתחיל לקבל פידבק, ובמקביל אמשיך לעבוד על הגרסה המלאה."
        ]
    },
    {
        id: "cat3-q4",
        category: 3,
        text: "אתה מוצא את עצמך עובד שעות נוספות רבות מדי יום בגלל ריבוי משימות שוטפות והפרעות של קולגות. מה תעשה?",
        aiAnswers: [
            "אקבע שעות מסוימות ביום שבהן הסטטוס שלי בתוכנת המסרים הוא 'נא לא להפריע' ואסגור את תיבת הדוא'ל כדי לעבוד בריכוז מלא.",
            "אלמד להגיד בנימוס 'לא' או 'אשמח לעזור אבל רק בשעה ארבע' לבקשות קטנות של קולגות שאינן דחופות, כדי להגן על הלוז שלי.",
            "אנתח את שגרת היום שלי ואראה אילו משימות שואבות ממני הכי הרבה זמן, ואנסה לבצע להן אוטומציה או לבקש מהמנהל להעביר חלק מהן לאיש צוות אחר."
        ]
    },
    {
        id: "cat3-q5",
        category: 3,
        text: "התחלת פרויקט גדול אך אתה מרגיש תקוע ולא יודע מאיפה להתחיל, מה שגורם לך לדחיינות (Procrastination). כיצד תפעל?",
        aiAnswers: [
            "אשתמש בשיטת 'חמש הדקות' - אחליט שאני עובד על הפרויקט רק 5 דקות היום. לרוב, ברגע שמתחילים, הלחץ יורד והעבודה מתחילה לזרום מעצמה.",
            "אפרק את הפרויקט הענקי לאבני דרך קטנות מאוד ופשוטות לביצוע, ואתחיל בביצוע המשימה הקלה ביותר כדי לצבור תנופה וביטחון.",
            "אתאם פגישת סיעור מוחות קצרה עם חבר לצוות כדי להחליף רעיונות ולגבש תוכנית פעולה ראשונית שתעשה לי סדר בראש."
        ]
    },

    // קטגוריה 4: קבלת החלטות
    {
        id: "cat4-q1",
        category: 4,
        text: "עליך לבחור בין שני ספקים: אחד זול אך בעל מוניטין בינוני של עמידה בזמנים, והשני יקר ב-30% אך אמין מאוד. איך תחליט?",
        aiAnswers: [
            "אנתח את מידת הסיכון של הפרויקט - אם איחור באספקה יגרום לנזק כספי גדול יותר מההפרש במחיר, אבחר בספק היקר והאמין.",
            "אנסה לנהל משא ומתן עם הספק היקר להורדת מחיר, או עם הספק הזול לקבלת התחייבויות חוזיות עם קנסות על איחורים, כדי למקסם רווח מול ביטחון.",
            "אברר אם ניתן לחלק את ההזמנה - לקנות חלק קטן מהספק הזול לבדיקת היתכנות ואת הרוב מהספק היקר והבטוח, ובכך לגדר את הסיכונים הפיננסיים והתפעוליים."
        ]
    },
    {
        id: "cat4-q2",
        category: 4,
        text: "התגלתה תקלה חמורה במערכת רגע לפני השקה, ואין זמן להתייעץ עם המנהל שנמצא בטיסה. ההחלטה לעצור או להשיק היא שלך. מה תעשה?",
        aiAnswers: [
            "אעצור את ההשקה. עדיף לספוג עיכוב קל ומבוקר מאשר להשיק מוצר פגום שיפגע במוניטין של החברה ובאמון הלקוחות.",
            "אעשה הערכת סיכונים מהירה: אם התקלה משפיעה על פונקציונליות ליבה, אעצור את ההשקה. אם מדובר בבעיה משנית שניתן לתקן ביומיים הקרובים, אשיק עם התרעה מתאימה.",
            "אקיים התייעצות טלפונית דחופה עם עמית בכיר או מומחה טכנולוגי אחר בארגון כדי לקבל דעה נוספת, ואקבל החלטה מושכלת תוך תיעוד בכתב של הנימוקים לעצירת/אישור ההשקה."
        ]
    },
    {
        id: "cat4-q3",
        category: 4,
        text: "צוות הפיתוח שלך מציע שתי טכנולוגיות שונות לפרויקט החדש. חצי מהצוות תומך באחת והחצי השני בשנייה. כיצד תכריע?",
        aiAnswers: [
            "אגדיר רשימת קריטריונים אובייקטיביים (זמן פיתוח, עלות, תחזוקה, ביצועים) ואבקש מנציגי שתי הגישות לנקד כל טכנולוגיה, ובכך נגיע להחלטה מבוססת נתונים.",
            "אבצע פיילוט קטן (POC) של יומיים עם שתי הטכנולוגיות כדי לבחון אותן בפועל, ואקבל את ההחלטה הסופית בהסתמך על תוצאות הניסוי המעשי.",
            "אבקש משני הצדדים להכין רשימת חסרונות של הגישה של עצמם. זה מאלץ אותם לחשוב בצורה ביקורתית ואובייקטיבית ועוזר למצוא את האופציה המאוזנת ביותר."
        ]
    },
    {
        id: "cat4-q4",
        category: 4,
        text: "עליך לקבל החלטה מקצועית חשובה אך חסר לך מידע קריטי שהיה אמור להגיע ממחלקה אחרת שלא משתפת פעולה. מה תעשה?",
        aiAnswers: [
            "אפנה למנהל של אותה מחלקה בצורה מנומסת ואסביר לו את חשיבות המידע להחלטה שתשפיע על החברה כולה, ואציע לעזור להם לחלץ את המידע בקלות.",
            "אקבל החלטה מבוססת על המידע הקיים והנחות עבודה שמרניות, תוך ציון מפורש במסמך ההחלטה שהיא נשענת על הערכות עקב היעדר נתונים מסוימים.",
            "אערב את ההנהלה הבכירה כדי שיעזרו לקדם את העברת המידע בין המחלקות, תוך שמירה על שיח חיובי ולא מאשים."
        ]
    },
    {
        id: "cat4-q5",
        category: 4,
        text: "ההנהלה דורשת ממך לבחור עובד אחד מהצוות שלך לפיטורין עקב צמצומים. כולם עובדים טובים. איך תחליט?",
        aiAnswers: [
            "אבצע ניתוח מבוסס ביצועים וכישורים הנדרשים לעתיד הצוות. אבחר בעובד שהכישוריו פחות משיקים ליעדים האסטרטגיים העתידיים של החברה.",
            "אפנה להנהלה ואנסה להציע חלופות כמו הפחתת משרות חלקית לכולם או קיצוץ בתקציבי רווחה, כדי לנסות למנוע את הפיטורין לחלוטין.",
            "אקבע קריטריונים אובייקטיביים של ותק, רמת עצמאות והתאמה תרבותית לצוות, ואקבל את ההחלטה הקשה על סמך שקלול הנתונים היבש."
        ]
    },

    // קטגוריה 5: חשיבה יצירתית
    {
        id: "cat5-q1",
        category: 5,
        text: "תקציב השיווק שלכם קוצץ ב-80%, אך יעד המכירות נשאר זהה. איך תנסה להשיג את המטרה?",
        aiAnswers: [
            "אעבור לשיווק אורגני וגרילה - יצירת תוכן ויראלי ברשתות החברתיות, שיתופי פעולה עם משפיענים בתמורה למוצר, ופנייה ישירה לקהילות רלוונטיות.",
            "אמקד את כל המאמצים בלקוחות הקיימים שלנו באמצעות תוכנית חבר-מביא-חבר (Referrals) והצעת ערך משודרגת כדי להגדיל את המכירות מהם ללא עלות פרסום.",
            "ניצור תוכנית של אירוחים דיגיטליים (Webinars) חינמיים מקצועיים לקהל היעד שלנו, שם ניתן ערך אמיתי ונמשוך לקוחות פוטנציאליים דרך מקצועיות ולא דרך מודעות ממומנות."
        ]
    },
    {
        id: "cat5-q2",
        category: 5,
        text: "הלקוחות מתלוננים שהמוצר שלכם משעמם ודומה לכל המתחרים בשוק. כיצד תייצר בידול יצירתי?",
        aiAnswers: [
            "אערוך סדנת סיעור מוחות עם אנשים מחוץ לצוות הפיתוח (למשל תמיכת לקוחות או אנשי מכירות) כדי לזהות צרכים לא פתורים של לקוחות ולהוסיף פיצ'ר ייחודי.",
            "אשנה את חוויית המשתמש והמיתוג - למשל, הוספת אלמנטים של משחוק (Gamification) לתוך השימוש במוצר כדי להפוך אותו למהנה וממכר.",
            "נשנה את המיקוד שלנו לפלח שוק נישתי מאוד שהמתחרים הגדולים מתעלמים ממנו, ונתאים את התכונות והשפה של המוצר במיוחד עבורו."
        ]
    },
    {
        id: "cat5-q3",
        category: 5,
        text: "התבקשת להעביר הדרכה משעממת על נהלי בטיחות לעובדים חדשים. איך תהפוך אותה למרתקת וזכירה?",
        aiAnswers: [
            "אהפוך את ההדרכה למשחק אינטראקטיבי או חדר בריחה דיגיטלי שבו העובדים צריכים לפתור תעלומות בעזרת קריאת הנהלים.",
            "אשתמש בסיפורי מקרה אמיתיים ומשעשעים, אשלב חידונים נושאי פרסים בזמן אמת (כמו Kahoot), ואפחית למינימום את השימוש במצגות עמוסות טקסט.",
            "אחלק את העובדים לקבוצות קטנות ואבקש מהם לאתר בעצמם כשלי בטיחות במשרד באופן הומוריסטי, ואז להציג את זה בסרטונים קצרים לכלל החברה."
        ]
    },
    {
        id: "cat5-q4",
        category: 5,
        text: "הצוות שלך סובל מירידה במוטיבציה ועייפות מהעבודה השגרתית. איך תעורר בהם השראה ויצירתיות מחדש?",
        aiAnswers: [
            "אכריז על 'יום האקתון' חד-פעמי שבו העובדים יוכלו לעבוד על כל פרויקט או רעיון יצירתי שעולה על דעתם ומעניין אותם באופן אישי.",
            "אשנה את סביבת העבודה - אקיים את ישיבות הצוות הבאות בחוץ בבית קפה או בפארק, ואפתח כל ישיבה במשחק סיעור מוחות קצר ומשעשע.",
            "אביא מרצה אורח מעניין מתחום אחר לחלוטין שישתף בסיפור ההצלחה שלו, כדי לתת להם זווית ראייה חדשה ורעננה על החיים והעבודה."
        ]
    },
    {
        id: "cat5-q5",
        category: 5,
        text: "אתה צריך לפרסם משרה פנויה בצוות שלך אבל השוק רווי ואין כמעט פניות. איך תמשוך מועמדים בצורה יצירתית?",
        aiAnswers: [
            "אכתוב מודעת דרושים לא שגרתית והומוריסטית שמדגישה את האופי הייחודי של הצוות, את האתגרים האמיתיים ולא רק רשימת דרישות יבשה.",
            "אפיק סרטון קצר המציג 'יום בחיי' של חבר צוות נוכחי ואפרסם אותו ברשתות החברתיות כדי להציג את האווירה האמיתית במשרד.",
            "אציע פרס יצירתי לעובדי החברה עבור המלצה מוצלחת (כמו סוף שבוע זוגי) כדי להפוך את כולם למגייסי עובדים פעילים."
        ]
    },

    // קטגוריה 6: גמישות והסתגלות
    {
        id: "cat6-q1",
        category: 6,
        text: "לאחר חודשיים של עבודה מאומצת על פרויקט, מנהל החברה מחליט לבטל אותו לחלוטין ולעבור לפרויקט אחר. איך תגיב?",
        aiAnswers: [
            "אקבל את השינוי בהבנה שמטרות החברה השתנו. אעריך פגישת סיכום קצרה עם הצוות כדי לראות אילו קודים או תובנות מהפרויקט שבוטל ניתן למחזר לפרויקט החדש.",
            "אשחרר את התסכול באופן מקצועי, אתמקד בלמידה המהירה של הדרישות החדשות, ואפגין גישה חיובית כדי להוביל ולעודד את שאר חברי הצוות שחשים מאוכזבים.",
            "אדאג לשמור על קשר טוב עם מנהל החברה, אבקש הסבר על המניעים לשינוי כדי ללמוד על הראייה האסטרטגית של הארגון, ואוביל את הצוות שלי בביטחון למשימה החדשה."
        ]
    },
    {
        id: "cat6-q2",
        category: 6,
        text: "מערכת תוכנה חדשה נכנסת לשימוש בארגון ומחליפה את התוכנה הישנה שהכרת מצוין. חלק מהעובדים מתנגדים לה. מה תעשה?",
        aiAnswers: [
            "אהיה בין הראשונים ללמוד את המערכת החדשה לעומק, אזהה את היתרונות שלה, ואציע להעביר סדנאות עזרה קצרות לחברים לצוות שמתקשים להסתגל.",
            "אכין לעצמי 'דף קיצורים' ושיטות עבודה בתוכנה החדשה, ואשתף פעולה עם תהליך ההטמעה תוך מתן פידבק בונה למנהלים על תקלות שמתגלות בהתחלה.",
            "אעביר ביקורת בונה ומתועדת למחלקת ה-IT לגבי הבעיות במערכת החדשה, אך במקביל אעודד את חבריי לצוות לתת לזה צ'אנס אמיתי ולא להתייאש מהקשיים הראשוניים."
        ]
    },
    {
        id: "cat6-q3",
        category: 6,
        text: "החברה עוברת למודל עבודה היברידי שבו עליך לנהל את המשימות והצוות מרחוק, דבר שמעולם לא עשית. איך תתארגן?",
        aiAnswers: [
            "אגדיר שגרת פגישות קצרות וקבועות בבוקר (Daily), אטמיע כלי ניהול משימות לוח (כמו Trello או Jira) ואקפיד על ערוצי תקשורת פתוחים וברורים בכתב.",
            "אעבור הכשרה קצרה בנושא ניהול מרחוק, אקבע פגישות אישיות (1-on-1) שבועיות עם חברי הצוות כדי לבדוק את שלומם הרגשי ולא רק את התקדמות המשימות.",
            "אקבע נורמות עבודה ברורות לגבי זמינות ושעות מענה, אשתמש בכלים חזותיים לשיתוף פעולה בזמן אמת, ואדאג לבקש משוב תכוף מהצוות לגבי מה שעובד או לא עובד במתכונת החדשה."
        ]
    },
    {
        id: "cat6-q4",
        category: 6,
        text: "חבר צוות מרכזי עוזב בפתאומיות בעיצומו של פרויקט קריטי. כיצד תתארגן מחדש?",
        aiAnswers: [
            "אכנס ישיבת חירום קצרה עם הצוות, נמפה את כל המשימות הפתוחות של העובד שעזב, ונחלק אותן מחדש לפי העומס והכישורים של החברים שנותרו.",
            "אפנה למנהל שלי ואבקש לגייס עובד קבלן או עזרה זמנית מצוות אחר, ובמקביל אעדכן את הלקוח על האפשרות לדחייה קלה בלוחות הזמנים.",
            "אתמקד בייעול התהליכים - אבטל משימות פחות קריטיות של הצוות לתקופה הקרובה כדי לפנות זמן להתמקדות במשימות הפרויקט הדחופות."
        ]
    },
    {
        id: "cat6-q5",
        category: 6,
        text: "החברה שינתה את המבנה הארגוני שלה, וכעת אתה כפוף למנהל חדש בעל סגנון ניהול הפוך לחלוטין מזה שהתרגלת אליו. מה תעשה?",
        aiAnswers: [
            "אחקור את שיטת העבודה המועדפת עליו (מיילים מפורטים, פגישות קצרות, דוחות שבועיים) ואתאים את אופן הדיווח שלי כדי להתאים לציפיות שלו.",
            "אזמין אותו לשיחת היכרות קצרה שבה אציג את עצמי, את תחומי האחריות שלי ואת המטרות הנוכחיות של הצוות, ואשאל אותו כיצד הוא רואה את העבודה המשותפת.",
            "אשמור על ראש פתוח ולא אשווה אותו ללא הרף למנהל הקודם. אנסה ללמוד מהחוזקות שלו ולראות בזה הזדמנות להתפתחות אישית ומקצועיות."
        ]
    }
];

// ================= הגדרות קבועות ומחלקות =================
const CATEGORIES = {
    1: "תקשורת בין־אישית",
    2: "אינטליגנציה רגשית",
    3: "ניהול זמן",
    4: "קבלת החלטות",
    5: "חשיבה יצירתית",
    6: "גמישות והסתגלות"
};

const RANKS = [
    "סטודנט",
    "עובד זוטר",
    "עובד מנוסה",
    "ראש צוות",
    "מנהל מחלקה",
    "עבודת החלומות"
];

// ================= מצב המשחק (Game State) =================
let cardsDB = []; // המאגר הראשי של הקלפים (משתמש ב-localStorage)
let gameState = {
    players: [],
    activePlayerIndex: 0,
    stage: "ROLL", // ROLL, ANSWER, VOTE, RESULT
    activeCategory: null,
    activeCard: null,
    playerAnswer: "",
    aiAnswer: "",
    anonymousChoices: [], // array of 2 choices (player / ai)
    voters: [], // שחקנים מצביעים (השלושה האחרים)
    gamePool: [] // קלפים שנשארו למשחק הנוכחי (משתחזר בכל תחילת משחק)
};

// ================= טעינת אלמנטים מה-DOM =================
const screens = {
    start: document.getElementById("screen-start"),
    manage: document.getElementById("screen-manage"),
    game: document.getElementById("screen-game"),
    winner: document.getElementById("screen-winner")
};

// ================= אתחול האפליקציה =================
document.addEventListener("DOMContentLoaded", () => {
    initDatabase();
    setupEventListeners();
    loadSavedGameState();
});

// פונקציה לאתחול מאגר הקלפים ב-localStorage
function initDatabase() {
    const savedCardsStr = localStorage.getItem("career_race_cards");
    if (savedCardsStr) {
        let savedCards = JSON.parse(savedCardsStr);
        // Smart merge new default cards and updated answers
        DEFAULT_CARDS.forEach(defaultCard => {
            const existingIndex = savedCards.findIndex(c => c.id === defaultCard.id);
            if (existingIndex === -1) {
                savedCards.push(defaultCard);
            } else {
                // If default card has more AI answers, merge them
                if (!savedCards[existingIndex].aiAnswers || savedCards[existingIndex].aiAnswers.length < defaultCard.aiAnswers.length) {
                    savedCards[existingIndex].aiAnswers = defaultCard.aiAnswers;
                }
                // Always sync default card text in case of updates
                savedCards[existingIndex].text = defaultCard.text;
            }
        });
        cardsDB = savedCards;
        saveDatabase();
    } else {
        cardsDB = [...DEFAULT_CARDS];
        saveDatabase();
    }
}

// שמירת המאגר ל-localStorage
function saveDatabase() {
    localStorage.setItem("career_race_cards", JSON.stringify(cardsDB));
}

// שמירת מצב המשחק הנוכחי
function saveGameState() {
    localStorage.setItem("career_race_game_state", JSON.stringify(gameState));
}

// טעינת מצב משחק שנשמר
function loadSavedGameState() {
    const savedState = localStorage.getItem("career_race_game_state");
    if (savedState) {
        gameState = JSON.parse(savedState);
        // אם המשחק באמצע, נעבור למסך המשחק
        if (gameState.players && gameState.players.length > 0) {
            showScreen("game");
            renderScoreboard();
            restoreGameStageUI();
        }
    }
}

// החלפת מסכים
function showScreen(screenKey) {
    Object.keys(screens).forEach(key => {
        if (key === screenKey) {
            screens[key].classList.add("active");
        } else {
            screens[key].classList.remove("active");
        }
    });
}

// הצגת התראה קופצת מהירה (Toast)
function showToast(message) {
    const toast = document.getElementById("toast-notification");
    const toastMsg = document.getElementById("toast-message");
    toastMsg.textContent = message;
    toast.classList.remove("hidden");
    
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

// ================= מאזיני אירועים (Event Listeners) =================
function setupEventListeners() {
    // מסך פתיחה
    document.getElementById("btn-start-game").addEventListener("click", startNewGame);
    document.getElementById("btn-manage-cards").addEventListener("click", () => {
        showScreen("manage");
        resetCategoryEditor();
    });

    // מסך ניהול קלפים
    document.getElementById("btn-manage-back").addEventListener("click", () => {
        showScreen("start");
    });

    const categoryButtons = document.querySelectorAll(".btn-category");
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            const categoryNum = parseInt(btn.getAttribute("data-category"));
            btn.classList.add("active");
            openCategoryEditor(categoryNum);
        });
    });

    document.getElementById("btn-add-card").addEventListener("click", handleAddCard);
    document.getElementById("select-cards-dropdown").addEventListener("change", handleSelectCardFromDropdown);
    document.getElementById("btn-add-ai-answer").addEventListener("click", handleAddAIAnswer);

    // מסך המשחק
    document.getElementById("btn-quit-game").addEventListener("click", quitGame);
    document.getElementById("btn-roll-dice").addEventListener("click", rollDice);
    document.getElementById("btn-submit-answer").addEventListener("click", submitAnswer);
    document.getElementById("btn-see-results").addEventListener("click", showRoundResults);
    document.getElementById("btn-next-turn").addEventListener("click", proceedToNextTurn);
    
    // מודל עליית דרגה
    document.getElementById("btn-close-levelup").addEventListener("click", () => {
        document.getElementById("levelup-modal").classList.add("hidden");
    });

    // מודל החלפת קלפים
    document.getElementById("btn-open-trade").addEventListener("click", openTradeModal);
    document.getElementById("btn-close-trade").addEventListener("click", closeTradeModal);
    document.getElementById("btn-submit-trade").addEventListener("click", submitTrade);
    document.getElementById("trade-p1-select").addEventListener("change", handleTradePlayer1Change);
    document.getElementById("trade-p2-select").addEventListener("change", handleTradePlayer2Change);

    // מסך ניצחון
    document.getElementById("btn-restart-game").addEventListener("click", () => {
        showScreen("start");
        localStorage.removeItem("career_race_game_state");
        gameState.players = [];
    });
}

// ================= ניהול קלפים - לוגיקה =================
let selectedCategoryForEdit = null;
let selectedCardForEdit = null;

function resetCategoryEditor() {
    selectedCategoryForEdit = null;
    selectedCardForEdit = null;
    document.getElementById("category-editor").classList.add("hidden");
    document.querySelectorAll(".btn-category").forEach(b => b.classList.remove("active"));
}

function openCategoryEditor(categoryNum) {
    selectedCategoryForEdit = categoryNum;
    selectedCardForEdit = null;
    
    const editor = document.getElementById("category-editor");
    editor.classList.remove("hidden");
    
    document.getElementById("editor-title").textContent = `ניהול קטגוריה: ${CATEGORIES[categoryNum]}`;
    document.getElementById("new-card-text").value = "";
    document.getElementById("selected-card-details").classList.add("hidden");
    
    populateCardsDropdown(categoryNum);
}

// מילוי תיבת הבחירה של הקלפים בקטגוריה
function populateCardsDropdown(categoryNum) {
    const dropdown = document.getElementById("select-cards-dropdown");
    dropdown.innerHTML = '<option value="">-- בחר קלף --</option>';
    
    const filteredCards = cardsDB.filter(c => c.category === categoryNum);
    filteredCards.forEach(card => {
        const option = document.createElement("option");
        option.value = card.id;
        // קיצור הטקסט להצגה בתיבת הבחירה
        const shortText = card.text.length > 50 ? card.text.substring(0, 50) + "..." : card.text;
        option.textContent = shortText;
        dropdown.appendChild(option);
    });
}

// הוספת קלף חדש
function handleAddCard() {
    if (!selectedCategoryForEdit) return;
    
    const textarea = document.getElementById("new-card-text");
    const text = textarea.value.trim();
    
    if (!text) {
        showToast("אנא הזן את נוסח השאלה/הסיטואציה!");
        return;
    }
    
    const newCard = {
        id: "custom-" + Date.now(),
        category: selectedCategoryForEdit,
        text: text,
        aiAnswers: []
    };
    
    cardsDB.push(newCard);
    saveDatabase();
    textarea.value = "";
    populateCardsDropdown(selectedCategoryForEdit);
    showToast("הקלף נוסף בהצלחה!");
}

// בחירת קלף לעריכה והצגת התשובות שלו
function handleSelectCardFromDropdown() {
    const dropdown = document.getElementById("select-cards-dropdown");
    const cardId = dropdown.value;
    const detailsBox = document.getElementById("selected-card-details");
    
    if (!cardId) {
        detailsBox.classList.add("hidden");
        selectedCardForEdit = null;
        return;
    }
    
    selectedCardForEdit = cardsDB.find(c => c.id === cardId);
    if (!selectedCardForEdit) return;
    
    detailsBox.classList.remove("hidden");
    document.getElementById("preview-card-text").textContent = selectedCardForEdit.text;
    document.getElementById("new-ai-answer").value = "";
    
    renderAIAnswersList();
}

// הצגת רשימת תשובות ה-AI לקלף הנבחר
function renderAIAnswersList() {
    const ul = document.getElementById("preview-ai-answers");
    ul.innerHTML = "";
    
    if (!selectedCardForEdit.aiAnswers || selectedCardForEdit.aiAnswers.length === 0) {
        ul.innerHTML = '<li style="color: var(--text-muted);">אין עדיין תשובות AI שמורות לקלף זה.</li>';
        return;
    }
    
    selectedCardForEdit.aiAnswers.forEach((ans, index) => {
        const li = document.createElement("li");
        li.textContent = ans;
        ul.appendChild(li);
    });
}

// הוספת תשובת AI לקלף קיים
function handleAddAIAnswer() {
    if (!selectedCardForEdit) return;
    
    const textarea = document.getElementById("new-ai-answer");
    const text = textarea.value.trim();
    
    if (!text) {
        showToast("אנא הזן תשובת AI!");
        return;
    }
    
    if (!selectedCardForEdit.aiAnswers) {
        selectedCardForEdit.aiAnswers = [];
    }
    
    selectedCardForEdit.aiAnswers.push(text);
    
    // עדכון בבסיס הנתונים הראשי
    const cardIndex = cardsDB.findIndex(c => c.id === selectedCardForEdit.id);
    if (cardIndex !== -1) {
        cardsDB[cardIndex] = selectedCardForEdit;
        saveDatabase();
    }
    
    textarea.value = "";
    renderAIAnswersList();
    showToast("תשובת ה-AI נוספה בהצלחה!");
}

// ================= לוגיקת המשחק =================

// התחלת משחק חדש
function startNewGame() {
    // קריאת שמות השחקנים
    const p1 = document.getElementById("player1-name").value.trim() || "שחקן 1";
    const p2 = document.getElementById("player2-name").value.trim() || "שחקן 2";
    const p3 = document.getElementById("player3-name").value.trim() || "שחקן 3";
    const p4 = document.getElementById("player4-name").value.trim() || "שחקן 4";
    
    // אתחול השחקנים
    gameState.players = [
        { name: p1, level: 0, cards: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, setsCompleted: 0 },
        { name: p2, level: 0, cards: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, setsCompleted: 0 },
        { name: p3, level: 0, cards: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, setsCompleted: 0 },
        { name: p4, level: 0, cards: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, setsCompleted: 0 }
    ];
    
    gameState.activePlayerIndex = 0;
    gameState.stage = "ROLL";
    
    // שכפול מאגר הקלפים הפעיל למשחק הנוכחי
    gameState.gamePool = JSON.parse(JSON.stringify(cardsDB));
    
    saveGameState();
    showScreen("game");
    renderScoreboard();
    setupRollStageUI();
}

// סיום ויציאה מהמשחק
function quitGame() {
    if (confirm("האם אתה בטוח שברצונך לסיים את המשחק ולחזור למסך הראשי? כל ההתקדמות תימחק.")) {
        localStorage.removeItem("career_race_game_state");
        gameState.players = [];
        showScreen("start");
    }
}

// עדכון לוח התוצאות (Scoreboard)
function renderScoreboard() {
    const listContainer = document.getElementById("scoreboard-list");
    listContainer.innerHTML = "";
    
    gameState.players.forEach((player, index) => {
        const isActive = index === gameState.activePlayerIndex;
        const cardDiv = document.createElement("div");
        cardDiv.className = `player-score-card ${isActive ? 'active-turn' : ''}`;
        
        // יצירת חלקי הקלפים
        let slotsHtml = "";
        for (let catNum = 1; catNum <= 6; catNum++) {
            const count = player.cards[catNum] || 0;
            const hasCard = count > 0;
            slotsHtml += `
                <div class="card-slot ${hasCard ? 'has-card' : ''}" data-cat="${catNum}" title="${CATEGORIES[catNum]}">
                    <span>ק${catNum}</span>
                    ${count > 1 ? `<div class="card-count-badge">${count}</div>` : ''}
                </div>
            `;
        }
        
        cardDiv.innerHTML = `
            <div class="score-card-header">
                <span class="score-card-name">${player.name} ${isActive ? '⏳' : ''}</span>
                <span class="score-card-rank">${RANKS[player.level]}</span>
            </div>
            <div class="score-card-stats">
                <span>סטים שהושלמו: <strong>${player.setsCompleted}</strong></span>
                <span>מדד: ק1-ק6</span>
            </div>
            <div class="score-card-cards">
                ${slotsHtml}
            </div>
        `;
        
        listContainer.appendChild(cardDiv);
    });
}

// שחזור שלבי המשחק מטעינת דף
function restoreGameStageUI() {
    if (gameState.stage === "ROLL") {
        setupRollStageUI();
    } else if (gameState.stage === "ANSWER") {
        setupAnswerStageUI();
    } else if (gameState.stage === "VOTE") {
        setupVoteStageUI();
    } else if (gameState.stage === "RESULT") {
        setupResultStageUI();
    }
}

// ---------------- שלב 1: הטלת קובייה ----------------
function setupRollStageUI() {
    gameState.stage = "ROLL";
    saveGameState();
    
    // עדכון תצוגת שחקן פעיל
    updateActivePlayerDisplay();
    
    // מראה את שלב הקובייה
    switchStageUI("stage-roll");
    
    // איפוס ויזואלי של הקובייה
    const visualDice = document.getElementById("visual-dice");
    visualDice.textContent = "?";
    visualDice.style.backgroundColor = "#ffffff";
    visualDice.style.color = "var(--primary-color)";
    document.getElementById("btn-roll-dice").disabled = false;
}

function rollDice() {
    const btn = document.getElementById("btn-roll-dice");
    btn.disabled = true;
    
    const visualDice = document.getElementById("visual-dice");
    visualDice.classList.add("rolling");
    
    // הגרלת מספר (1 עד 6)
    const rolledNum = Math.floor(Math.random() * 6) + 1;
    
    // אפקט גלגול הקובייה למשך 800 מילישניות
    setTimeout(() => {
        visualDice.classList.remove("rolling");
        visualDice.textContent = rolledNum;
        
        // צבע הקובייה מותאם לצבע הקטגוריה
        const catColor = getComputedStyle(document.documentElement).getPropertyValue(`--cat-${rolledNum}-color`);
        visualDice.style.backgroundColor = catColor;
        visualDice.style.color = "#ffffff";
        
        setTimeout(() => {
            handleDiceResult(rolledNum);
        }, 600);
        
    }, 800);
}

function handleDiceResult(categoryNum) {
    gameState.activeCategory = categoryNum;
    
    // שליפת קלף רנדומלי מהקטגוריה במאגר הפעיל של המשחק (gamePool)
    const categoryCards = gameState.gamePool.filter(c => c.category === categoryNum);
    
    if (categoryCards.length === 0) {
        // אין קלפים זמינים בקטגוריה זו - המאגר שלה התרוקן
        alert(`אין יותר קלפים זמינים בקטגוריית "${CATEGORIES[categoryNum]}". התור עובר לשחקן הבא.`);
        moveToNextPlayer();
        return;
    }
    
    // הגרלת קלף מתוך הזמינים
    const randomIndex = Math.floor(Math.random() * categoryCards.length);
    gameState.activeCard = categoryCards[randomIndex];
    
    // מעבר לשלב המענה
    setupAnswerStageUI();
}

// ---------------- שלב 2: כתיבת תשובה ----------------
function setupAnswerStageUI() {
    gameState.stage = "ANSWER";
    saveGameState();
    
    updateActivePlayerDisplay();
    switchStageUI("stage-answer");
    
    // עדכון פרטי השאלה
    const catBadge = document.getElementById("answer-cat-badge");
    catBadge.textContent = `קטגוריה: ${CATEGORIES[gameState.activeCategory]}`;
    
    // התאמת צבע התג לקטגוריה
    const catColor = getComputedStyle(document.documentElement).getPropertyValue(`--cat-${gameState.activeCategory}-color`);
    catBadge.style.backgroundColor = catColor;
    
    document.getElementById("game-situation-text").textContent = gameState.activeCard.text;
    document.getElementById("player-answer-input").value = "";
}

function submitAnswer() {
    const input = document.getElementById("player-answer-input");
    const text = input.value.trim();
    
    if (!text) {
        showToast("אנא הקלד תשובה לפני השליחה!");
        return;
    }
    
    gameState.playerAnswer = text;
    
    // בחירה רנדומלית של תשובת AI מתוך רשימת התשובות של הקלף
    const aiAnswers = gameState.activeCard.aiAnswers;
    if (aiAnswers && aiAnswers.length > 0) {
        const randomIndex = Math.floor(Math.random() * aiAnswers.length);
        gameState.aiAnswer = aiAnswers[randomIndex];
    } else {
        // גיבוי למקרה שאין תשובת AI שמורה
        gameState.aiAnswer = "אשתדל לפעול במקצועיות, להקשיב לצרכים של האנשים סביבי ולמצוא פתרון מאוזן שיועיל לצוות ולמטרות החברה.";
    }
    
    // ערבוב רנדומלי של התשובות
    const choices = [
        { type: "player", text: gameState.playerAnswer },
        { type: "ai", text: gameState.aiAnswer }
    ];
    
    // ערבוב המערך
    if (Math.random() > 0.5) {
        choices.reverse();
    }
    
    gameState.anonymousChoices = choices;
    
    // הגדרת המצביעים (3 השחקנים שאינם השחקן הפעיל)
    gameState.voters = gameState.players
        .map((p, idx) => ({ id: idx, name: p.name }))
        .filter(p => p.id !== gameState.activePlayerIndex)
        .map(p => ({
            id: p.id,
            name: p.name,
            voted: false,
            choice: null // 'A' or 'B'
        }));
        
    setupVoteStageUI();
}

// ---------------- שלב 3: הצבעה ----------------
function setupVoteStageUI() {
    gameState.stage = "VOTE";
    saveGameState();
    
    updateActivePlayerDisplay();
    switchStageUI("stage-vote");
    
    // כתיבת הטקסטים
    document.getElementById("vote-situation-text").textContent = gameState.activeCard.text;
    document.getElementById("option-a-text").textContent = gameState.anonymousChoices[0].text;
    document.getElementById("option-b-text").textContent = gameState.anonymousChoices[1].text;
    
    // רינדור רשימת המצביעים
    renderVotersList();
    
    // הסתרת כפתור התוצאות בתחילה
    document.getElementById("btn-see-results").classList.add("hidden");
}

function renderVotersList() {
    const list = document.getElementById("voters-list");
    list.innerHTML = "";
    
    gameState.voters.forEach((voter, index) => {
        const row = document.createElement("div");
        row.className = "voter-row";
        
        const nameSpan = document.createElement("span");
        nameSpan.className = "voter-name";
        nameSpan.textContent = voter.name;
        row.appendChild(nameSpan);
        
        const actionArea = document.createElement("div");
        actionArea.className = "voter-choices";
        
        if (voter.voted) {
            actionArea.innerHTML = `<span class="voter-voted-badge">✓ ההצבעה התקבלה</span>`;
        } else {
            const btnA = document.createElement("button");
            btnA.className = "btn btn-secondary btn-vote";
            btnA.textContent = "תשובה א'";
            btnA.addEventListener("click", () => handleVoterAction(voter.id, "A"));
            
            const btnB = document.createElement("button");
            btnB.className = "btn btn-secondary btn-vote";
            btnB.textContent = "תשובה ב'";
            btnB.addEventListener("click", () => handleVoterAction(voter.id, "B"));
            
            actionArea.appendChild(btnA);
            actionArea.appendChild(btnB);
        }
        
        row.appendChild(actionArea);
        list.appendChild(row);
    });
}

function handleVoterAction(voterId, choice) {
    const voter = gameState.voters.find(v => v.id === voterId);
    if (voter) {
        voter.voted = true;
        voter.choice = choice;
        saveGameState();
        renderVotersList();
        
        // בדיקה האם כולם הצביעו
        const allVoted = gameState.voters.every(v => v.voted);
        if (allVoted) {
            document.getElementById("btn-see-results").classList.remove("hidden");
        }
    }
}

// ---------------- שלב 4: תוצאות ----------------
function showRoundResults() {
    setupResultStageUI();
}

function setupResultStageUI() {
    gameState.stage = "RESULT";
    
    // חישוב הקולות
    let votesForA = 0;
    let votesForB = 0;
    
    gameState.voters.forEach(v => {
        if (v.choice === "A") votesForA++;
        if (v.choice === "B") votesForB++;
    });
    
    // זיהוי איזו אפשרות היא של מי
    const choiceA = gameState.anonymousChoices[0];
    const choiceB = gameState.anonymousChoices[1];
    
    const playerChoiceLetter = choiceA.type === "player" ? "A" : "B";
    const aiChoiceLetter = choiceA.type === "ai" ? "A" : "B";
    
    const playerVotesCount = playerChoiceLetter === "A" ? votesForA : votesForB;
    const aiVotesCount = aiChoiceLetter === "A" ? votesForA : votesForB;
    
    // כתיבת הטקסטים במסך התוצאות
    document.getElementById("result-player-text").textContent = gameState.playerAnswer;
    document.getElementById("result-player-votes").textContent = `קולות: ${playerVotesCount}`;
    
    document.getElementById("result-ai-text").textContent = gameState.aiAnswer;
    document.getElementById("result-ai-votes").textContent = `קולות: ${aiVotesCount}`;
    
    const outcomeBox = document.getElementById("result-outcome-box");
    const activePlayer = gameState.players[gameState.activePlayerIndex];
    let wonCard = false;
    
    if (playerVotesCount > aiVotesCount) {
        // השחקן זכה!
        wonCard = true;
        outcomeBox.className = "outcome-box outcome-win";
        outcomeBox.innerHTML = `🎉 כל הכבוד, התשובה שלך ניצחה! זכית בקלף בקטגוריית "<strong>${CATEGORIES[gameState.activeCategory]}</strong>".`;
        
        // הוספת הקלף לשחקן
        activePlayer.cards[gameState.activeCategory] = (activePlayer.cards[gameState.activeCategory] || 0) + 1;
        
        // הסרת הקלף מהקופה של המשחק הנוכחי כדי שלא יופיע שוב
        const cardIndex = gameState.gamePool.findIndex(c => c.id === gameState.activeCard.id);
        if (cardIndex !== -1) {
            gameState.gamePool.splice(cardIndex, 1);
        }
        
    } else if (aiVotesCount > playerVotesCount) {
        // ה-AI ניצח
        outcomeBox.className = "outcome-box outcome-lose";
        outcomeBox.innerHTML = `🤖 תשובת ה-AI קיבלה יותר קולות. לא קיבלת את הקלף הפעם. הקלף חוזר לקופה.`;
    } else {
        // תיקו
        outcomeBox.className = "outcome-box outcome-lose";
        outcomeBox.innerHTML = `⚖️ נוצר תיקו בהצבעות. הקלף חוזר לקופה.`;
    }
    
    saveGameState();
    renderScoreboard();
    
    switchStageUI("stage-result");
    
    // בדיקת עליית דרגה
    if (wonCard) {
        checkAndHandleLevelUp(activePlayer);
    }
}

// בדיקת השלמת סט ועליית דרגה
function checkAndHandleLevelUp(player) {
    // בדיקה האם יש לפחות קלף 1 מכל 6 הקטגוריות
    let hasFullSet = true;
    for (let catNum = 1; catNum <= 6; catNum++) {
        if (!player.cards[catNum] || player.cards[catNum] < 1) {
            hasFullSet = false;
            break;
        }
    }
    
    if (hasFullSet) {
        // הורדת קלף אחד מכל קטגוריה
        for (let catNum = 1; catNum <= 6; catNum++) {
            player.cards[catNum]--;
        }
        
        // עליית דרגה
        player.level++;
        player.setsCompleted++;
        
        saveGameState();
        renderScoreboard();
        
        // בדיקת ניצחון
        if (player.level >= RANKS.length - 1) {
            // השחקן הגיע לדרגה האחרונה - ניצחון!
            setTimeout(() => {
                showWinnerScreen(player.name);
            }, 1000);
        } else {
            // הצגת הודעה מרהיבה על עליית דרגה
            setTimeout(() => {
                const modal = document.getElementById("levelup-modal");
                const msg = document.getElementById("levelup-message");
                msg.innerHTML = `השחקן <strong>${player.name}</strong> השלים סט של 6 מיומנויות ועלה לדרגת: <br><strong class="rank-badge" style="margin-top:10px; display:inline-block;">${RANKS[player.level]}</strong>`;
                modal.classList.remove("hidden");
            }, 500);
        }
    }
}

// ---------------- מעבר תור ----------------
function proceedToNextTurn() {
    moveToNextPlayer();
}

function moveToNextPlayer() {
    // מעבר לשחקן הבא (מעגלי בין 0 ל-3)
    gameState.activePlayerIndex = (gameState.activePlayerIndex + 1) % 4;
    setupRollStageUI();
    renderScoreboard();
}

// ---------------- מסך ניצחון ----------------
function showWinnerScreen(winnerName) {
    // מחיקת מצב המשחק השמור כי הוא הסתיים
    localStorage.removeItem("career_race_game_state");
    
    document.getElementById("winner-name").textContent = winnerName;
    showScreen("winner");
}

// ================= פונקציות עזר וממשק =================

function updateActivePlayerDisplay() {
    const activePlayer = gameState.players[gameState.activePlayerIndex];
    if (activePlayer) {
        document.getElementById("active-player-name").textContent = activePlayer.name;
        document.getElementById("active-player-rank").textContent = RANKS[activePlayer.level];
    }
}

// החלפת שלבי המשחק הפעילים ב-HTML
function switchStageUI(stageId) {
    const stages = document.querySelectorAll(".game-stage");
    stages.forEach(stage => {
        if (stage.id === stageId) {
            stage.classList.add("active");
        } else {
            stage.classList.remove("active");
        }
    });
}

// ================= לוגיקת החלפת קלפים =================
let tradeSelections = {
    p1Index: 0,
    p2Index: 1,
    p1Cat: null,
    p2Cat: null
};

function openTradeModal() {
    if (!gameState.players || gameState.players.length === 0) {
        showToast("אין שחקנים פעילים כרגע!");
        return;
    }
    
    // אכלוס דרופדאון שחקן א'
    const p1Select = document.getElementById("trade-p1-select");
    p1Select.innerHTML = "";
    gameState.players.forEach((p, idx) => {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.textContent = p.name;
        p1Select.appendChild(opt);
    });
    
    // אכלוס דרופדאון שחקן ב'
    const p2Select = document.getElementById("trade-p2-select");
    p2Select.innerHTML = "";
    gameState.players.forEach((p, idx) => {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.textContent = p.name;
        p2Select.appendChild(opt);
    });
    
    // הגדרת בחירות ברירת מחדל
    tradeSelections.p1Index = 0;
    tradeSelections.p2Index = 1;
    p1Select.value = 0;
    p2Select.value = 1;
    
    tradeSelections.p1Cat = null;
    tradeSelections.p2Cat = null;
    
    // רענון כפתורי הקלפים עבור שני השחקנים
    renderTradeCards(1, 0);
    renderTradeCards(2, 1);
    
    document.getElementById("trade-modal").classList.remove("hidden");
}

function closeTradeModal() {
    document.getElementById("trade-modal").classList.add("hidden");
}

function handleTradePlayer1Change(e) {
    const idx = parseInt(e.target.value);
    tradeSelections.p1Index = idx;
    tradeSelections.p1Cat = null;
    renderTradeCards(1, idx);
}

function handleTradePlayer2Change(e) {
    const idx = parseInt(e.target.value);
    tradeSelections.p2Index = idx;
    tradeSelections.p2Cat = null;
    renderTradeCards(2, idx);
}

function renderTradeCards(playerNum, playerIndex) {
    const container = document.getElementById(`trade-p${playerNum}-cards`);
    container.innerHTML = "";
    
    const player = gameState.players[playerIndex];
    if (!player) return;
    
    let hasAnyCard = false;
    for (let catNum = 1; catNum <= 6; catNum++) {
        const count = player.cards[catNum] || 0;
        if (count > 0) {
            hasAnyCard = true;
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "trade-card-btn";
            btn.setAttribute("data-cat", catNum);
            btn.innerHTML = `<span>ק${catNum}</span> <small>(${count})</small>`;
            
            // סימון בחירה נוכחית
            const currentSelected = playerNum === 1 ? tradeSelections.p1Cat : tradeSelections.p2Cat;
            if (currentSelected === catNum) {
                btn.classList.add("selected");
            }
            
            btn.addEventListener("click", () => {
                // ביטול בחירה קודמת
                container.querySelectorAll(".trade-card-btn").forEach(b => b.classList.remove("selected"));
                
                if (playerNum === 1) {
                    tradeSelections.p1Cat = catNum;
                } else {
                    tradeSelections.p2Cat = catNum;
                }
                
                btn.classList.add("selected");
            });
            
            container.appendChild(btn);
        }
    }
    
    if (!hasAnyCard) {
        container.innerHTML = `<span style="color: var(--danger-color); font-size: 0.85rem;">אין קלפים להחלפה</span>`;
    }
}

function submitTrade() {
    const p1Idx = tradeSelections.p1Index;
    const p2Idx = tradeSelections.p2Index;
    const p1Cat = tradeSelections.p1Cat;
    const p2Cat = tradeSelections.p2Cat;
    
    if (p1Idx === p2Idx) {
        alert("לא ניתן לבצע החלפה של שחקן עם עצמו!");
        return;
    }
    
    if (!p1Cat || !p2Cat) {
        alert("על שני השחקנים לבחור קלף להחלפה!");
        return;
    }
    
    const p1 = gameState.players[p1Idx];
    const p2 = gameState.players[p2Idx];
    
    // בדיקה נוספת שלמלאי יש את הקלפים
    if ((p1.cards[p1Cat] || 0) <= 0 || (p2.cards[p2Cat] || 0) <= 0) {
        alert("אחד השחקנים איבד את הקלף שנבחר להחלפה!");
        return;
    }
    
    // ביצוע ההחלפה
    p1.cards[p1Cat]--;
    p1.cards[p2Cat] = (p1.cards[p2Cat] || 0) + 1;
    
    p2.cards[p2Cat]--;
    p2.cards[p1Cat] = (p2.cards[p1Cat] || 0) + 1;
    
    // הודעת אישור
    showToast(`ההחלפה בוצעה בהצלחה! ${p1.name} קיבל ק${p2Cat}, ו-${p2.name} קיבל ק${p1Cat}.`);
    
    // בדיקת עליית דרגה לשני השחקנים (כי החלפה עשויה להשלים סט לכל אחד מהם!)
    checkAndHandleLevelUp(p1);
    checkAndHandleLevelUp(p2);
    
    // שמירת מצב ועדכון לוח התוצאות
    saveGameState();
    renderScoreboard();
    
    // סגירת המודל
    closeTradeModal();
}
