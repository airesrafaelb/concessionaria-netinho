export const FINANCE_DISCLAIMER =
  "Valores sujeitos à análise de crédito, entrada, prazo e instituição financeira.";

export const FALLBACK_CAR_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23f3f4f6'/%3E%3Cpath d='M160 300h60l50-92c18-33 52-53 90-53h112c38 0 72 20 90 53l50 92h48c28 0 50 22 50 50v34h-74a58 58 0 0 1-116 0H300a58 58 0 0 1-116 0h-74v-34c0-28 22-50 50-50Z' fill='none' stroke='%230f7a3a' stroke-width='18' stroke-linejoin='round'/%3E%3Ccircle cx='242' cy='384' r='38' fill='none' stroke='%230f7a3a' stroke-width='18'/%3E%3Ccircle cx='678' cy='384' r='38' fill='none' stroke='%230f7a3a' stroke-width='18'/%3E%3Cpath d='M310 210h110v78H270l40-78Zm156 0h70l42 78H466v-78Z' fill='none' stroke='%230f7a3a' stroke-width='14' stroke-linejoin='round'/%3E%3Ctext x='400' y='455' text-anchor='middle' font-family='Arial,sans-serif' font-size='26' font-weight='700' fill='%23111827'%3EAutoPrime Motors%3C/text%3E%3C/svg%3E";

export function formatKm(km) {
  return `${km.toLocaleString("pt-BR")} km`;
}

export function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => String(a).localeCompare(String(b), "pt-BR"));
}

export function normalizeCategory(value) {
  if (value === "Hatch") return "hatch";
  if (value === "Sedã") return "sedan";
  if (value === "SUV") return "suv";
  return normalize(value);
}
