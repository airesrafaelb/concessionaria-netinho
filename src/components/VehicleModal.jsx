import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { FALLBACK_CAR_IMAGE, FINANCE_DISCLAIMER, formatKm } from "../utils/format.js";
import { createWhatsAppLink, openWhatsApp, vehicleDetailsMessage, vehicleFinanceMessage } from "../utils/whatsapp.js";

export default function VehicleModal({ vehicle, onClose }) {
  const [imageSrc, setImageSrc] = useState(vehicle?.imagem);

  useEffect(() => {
    setImageSrc(vehicle?.imagem);
  }, [vehicle]);

  useEffect(() => {
    if (!vehicle) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  return (
    <dialog className="vehicle-modal" open>
      <button className="modal-close" type="button" aria-label="Fechar detalhes" onClick={onClose}>
        <X aria-hidden="true" />
      </button>
      <div className="modal-content">
        <img src={imageSrc} alt={`${vehicle.nome} seminovo à venda na AutoPrime Motors`} onError={() => setImageSrc(FALLBACK_CAR_IMAGE)} />
        <div className="modal-info">
          <span className="vehicle-badge">{vehicle.selo}</span>
          <h3>{vehicle.nome}</h3>
          <p>{vehicle.versao}</p>
          <div className="modal-price">{vehicle.precoFormatado}</div>
          <p>
            <strong>{vehicle.parcelaEstimada}</strong>
            <br />
            <small>{FINANCE_DISCLAIMER}</small>
          </p>
          <div className="modal-spec-grid">
            <span>
              Ano {vehicle.ano}/{vehicle.anoModelo}
            </span>
            <span>{formatKm(vehicle.km)}</span>
            <span>{vehicle.cambio}</span>
            <span>{vehicle.combustivel}</span>
            <span>{vehicle.carroceria}</span>
            <span>{vehicle.status}</span>
          </div>
          <strong>Opcionais</strong>
          <div className="optional-list">
            {vehicle.opcionais.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p>Veículo com procedência verificada, laudo cautelar aprovado e garantia conforme condições da loja.</p>
          <div className="vehicle-actions">
            <a className="card-button primary" href={createWhatsAppLink(vehicleDetailsMessage(vehicle))} target="_blank" rel="noopener noreferrer">
              Tenho interesse
            </a>
            <button className="card-button" type="button" onClick={() => openWhatsApp(vehicleFinanceMessage(vehicle))}>
              Simular financiamento
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
