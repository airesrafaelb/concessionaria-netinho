import { Link } from "react-router-dom";
import whatsappIcon from "../../whatsapp.svg";
import Logo from "./Logo.jsx";
import { createWhatsAppLink, footerWhatsAppMessage } from "../utils/whatsapp.js";

export default function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="section-container footer-shell">
        <div className="footer-brand-row">
          <Logo className="footer-brand" />
          <p>Portal comercial de veículos seminovos selecionados em Fortaleza/CE.</p>
        </div>

        <div className="footer-grid">
          <FooterColumn title="Comprar" links={[
            ["Seminovos em destaque", "/#carros-disponiveis"],
            ["Estoque completo", "/estoque"],
            ["Hatches", "/estoque?categoria=hatch"],
            ["Sedãs", "/estoque?categoria=sedan"],
            ["SUVs", "/estoque?categoria=suv"],
            ["Automáticos", "/estoque?cambio=automatico"],
            ["Econômicos", "/estoque?tag=economico"],
          ]} />
          <FooterColumn title="Financiamento" links={[
            ["Simular financiamento", "/#financiamento"],
            ["Como funciona", "/#financiamento"],
            ["Entrada facilitada", "/#financiamento"],
            ["Análise de crédito", "/#financiamento"],
            ["Atendimento via WhatsApp", "/#financiamento"],
          ]} />
          <FooterColumn title="AutoPrime Motors" links={[
            ["Quem somos", "#contato"],
            ["Nossa proposta", "#contato"],
            ["Procedência dos veículos", "/#carros-disponiveis"],
            ["Garantia e revisão", "/#carros-disponiveis"],
            ["Atendimento em Fortaleza/CE", "#contato"],
          ]} />
          <FooterColumn title="Ajuda" links={[
            ["Perguntas frequentes", "#contato"],
            ["Como comprar", "/#carros-disponiveis"],
            ["Como reservar um veículo", "#contato"],
            ["Dúvidas sobre financiamento", "/#financiamento"],
            ["Falar com a equipe", "#contato"],
          ]} />
          <FooterColumn title="Institucional" links={[
            ["Política de privacidade", "#contato"],
            ["Termos de uso", "#contato"],
            ["Contato", "#contato"],
            ["Localização", "#contato"],
            ["Horário de atendimento", "#contato"],
          ]} />

          <div className="footer-cta">
            <span>Atendimento AutoPrime</span>
            <strong>Encontre seu próximo seminovo com mais segurança e praticidade.</strong>
            <p>Fale com nossa equipe para receber orientação sobre estoque, condições e financiamento.</p>
            <a className="whatsapp-button footer-whatsapp" href={createWhatsAppLink(footerWhatsAppMessage())} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
              <img src={whatsappIcon} alt="" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <strong>AutoPrime Motors</strong>
          <span>Fortaleza/CE</span>
          <span>WhatsApp</span>
          <span>© 2026 AutoPrime Motors. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map(([label, href]) =>
        href.startsWith("/") ? (
          <Link to={href} key={`${title}-${label}`}>
            {label}
          </Link>
        ) : (
          <a href={href} key={`${title}-${label}`}>
            {label}
          </a>
        )
      )}
    </div>
  );
}
