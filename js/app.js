/* ============================================================
   CONFIG — set this to your Formspree endpoint to make the
   waitlist forms actually send somewhere.
   1. Sign up free at https://formspree.io
   2. Create a new form, copy the endpoint (looks like
      "https://formspree.io/f/xxxxabcd")
   3. Paste it below.
   Until this is set, forms will show a friendly local
   confirmation but won't send anywhere.
   ============================================================ */
const FORMSPREE_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxabcd"

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const UI = {
  en: {
    brandTag: "EARLY ACCESS",
    kicker: "A grooming routine, not another product to buy",
    heroH1: "Stop guessing<br>with your <em>skin.</em>",
    lede: "Answer a few questions and get a starting routine for your skin, beard, and climate — free. The full app, with day-to-day coaching, is what we're building next.",
    ctaPrimary: "Take the 90-second quiz",
    ctaSecondary: "Not ready — just notify me when the app launches",
    waitlistText: "Leave your email and we'll let you know the moment the RUTIN app opens up. No spam, one message when it matters.",
    waitlistBtn: "Notify me",
    waitlistMsg: "You're on the list. We'll be in touch.",
    waitlistPlaceholder: "you@email.com",
    value1Label: "Cost", value1Text: "This basic routine is free, always. No product to buy to get value.",
    value2Label: "Bias", value2Text: "We don't sell grooming products, so there's nothing to push on you.",
    value3Label: "Fit", value3Text: "Built around South Asian skin, climate, and budgets — not a translated US routine.",
    footer: "RUTIN · WEBSITE PREVIEW · NOT A MEDICAL DEVICE",
    backBtn: "← BACK",
    stepOf: (n, total) => `${n} / ${total}`,
    resultEyebrow: "Your basic routine",
    resultH1: "A starting point — the app takes it further",
    resultP: "Built from what you told us. Free, and yours to keep.",
    morning: "Morning",
    evening: "Evening",
    disclaimer: "This is a basic, rules-based routine for testing the concept — not medical advice. Anything that looks like a skin condition (persistent rash, painful cysts, sudden changes) is worth a real dermatologist's eyes, not an app's.",
    premiumLabel: "🔒 In the app — premium",
    premiumPrice: "from ৳199/month",
    premiumList: [
      "Weekly beard, exfoliation, and shave-day plan tailored to your answers",
      "Routine that adjusts automatically as seasons, skin, and results change",
      "AI grooming coach for day-to-day questions (\u201Cis this normal?\u201D, \u201Cwhat order do I apply these?\u201D)",
      "Private progress photo log so you can actually see what's working",
    ],
    premiumCta: "Notify me when the app launches",
    resultWaitlistText: "Leave your email and we'll tell you the moment the app — and premium — are ready.",
    resultWaitlistMsg: "Saved. We'll email you when RUTIN is ready.",
    restartBtn: "Start over",
    formError: "Something went wrong — try again in a moment.",
  },
  bn: {
    brandTag: "আর্লি অ্যাক্সেস",
    kicker: "আরেকটা প্রোডাক্ট নয়, একটি সাজগোজের রুটিন",
    heroH1: "নিজের <em>ত্বক</em><br>নিয়ে অনুমান বন্ধ করুন",
    lede: "কয়েকটা প্রশ্নের উত্তর দিন, পেয়ে যান আপনার ত্বক, দাড়ি আর আবহাওয়ার জন্য একটা শুরুর রুটিন — একদম ফ্রি। পুরো অ্যাপ, যেখানে প্রতিদিনের গাইডেন্স থাকবে, সেটা আমরা এখন তৈরি করছি।",
    ctaPrimary: "৯০ সেকেন্ডের কুইজ শুরু করুন",
    ctaSecondary: "এখনই না — অ্যাপ চালু হলে জানাবেন",
    waitlistText: "আপনার ইমেইল দিন, RUTIN অ্যাপ চালু হওয়ার সাথে সাথে আমরা আপনাকে জানাবো। কোনো স্প্যাম নেই, শুধু দরকারের সময় একটা মেসেজ।",
    waitlistBtn: "জানাবেন",
    waitlistMsg: "আপনি লিস্টে যুক্ত হয়েছেন। আমরা যোগাযোগ করবো।",
    waitlistPlaceholder: "you@email.com",
    value1Label: "খরচ", value1Text: "এই বেসিক রুটিন সবসময় ফ্রি। কোনো প্রোডাক্ট কেনার দরকার নেই।",
    value2Label: "পক্ষপাত", value2Text: "আমরা কোনো গ্রুমিং প্রোডাক্ট বিক্রি করি না, তাই আপনাকে কিছু গছিয়ে দেওয়ার তাড়া নেই।",
    value3Label: "উপযোগিতা", value3Text: "দক্ষিণ এশিয়ার ত্বক, আবহাওয়া আর বাজেট মাথায় রেখে বানানো — আমেরিকার রুটিনের অনুবাদ নয়।",
    footer: "RUTIN · ওয়েবসাইট প্রিভিউ · এটি কোনো মেডিক্যাল ডিভাইস নয়",
    backBtn: "← পেছনে",
    stepOf: (n, total) => `${n} / ${total}`,
    resultEyebrow: "আপনার বেসিক রুটিন",
    resultH1: "একটা শুরু — অ্যাপ এটাকে আরও এগিয়ে নেবে",
    resultP: "আপনার উত্তরের ভিত্তিতে তৈরি। সম্পূর্ণ ফ্রি, আর এটা আপনারই থাকবে।",
    morning: "সকাল",
    evening: "রাত",
    disclaimer: "এটি একটি বেসিক, নিয়মভিত্তিক রুটিন — কনসেপ্ট পরীক্ষার জন্য, কোনো মেডিক্যাল পরামর্শ নয়। দীর্ঘস্থায়ী র‍্যাশ, ব্যথাযুক্ত সিস্ট বা ত্বকে হঠাৎ পরিবর্তনের মতো কিছু দেখলে সেটা কোনো অ্যাপের নয়, একজন প্রকৃত চর্মরোগ বিশেষজ্ঞের দেখানোর বিষয়।",
    premiumLabel: "🔒 অ্যাপে — প্রিমিয়াম",
    premiumPrice: "৳১৯৯/মাস থেকে শুরু",
    premiumList: [
      "আপনার উত্তরের ভিত্তিতে সাপ্তাহিক দাড়ি, এক্সফোলিয়েশন আর শেভ-ডে প্ল্যান",
      "ঋতু, ত্বক আর ফলাফল বদলানোর সাথে সাথে নিজে থেকে বদলে যাওয়া রুটিন",
      "দৈনন্দিন প্রশ্নের জন্য AI গ্রুমিং কোচ (\u201Cএটা কি স্বাভাবিক?\u201D, \u201Cকোনটার পর কোনটা লাগাবো?\u201D)",
      "প্রাইভেট প্রোগ্রেস ফটো লগ, যাতে বুঝতে পারেন আসলে কী কাজ করছে",
    ],
    premiumCta: "অ্যাপ চালু হলে জানাবেন",
    resultWaitlistText: "আপনার ইমেইল দিন, অ্যাপ আর প্রিমিয়াম রেডি হওয়ার সাথে সাথেই আমরা জানাবো।",
    resultWaitlistMsg: "সংরক্ষণ করা হয়েছে। RUTIN রেডি হলে আমরা ইমেইল করবো।",
    restartBtn: "আবার শুরু করুন",
    formError: "কিছু একটা সমস্যা হয়েছে — একটু পরে আবার চেষ্টা করুন।",
  },
};

const QUIZ = {
  en: [
    { key: 'skin', eyebrow: 'Step 01 — Skin', q: "How does your skin usually feel by afternoon?",
      options: [
        { label: "Shiny, especially forehead and nose", value: "oily" },
        { label: "Tight or flaky, sometimes irritated", value: "dry" },
        { label: "Oily in some spots, dry or normal in others", value: "combo" },
        { label: "Honestly not sure", value: "unsure" },
      ] },
    { key: 'concern', eyebrow: 'Step 02 — Concern', q: "What's the one thing you'd fix first if you could?",
      options: [
        { label: "Breakouts or acne", value: "acne" },
        { label: "Dull, tired-looking skin", value: "dull" },
        { label: "Razor bumps or ingrown hairs", value: "razor" },
        { label: "Patchy or itchy beard", value: "beard" },
        { label: "Nothing specific — just want a solid routine", value: "basics" },
      ] },
    { key: 'beard', eyebrow: 'Step 03 — Facial hair', q: "Where are you at with facial hair right now?",
      options: [
        { label: "Clean shaven, most days", value: "shaven" },
        { label: "Stubble, a few days' growth", value: "stubble" },
        { label: "Short, kept beard", value: "short" },
        { label: "Full or long beard", value: "full" },
      ] },
    { key: 'sensitivity', eyebrow: 'Step 04 — Sensitivity', q: "Does your skin react easily to new products?",
      options: [
        { label: "Yes — redness or irritation is common for me", value: "sensitive" },
        { label: "Not really, my skin handles most things fine", value: "normal" },
      ] },
    { key: 'climate', eyebrow: 'Step 05 — Climate', q: "What's the weather like where you live, most of the year?",
      options: [
        { label: "Hot and humid most months", value: "humid" },
        { label: "Dry, or it changes a lot by season", value: "dry_climate" },
        { label: "Mild, nothing extreme", value: "mild" },
      ] },
    { key: 'time', eyebrow: 'Step 06 — Time', q: "How much time can you realistically give this, per day?",
      options: [
        { label: "Under 2 minutes — keep it brutal simple", value: "min" },
        { label: "2–5 minutes", value: "some" },
        { label: "5–10 minutes, I don't mind a routine", value: "more" },
      ] },
    { key: 'budget', eyebrow: 'Step 07 — Budget', q: "What's your comfort zone for grooming spend?",
      options: [
        { label: "Local / drugstore brands", value: "budget" },
        { label: "Mid-range, mix of local and imported", value: "mid" },
        { label: "Premium, willing to pay for results", value: "premium" },
      ] },
  ],
  bn: [
    { key: 'skin', eyebrow: 'ধাপ ০১ — ত্বক', q: "দুপুরের পর সাধারণত আপনার ত্বক কেমন লাগে?",
      options: [
        { label: "চকচকে লাগে, বিশেষ করে কপাল আর নাকে", value: "oily" },
        { label: "টানটান বা খসখসে লাগে, মাঝে মাঝে জ্বালাপোড়া করে", value: "dry" },
        { label: "কিছু জায়গায় তৈলাক্ত, কিছু জায়গায় শুষ্ক বা স্বাভাবিক", value: "combo" },
        { label: "সত্যি বলতে ঠিক জানি না", value: "unsure" },
      ] },
    { key: 'concern', eyebrow: 'ধাপ ০২ — সমস্যা', q: "সুযোগ পেলে সবার আগে কোন সমস্যাটা ঠিক করতে চাইবেন?",
      options: [
        { label: "ব্রণ বা একনে", value: "acne" },
        { label: "নিষ্প্রাণ, ক্লান্ত দেখানো ত্বক", value: "dull" },
        { label: "শেভের পর র‍্যাশ বা লোম ভেতরে ঢুকে যাওয়া", value: "razor" },
        { label: "অসম বা চুলকানিযুক্ত দাড়ি", value: "beard" },
        { label: "নির্দিষ্ট কিছু না — শুধু একটা ভালো রুটিন চাই", value: "basics" },
      ] },
    { key: 'beard', eyebrow: 'ধাপ ০৩ — দাড়ি-গোঁফ', q: "এখন আপনার দাড়ি-গোঁফের অবস্থা কেমন?",
      options: [
        { label: "বেশিরভাগ দিন ক্লিন শেভড থাকি", value: "shaven" },
        { label: "কয়েকদিনের বাড়তি দাড়ি (স্টাবল)", value: "stubble" },
        { label: "ছোট, গোছানো দাড়ি", value: "short" },
        { label: "লম্বা বা ফুল দাড়ি", value: "full" },
      ] },
    { key: 'sensitivity', eyebrow: 'ধাপ ০৪ — সংবেদনশীলতা', q: "নতুন প্রোডাক্টে আপনার ত্বক কি সহজে রিঅ্যাক্ট করে?",
      options: [
        { label: "হ্যাঁ — লালচে ভাব বা জ্বালাপোড়া আমার সাধারণ ব্যাপার", value: "sensitive" },
        { label: "তেমন না, বেশিরভাগ কিছুতেই আমার ত্বক ঠিক থাকে", value: "normal" },
      ] },
    { key: 'climate', eyebrow: 'ধাপ ০৫ — আবহাওয়া', q: "আপনি যেখানে থাকেন, বছরের বেশিরভাগ সময় আবহাওয়া কেমন থাকে?",
      options: [
        { label: "গরম আর আর্দ্র আবহাওয়া বেশিরভাগ সময়", value: "humid" },
        { label: "শুষ্ক, অথবা ঋতুভেদে অনেক পরিবর্তন হয়", value: "dry_climate" },
        { label: "মৃদু, তেমন চরম কিছু না", value: "mild" },
      ] },
    { key: 'time', eyebrow: 'ধাপ ০৬ — সময়', q: "প্রতিদিন বাস্তবিকভাবে কতটুকু সময় দিতে পারবেন?",
      options: [
        { label: "২ মিনিটের কম — একদম সহজ রাখুন", value: "min" },
        { label: "২–৫ মিনিট", value: "some" },
        { label: "৫–১০ মিনিট, রুটিন মেনে চলতে আপত্তি নেই", value: "more" },
      ] },
    { key: 'budget', eyebrow: 'ধাপ ০৭ — বাজেট', q: "গ্রুমিং খরচে আপনার সাচ্ছন্দ্যের পরিসীমা কেমন?",
      options: [
        { label: "লোকাল / সাধারণ দোকানের ব্র্যান্ড", value: "budget" },
        { label: "মাঝারি বাজেট, লোকাল আর ইমপোর্টেড মিলিয়ে", value: "mid" },
        { label: "প্রিমিয়াম, ফলাফলের জন্য খরচ করতে রাজি", value: "premium" },
      ] },
  ],
};

// Routine-building strings, keyed by the same answer values regardless of language.
const ROUTINE = {
  en: {
    cleanser: {
      oily_humid: { base: "Gel cleanser", note: "nothing heavy — humidity already keeps skin oily" },
      oily: { base: "Gel or foaming cleanser", note: null },
      dry_dryclimate: { base: "Cream or balm cleanser", note: "dry climate makes this non-negotiable" },
      dry: { base: "Cream or hydrating cleanser", note: "avoid foaming ones" },
      combo: { base: "Gentle gel cleanser", note: "focus on the T-zone" },
      unsure: { base: "Gentle, fragrance-free cleanser", note: "we'll refine this once you know your type" },
    },
    pmSuffix: "same cleanser, evening pass",
    concern: {
      acne: { am: "Lightweight, oil-free moisturiser with SPF", pm: "Salicylic acid or benzoyl peroxide spot treatment, 2–3x/week to start" },
      dull: { am: "Vitamin C serum, then moisturiser with SPF", pm: "Retinol or retinol-alternative, 2x/week to start, moisturiser after" },
      razor: { am: "Moisturiser with SPF", pm: "Exfoliate gently 2x/week (not on shave days); after-shave balm, unscented" },
      beard: { am: "Moisturiser with SPF", pm: "Beard oil massaged into the skin underneath, not just the hair" },
      basics: { am: "Moisturiser with SPF (this one step matters more than anything else)", pm: "Moisturiser, unscented, before bed" },
    },
    tags: {
      oily: "oily skin", dry: "dry skin", combo: "combination skin", unsure: "skin type: TBD",
      acne: "acne-prone", dull: "dullness", razor: "razor bumps", beard: "beard health", basics: "fundamentals",
      sensitive: "sensitive skin", humid: "humid climate", dry_climate: "dry climate",
      min: "under 2 min routine",
      budget: "local/drugstore picks", premium: "premium picks", mid: "mixed local + imported",
    },
  },
  bn: {
    cleanser: {
      oily_humid: { base: "জেল ক্লিনজার", note: "ভারী কিছু না — আর্দ্র আবহাওয়াতেই ত্বক এমনিতে তৈলাক্ত থাকে" },
      oily: { base: "জেল বা ফোমিং ক্লিনজার", note: null },
      dry_dryclimate: { base: "ক্রিম বা বাম ক্লিনজার", note: "শুষ্ক আবহাওয়ায় এটা বাদ দেওয়া যাবে না" },
      dry: { base: "ক্রিম বা হাইড্রেটিং ক্লিনজার", note: "ফোমিং ক্লিনজার এড়িয়ে চলুন" },
      combo: { base: "হালকা জেল ক্লিনজার", note: "টি-জোনের দিকে বেশি নজর দিন" },
      unsure: { base: "হালকা, সুগন্ধিমুক্ত ক্লিনজার", note: "ত্বকের ধরন বোঝার পর এটা আরও নির্দিষ্ট করে দেবো" },
    },
    pmSuffix: "একই ক্লিনজার, রাতেও ব্যবহার করুন",
    concern: {
      acne: { am: "হালকা, অয়েল-ফ্রি ময়েশ্চারাইজার, সাথে SPF", pm: "স্যালিসাইলিক এসিড বা বেনজয়েল পারক্সাইড স্পট ট্রিটমেন্ট, শুরুতে সপ্তাহে ২–৩ বার" },
      dull: { am: "ভিটামিন সি সিরাম, এরপর SPF যুক্ত ময়েশ্চারাইজার", pm: "রেটিনল বা রেটিনল-বিকল্প, শুরুতে সপ্তাহে ২ বার, পরে ময়েশ্চারাইজার" },
      razor: { am: "SPF যুক্ত ময়েশ্চারাইজার", pm: "সপ্তাহে ২ বার হালকা এক্সফোলিয়েট করুন (শেভের দিন নয়); সুগন্ধিহীন আফটার-শেভ বাম ব্যবহার করুন" },
      beard: { am: "SPF যুক্ত ময়েশ্চারাইজার", pm: "দাড়ির নিচের ত্বকে বিয়ার্ড অয়েল মালিশ করুন, শুধু চুলে নয়" },
      basics: { am: "SPF যুক্ত ময়েশ্চারাইজার (এই একটা ধাপই সবচেয়ে বেশি গুরুত্বপূর্ণ)", pm: "ঘুমানোর আগে সুগন্ধিহীন ময়েশ্চারাইজার" },
    },
    tags: {
      oily: "তৈলাক্ত ত্বক", dry: "শুষ্ক ত্বক", combo: "মিশ্র ত্বক", unsure: "ত্বকের ধরন: অনির্দিষ্ট",
      acne: "ব্রণ-প্রবণ", dull: "নিষ্প্রাণতা", razor: "শেভ র‍্যাশ", beard: "দাড়ির যত্ন", basics: "মৌলিক যত্ন",
      sensitive: "সংবেদনশীল ত্বক", humid: "আর্দ্র আবহাওয়া", dry_climate: "শুষ্ক আবহাওয়া",
      min: "২ মিনিটের কম রুটিন",
      budget: "লোকাল/সাধারণ দোকানের পণ্য", premium: "প্রিমিয়াম পণ্য", mid: "লোকাল + ইমপোর্টেড মিশ্রণ",
    },
  },
};

/* ============================================================
   STATE
   ============================================================ */
let lang = 'en';
let step = 0;
const answers = {};

const card = document.getElementById('card');
const progressFill = document.getElementById('progressFill');
const stageEl = document.getElementById('stage');
const landingEl = document.getElementById('landing');
const htmlRoot = document.getElementById('htmlRoot');

/* ============================================================
   i18n rendering
   ============================================================ */
function applyStaticTranslations(){
  const t = UI[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.getElementById('heroH1').innerHTML = t.heroH1;
  document.getElementById('waitlistEmail').placeholder = t.waitlistPlaceholder;
  htmlRoot.setAttribute('lang', lang);
  document.body.classList.toggle('lang-bn', lang === 'bn');
}

function setLang(newLang){
  lang = newLang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  applyStaticTranslations();
  // If mid-quiz or on the result screen, redraw the card in the new language.
  if (stageEl.classList.contains('show')) render();
}

document.getElementById('langToggle').addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  setLang(btn.getAttribute('data-lang'));
});

/* ============================================================
   Form submission (Formspree, optional)
   ============================================================ */
async function submitWaitlistForm(formEl, msgEl, source){
  if (!FORMSPREE_ENDPOINT) {
    // No backend configured yet — show local confirmation only.
    formEl.style.display = 'none';
    msgEl.classList.add('show');
    return;
  }

  const data = new FormData(formEl);
  data.append('source', source);
  data.append('language', lang);

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data,
    });
    if (res.ok) {
      formEl.style.display = 'none';
      msgEl.classList.add('show');
    } else {
      alert(UI[lang].formError);
    }
  } catch (err) {
    alert(UI[lang].formError);
  }
}

/* ============================================================
   Progress + navigation
   ============================================================ */
function setProgress(){
  const total = QUIZ[lang].length;
  const pct = step >= total ? 100 : Math.round((step/total)*100);
  progressFill.style.width = pct + '%';
}

function startQuiz(){
  landingEl.style.display = 'none';
  stageEl.classList.add('show');
  step = 0;
  render();
  window.scrollTo({top:0, behavior:'smooth'});
}
document.getElementById('startQuizBtn').onclick = startQuiz;

const toggleBtn = document.getElementById('toggleWaitlistBtn');
const waitlistPanel = document.getElementById('waitlistPanel');
toggleBtn.onclick = () => { waitlistPanel.classList.toggle('show'); };

document.getElementById('waitlistForm').addEventListener('submit', (e) => {
  e.preventDefault();
  submitWaitlistForm(e.target, document.getElementById('waitlistMsg'), 'hero_waitlist');
});

/* ============================================================
   Quiz rendering
   ============================================================ */
function renderQuestion(){
  const qd = QUIZ[lang][step];
  const t = UI[lang];
  card.innerHTML = `
    <div class="eyebrow">${qd.eyebrow}</div>
    <h1 class="q">${qd.q}</h1>
    <div class="options">
      ${qd.options.map((o) => `<button class="opt" data-val="${o.value}"><span>${o.label}</span><span class="mark"></span></button>`).join('')}
    </div>
    <div class="foot-row">
      <button class="back-btn ${step>0?'show2':''}" id="backBtn">${t.backBtn}</button>
      <div class="step-count">${t.stepOf(step+1, QUIZ[lang].length)}</div>
    </div>
  `;
  card.querySelectorAll('.opt').forEach(btn => {
    btn.onclick = () => {
      answers[qd.key] = btn.getAttribute('data-val');
      step++;
      render();
    };
  });
  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.onclick = () => { step--; render(); };
}

// Basic (free, website-tier) routine: AM + PM only.
// Weekly plans, adaptive changes, and coaching live behind the app's premium tier.
function buildBasicRoutine(){
  const a = answers;
  const R = ROUTINE[lang];
  const am = [];
  const pm = [];
  const tags = [];

  let cleanserKey;
  if (a.skin === 'oily') cleanserKey = a.climate === 'humid' ? 'oily_humid' : 'oily';
  else if (a.skin === 'dry') cleanserKey = a.climate === 'dry_climate' ? 'dry_dryclimate' : 'dry';
  else if (a.skin === 'combo') cleanserKey = 'combo';
  else cleanserKey = 'unsure';

  const cl = R.cleanser[cleanserKey];
  am.push(cl.note ? `${cl.base} — ${cl.note}` : cl.base);
  pm.push(`${cl.base} — ${R.pmSuffix}`);
  tags.push(R.tags[a.skin] || R.tags.unsure);

  const concernKey = ['acne','dull','razor','beard'].includes(a.concern) ? a.concern : 'basics';
  const cc = R.concern[concernKey];
  am.push(cc.am);
  pm.push(cc.pm);
  tags.push(R.tags[concernKey]);

  if (a.sensitivity === 'sensitive') tags.push(R.tags.sensitive);
  if (a.climate === 'humid') tags.push(R.tags.humid);
  else if (a.climate === 'dry_climate') tags.push(R.tags.dry_climate);
  if (a.time === 'min') tags.push(R.tags.min);

  const budgetKey = a.budget === 'budget' ? 'budget' : a.budget === 'premium' ? 'premium' : 'mid';
  tags.push(R.tags[budgetKey]);

  return { am, pm, tags };
}

function renderResult(){
  const t = UI[lang];
  const r = buildBasicRoutine();
  card.innerHTML = `
    <div class="result-head">
      <div class="eyebrow">${t.resultEyebrow}</div>
      <h1>${t.resultH1}</h1>
      <p>${t.resultP}</p>
    </div>

    <div class="ring-wrap"><div class="ring-labels">
      <div class="ritual-block">
        <div class="ritual-marker">AM</div>
        <div style="flex:1;">
          <p class="ritual-title">${t.morning}</p>
          <ul class="step-list">${r.am.map(s=>`<li>${s}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="ritual-block">
        <div class="ritual-marker">PM</div>
        <div style="flex:1;">
          <p class="ritual-title">${t.evening}</p>
          <ul class="step-list">${r.pm.map(s=>`<li>${s}</li>`).join('')}</ul>
        </div>
      </div>
    </div></div>

    <div class="divider"></div>
    <div class="tags">${r.tags.map(tg=>`<span class="tag">${tg}</span>`).join('')}</div>

    <div class="disclaimer">${t.disclaimer}</div>

    <div class="premium-block">
      <div class="premium-head">
        <span class="p-label">${t.premiumLabel}</span>
        <span class="premium-price">${t.premiumPrice}</span>
      </div>
      <ul class="premium-list">${t.premiumList.map(li=>`<li>${li}</li>`).join('')}</ul>
      <button class="premium-cta" id="premiumCta">${t.premiumCta}</button>
    </div>

    <div class="result-waitlist" id="resultWaitlistBlock" style="display:none;">
      <p>${t.resultWaitlistText}</p>
      <form class="waitlist-form" id="resultWaitlistForm" data-source="result_waitlist">
        <input type="email" id="resultWaitlistEmail" name="email" placeholder="${t.waitlistPlaceholder}" required>
        <button type="submit">${t.waitlistBtn}</button>
      </form>
      <div class="waitlist-msg" id="resultWaitlistMsg">${t.resultWaitlistMsg}</div>
    </div>

    <button class="restart-btn" id="restartBtn">${t.restartBtn}</button>
  `;

  document.getElementById('premiumCta').onclick = () => {
    const block = document.getElementById('resultWaitlistBlock');
    block.style.display = 'block';
    block.scrollIntoView({behavior:'smooth', block:'center'});
  };

  const rForm = document.getElementById('resultWaitlistForm');
  rForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitWaitlistForm(e.target, document.getElementById('resultWaitlistMsg'), 'result_waitlist');
  });

  document.getElementById('restartBtn').onclick = () => {
    step = 0;
    Object.keys(answers).forEach(k=>delete answers[k]);
    stageEl.classList.remove('show');
    landingEl.style.display = 'block';
    window.scrollTo({top:0, behavior:'smooth'});
  };
}

function render(){
  setProgress();
  if (step < QUIZ[lang].length) renderQuestion();
  else renderResult();
}

/* ============================================================
   Init
   ============================================================ */
applyStaticTranslations();
