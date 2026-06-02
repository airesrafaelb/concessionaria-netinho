import { useState } from "react";
import VehicleCard from "./VehicleCard.jsx";
import VehicleModal from "./VehicleModal.jsx";

export default function FeaturedCars({
  cars,
  title = "Seminovos em destaque",
  kicker = "Estoque AutoPrime",
  countText,
  stockActions = null,
  className = "",
}) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <section className={`inventory-section${className ? ` ${className}` : ""}`} id="carros-disponiveis" aria-labelledby="inventory-title">
      <div className="section-container">
        <div className="section-header">
          <div>
            <p className="section-kicker">{kicker}</p>
            <h2 id="inventory-title">{title}</h2>
          </div>
          <div className="inventory-meta">
            <p id="inventory-count">{countText || `${cars.length} seminovos em destaque`}</p>
            {stockActions}
          </div>
        </div>
        <div className="vehicle-grid" aria-live="polite">
          {cars.length > 0 ? (
            cars.map((vehicle) => <VehicleCard vehicle={vehicle} key={vehicle.id} onDetails={setSelectedVehicle} />)
          ) : (
            <div className="empty-state">Nenhum seminovo encontrado com esses filtros. Ajuste a busca ou veja o estoque completo para encontrar outras opções.</div>
          )}
        </div>
      </div>
      <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
    </section>
  );
}
