import { normalize, normalizeCategory } from "./format.js";

export const emptyFilters = {
  query: "",
  brand: "",
  model: "",
  year: "",
  price: "",
  transmission: "",
  body: "",
  kmLimit: "",
  tag: "",
};

export function vehicleMatchesTag(vehicle, tag) {
  if (vehicle.tags?.includes(tag)) return true;
  if (tag === "baixa-km") return vehicle.km <= 40000;
  if (tag === "primeiro-carro") return vehicle.preco <= 80000 && normalize(vehicle.cambio) === "manual";
  if (tag === "economico") return vehicle.preco <= 75000 || ["Kwid", "HB20", "Argo"].includes(vehicle.modelo);
  return true;
}

export function vehicleMatches(vehicle, filters) {
  const haystack = normalize(`${vehicle.marca} ${vehicle.modelo} ${vehicle.nome} ${vehicle.versao}`);
  return (
    (!filters.query || haystack.includes(normalize(filters.query))) &&
    (!filters.brand || vehicle.marca === filters.brand) &&
    (!filters.model || vehicle.modelo === filters.model) &&
    (!filters.year || String(vehicle.anoModelo) === String(filters.year)) &&
    (!filters.price || vehicle.preco <= Number(filters.price)) &&
    (!filters.transmission || normalize(vehicle.cambio) === normalize(filters.transmission)) &&
    (!filters.body || vehicle.carroceria === filters.body || vehicle.categoria === normalizeCategory(filters.body)) &&
    (!filters.kmLimit || vehicle.km <= Number(filters.kmLimit)) &&
    (!filters.tag || vehicleMatchesTag(vehicle, filters.tag))
  );
}

export function sortVehicles(list, sort) {
  const ordered = [...list];
  if (sort === "menor-preco") ordered.sort((a, b) => a.preco - b.preco);
  if (sort === "maior-preco") ordered.sort((a, b) => b.preco - a.preco);
  if (sort === "menor-km") ordered.sort((a, b) => a.km - b.km);
  if (sort === "mais-novos") ordered.sort((a, b) => b.anoModelo - a.anoModelo || b.ano - a.ano);
  return ordered;
}

export function filtersFromSearch(searchParams) {
  const categoryMap = {
    hatch: "Hatch",
    sedan: "Sedã",
    suv: "SUV",
  };

  const category = searchParams.get("categoria") || "";
  const transmission = searchParams.get("cambio") === "automatico" ? "Automático" : "";

  return {
    ...emptyFilters,
    query: searchParams.get("busca") || "",
    brand: searchParams.get("marca") || "",
    model: searchParams.get("modelo") || "",
    year: searchParams.get("ano") || "",
    body: categoryMap[category] || "",
    transmission,
    price: searchParams.get("precoMax") || "",
    tag: searchParams.get("tag") || "",
  };
}

export function titleFromFilters(filters) {
  if (filters.query) return `Resultado para "${filters.query}"`;
  if (filters.price) return `Seminovos até R$ ${Number(filters.price).toLocaleString("pt-BR")}`;
  if (filters.tag === "baixa-km") return "Veículos de baixa quilometragem";
  if (filters.tag === "primeiro-carro") return "Carros ideais para primeiro carro";
  if (filters.tag === "economico") return "Carros econômicos";
  if (normalize(filters.transmission) === "automatico") return "Seminovos automáticos";
  if (normalizeCategory(filters.body) === "hatch") return "Hatches seminovos";
  if (normalizeCategory(filters.body) === "sedan") return "Sedãs seminovos";
  if (normalizeCategory(filters.body) === "suv") return "SUVs seminovos";
  return "Estoque AutoPrime";
}
