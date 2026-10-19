/* ============================================================
   DENOVA DENTAL CLINIC — main.js
   Bilingual (EN/AR) + RTL, reviews, hours, nav, reveal-on-scroll
   ============================================================ */

/* ------------------------------------------------------------
   1. Translations
------------------------------------------------------------ */
const i18n = {
  en: {
    "topbar.hours": "Open Daily 3 PM – 10 PM · Friday Closed",
    "brand.sub": "DENTAL CLINIC",
    "brand.tagline": "Imagine Your Smile",
    "brand.full": "Denova Dental Clinic",
    "nav.home": "Home",
    "nav.why": "Why Denova",
    "nav.services": "Services",
    "nav.offers": "Offers",
    "nav.doctor": "Our Doctor",
    "nav.reviews": "Reviews",
    "nav.location": "Location",
    "hero.eyebrow": "Dental Clinic · New Cairo",
    "hero.title1": "Imagine",
    "hero.title2": "Your Smile",
    "hero.lead": "A different kind of dental experience — where comfort, digital precision and a natural-first philosophy come together under one roof.",
    "hero.badge": "Elegantry Mall · New Cairo",
    "stats.rating": "Google Rating",
    "stats.reviews": "Happy Reviews",
    "stats.experience": "Years of Experience",
    "cta.book": "Book Now",
    "cta.whatsapp": "Book on WhatsApp",
    "cta.call": "Call Us",
    "cta.consult": "Book Your Consultation",
    "cta.directions": "Get Directions",
    "cta.follow": "Follow Us",
    "cta.finalTitle": "Your Journey Starts <em class='gold-text'>Here</em>",
    "cta.finalSub": "Your first consultation is built entirely around you. We take the time to understand your concerns and create a treatment plan tailored to your goals.",
    "why.eyebrow": "WHY DENOVA",
    "why.title": "A Different Kind of <em class='gold-text'>Dental Experience</em>",
    "why.sub": "Every decision we make is guided by three simple principles: comfort, precision, and preservation.",
    "why.c1.title": "Zero Pain Protocol",
    "why.c1.text": "Your comfort comes first. Modern anaesthesia techniques and proactive discomfort prevention make dental care feel calmer, gentler, and more reassuring.",
    "why.c2.title": "Digital Precision",
    "why.c2.text": "Advanced digital planning tools create predictable treatment journeys so you can visualize outcomes and make informed decisions with confidence.",
    "why.c3.title": "Natural First",
    "why.c3.text": "Our minimally invasive philosophy preserves healthy tooth structure, delivering beautiful results while supporting long-term oral health.",
    "services.eyebrow": "SERVICES",
    "services.title": "Everything Your Smile Needs. <em class='gold-text'>Under One Roof</em>",
    "services.sub": "From preventive care to complete smile transformations, every treatment is designed around comfort, precision, and lasting results.",
    "services.s1.title": "Dental Implants",
    "services.s1.text": "Replace missing teeth with stable, natural-looking restorations.",
    "services.s2.title": "Veneers & Cosmetic Dentistry",
    "services.s2.text": "Refine shape, color, and symmetry for a naturally beautiful smile.",
    "services.s3.title": "Orthodontics",
    "services.s3.text": "Modern alignment solutions for healthier smiles.",
    "services.s4.title": "Root Canal Treatment",
    "services.s4.text": "Advanced endodontics focused on preserving natural teeth.",
    "services.s5.title": "Check-ups & Prevention",
    "services.s5.text": "Comprehensive diagnosis, scaling and polishing for lasting oral health.",
    "services.s6.title": "Teeth Whitening",
    "services.s6.text": "Professional whitening sessions for a brighter, confident smile.",
    "services.s7.title": "Kids Dentistry",
    "services.s7.text": "Gentle, friendly care that makes young patients feel safe.",
    "services.s8.title": "Full Smile Makeover",
    "services.s8.text": "Digital smile design tailored to your face and your goals.",
    "offers.eyebrow": "LIMITED-TIME OFFERS",
    "offers.title": "Explore Our <em class='gold-text'>Smile Offers</em>",
    "offers.p1.tag": "Package 1",
    "offers.p1.title": "Smile Refresh",
    "offers.p1.f1": "Comprehensive Dental Diagnosis",
    "offers.p1.f2": "Professional Scaling",
    "offers.p1.f3": "Polishing",
    "offers.p1.f4": "Teeth Whitening Session",
    "offers.p1.old": "EGP 5,000",
    "offers.p1.new": "EGP 4,000",
    "offers.p2.tag": "Package 2",
    "offers.p2.title": "Veneers",
    "offers.p2.f1": "Custom-Fit Porcelain Veneers",
    "offers.p2.f2": "Instant Smile Transformation",
    "offers.p2.old": "EGP 8,000",
    "offers.p2.new": "EGP 5,500",
    "offers.p3.tag": "Package 3",
    "offers.p3.title": "Dental Implants",
    "offers.p3.f1": "Swiss Implant:",
    "offers.p3.f2": "Straumann Implant:",
    "doctor.eyebrow": "MEET OUR FOUNDER",
    "doctor.title": "Dr. Alyaa <em class='gold-text'>Abdelhameed</em>",
    "doctor.badge": "Founder & Clinical Director",
    "doctor.quote": "\u201CEvery patient deserves honest guidance, gentle care, and treatment that serves their long-term wellbeing — not just today's concern.\u201D",
    "doctor.bio": "With over 8 years of clinical experience, Dr. Alyaa combines advanced digital dentistry with a deeply patient-centered approach. Her philosophy is simple: listen carefully, explain honestly, and deliver treatment with precision, comfort, and respect for each patient's unique goals.",
    "doctor.t1": "8+ Years Experience",
    "doctor.t2": "Digital Smile Design",
    "doctor.t3": "Cosmetic Dentistry",
    "doctor.t4": "Patient-Centered Care",
    "reviews.eyebrow": "GOOGLE REVIEWS",
    "reviews.title": "Loved by <em class='gold-text'>Our Patients</em>",
    "reviews.count": "Based on 26 Google reviews",
    "reviews.write": "Write a Review",
    "reviews.google": "Google",
    "location.eyebrow": "VISIT US",
    "location.title": "Find Us in <em class='gold-text'>New Cairo</em>",
    "location.address": "Address",
    "location.addressValue": "Elegantry Mall, 3 Omar ibn Abd al-Aziz, New Cairo 1, Cairo Governorate 11835",
    "location.phone": "Phone",
    "location.website": "Website",
    "location.hours": "Opening Hours",
    "hours.closed": "Closed",
    "hours.today": "Today",
    "footer.about": "A leading dental clinic in New Cairo, delivering precision and calm care.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
    "footer.addressShort": "Elegantry Mall, New Cairo",
    "footer.rights": "All rights reserved.",
  },

  ar: {
    "topbar.hours": "مفتوح يوميًا من 3م حتى 10م · الجمعة مغلق",
    "brand.sub": "عيادة أسنان",
    "brand.tagline": "تخيّل ابتسامتك",
    "brand.full": "عيادة دينوفا لطب الأسنان",
    "nav.home": "الرئيسية",
    "nav.why": "لماذا دينوفا",
    "nav.services": "الخدمات",
    "nav.offers": "العروض",
    "nav.doctor": "طبيبنا",
    "nav.reviews": "آراء المرضى",
    "nav.location": "الموقع",
    "hero.eyebrow": "عيادة أسنان · القاهرة الجديدة",
    "hero.title1": "تخيّل",
    "hero.title2": "ابتسامتك",
    "hero.lead": "تجربة طب أسنان مختلفة — حيث يلتقي الراحة والدقة الرقمية وفلسفة الحفاظ على أسنانك الطبيعية تحت سقف واحد.",
    "hero.badge": "إيغيلانتري مول · القاهرة الجديدة",
    "stats.rating": "تقييم جوجل",
    "stats.reviews": "تقييم إيجابي",
    "stats.experience": "سنوات خبرة",
    "cta.book": "احجز الآن",
    "cta.whatsapp": "احجز عبر واتساب",
    "cta.call": "اتصل بنا",
    "cta.consult": "احجز استشارتك",
    "cta.directions": "الاتجاهات",
    "cta.follow": "تابعنا",
    "cta.finalTitle": "رحلتك تبدأ <em class='gold-text'>من هنا</em>",
    "cta.finalSub": "استشارتك الأولى مبنية بالكامل حولك. نخصص الوقت لفهم مخاوفك وإنشاء خطة علاج تناسب أهدافك.",
    "why.eyebrow": "لماذا دينوفا",
    "why.title": "نوعٌ مختلف من <em class='gold-text'>تجربة الأسنان</em>",
    "why.sub": "كل قرار نتخذه يسترشد بثلاثة مبادئ بسيطة: الراحة، الدقة، والحفاظ على السن.",
    "why.c1.title": "بروتوكول انعدام الألم",
    "why.c1.text": "راحتك أولاً. تقنيات تخديث حديثة ونهج استباقي للوقاية من الانزعاج يجعلان علاج الأسنان أكثر هدوءًا ولطفًا واطمئنانًا.",
    "why.c2.title": "دقة رقمية",
    "why.c2.text": "أدوات تخطيط رقمية متقدمة تخلق رحلات علاج يمكن التنبؤ بها، لتتخيل النتائج وتتخذ قراراتك بثقة.",
    "why.c3.title": "الطبيعي أولاً",
    "why.c3.text": "فلسفتنا قليلة التدخل تحافظ على بنية السن السليمة، لتقديم نتائج جميلة مع دعم صحة الفم على المدى الطويل.",
    "services.eyebrow": "خدماتنا",
    "services.title": "كل ما تحتاجه ابتسامتك. <em class='gold-text'>تحت سقف واحد</em>",
    "services.sub": "من الرعاية الوقائية إلى تحويلات الابتسامة الكاملة، كل علاج مصمم حول الراحة والدقة والنتائج الدائمة.",
    "services.s1.title": "زراعة الأسنان",
    "services.s1.text": "استبدل الأسنان المفقودة بتركيبات ثابتة ذات مظهر طبيعي.",
    "services.s2.title": "الفينير وتجميل الأسنان",
    "services.s2.text": "حسّن الشكل واللون والتناسق لابتسامة جميلة وطبيعية.",
    "services.s3.title": "تقويم الأسنان",
    "services.s3.text": "حلول تقويم حديثة لابتسامات أكثر صحة.",
    "services.s4.title": "علاج الجذور",
    "services.s4.text": "علاج قنوات متقدم يركز على الحفاظ على الأسنان الطبيعية.",
    "services.s5.title": "الفحص والوقاية",
    "services.s5.text": "تشخيص شامل وتنظيف وتلميع لصحة فم دائمة.",
    "services.s6.title": "تبييض الأسنان",
    "services.s6.text": "جلسات تبييض احترافية لابتسامة أكثر إشراقًا وثقة.",
    "services.s7.title": "أسنان الأطفال",
    "services.s7.text": "رعاية لطيفة وودودة تجعل صغار السن يشعرون بالأمان.",
    "services.s8.title": "تحويل الابتسامة الكامل",
    "services.s8.text": "تصميم ابتسامة رقمي يتناسب مع ملامحك وأهدافك.",
    "offers.eyebrow": "عروض لفترة محدودة",
    "offers.title": "استكشف <em class='gold-text'>عروض الابتسامة</em>",
    "offers.p1.tag": "الباقة 1",
    "offers.p1.title": "إنعاش الابتسامة",
    "offers.p1.f1": "تشخيص أسنان شامل",
    "offers.p1.f2": "تنظيف احترافي",
    "offers.p1.f3": "تلميع",
    "offers.p1.f4": "جلسة تبييض أسنان",
    "offers.p1.old": "5,000 جنيه",
    "offers.p1.new": "4,000 جنيه",
    "offers.p2.tag": "الباقة 2",
    "offers.p2.title": "الفينير",
    "offers.p2.f1": "فينير خزفي مصمم خصيصًا لك",
    "offers.p2.f2": "تحويل فوري للابتسامة",
    "offers.p2.old": "8,000 جنيه",
    "offers.p2.new": "5,500 جنيه",
    "offers.p3.tag": "الباقة 3",
    "offers.p3.title": "زراعة الأسنان",
    "offers.p3.f1": "زراعة سويس:",
    "offers.p3.f2": "زراعة شتراومان:",
    "doctor.eyebrow": "تعرّف على مؤسِّستنا",
    "doctor.title": "د. إلياء <em class='gold-text'>عبدالحميد</em>",
    "doctor.badge": "المؤسِّسة والمديرة الطبية",
    "doctor.quote": "\u201Cكل مريض يستحق إرشادًا صادقًا ورعاية لطيفة وعلاجًا يخدم صحته على المدى الطويل — وليس مجرد قلق اليوم.\u201D",
    "doctor.bio": "مع خبرة سريرية تتخطى 8 سنوات، تجمع د. إلياء بين طب الأسنان الرقمي المتقدم ونهجٍ يضع المريض في قلب الرعاية. فلسفتها بسيطة: استمعي بعناية، واشرحي بصدق، وقدّمي العلاج بدقة وراحة واحترامٍ لأهداف كل مريض.",
    "doctor.t1": "أكثر من 8 سنوات خبرة",
    "doctor.t2": "تصميم الابتسامة الرقمي",
    "doctor.t3": "تجميل الأسنان",
    "doctor.t4": "رعاية تتمحور حول المريض",
    "reviews.eyebrow": "تقييمات جوجل",
    "reviews.title": "محبوبون من <em class='gold-text'>مرضينا</em>",
    "reviews.count": "بناءً على 26 تقييم على جوجل",
    "reviews.write": "اكتب تقييمًا",
    "reviews.google": "جوجل",
    "location.eyebrow": "زُرنا",
    "location.title": "جدنا في <em class='gold-text'>القاهرة الجديدة</em>",
    "location.address": "العنوان",
    "location.addressValue": "إيغيلانتري مول، 3 عمر بن عبد العزيز، القاهرة الجديدة 1، محافظة القاهرة 11835",
    "location.phone": "الهاتف",
    "location.website": "الموقع الإلكتروني",
    "location.hours": "مواعيد العمل",
    "hours.closed": "مغلق",
    "hours.today": "اليوم",
    "footer.about": "عيادة أسنان رائدة في القاهرة الجديدة، تقدم رعاية دقيقة وهادئة.",
    "footer.links": "روابط سريعة",
    "footer.contact": "تواصل معنا",
    "footer.addressShort": "إيغيلانتري مول، القاهرة الجديدة",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
};

/* ------------------------------------------------------------
   2. Reviews data (from Google)
------------------------------------------------------------ */
const REVIEWS = [
  {
    name: "esraa Us",
    meta: { en: "2 reviews · 3 photos", ar: "تقييمان · 3 صور" },
    time: { en: "2 months ago", ar: "قبل شهرين" },
    stars: 5,
    text: {
      en: "The clinic is very elegant and Dr. Alyaa is the best — she is so sweet and professional. She heard all my complaints with patience. Thank you Dr. Alyaa 💙 definitely not the last time to come 💙",
      ar: "العيادة أنيقة جدًا والدكتورة إلياء رائعة — لطيفة ومحترفة، وأصغت لكل شكاواي بصبر. شكرًا دكتورة إلياء 💙 لن يكون آخر مرة أزورها فيها 💙",
    },
  },
  {
    name: "Omar Elshafie",
    meta: { en: "Local Guide · 13 reviews · 4 photos", ar: "مرشد محلي · 13 تقييمًا · 4 صور" },
    time: { en: "2 months ago", ar: "قبل شهرين" },
    stars: 5,
    text: {
      en: "The best Dental Clinic you can ever visit. All doctors are professional and knowledgeable. Comfortable place and best service ever.",
      ar: "أفضل عيادة أسنان يمكن أن تزورها. جميع الأطباء محترفون وذوو خبرة واسعة. مكان مريح وأفضل خدمة على الإطلاق.",
    },
  },
  {
    name: "Nader Elkhwaga",
    meta: { en: "2 reviews", ar: "تقييمان" },
    time: { en: "2 months ago", ar: "قبل شهرين" },
    stars: 5,
    text: {
      en: "One of the best clinics I\u2019ve ever experienced — great professionalism. A special thanks to Mr. Omar Elsherif, truly one of the best and most skilled professionals in his field. Highly recommended 🤍🙏",
      ar: "من أفضل العيادات التي جربتها على الإطلاق — احترافية عالية. شكر خاص للأستاذ عمر الشريف، من الحقًا أفضل وأكثر المهنيين مهارة في مجاله. أنصح به بشدة 🤍🙏",
    },
  },
  {
    name: "Michael W. Aziz",
    meta: { en: "Google review", ar: "تقييم على جوجل" },
    time: { en: "3 months ago", ar: "قبل 3 أشهر" },
    stars: 5,
    text: {
      en: "One of the best dental clinics I have had the pleasure of visiting!",
      ar: "من أفضل عيادات الأسنان التي سعدت بزيارتها!",
    },
  },
  {
    name: "Mohamed Elhusseini",
    meta: { en: "Google review", ar: "تقييم على جوجل" },
    time: { en: "3 months ago", ar: "قبل 3 أشهر" },
    stars: 5,
    text: {
      en: "Excellent service, friendly staff, and a very professional dentist. The whole experience was comfortable and stress free. Highly recommended!",
      ar: "خدمة ممتازة، فريق ودود، وطبيب أسنان محترف جدًا. التجربة كلها كانت مريحة وخالية من التوتر. أنصح به بشدة!",
    },
  },
  {
    name: "Mahira For Vibe&Bite",
    meta: { en: "Google review", ar: "تقييم على جوجل" },
    time: { en: "2 months ago", ar: "قبل شهرين" },
    stars: 5,
    text: { en: "Best Dental clinic.", ar: "أفضل عيادة أسنان." },
  },
];

/* ------------------------------------------------------------
   3. Opening hours (from Google Maps)
------------------------------------------------------------ */
const HOURS = [
  { day: { en: "Saturday",  ar: "السبت" },    open: "3 PM – 10 PM", arOpen: "3م – 10م" },
  { day: { en: "Sunday",    ar: "الأحد" },    open: "3 PM – 10 PM", arOpen: "3م – 10م" },
  { day: { en: "Monday",    ar: "الاثنين" },  open: "3 PM – 10 PM", arOpen: "3م – 10م" },
  { day: { en: "Tuesday",   ar: "الثلاثاء" }, open: "3 PM – 10 PM", arOpen: "3م – 10م" },
  { day: { en: "Wednesday", ar: "الأربعاء" }, open: "3 PM – 10 PM", arOpen: "3م – 10م" },
  { day: { en: "Thursday",  ar: "الخميس" },   open: "3 PM – 10 PM", arOpen: "3م – 10م" },
  { day: { en: "Friday",    ar: "الجمعة" },   open: null,           arOpen: null },
];
/* JS getDay(): 0=Sunday … 6=Saturday → map to our array order (starts Saturday) */
const dayIndex = (d) => (d + 1) % 7;

/* ------------------------------------------------------------
   4. Language / state
------------------------------------------------------------ */
let lang = localStorage.getItem("denova-lang") || "en";
if (!i18n[lang]) lang = "en";

const htmlEl = document.documentElement;

function starsHtml(n) {
  let out = "";
  for (let i = 0; i < n; i++) out += '<i class="fa-solid fa-star"></i>';
  return out;
}

function initials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("");
}

function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;
  grid.innerHTML = REVIEWS.map((r) => `
    <article class="review">
      <div class="review__head">
        <div class="review__avatar" aria-hidden="true">${initials(r.name)}</div>
        <div>
          <div class="review__name">${r.name}</div>
          <div class="review__meta">${r.time[lang]} · ${r.meta[lang]}</div>
        </div>
      </div>
      <div class="review__stars">
        ${starsHtml(r.stars)}
        <span class="g"><i class="fa-brands fa-google"></i> ${i18n[lang]["reviews.google"]}</span>
      </div>
      <p class="review__text">"${r.text[lang]}"</p>
    </article>
  `).join("");
}

function renderHours() {
  const table = document.getElementById("hoursTable");
  if (!table) return;
  const todayJs = new Date().getDay(); // 0=Sun … 6=Sat
  const todayRow = dayIndex(todayJs);
  table.innerHTML = HOURS.map((h, i) => {
    const today = i === todayRow ? ' class="is-today"' : "";
    const time = h.open === null
      ? `<td class="closed">${i18n[lang]["hours.closed"]}</td>`
      : `<td>${lang === "ar" ? h.arOpen : h.open}${i === todayRow ? ` <small>(${i18n[lang]["hours.today"]})</small>` : ""}</td>`;
    return `<tr${today}><td>${h.day[lang]}</td>${time}</tr>`;
  }).join("");
}

function applyTranslations() {
  const dict = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.getElementById("langLabel").textContent = lang === "en" ? "العربية" : "English";
}

function applyDirection() {
  const rtl = lang === "ar";
  htmlEl.setAttribute("lang", lang);
  htmlEl.setAttribute("dir", rtl ? "rtl" : "ltr");
  document.title = rtl
    ? "عيادة دينوفا لطب الأسنان | القاهرة الجديدة — تخيّل ابتسامتك"
    : "Denova Dental Clinic | New Cairo — Imagine Your Smile";
}

function setLanguage(newLang) {
  lang = newLang;
  localStorage.setItem("denova-lang", lang);
  applyDirection();
  applyTranslations();
  renderReviews();
  renderHours();
}

document.getElementById("langToggle").addEventListener("click", () => {
  setLanguage(lang === "en" ? "ar" : "en");
});

/* ------------------------------------------------------------
   5. Mobile navigation
------------------------------------------------------------ */
const burger = document.getElementById("navBurger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
});

nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  })
);

/* ------------------------------------------------------------
   6. Header shadow on scroll
------------------------------------------------------------ */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-stuck", window.scrollY > 8);
}, { passive: true });

/* ------------------------------------------------------------
   7. Reveal on scroll
------------------------------------------------------------ */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ------------------------------------------------------------
   8. Init
------------------------------------------------------------ */
applyDirection();
applyTranslations();
renderReviews();
renderHours();
