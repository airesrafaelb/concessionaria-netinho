import { useEffect, useState } from "react";
import banner1 from "../../carrossel1.png.png";
import banner2 from "../../carrossel2.png.png";
import banner3 from "../../carrossel3.png.png";
import banner4 from "../../carrossel4.png.png";

const slides = [
  { image: banner1, alt: "Chevrolet Onix seminovo imperdível revisado e com garantia" },
  { image: banner2, alt: "Fiat Argo seminovo em destaque revisado e com garantia" },
  { image: banner3, alt: "Volkswagen Polo seminovo em destaque" },
  { image: banner4, alt: "Negociação facilitada com mais chances de aprovação no financiamento" },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (index) => setCurrentSlide((index + slides.length) % slides.length);

  return (
    <section className="banner-carousel" aria-label="Ofertas em destaque">
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <article className={`carousel-slide${index === currentSlide ? " is-active" : ""}`} key={slide.image}>
              <img src={slide.image} alt={slide.alt} />
            </article>
          ))}
        </div>

        <button className="carousel-control carousel-control-prev" type="button" aria-label="Banner anterior" onClick={() => showSlide(currentSlide - 1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button className="carousel-control carousel-control-next" type="button" aria-label="Próximo banner" onClick={() => showSlide(currentSlide + 1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <div className="carousel-dots" aria-label="Selecionar banner">
          {slides.map((slide, index) => (
            <button
              className={`carousel-dot${index === currentSlide ? " is-active" : ""}`}
              type="button"
              aria-label={`Mostrar banner ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
              key={slide.image}
              onClick={() => showSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
