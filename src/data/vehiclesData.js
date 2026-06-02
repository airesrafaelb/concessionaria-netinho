import "../../vehicles.js";
import chevroletOnix from "../../vehicle-images/chevrolet-onix.jpg";
import fiatArgo from "../../vehicle-images/fiat-argo.jpg";
import hondaCivic from "../../vehicle-images/honda-civic.jpg";
import hyundaiHb20 from "../../vehicle-images/hyundai-hb20.jpg";
import jeepRenegade from "../../vehicle-images/jeep-renegade.jpg";
import renaultKwid from "../../vehicle-images/renault-kwid.jpg";
import toyotaCorolla from "../../vehicle-images/toyota-corolla.jpg";
import volkswagenPolo from "../../vehicle-images/volkswagen-polo.jpg";

const localImages = {
  "vehicle-images/chevrolet-onix.jpg": chevroletOnix,
  "vehicle-images/fiat-argo.jpg": fiatArgo,
  "vehicle-images/honda-civic.jpg": hondaCivic,
  "vehicle-images/hyundai-hb20.jpg": hyundaiHb20,
  "vehicle-images/jeep-renegade.jpg": jeepRenegade,
  "vehicle-images/renault-kwid.jpg": renaultKwid,
  "vehicle-images/toyota-corolla.jpg": toyotaCorolla,
  "vehicle-images/volkswagen-polo.jpg": volkswagenPolo,
};

function withBundledImage(vehicle) {
  return {
    ...vehicle,
    imagem: localImages[vehicle.imagem] || vehicle.imagem,
  };
}

export const vehicles = (window.vehicles || []).map(withBundledImage);
export const homeFeaturedVehicles = (window.homeFeaturedVehicles || vehicles.slice(0, 8)).map(withBundledImage);
