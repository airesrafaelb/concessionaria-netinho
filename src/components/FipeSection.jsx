import { BarChart3, Headphones, Handshake, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { openWhatsApp } from "../utils/whatsapp.js";

const initialFipeForm = {
  brand: "",
  model: "",
  year: "",
  version: "",
  state: "",
  name: "",
  phone: "",
  email: "",
  type: "Meu carro",
};

export default function FipeSection() {
  const [form, setForm] = useState(initialFipeForm);
  const navigate = useNavigate();
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const message = (includeContact = false) => {
    const lines = [
      "Olá, gostaria de consultar uma referência de preço pela Tabela Fipe com a AutoPrime Motors.",
      "",
      `Marca: ${form.brand}`,
      `Modelo: ${form.model}`,
      `Ano: ${form.year}`,
      `Versão: ${form.version}`,
      `Tipo de consulta: ${form.type}`,
    ];

    if (includeContact) {
      lines.push(`Estado: ${form.state}`, `Nome: ${form.name}`, `WhatsApp: ${form.phone}`, `Email: ${form.email}`);
    }

    lines.push("", "Pode me ajudar?");
    return lines.join("\n");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    openWhatsApp(message(true));
  };

  return (
    <section className="fipe-view" id="tabela-fipe-view" aria-labelledby="fipe-title">
      <div className="section-container fipe-shell">
        <div className="fipe-hero">
          <p className="section-kicker">Consulta orientada</p>
          <h1 id="fipe-title">Tabela Fipe</h1>
          <p>Consulte a referência de preço para carros novos e usados.</p>
        </div>

        <form className="fipe-form" onSubmit={handleSubmit}>
          <div className="fipe-form-grid">
            <label>
              Marca
              <input name="marca" type="text" placeholder="Ex: Chevrolet" value={form.brand} onChange={update("brand")} required />
            </label>
            <label>
              Modelo
              <input name="modelo" type="text" placeholder="Ex: Onix" value={form.model} onChange={update("model")} required />
            </label>
            <label>
              Ano
              <input name="ano" type="text" placeholder="Ex: 2021/2022" value={form.year} onChange={update("year")} required />
            </label>
            <label>
              Versão
              <input name="versao" type="text" placeholder="Ex: 1.0 Turbo LTZ" value={form.version} onChange={update("version")} required />
            </label>
            <label>
              Estado
              <input name="estado" type="text" placeholder="Ex: Ceará" value={form.state} onChange={update("state")} required />
            </label>
            <label>
              Nome
              <input name="nome" type="text" placeholder="Seu nome" value={form.name} onChange={update("name")} required />
            </label>
            <label>
              WhatsApp
              <input name="whatsapp" type="tel" placeholder="(85) 99999-9999" value={form.phone} onChange={update("phone")} required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="seu@email.com" value={form.email} onChange={update("email")} required />
            </label>
          </div>

          <fieldset className="fipe-type">
            <legend>Tipo de consulta</legend>
            <label>
              <input type="radio" name="tipo-consulta" value="Meu carro" checked={form.type === "Meu carro"} onChange={update("type")} />
              <span>Meu carro</span>
            </label>
            <label>
              <input type="radio" name="tipo-consulta" value="Carro desejado" checked={form.type === "Carro desejado"} onChange={update("type")} />
              <span>Carro desejado</span>
            </label>
          </fieldset>

          <button className="fipe-submit" type="submit">
            Consultar referência
          </button>
        </form>

        <div className="fipe-info">
          <div>
            <p className="section-kicker">Referência de mercado</p>
            <h2>Como a Tabela Fipe ajuda na compra do seu seminovo?</h2>
            <p>
              A Tabela Fipe é uma referência de preço médio de mercado. O valor final de um veículo pode variar conforme versão,
              quilometragem, estado de conservação, opcionais, histórico de manutenção, documentação e condições comerciais.
            </p>
          </div>
          <div className="fipe-trust-grid">
            <TrustCard icon={<BarChart3 aria-hidden="true" />} title="Referência de mercado" />
            <TrustCard icon={<ShieldCheck aria-hidden="true" />} title="Comparação mais segura" />
            <TrustCard icon={<Handshake aria-hidden="true" />} title="Apoio na negociação" />
            <TrustCard icon={<Headphones aria-hidden="true" />} title="Atendimento especializado" />
          </div>
        </div>

        <div className="fipe-warning">
          A consulta exibida nesta página não substitui a verificação oficial da Tabela Fipe. Os valores podem variar conforme versão, ano,
          quilometragem, estado de conservação, opcionais e condições de mercado.
        </div>

        <div className="fipe-actions">
          <button className="card-button primary" type="button" onClick={() => openWhatsApp(message(false))}>
            Falar com especialista
          </button>
          <Link className="card-button" to="/estoque">
            Ver seminovos disponíveis
          </Link>
          <button className="card-button" type="button" onClick={() => navigate("/")}>
            Voltar para home
          </button>
        </div>
      </div>
    </section>
  );
}

function TrustCard({ icon, title }) {
  return (
    <article>
      {icon}
      <strong>{title}</strong>
    </article>
  );
}
