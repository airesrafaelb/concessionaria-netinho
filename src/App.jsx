import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import StockPage from "./pages/StockPage.jsx";
import FipeSection from "./components/FipeSection.jsx";

function BodyRouteClass() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("route-home", "route-stock", "route-fipe", "stock-page");
    if (location.pathname === "/estoque") {
      document.body.classList.add("route-stock");
    } else if (location.pathname === "/tabela-fipe") {
      document.body.classList.add("route-fipe");
    } else {
      document.body.classList.add("route-home");
    }
  }, [location.pathname]);

  return null;
}

function ScrollToRouteTarget() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.setTimeout(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <>
      <BodyRouteClass />
      <ScrollToRouteTarget />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/estoque" element={<StockPage />} />
          <Route path="/tabela-fipe" element={<FipeSection />} />
        </Routes>
      </main>
    </>
  );
}
