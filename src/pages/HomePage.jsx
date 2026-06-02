import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCategories from "../components/CarCategories.jsx";
import ContactSection from "../components/ContactSection.jsx";
import FeaturedCars from "../components/FeaturedCars.jsx";
import FinancingSection from "../components/FinancingSection.jsx";
import Footer from "../components/Footer.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { homeFeaturedVehicles, vehicles } from "../data/vehiclesData.js";
import { emptyFilters } from "../utils/filters.js";
import { normalizeCategory } from "../utils/format.js";

export default function HomePage() {
  const [filters, setFilters] = useState(emptyFilters);
  const navigate = useNavigate();

  const updateFilters = (patch) => {
    setFilters((current) => ({
      ...current,
      ...patch,
      model: patch.brand !== undefined ? "" : patch.model ?? current.model,
    }));
  };

  const submitSearch = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (filters.query.trim()) params.set("busca", filters.query.trim());
    if (filters.brand) params.set("marca", filters.brand);
    if (filters.model) params.set("modelo", filters.model);
    if (filters.year) params.set("ano", filters.year);
    if (filters.price) params.set("precoMax", filters.price);
    if (filters.transmission) params.set("cambio", filters.transmission === "Automático" ? "automatico" : filters.transmission);
    if (filters.body) params.set("categoria", normalizeCategory(filters.body));
    navigate(`/estoque${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const quickFilter = (type, value) => {
    const routes = {
      carroceria: `/estoque?categoria=${normalizeCategory(value)}`,
      preco: `/estoque?precoMax=${value}`,
      cambio: "/estoque?cambio=automatico",
      km: "/estoque?tag=baixa-km",
    };
    navigate(routes[type] || "/estoque");
  };

  return (
    <>
      <HeroCarousel />
      <SearchBar vehicles={vehicles} filters={filters} onFilterChange={updateFilters} onSubmit={submitSearch} onQuickFilter={quickFilter} />
      <FeaturedCars cars={homeFeaturedVehicles} />
      <CarCategories />
      <FinancingSection />
      <ContactSection />
      <Footer />
    </>
  );
}
