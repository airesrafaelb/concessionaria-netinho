import { useState } from "react";
import whatsappIcon from "../../whatsapp.svg";
import { FALLBACK_CAR_IMAGE, FINANCE_DISCLAIMER, formatKm } from "../utils/format.js";
import { createWhatsAppLink, openWhatsApp, vehicleFinanceMessage, vehicleInterestMessage } from "../utils/whatsapp.js";

export default function VehicleCard({ vehicle, onDetails }) {
  const [imageSrc, setImageSrc] = useState(vehicle.imagem);

  return (
    <article className="vehicle-card">
      <div className="vehicle-media">
        <img
          src={imageSrc}
          alt={`${vehicle.nome} seminovo à venda na AutoPrime Motors`}
          onError={() => setImageSrc(FALLBACK_CAR_IMAGE)}
        />
        <span className="vehicle-badge">{vehicle.selo}</span>
      </div>
      <div className="vehicle-card-body">
        <div className="vehicle-title">
          <h3>{vehicle.nome}</h3>
          <p>{vehicle.versao}</p>
        </div>
        <div className="vehicle-specs">
          <span>
            {vehicle.ano}/{vehicle.anoModelo}
          </span>
          <span>{formatKm(vehicle.km)}</span>
          <span>{vehicle.cambio}</span>
          <span>{vehicle.combustivel}</span>
        </div>
        <div className="vehicle-price">
          <strong>{vehicle.precoFormatado}</strong>
          <span>{vehicle.parcelaEstimada}</span>
          <small>{FINANCE_DISCLAIMER}</small>
        </div>
        <div className="vehicle-actions">
          <button className="card-button primary" type="button" onClick={() => onDetails(vehicle)}>
            Ver detalhes
          </button>
          <button className="card-button" type="button" onClick={() => openWhatsApp(vehicleFinanceMessage(vehicle))}>
            Simular financiamento
          </button>
          <a className="card-button whatsapp-card" href={createWhatsAppLink(vehicleInterestMessage(vehicle))} target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
