import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import FeaturedCars from "../components/FeaturedCars.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { vehicles } from "../data/vehiclesData.js";
import { emptyFilters, filtersFromSearch, sortVehicles, titleFromFilters, vehicleMatches } from "../utils/filters.js";
import { normalizeCategory } from "../utils/format.js";

export default function StockPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState(() => filtersFromSearch(searchParams));
  const [sort, setSort] = useState("relevancia");
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);
  const didMount = useRef(false);

  const scrollToResults = () => {
    window.setTimeout(() => {
      document.querySelector("#carros-disponiveis")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  useEffect(() => {
    setFilters(filtersFromSearch(searchParams));
    setSort("relevancia");
  }, [searchParams]);

  useEffect(() => {
    if (!searchParams.toString()) return undefined;

    const timer = window.setTimeout(scrollToResults, 280);

    return () => window.clearTimeout(timer);
  }, [searchParams]);

  useEffect(() => {
    const filterKey = [
      filters.query,
      filters.brand,
      filters.model,
      filters.year,
      filters.price,
      filters.transmission,
      filters.body,
      filters.kmLimit,
      filters.tag,
    ].join("|");

    if (!didMount.current) {
      didMount.current = true;
      return undefined;
    }

    if (!filterKey.replace(/\|/g, "")) return undefined;

    const timer = window.setTimeout(scrollToResults, 180);
    return () => window.clearTimeout(timer);
  }, [filters]);

  const title = titleFromFilters(filters);
  const filteredCars = useMemo(() => sortVehicles(vehicles.filter((vehicle) => vehicleMatches(vehicle, filters)), sort), [filters, sort]);

  const updateFilters = (patch) => {
    setFilters((current) => ({
      ...current,
      ...patch,
      model: patch.brand !== undefined ? "" : patch.model ?? current.model,
      tag: patch.body || patch.price || patch.transmission || patch.query ? "" : current.tag,
    }));
  };

  const submitSearch = (event) => {
    event.preventDefault();
    scrollToResults();
  };

  const clearFilters = () => {
    setFilters(emptyFilters);
    setSort("relevancia");
    navigate("/estoque");
  };

  const quickFilter = (type, value) => {
    if (type === "carroceria") updateFilters({ body: value });
    if (type === "preco") updateFilters({ price: value });
    if (type === "cambio") updateFilters({ transmission: value });
    if (type === "km") updateFilters({ kmLimit: value, tag: "baixa-km" });
  };

  const stockActions = (
    <div className="inventory-actions stock-only" aria-label="Ações do estoque">
      <label className="sort-control">
        Ordenar
        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="relevancia">Relevância</option>
          <option value="menor-preco">Menor preço</option>
          <option value="maior-preco">Maior preço</option>
          <option value="menor-km">Menor km</option>
          <option value="mais-novos">Mais novos</option>
        </select>
      </label>
      <button className="stock-action-button" type="button" onClick={clearFilters}>
        Limpar filtros
      </button>
      <Link className="stock-action-button primary" to="/estoque" onClick={() => setFilters(emptyFilters)}>
        Ver estoque completo
      </Link>
    </div>
  );

  return (
    <>
      <section className="stock-hero" aria-labelledby="stock-page-title">
        <div className="section-container">
          <p className="section-kicker">Estoque de seminovos</p>
          <h1 id="stock-page-title">{title}</h1>
          <p id="stock-page-subtitle">Resultado filtrado do estoque demonstrativo de seminovos da AutoPrime Motors.</p>
        </div>
      </section>

      <SearchBar
        vehicles={vehicles}
        filters={filters}
        onFilterChange={updateFilters}
        onSubmit={submitSearch}
        onQuickFilter={quickFilter}
        stockMode
        resultTitle={title}
        resultCount={filteredCars.length}
        onViewResults={() => document.querySelector("#carros-disponiveis")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        filtersCollapsed={filtersCollapsed}
        onToggleMobileFilters={() => setFiltersCollapsed((value) => !value)}
      />

      <FeaturedCars
        cars={filteredCars}
        title={title}
        kicker="Resultado do estoque"
        countText={`${filteredCars.length} ${filteredCars.length === 1 ? "veículo encontrado" : "veículos encontrados"}`}
        stockActions={stockActions}
        className="stock-inventory"
      />
    </>
  );
}
