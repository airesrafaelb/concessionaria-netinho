import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import whatsappIcon from "../../whatsapp.svg";
import AnnouncementBar from "./AnnouncementBar.jsx";
import Logo from "./Logo.jsx";
import { createWhatsAppLink, headerWhatsAppMessage } from "../utils/whatsapp.js";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.8 18.7a6 6 0 0 1 10.4 0" />
    </svg>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isStock = location.pathname === "/estoque";
  const whatsappHref = createWhatsAppLink(headerWhatsAppMessage(isStock));

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <AnnouncementBar />
      <div className="header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Menu principal">
          <Link className="nav-link" to="/#carros-disponiveis">
            Carros disponíveis
          </Link>
          <Link className="nav-link" to="/#financiamento">
            Financiamento
          </Link>
          <Link className="nav-link" to="/tabela-fipe">
            Tabela Fipe
          </Link>
          <Link className="nav-link" to="/#contato">
            Localização
          </Link>
        </nav>

        <div className="header-actions">
          <a className="auth-link" href="#entrar" aria-label="Entrar">
            <UserIcon />
            Entrar
          </a>
          <a className="whatsapp-button desktop-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
            <img src={whatsappIcon} alt="" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-nav${isOpen ? " is-open" : ""}`} id="mobile-menu" aria-label="Menu mobile">
        <Link className="mobile-link" to="/#carros-disponiveis" onClick={closeMenu}>
          Carros disponíveis
        </Link>
        <Link className="mobile-link" to="/#financiamento" onClick={closeMenu}>
          Financiamento
        </Link>
        <Link className="mobile-link" to="/tabela-fipe" onClick={closeMenu}>
          Tabela Fipe
        </Link>
        <Link className="mobile-link" to="/#contato" onClick={closeMenu}>
          Localização
        </Link>
        <a className="mobile-link mobile-auth" href="#entrar" onClick={closeMenu}>
          <UserIcon />
          Entrar
        </a>
        <a className="whatsapp-button mobile-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          <img src={whatsappIcon} alt="" aria-hidden="true" />
          Falar no WhatsApp
        </a>
      </nav>
    </header>
  );
}
