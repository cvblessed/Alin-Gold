document.addEventListener("DOMContentLoaded", () => {
  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  initRevealAnimations();
  initCookieBanner();
  initContactForm();
});

const COOKIE_CONSENT_KEY = "alinGoldCookieConsent";

function initRevealAnimations() {
  const revealTargets = document.querySelectorAll(
    "main section, main .card, main .placeholder, main h1, main h2, main p, main form, main aside, main article"
  );
  revealTargets.forEach((node, index) => {
    node.classList.add("reveal");
    window.setTimeout(() => {
      node.classList.add("is-visible");
    }, Math.min(index * 45, 700));
  });
}

function initCookieBanner() {
  if (getCookieConsent()) return;
  const banner = document.createElement("section");
  banner.className = "cookie-banner";
  banner.innerHTML = `
    <p>Acest site foloseste cookie-uri pentru functionare si imbunatatirea experientei.</p>
    <div class="cookie-actions">
      <button class="btn" type="button" data-cookie-action="accept">Accept cookie-uri</button>
      <button class="btn btn-outline" type="button" data-cookie-action="decline">Refuz cookie-uri optionale</button>
    </div>
  `;
  document.body.appendChild(banner);

  banner.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;
    const action = target.dataset.cookieAction;
    if (!action) return;
    setCookieConsent(action === "accept" ? "accepted" : "declined");
    banner.remove();
  });
}

function getCookieConsent() {
  const fromStorage = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (fromStorage) return fromStorage;
  const cookies = document.cookie.split(";").map((c) => c.trim());
  const found = cookies.find((c) => c.startsWith("alin_gold_cookie_consent="));
  if (!found) return "";
  return found.split("=")[1] || "";
}

function setCookieConsent(value) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  document.cookie = `alin_gold_cookie_consent=${value}; max-age=${60 * 60 * 24 * 180}; path=/; SameSite=Lax`;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!(form instanceof HTMLFormElement)) return;
  const messageNode = document.getElementById("contact-form-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!firstName || !lastName || !email || !phone || !message) {
      if (messageNode) messageNode.textContent = "Completeaza toate campurile pentru a trimite mesajul.";
      return;
    }

    if (messageNode) {
      messageNode.style.color = "#95d595";
      messageNode.textContent = "Mesajul a fost trimis cu succes. Revenim in cel mai scurt timp.";
    }
    form.reset();
    window.setTimeout(() => {
      if (messageNode) {
        messageNode.textContent = "";
        messageNode.style.color = "";
      }
    }, 3200);
  });
}
