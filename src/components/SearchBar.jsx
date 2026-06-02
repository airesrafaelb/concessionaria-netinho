import { ArrowRight, Calendar, Car, Gauge, LayoutGrid, Search, ShieldCheck, SlidersHorizontal, Tag } from "lucide-react";
import { uniqueSorted } from "../utils/format.js";

const priceOptions = [
  ["60000", "Até R$ 60 mil"],
  ["80000", "Até R$ 80 mil"],
  ["100000", "Até R$ 100 mil"],
  ["130000", "Até R$ 130 mil"],
];

export default function SearchBar({
  vehicles,
  filters,
  onFilterChange,
  onSubmit,
  onQuickFilter,
  stockMode = false,
  filtersCollapsed = false,
  onToggleMobileFilters,
}) {
  const brands = uniqueSorted(vehicles.map((vehicle) => vehicle.marca));
  const models = uniqueSorted(vehicles.filter((vehicle) => !filters.brand || vehicle.marca === filters.brand).map((vehicle) => vehicle.modelo));
  const years = uniqueSorted(vehicles.map((vehicle) => String(vehicle.anoModelo))).reverse();
  const bodies = uniqueSorted(vehicles.map((vehicle) => vehicle.carroceria));

  const setValue = (key) => (event) => onFilterChange({ [key]: event.target.value });

  return (
    <section className={`vehicle-search${stockMode ? " stock-search" : ""}`} aria-labelledby={stockMode ? undefined : "vehicle-search-title"}>
      <div className="search-shell">
        {!stockMode && (
          <div className="search-heading">
            <p className="search-eyebrow">
              <ShieldCheck className="icon-small" aria-hidden="true" />
              Seminovos selecionados
            </p>
            <h1 id="vehicle-search-title">Encontre seu seminovo ideal.</h1>
            <p>Busque por modelo, marca, preço e condições de financiamento.</p>
          </div>
        )}

        <div className="search-card">
          {stockMode && (
            <button className="mobile-filter-button stock-only" type="button" aria-expanded={!filtersCollapsed} onClick={onToggleMobileFilters}>
              Filtrar
            </button>
          )}

          <form className="search-form" onSubmit={onSubmit} aria-label="Pesquisa de veículos">
            <div className="search-main">
              <label className="search-input-wrap" htmlFor="vehicle-query">
                <Search className="icon-small" aria-hidden="true" />
                <input id="vehicle-query" name="vehicle-query" type="search" placeholder="Digite modelo, marca ou versão" value={filters.query} onChange={setValue("query")} />
              </label>
              <button className="search-button" type="submit">
                Buscar veículos
                <ArrowRight className="icon-small" aria-hidden="true" />
              </button>
            </div>

            <div className="filter-grid" aria-label="Filtros de pesquisa" style={stockMode && filtersCollapsed ? { display: "none" } : undefined}>
              <label className="filter-field">
                <Car className="icon-small" aria-hidden="true" />
                <span>Marca</span>
                <select value={filters.brand} onChange={setValue("brand")}>
                  <option value="">Todas</option>
                  {brands.map((brand) => (
                    <option value={brand} key={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </label>
              <label className="filter-field">
                <Car className="icon-small" aria-hidden="true" />
                <span>Modelo</span>
                <select value={filters.model} onChange={setValue("model")}>
                  <option value="">Todos</option>
                  {models.map((model) => (
                    <option value={model} key={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </label>
              <label className="filter-field">
                <Calendar className="icon-small" aria-hidden="true" />
                <span>Ano</span>
                <select value={filters.year} onChange={setValue("year")}>
                  <option value="">Todos</option>
                  {years.map((year) => (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>
              <label className="filter-field">
                <Tag className="icon-small" aria-hidden="true" />
                <span>Preço</span>
                <select value={filters.price} onChange={setValue("price")}>
                  <option value="">Todos</option>
                  {priceOptions.map(([value, label]) => (
                    <option value={value} key={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="filter-field">
                <SlidersHorizontal className="icon-small" aria-hidden="true" />
                <span>Câmbio</span>
                <select value={filters.transmission} onChange={setValue("transmission")}>
                  <option value="">Todos</option>
                  <option value="Automático">Automático</option>
                  <option value="Manual">Manual</option>
                </select>
              </label>
              <label className="filter-field">
                <LayoutGrid className="icon-small" aria-hidden="true" />
                <span>Carroceria</span>
                <select value={filters.body} onChange={setValue("body")}>
                  <option value="">Todas</option>
                  {bodies.map((body) => (
                    <option value={body} key={body}>
                      {body}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {!stockMode && (
              <QuickSearch onQuickFilter={onQuickFilter} />
            )}
          </form>
        </div>

        {!stockMode && (
          <div className="trust-row" aria-label="Garantias da AutoPrime">
            <TrustItem icon={<ShieldCheck className="icon-benefit" aria-hidden="true" />} title="Laudo cautelar aprovado" text="Mais segurança para você" />
            <TrustItem icon={<ShieldCheck className="icon-benefit" aria-hidden="true" />} title="Procedência garantida" text="Histórico verificado" />
            <TrustItem icon={<SlidersHorizontal className="icon-benefit" aria-hidden="true" />} title="Garantia de até 1 ano" text="Mais tranquilidade sempre" />
          </div>
        )}
      </div>
    </section>
  );
}

function QuickSearch({ onQuickFilter }) {
  const buttons = [
    ["carroceria", "SUV", <Car className="icon-small" aria-hidden="true" />, "SUVs"],
    ["carroceria", "Sedã", <Car className="icon-small" aria-hidden="true" />, "Sedãs"],
    ["carroceria", "Hatch", <Car className="icon-small" aria-hidden="true" />, "Hatch"],
    ["preco", "60000", <Tag className="icon-small" aria-hidden="true" />, "Até R$ 60 mil"],
    ["km", "40000", <Gauge className="icon-small" aria-hidden="true" />, "Baixa quilometragem"],
    ["cambio", "Automático", <SlidersHorizontal className="icon-small" aria-hidden="true" />, "Automáticos"],
  ];

  return (
    <div className="quick-search">
      <div className="quick-title">
        <span></span>
        Buscas rápidas
        <span></span>
      </div>
      <div className="quick-grid">
        {buttons.map(([type, value, icon, label]) => (
          <button className="quick-button" type="button" key={`${type}-${value}`} onClick={() => onQuickFilter(type, value)}>
            {icon}
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function TrustItem({ icon, title, text }) {
  return (
    <div className="trust-item">
      {icon}
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}
