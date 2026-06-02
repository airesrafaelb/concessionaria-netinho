export const WHATSAPP_NUMBER = "5585999999999";

export function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  window.open(createWhatsAppLink(message), "_blank", "noopener,noreferrer");
}

export function vehicleInterestMessage(vehicle) {
  return [
    "Olá, tenho interesse neste veículo da AutoPrime Motors:",
    "",
    `Veículo: ${vehicle.nome}`,
    `Versão: ${vehicle.versao}`,
    `Ano/modelo: ${vehicle.ano}/${vehicle.anoModelo}`,
    `Quilometragem: ${vehicle.km.toLocaleString("pt-BR")} km`,
    `Câmbio: ${vehicle.cambio}`,
    `Combustível: ${vehicle.combustivel}`,
    `Preço: ${vehicle.precoFormatado}`,
    "",
    "Gostaria de saber se ele ainda está disponível.",
  ].join("\n");
}

export function vehicleFinanceMessage(vehicle) {
  return [
    "Olá, gostaria de simular um financiamento na AutoPrime Motors.",
    "",
    `Veículo de interesse: ${vehicle.nome} ${vehicle.versao}`,
    `Ano/modelo: ${vehicle.ano}/${vehicle.anoModelo}`,
    `Preço: ${vehicle.precoFormatado}`,
    "",
    "Quero saber as opções de entrada e parcelas disponíveis.",
  ].join("\n");
}

export function vehicleDetailsMessage(vehicle) {
  return [
    "Olá, tenho interesse neste veículo anunciado na AutoPrime Motors.",
    "",
    `Veículo: ${vehicle.nome}`,
    `Versão: ${vehicle.versao}`,
    `Ano/modelo: ${vehicle.ano}/${vehicle.anoModelo}`,
    `Quilometragem: ${vehicle.km.toLocaleString("pt-BR")} km`,
    `Preço: ${vehicle.precoFormatado}`,
    "",
    "Gostaria de receber mais informações e confirmar a disponibilidade.",
  ].join("\n");
}

export function headerWhatsAppMessage(isStock = false, stockTitle = "") {
  if (isStock && stockTitle) {
    return `Olá, vim pela página de ${stockTitle} da AutoPrime Motors e gostaria de mais informações sobre os veículos disponíveis.`;
  }

  return "Olá, vim pelo site da AutoPrime Motors e gostaria de falar com um consultor sobre os seminovos disponíveis.";
}

export function footerWhatsAppMessage() {
  return "Olá, vim pelo site da AutoPrime Motors e gostaria de atendimento para encontrar um seminovo.";
}
