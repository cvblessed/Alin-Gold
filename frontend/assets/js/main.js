document.addEventListener("DOMContentLoaded", () => {
  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  initRevealAnimations();
  initCookieBanner();
  initCartActions();
  renderCartPage();
  renderCheckoutPage();
  renderConfirmationPage();
  initContactForm();
});

const CART_KEY = "alinGoldCart";
const API_BASE = "http://localhost:4000/api";
const SHIPPING_PRICE = 70;
const COOKIE_CONSENT_KEY = "alinGoldCookieConsent";

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch (_error) {
    return [];
  }
}

function writeCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function formatPrice(value) {
  return `${Number(value).toFixed(0)} MDL`;
}

function calcSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function resolveImageSrc(imageName) {
  if (!imageName) return "";
  if (imageName.startsWith("http://") || imageName.startsWith("https://") || imageName.startsWith("../")) {
    return imageName;
  }
  return `../photos/${encodeURIComponent(imageName)}`;
}

function getShippingPrice(deliveryMethod) {
  if (deliveryMethod === "pickup") return 0;
  return SHIPPING_PRICE;
}

function upsertItem(product) {
  const cart = readCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  writeCart(cart);
}

function initCartActions() {
  const buttons = document.querySelectorAll(".js-add-to-cart");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      upsertItem({
        id: button.dataset.id,
        name: button.dataset.name,
        price: Number(button.dataset.price || 0),
        image: button.dataset.image || ""
      });
      button.textContent = "Adaugat";
      window.setTimeout(() => {
        button.textContent = "Adauga in cos";
      }, 700);
    });
  });
}

function updateSummary(prefix, items, shippingPrice) {
  const subtotal = calcSubtotal(items);
  const shipping = items.length ? shippingPrice : 0;
  const total = subtotal + shipping;
  const subtotalEl = document.getElementById(`${prefix}-subtotal`);
  const shippingEl = document.getElementById(`${prefix}-shipping`);
  const totalEl = document.getElementById(`${prefix}-total`);
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = formatPrice(shipping);
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function renderCartPage() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  const emptyNode = document.getElementById("cart-empty");
  const checkoutBtn = document.getElementById("checkout-btn");
  const cart = readCart();
  container.innerHTML = "";

  if (!cart.length) {
    if (emptyNode) emptyNode.style.display = "block";
    if (checkoutBtn) checkoutBtn.classList.add("is-disabled");
    updateSummary("cart", cart, SHIPPING_PRICE);
    return;
  }

  if (emptyNode) emptyNode.style.display = "none";
  if (checkoutBtn) checkoutBtn.classList.remove("is-disabled");

  cart.forEach((item) => {
    const row = document.createElement("article");
    row.className = "card cart-item";
    const imageSrc = resolveImageSrc(item.image);
    row.innerHTML = `
      <div class="cart-item-head">
        <h3>${item.name}</h3>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
      </div>
      ${imageSrc ? `<img class="site-image" src="${imageSrc}" alt="${item.name}" loading="lazy" />` : ""}
      <div class="qty-controls">
        <button type="button" data-action="decrease">-</button>
        <span>${item.quantity}</span>
        <button type="button" data-action="increase">+</button>
        <button type="button" class="danger" data-action="remove">Sterge</button>
      </div>
    `;
    row.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) return;
      const next = readCart();
      const found = next.find((product) => product.id === item.id);
      if (!found) return;
      if (target.dataset.action === "increase") found.quantity += 1;
      if (target.dataset.action === "decrease") found.quantity = Math.max(1, found.quantity - 1);
      if (target.dataset.action === "remove") {
        writeCart(next.filter((product) => product.id !== item.id));
      } else {
        writeCart(next);
      }
      renderCartPage();
    });
    container.appendChild(row);
  });

  updateSummary("cart", cart, SHIPPING_PRICE);
}

function renderCheckoutPage() {
  const form = document.getElementById("checkout-form");
  if (!(form instanceof HTMLFormElement)) return;

  const cart = readCart();
  const errorEl = document.getElementById("checkout-error");
  const submitBtn = document.getElementById("checkout-submit");
  const list = document.getElementById("checkout-items");
  const deliveryRadios = document.querySelectorAll("input[name='deliveryMethod']");
  const getSelectedDelivery = () => {
    const selected = document.querySelector("input[name='deliveryMethod']:checked");
    if (!(selected instanceof HTMLInputElement)) return "courier";
    return selected.value;
  };
  const refreshCheckoutSummary = () => {
    updateSummary("checkout", cart, getShippingPrice(getSelectedDelivery()));
  };

  if (!cart.length) {
    if (errorEl) errorEl.textContent = "Cosul este gol. Adauga produse inainte de checkout.";
    if (submitBtn) submitBtn.setAttribute("disabled", "true");
  }

  if (list) {
    list.innerHTML = cart.map((item) => `<div class="summary-row"><span>${item.name} x${item.quantity}</span><strong>${formatPrice(item.price * item.quantity)}</strong></div>`).join("");
  }
  refreshCheckoutSummary();
  deliveryRadios.forEach((radio) => {
    radio.addEventListener("change", refreshCheckoutSummary);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = {
      customer: {
        firstName: String(formData.get("firstName") || "").trim(),
        lastName: String(formData.get("lastName") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim()
      },
      address: {
        city: String(formData.get("city") || "").trim(),
        street: String(formData.get("street") || "").trim(),
        streetNumber: String(formData.get("streetNumber") || "").trim(),
        postalCode: String(formData.get("postalCode") || "").trim()
      },
      paymentMethod: String(formData.get("paymentMethod") || "").trim(),
      deliveryMethod: String(formData.get("deliveryMethod") || "").trim(),
      termsAccepted: formData.get("termsAccepted") === "on",
      notes: String(formData.get("notes") || "").trim(),
      items: cart
    };

    const invalid = !payload.customer.firstName || !payload.customer.lastName || !payload.customer.email || !payload.customer.phone || !payload.address.city || !payload.address.street || !payload.address.streetNumber || !payload.paymentMethod || !payload.deliveryMethod || !payload.termsAccepted || !payload.items.length;
    if (invalid) {
      if (errorEl) errorEl.textContent = "Completeaza toate campurile obligatorii si accepta termenii.";
      return;
    }

    if (submitBtn) submitBtn.setAttribute("disabled", "true");
    if (errorEl) errorEl.textContent = "";

    try {
      const response = await fetch(`${API_BASE}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || "A aparut o eroare la trimitere.");
      localStorage.setItem("alinGoldLastOrderId", data.orderId || "");
      writeCart([]);
      window.location.href = "confirmare.html";
    } catch (error) {
      if (errorEl) errorEl.textContent = error instanceof Error ? error.message : "Nu s-a putut trimite comanda.";
    } finally {
      if (submitBtn) submitBtn.removeAttribute("disabled");
    }
  });
}

function renderConfirmationPage() {
  const idNode = document.getElementById("order-id");
  if (!idNode) return;
  const orderId = localStorage.getItem("alinGoldLastOrderId");
  idNode.textContent = orderId || "AG-pending";
}

function initRevealAnimations() {
  const revealTargets = document.querySelectorAll("main section, main .card, main .placeholder, main h1, main h2, main p, main form, main aside, main article");
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
    <p>Acest site foloseste cookie-uri pentru functionare, cos de cumparaturi si imbunatatirea experientei.</p>
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
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  const found = cookies.find((cookie) => cookie.startsWith("alin_gold_cookie_consent="));
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
