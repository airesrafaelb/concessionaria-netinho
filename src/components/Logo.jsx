import { Link } from "react-router-dom";

export default function Logo({ className = "brand" }) {
  return (
    <Link className={className} to="/" aria-label="AutoPrime Motors">
      <span className="brand-name">
        <span className="brand-auto">Auto</span>
        <span className="brand-prime">Prime</span>
      </span>
      <span className="brand-subtitle">
        <span aria-hidden="true"></span>
        MOTORS
        <span aria-hidden="true"></span>
      </span>
    </Link>
  );
}
