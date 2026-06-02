import { useState } from "react";
import { vehicles, homeFeaturedVehicles } from "../data/vehiclesData.js";
import { openWhatsApp } from "../utils/whatsapp.js";

const initialForm = {
  name: "",
  phone: "",
  vehicleId: "",
  down: "",
  installments: "48",
  income: "",
  cnh: "Sim",
  restriction: "Não",
};

export default function FinancingSection() {
  const [form, setForm] = useState(initialForm);
  const financeOptions = [...homeFeaturedVehicles, ...vehicles].filter(
    (vehicle, index, list) => list.findIndex((item) => item.id === vehicle.id) === index
  );
  const selectedVehicle = financeOptions.find((vehicle) => vehicle.id === form.vehicleId);

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    openWhatsApp(
      [
        "Olá, gostaria de simular um financiamento com a AutoPrime Motors.",
        "",
        `Nome: ${form.name}`,
        `Veículo de interesse: ${selectedVehicle ? `${selectedVehicle.nome} ${selectedVehicle.versao}` : ""}`,
        `Valor de entrada: ${form.down}`,
        `Parcelas desejadas: ${form.installments}`,
        `Renda aproximada: ${form.income}`,
        `Possui CNH? ${form.cnh}`,
        `Possui restrição no nome? ${form.restriction}`,
        "",
        "Pode me ajudar com a simulação?",
      ].join("\n")
    );
  };

  return (
    <section className="finance-section" id="financiamento" aria-labelledby="finance-title">
      <div className="section-container finance-layout">
        <div className="finance-copy">
          <p className="section-kicker">Financiamento</p>
          <h2 id="finance-title">Simule sua aprovação com a AutoPrime</h2>
          <p>Envie seus dados pelo WhatsApp e nossa equipe retorna com opções compatíveis com seu perfil, entrada e veículo desejado.</p>
          <div className="finance-note">
            Financiamento sujeito à análise de crédito. As condições podem variar conforme perfil do cliente, entrada e instituição financeira.
          </div>
        </div>

        <form className="finance-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input name="nome" type="text" placeholder="Seu nome completo" value={form.name} onChange={update("name")} required />
          </label>
          <label>
            WhatsApp
            <input name="whatsapp" type="tel" placeholder="(85) 99999-9999" value={form.phone} onChange={update("phone")} required />
          </label>
          <label>
            Veículo de interesse
            <select name="veiculo" value={form.vehicleId} onChange={update("vehicleId")} required>
              <option value="">Selecione um veículo</option>
              {financeOptions.map((vehicle) => (
                <option value={vehicle.id} key={vehicle.id}>
                  {vehicle.nome} {vehicle.versao}
                </option>
              ))}
            </select>
          </label>
          <div className="form-row">
            <label>
              Valor de entrada
              <input name="entrada" type="text" placeholder="Ex: R$ 15.000" value={form.down} onChange={update("down")} />
            </label>
            <label>
              Parcelas desejadas
              <select name="parcelas" value={form.installments} onChange={update("installments")}>
                <option value="36">36 parcelas</option>
                <option value="48">48 parcelas</option>
                <option value="60">60 parcelas</option>
              </select>
            </label>
          </div>
          <label>
            Renda aproximada
            <input name="renda" type="text" placeholder="Ex: R$ 4.500" value={form.income} onChange={update("income")} />
          </label>
          <div className="form-row">
            <label>
              Possui CNH?
              <select name="cnh" value={form.cnh} onChange={update("cnh")}>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </label>
            <label>
              Possui restrição no nome?
              <select name="restricao" value={form.restriction} onChange={update("restriction")}>
                <option value="Não">Não</option>
                <option value="Sim">Sim</option>
                <option value="Prefiro informar no atendimento">Prefiro informar no atendimento</option>
              </select>
            </label>
          </div>
          <button className="finance-submit" type="submit">
            Enviar simulação pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
