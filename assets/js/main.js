/* ── Translations ─────────────────────────────────────────────────────────── */
const LANGS = {
  ro: {
    "nav.home": "Acasă",
    "nav.catalog": "Catalog",
    "nav.about": "Despre",
    "nav.contact": "Contact",
    "hero.title": "Bijuterii elegante pentru momente speciale",
    "hero.desc": "Descoperiți colecții premium inspirate din cele mai rafinate tendințe.",
    "hero.cta": "Explorați catalogul",
    "bs.title": "Cele mai căutate",
    "bs.p1.name": "Inel din Aur",
    "bs.p1.desc": "Model popular pentru logodnă și aniversări.",
    "bs.p2.name": "Cruce din Aur",
    "bs.p2.desc": "Design fin, purtare zilnică sau ocazii speciale.",
    "bs.p3.name": "Cercei din Aur",
    "bs.p3.desc": "Stil premium inspirat din colecțiile luxury.",
    "col.title": "Colecții populare",
    "col.1.title": "Logodnă",
    "col.1.desc": "Piese dedicate momentelor importante.",
    "col.1.cta": "Vezi colecția",
    "col.2.title": "Cadouri",
    "col.2.desc": "Idei premium pentru aniversări și sărbători.",
    "col.2.cta": "Vezi colecția",
    "col.3.title": "Zi cu zi",
    "col.3.desc": "Bijuterii rafinate pentru purtare zilnică.",
    "col.3.cta": "Vezi colecția",
    "why.title": "De ce ne aleg clienții",
    "why.1": "Certificat de autenticitate pentru fiecare produs",
    "why.2": "Ambalaj premium pregătit pentru cadou",
    "why.3": "Consultanță personalizată la showroom",
    "why.4": "Suport în alegerea dimensiunii potrivite",
    "test.title": "Ce spun clienții",
    "test.1.text": "\u201eCalitate excelentă și personal foarte amabil. Recomand cu încredere.\u201d",
    "test.1.author": "\u2013 Client Alin Gold",
    "test.2.text": "\u201eAmbalaj elegant, perfect pentru cadou. Exact ceea ce căutam.\u201d",
    "test.2.author": "\u2013 Client Alin Gold",
    "gallery.title": "Galerie",
    "nl.title": "Abonați-vă la noutăți",
    "nl.desc": "Primiți colecții noi, oferte exclusive și idei de cadouri premium.",
    "nl.placeholder": "Adresa dumneavoastră de e-mail",
    "nl.btn": "Abonare",
    "faq.title": "Întrebări frecvente",
    "faq.1.q": "Aveți showroom fizic?",
    "faq.1.a": "Da, ne găsiți la Bd. Dacia 49/8, Chișinău, de luni până sâmbătă.",
    "faq.2.q": "Pot ajusta dimensiunea unui inel?",
    "faq.2.a": "Da, în funcție de model, cu verificare prealabilă.",
    "faq.3.q": "Primesc certificat de autenticitate?",
    "faq.3.a": "Da, fiecare produs este însoțit de documentele necesare.",
    "footer.terms": "Termeni",
    "footer.privacy": "Confidențialitate",
    "footer.returns": "Retur",
    "about.title": "Despre noi",
    "about.p1": "La Alin Gold, considerăm că o bijuterie frumoasă nu este doar un accesoriu, ci o amintire care durează. De la primul concept până la produsul final, acordăm atenție fiecărui detaliu, astfel încât dumneavoastră să primiți o piesă elegantă, durabilă și cu adevărat memorabilă.",
    "about.p2": "Povestea noastră a pornit din dorința de a aduce în Moldova bijuterii cu design modern, execuție impecabilă și prețuri corecte. În fiecare colecție, combinăm stilul clasic cu tendințele actuale, pentru ca fiecare client să găsească piesa care i se potrivește perfect.",
    "about.p3": "Ceea ce ne diferențiază este modul în care lucrăm cu oamenii: ascultăm, recomandăm sincer și vă ajutăm să alegeți bijuteria potrivită pentru momentul dumneavoastră special — fie că este vorba despre o logodnă, un cadou sau o bucurie personală.",
    "about.p4": "Valorile noastre sunt clare și ferme: calitate fără compromis, transparență, respect față de client și atenție la fiecare detaliu. Fiecare piesă este verificată cu grijă înainte de a ajunge la dumneavoastră.",
    "about.p5": "Misiunea noastră este să transformăm fiecare vizită la Alin Gold într-o experiență premium, personalizată și de încredere.",
    "contact.title": "Contact",
    "contact.form.title": "Trimiteți-ne un mesaj",
    "contact.form.fname": "Prenume",
    "contact.form.lname": "Nume",
    "contact.form.email": "E-mail",
    "contact.form.phone": "Telefon",
    "contact.form.msg": "Mesaj",
    "contact.form.placeholder": "Scrieți aici întrebarea sau solicitarea dumneavoastră",
    "contact.form.submit": "Trimite mesajul",
    "contact.form.success": "Mesajul a fost trimis cu succes. Vă vom răspunde în cel mai scurt timp.",
    "contact.form.err": "Vă rugăm să completați toate câmpurile pentru a trimite mesajul.",
    "contact.schedule": "Program de lucru",
    "catalog.title": "Catalog",
    "filter.cat.label": "Categorie:",
    "filter.mat.label": "Material:",
    "filter.all": "Toate",
    "cat.inele": "Inele",
    "cat.bratari": "Brățări",
    "cat.lant": "Lănțișoare",
    "cat.cruci": "Cruci",
    "cat.cercei": "Cercei",
    "mat.aur": "Aur",
    "mat.argint": "Argint",
    "btn.details": "Detalii",
    "p1.name": "Inel din Aur",
    "p1.desc": "Model elegant din aur 14k pentru ocazii speciale.",
    "p2.name": "Cruce din Aur",
    "p2.desc": "Design clasic, simbol al eleganței și al valorilor.",
    "p3.name": "Brățară Love",
    "p3.desc": "Piesă iconică cu simbol al dragostei, pentru momente speciale.",
    "p4.name": "Cercei din Aur",
    "p4.desc": "Stil premium inspirat din colecțiile luxury internaționale.",
    "p5.name": "Brățară din Argint",
    "p5.desc": "Bijuterie din argint 925 cu finisaj impecabil.",
    "p6.name": "Brățară din Aur",
    "p6.desc": "Design sofisticat, purtare confortabilă pentru orice ocazie.",
    "p7.name": "Lănțișor din Aur",
    "p7.desc": "Lant fin cu design elegant, ideal pentru purtare zilnică.",
    "p8.name": "Inel din Argint",
    "p8.desc": "Inel modern din argint 925, minimalist și rafinat.",
    "p9.name": "Colier din Aur",
    "p9.desc": "Piesă de efect pentru ocazii deosebite, din aur de înaltă calitate.",
    "cookie.text": "Acest site utilizează cookie-uri pentru funcționare și îmbunătățirea experienței dumneavoastră.",
    "cookie.accept": "Accept cookie-uri",
    "cookie.decline": "Refuz opționalele"
  },
  ru: {
    "nav.home": "Главная",
    "nav.catalog": "Каталог",
    "nav.about": "О нас",
    "nav.contact": "Контакт",
    "hero.title": "Элегантные украшения для особых моментов",
    "hero.desc": "Откройте для себя премиум-коллекции, вдохновлённые самыми изысканными тенденциями.",
    "hero.cta": "Открыть каталог",
    "bs.title": "Самые популярные",
    "bs.p1.name": "Золотое кольцо",
    "bs.p1.desc": "Популярная модель для помолвок и юбилеев.",
    "bs.p2.name": "Золотой крест",
    "bs.p2.desc": "Изящный дизайн для повседневного ношения или особых случаев.",
    "bs.p3.name": "Золотые серьги",
    "bs.p3.desc": "Премиум-стиль, вдохновлённый luxury-коллекциями.",
    "col.title": "Популярные коллекции",
    "col.1.title": "Помолвка",
    "col.1.desc": "Украшения для важных моментов.",
    "col.1.cta": "Смотреть коллекцию",
    "col.2.title": "Подарки",
    "col.2.desc": "Премиум-идеи для юбилеев и праздников.",
    "col.2.cta": "Смотреть коллекцию",
    "col.3.title": "На каждый день",
    "col.3.desc": "Изысканные украшения для повседневного ношения.",
    "col.3.cta": "Смотреть коллекцию",
    "why.title": "Почему нас выбирают",
    "why.1": "Сертификат подлинности для каждого изделия",
    "why.2": "Премиум-упаковка, готовая к подарку",
    "why.3": "Персональная консультация в шоуруме",
    "why.4": "Помощь в выборе правильного размера",
    "test.title": "Отзывы клиентов",
    "test.1.text": "«Отличное качество и очень приветливый персонал. Рекомендую.»",
    "test.1.author": "– Клиент Alin Gold",
    "test.2.text": "«Элегантная упаковка, идеально для подарка. Именно то, что я искал.»",
    "test.2.author": "– Клиент Alin Gold",
    "gallery.title": "Галерея",
    "nl.title": "Подпишитесь на новости",
    "nl.desc": "Получайте информацию о новых коллекциях, эксклюзивных предложениях и идеях для подарков.",
    "nl.placeholder": "Ваш адрес электронной почты",
    "nl.btn": "Подписаться",
    "faq.title": "Часто задаваемые вопросы",
    "faq.1.q": "У вас есть физический шоурум?",
    "faq.1.a": "Да, мы находимся по адресу: бул. Дачия 49/8, Кишинёв, с понедельника по субботу.",
    "faq.2.q": "Можно изменить размер кольца?",
    "faq.2.a": "Да, в зависимости от модели, после предварительной проверки.",
    "faq.3.q": "Я получу сертификат подлинности?",
    "faq.3.a": "Да, каждое изделие сопровождается необходимыми документами.",
    "footer.terms": "Условия",
    "footer.privacy": "Конфиденциальность",
    "footer.returns": "Возврат",
    "about.title": "О нас",
    "about.p1": "В Alin Gold мы считаем, что красивое украшение — это не просто аксессуар, а воспоминание, которое остаётся навсегда. От первого замысла до готового изделия мы уделяем внимание каждой детали, чтобы вы получили элегантную, долговечную и поистине незабываемую вещь.",
    "about.p2": "Наша история началась с желания привнести в Молдову украшения с современным дизайном, безупречным исполнением и честными ценами. В каждой коллекции мы сочетаем классический стиль с актуальными тенденциями, чтобы каждый клиент нашёл именно то, что ему подходит.",
    "about.p3": "Наше отличие — это подход к людям: мы слушаем, даём честные рекомендации и помогаем выбрать украшение, идеально подходящее для вашего особого момента — будь то помолвка, подарок или личная радость.",
    "about.p4": "Наши ценности просты и непоколебимы: качество без компромиссов, прозрачность, уважение к клиенту и внимание к каждой детали. Каждое изделие тщательно проверяется перед тем, как попасть к вам.",
    "about.p5": "Наша миссия — сделать каждое посещение Alin Gold премиум-опытом, персонализированным и заслуживающим доверия.",
    "contact.title": "Контакт",
    "contact.form.title": "Напишите нам",
    "contact.form.fname": "Имя",
    "contact.form.lname": "Фамилия",
    "contact.form.email": "Эл. почта",
    "contact.form.phone": "Телефон",
    "contact.form.msg": "Сообщение",
    "contact.form.placeholder": "Напишите здесь ваш вопрос или запрос",
    "contact.form.submit": "Отправить сообщение",
    "contact.form.success": "Сообщение успешно отправлено. Мы ответим вам в ближайшее время.",
    "contact.form.err": "Пожалуйста, заполните все поля для отправки сообщения.",
    "contact.schedule": "График работы",
    "catalog.title": "Каталог",
    "filter.cat.label": "Категория:",
    "filter.mat.label": "Материал:",
    "filter.all": "Все",
    "cat.inele": "Кольца",
    "cat.bratari": "Браслеты",
    "cat.lant": "Цепочки",
    "cat.cruci": "Кресты",
    "cat.cercei": "Серьги",
    "mat.aur": "Золото",
    "mat.argint": "Серебро",
    "btn.details": "Подробнее",
    "p1.name": "Золотое кольцо",
    "p1.desc": "Элегантная модель из золота 14к для особых случаев.",
    "p2.name": "Золотой крест",
    "p2.desc": "Классический дизайн, символ элегантности и ценностей.",
    "p3.name": "Браслет Love",
    "p3.desc": "Культовая вещь с символом любви для особых моментов.",
    "p4.name": "Золотые серьги",
    "p4.desc": "Премиум-стиль, вдохновлённый международными luxury-коллекциями.",
    "p5.name": "Серебряный браслет",
    "p5.desc": "Украшение из серебра 925 с безупречной отделкой.",
    "p6.name": "Золотой браслет",
    "p6.desc": "Изысканный дизайн, удобная носка для любого случая.",
    "p7.name": "Золотая цепочка",
    "p7.desc": "Тонкая цепочка элегантного дизайна для повседневного ношения.",
    "p8.name": "Серебряное кольцо",
    "p8.desc": "Современное кольцо из серебра 925, минималистичное и изысканное.",
    "p9.name": "Золотое ожерелье",
    "p9.desc": "Эффектное украшение для особых случаев из высококачественного золота.",
    "cookie.text": "Этот сайт использует файлы cookie для работы и улучшения вашего опыта.",
    "cookie.accept": "Принять cookies",
    "cookie.decline": "Отказаться"
  },
  en: {
    "nav.home": "Home",
    "nav.catalog": "Catalog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title": "Elegant jewelry for special moments",
    "hero.desc": "Discover premium collections inspired by the most refined trends.",
    "hero.cta": "Explore catalog",
    "bs.title": "Best Sellers",
    "bs.p1.name": "Gold Ring",
    "bs.p1.desc": "Popular model for engagements and anniversaries.",
    "bs.p2.name": "Gold Cross",
    "bs.p2.desc": "Fine design for everyday wear or special occasions.",
    "bs.p3.name": "Gold Earrings",
    "bs.p3.desc": "Premium style inspired by luxury collections.",
    "col.title": "Popular Collections",
    "col.1.title": "Engagement",
    "col.1.desc": "Pieces dedicated to important moments.",
    "col.1.cta": "View collection",
    "col.2.title": "Gifts",
    "col.2.desc": "Premium ideas for anniversaries and celebrations.",
    "col.2.cta": "View collection",
    "col.3.title": "Everyday",
    "col.3.desc": "Refined jewelry for daily wear.",
    "col.3.cta": "View collection",
    "why.title": "Why clients choose us",
    "why.1": "Certificate of authenticity for every product",
    "why.2": "Premium gift-ready packaging",
    "why.3": "Personalized consultation at showroom",
    "why.4": "Assistance with size selection",
    "test.title": "Client reviews",
    "test.1.text": "\"Excellent quality and very friendly staff. Highly recommended.\"",
    "test.1.author": "\u2013 Alin Gold Client",
    "test.2.text": "\"Elegant packaging, perfect as a gift. Exactly what I was looking for.\"",
    "test.2.author": "\u2013 Alin Gold Client",
    "gallery.title": "Gallery",
    "nl.title": "Subscribe to our newsletter",
    "nl.desc": "Receive new collections, exclusive offers and premium gift ideas.",
    "nl.placeholder": "Your email address",
    "nl.btn": "Subscribe",
    "faq.title": "Frequently Asked Questions",
    "faq.1.q": "Do you have a physical showroom?",
    "faq.1.a": "Yes, visit us at Bd. Dacia 49/8, Chi\u0219in\u0103u, Monday through Saturday.",
    "faq.2.q": "Can I resize a ring?",
    "faq.2.a": "Yes, depending on the model, after prior verification.",
    "faq.3.q": "Will I receive a certificate of authenticity?",
    "faq.3.a": "Yes, every product is accompanied by the necessary documents.",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.returns": "Returns",
    "about.title": "About Us",
    "about.p1": "At Alin Gold, we believe that a beautiful piece of jewelry is more than an accessory — it is a memory that lasts. From the first concept to the final product, we pay attention to every detail so that you receive an elegant, durable, and truly memorable piece.",
    "about.p2": "Our story began with a desire to bring jewelry with modern design, impeccable craftsmanship, and fair prices to Moldova. In every collection, we combine classic style with current trends, so each client can find the perfect piece for them.",
    "about.p3": "What sets us apart is the way we work with people: we listen, offer honest recommendations, and help you choose the jewelry that is right for your special moment — whether it is an engagement, a gift, or a personal treat.",
    "about.p4": "Our values are clear and firm: uncompromising quality, transparency, respect for the client, and attention to every detail. Each piece is carefully inspected before it comes to you.",
    "about.p5": "Our mission is to make every visit to Alin Gold a premium, personalized, and trustworthy experience.",
    "contact.title": "Contact",
    "contact.form.title": "Send us a message",
    "contact.form.fname": "First name",
    "contact.form.lname": "Last name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.msg": "Message",
    "contact.form.placeholder": "Write your question or request here",
    "contact.form.submit": "Send message",
    "contact.form.success": "Your message was sent successfully. We will get back to you shortly.",
    "contact.form.err": "Please fill in all fields to send your message.",
    "contact.schedule": "Working hours",
    "catalog.title": "Catalog",
    "filter.cat.label": "Category:",
    "filter.mat.label": "Material:",
    "filter.all": "All",
    "cat.inele": "Rings",
    "cat.bratari": "Bracelets",
    "cat.lant": "Necklaces",
    "cat.cruci": "Crosses",
    "cat.cercei": "Earrings",
    "mat.aur": "Gold",
    "mat.argint": "Silver",
    "btn.details": "Details",
    "p1.name": "Gold Ring",
    "p1.desc": "Elegant 14k gold model for special occasions.",
    "p2.name": "Gold Cross",
    "p2.desc": "Classic design, a symbol of elegance and values.",
    "p3.name": "Love Bracelet",
    "p3.desc": "Iconic piece with a love symbol, for special moments.",
    "p4.name": "Gold Earrings",
    "p4.desc": "Premium style inspired by international luxury collections.",
    "p5.name": "Silver Bracelet",
    "p5.desc": "925 silver piece with an impeccable finish.",
    "p6.name": "Gold Bracelet",
    "p6.desc": "Sophisticated design, comfortable wear for any occasion.",
    "p7.name": "Gold Necklace",
    "p7.desc": "Fine chain with elegant design, ideal for everyday wear.",
    "p8.name": "Silver Ring",
    "p8.desc": "Modern 925 silver ring, minimalist and refined.",
    "p9.name": "Gold Collar",
    "p9.desc": "A statement piece for special occasions, crafted from high-quality gold.",
    "cookie.text": "This website uses cookies for functionality and to improve your experience.",
    "cookie.accept": "Accept cookies",
    "cookie.decline": "Decline optional"
  }
};

const LANG_KEY = "alinGoldLang";
const COOKIE_CONSENT_KEY = "alinGoldCookieConsent";

/* ── Bootstrap ───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const yearNode = document.querySelector("[data-year]");
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  initLang();
  initMobileNav();
  initRevealAnimations();
  initCookieBanner();
  initCatalogFilter();
  initContactForm();
});

/* ── Language switcher ───────────────────────────────────────────────────── */
function initLang() {
  const saved = localStorage.getItem(LANG_KEY);
  const lang = (saved && LANGS[saved]) ? saved : "ro";
  applyLang(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.dataset.lang;
      if (!LANGS[chosen]) return;
      localStorage.setItem(LANG_KEY, chosen);
      applyLang(chosen);
    });
  });
}

function applyLang(lang) {
  const t = LANGS[lang];
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

/* ── Mobile navigation ───────────────────────────────────────────────────── */
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const navArea = document.getElementById("nav-area");
  if (!toggle || !navArea) return;

  toggle.addEventListener("click", () => {
    const isOpen = navArea.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "\u00D7" : "\u2630";
  });

  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !navArea.contains(e.target)) {
      navArea.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "\u2630";
    }
  });
}

/* ── Reveal animations ───────────────────────────────────────────────────── */
function initRevealAnimations() {
  const targets = document.querySelectorAll(
    "main section, main .card, main h1, main h2, main p, main form, main aside, main article"
  );
  targets.forEach((node, index) => {
    node.classList.add("reveal");
    window.setTimeout(() => node.classList.add("is-visible"), Math.min(index * 40, 600));
  });
}

/* ── Cookie banner ───────────────────────────────────────────────────────── */
function initCookieBanner() {
  if (getCookieConsent()) return;
  const lang = localStorage.getItem(LANG_KEY) || "ro";
  const t = LANGS[lang];
  const banner = document.createElement("section");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-label", "Cookie");
  banner.innerHTML = `
    <p data-i18n="cookie.text">${t["cookie.text"]}</p>
    <div class="cookie-actions">
      <button class="btn" type="button" data-cookie-action="accept" data-i18n="cookie.accept">${t["cookie.accept"]}</button>
      <button class="btn btn-outline" type="button" data-cookie-action="decline" data-i18n="cookie.decline">${t["cookie.decline"]}</button>
    </div>
  `;
  document.body.appendChild(banner);

  banner.addEventListener("click", (e) => {
    const btn = e.target instanceof HTMLButtonElement ? e.target : null;
    if (!btn) return;
    const action = btn.dataset.cookieAction;
    if (!action) return;
    setCookieConsent(action === "accept" ? "accepted" : "declined");
    banner.remove();
  });
}

function getCookieConsent() {
  const ls = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (ls) return ls;
  const c = document.cookie.split(";").map((s) => s.trim()).find((s) => s.startsWith("alin_gold_cookie_consent="));
  return c ? c.split("=")[1] : "";
}

function setCookieConsent(value) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  document.cookie = `alin_gold_cookie_consent=${value}; max-age=${60 * 60 * 24 * 180}; path=/; SameSite=Lax`;
}

/* ── Catalog filter ──────────────────────────────────────────────────────── */
function initCatalogFilter() {
  const filterBar = document.querySelector(".filter-bar");
  if (!filterBar) return;

  let activeCat = "all";
  let activeMat = "all";

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    if ("filterCat" in btn.dataset) {
      activeCat = btn.dataset.filterCat;
      filterBar.querySelectorAll("[data-filter-cat]").forEach((b) => b.classList.toggle("active", b.dataset.filterCat === activeCat));
    }
    if ("filterMat" in btn.dataset) {
      activeMat = btn.dataset.filterMat;
      filterBar.querySelectorAll("[data-filter-mat]").forEach((b) => b.classList.toggle("active", b.dataset.filterMat === activeMat));
    }

    document.querySelectorAll(".product-card").forEach((card) => {
      const catMatch = activeCat === "all" || card.dataset.cat === activeCat;
      const matMatch = activeMat === "all" || card.dataset.mat === activeMat;
      card.classList.toggle("is-hidden", !(catMatch && matMatch));
    });
  });
}

/* ── Contact form ────────────────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!(form instanceof HTMLFormElement)) return;
  const msgNode = document.getElementById("contact-form-message");
  const lang = localStorage.getItem(LANG_KEY) || "ro";
  const t = LANGS[lang];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const ok = ["firstName", "lastName", "email", "phone", "message"].every((k) => String(d.get(k) || "").trim());
    if (!ok) {
      if (msgNode) { msgNode.style.color = "#f0aaaa"; msgNode.textContent = t["contact.form.err"]; }
      return;
    }
    if (msgNode) { msgNode.style.color = "#95d595"; msgNode.textContent = t["contact.form.success"]; }
    form.reset();
    window.setTimeout(() => { if (msgNode) { msgNode.textContent = ""; msgNode.style.color = ""; } }, 3500);
  });
}
