import { Car, Fuel, Gauge, KeyRound, SlidersHorizontal, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Hatches", href: "/estoque?categoria=hatch", icon: Car },
  { label: "Sedãs", href: "/estoque?categoria=sedan", icon: Car },
  { label: "SUVs", href: "/estoque?categoria=suv", icon: Car },
  { label: "Automáticos", href: "/estoque?cambio=automatico", icon: SlidersHorizontal },
  { label: "Até R$ 60 mil", href: "/estoque?precoMax=60000", icon: Tag },
  { label: "Baixa quilometragem", href: "/estoque?tag=baixa-km", icon: Gauge },
  { label: "Primeiro carro", href: "/estoque?tag=primeiro-carro", icon: KeyRound },
  { label: "Econômicos", href: "/estoque?tag=economico", icon: Fuel },
];

export default function CarCategories() {
  return (
    <section className="category-section" aria-labelledby="category-title">
      <div className="section-container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Encontre por perfil</p>
            <h2 id="category-title">Encontre por categoria</h2>
          </div>
          <p>Atalhos para acessar o estoque filtrado da AutoPrime Motors.</p>
        </div>

        <div className="category-grid">
          {categories.map(({ label, href, icon: Icon }) => (
            <Link className="category-card" to={href} key={href}>
              <Icon className="icon-benefit" aria-hidden="true" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
