import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "alin-gold-api" });
});

app.get("/api/products", (_req, res) => {
  res.json([
    { id: 1, name: "Inel clasic", price: 1200, image: "produs-inel-01.jpg" },
    { id: 2, name: "Lant elegant", price: 2200, image: "produs-lant-01.jpg" }
  ]);
});

app.post("/api/orders", (req, res) => {
  const payload = req.body || {};
  const customer = payload.customer || {};
  const address = payload.address || {};
  const items = Array.isArray(payload.items) ? payload.items : [];
  const paymentMethod = String(payload.paymentMethod || "");
  const deliveryMethod = String(payload.deliveryMethod || "courier");
  const termsAccepted = Boolean(payload.termsAccepted);

  const allowedPayments = ["cash", "card", "transfer", "online_card"];
  const allowedDelivery = ["courier", "pickup"];
  const hasRequired = customer.firstName && customer.lastName && customer.email && customer.phone && address.city && address.street && address.streetNumber && paymentMethod && deliveryMethod;
  const hasValidOptions = allowedPayments.includes(paymentMethod) && allowedDelivery.includes(deliveryMethod);
  if (!hasRequired || items.length === 0) {
    return res.status(400).json({
      message: "Date checkout incomplete. Verifica campurile obligatorii si cosul."
    });
  }
  if (!hasValidOptions || !termsAccepted) {
    return res.status(400).json({
      message: "Metoda de plata/livrare este invalida sau termenii nu au fost acceptati."
    });
  }

  const subtotal = items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0), 0);
  const shipping = deliveryMethod === "pickup" ? 0 : 70;
  const total = subtotal + shipping;

  res.status(201).json({
    message: "Comanda primita",
    orderId: `AG-${Date.now()}`,
    totals: { subtotal, shipping, total },
    paymentMethod,
    deliveryMethod
  });
});

app.listen(port, () => {
  console.log(`Alin Gold API running on http://localhost:${port}`);
});
