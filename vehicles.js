// Dados fictícios/demonstrativos para protótipo/portfolio da AutoPrime Motors.
// Preços, km, parcelas, selos, imagens e disponibilidade não representam oferta oficial.
// Substitua estes dados por fotos e informações reais antes de publicar comercialmente.

const modelImages = {
  "Chevrolet Onix": "https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Onix.JPG",
  "Chevrolet Prisma": "https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Prisma%201.4%20LTZ%202017.jpg",
  "Chevrolet Tracker": "https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Tracker%201.8%202017%20%2844692371514%29.jpg",
  "Fiat Argo": "https://commons.wikimedia.org/wiki/Special:FilePath/Fiat%20Argo.jpg",
  "Fiat Mobi": "https://commons.wikimedia.org/wiki/Special:FilePath/Fiat%20Mobi.jpg",
  "Fiat Cronos": "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Fiat%20Cronos%201.8%20Drive.jpg",
  "Volkswagen Gol": "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Gol%201.6%20Trend%202011%20%2813905746028%29.jpg",
  "Volkswagen Polo": "https://commons.wikimedia.org/wiki/Special:FilePath/2018%20Volkswagen%20Polo%201.6%20MSi%20Trendline%20%28Brazil%2C%20front%29.jpg",
  "Volkswagen Voyage": "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Voyage%201.6%202013%20%2829314487798%29.jpg",
  "Hyundai HB20": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_HB20_06_2016_BSB_2593.jpg",
  "Hyundai HB20S": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20HB20S%20%28second%20generation%29%20front%20view.png",
  "Hyundai Creta": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Creta%20India.jpg",
  "Renault Kwid": "https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Kwid.jpg",
  "Renault Sandero": "https://commons.wikimedia.org/wiki/Special:FilePath/Renault-Sandero-2013.jpg",
  "Renault Logan": "https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Logan%20004.jpg",
  "Ford Ka": "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20Ka%20Sudamerica.jpg",
  "Ford Ka Sedan": "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20Ka%2020150831-20150831%20160535.JPG",
  "Ford EcoSport": "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20EcoSport%202.0%20Titanium%202014%20%2814431470642%29.jpg",
  "Toyota Etios": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Etios%20top%20left%20front.jpg",
  "Toyota Yaris": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Yaris%20Sedan%202019.jpg",
  "Toyota Corolla": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Corolla%20Sedan.jpg",
  "Honda Fit": "https://commons.wikimedia.org/wiki/Special:FilePath/HONDA%20FIT%20%28GR%2CGS%29%20China%20%286%29.jpg",
  "Honda City": "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20City%20SV%202020.jpg",
  "Honda Civic": "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Civic%20front%2020071217.jpg",
  "Jeep Renegade": "vehicle-images/jeep-renegade.jpg",
  "Jeep Compass": "https://commons.wikimedia.org/wiki/Special:FilePath/Jeep%20Compass%202.4%20Sport%202018.jpg",
};

const modelAdImages = {
  "Chevrolet Onix": [
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Chevrolet_Onix_20150814-DSC05650.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Chevrolet_Onix_006.jpg",
  ],
  "Chevrolet Prisma": [
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Chevrolet_Prisma_1.4_LTZ_2017.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Chevrolet_Prisma_1.4_LT_2018_%2831667382197%29.jpg",
  ],
  "Chevrolet Tracker": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Tracker%201.8%202017%20%2844692371514%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chevrolet_Tracker_2021_%28front%29.png",
  ],
  "Fiat Argo": [
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/2022_Fiat_Argo_1.3_Drive_ELX.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Fiat%20Argo%202017a.jpg",
  ],
  "Fiat Mobi": [
    "https://upload.wikimedia.org/wikipedia/commons/4/46/Fiat_Mobi.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/84/2022_Fiat_Mobi_1.0_Trekking.jpg",
  ],
  "Fiat Cronos": [
    "https://upload.wikimedia.org/wikipedia/commons/1/16/Fiat_Cronos_1.8_16V_E.Torq_Precision.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c6/2024_Fiat_Cronos_1.3_GSE_S-Design_%28front%29.jpg",
  ],
  "Volkswagen Gol": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Gol%201.6%20Trend%202011%20%2813905746028%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/15/VW_Gol_2009_front.jpg",
  ],
  "Volkswagen Polo": [
    "https://upload.wikimedia.org/wikipedia/commons/9/94/2018_Volkswagen_Polo_SE_TSi_1.0_Front.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7d/Volkswagen_Polo_VI_%282021%29_IMG_5322.jpg",
  ],
  "Volkswagen Voyage": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Voyage%201.6%202013%20%2829314487798%29.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Voyage%201.6%20Power%202014%20%2812664254193%29.jpg",
  ],
  "Hyundai HB20": [
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hyundai_HB20_06_2016_BSB_2593.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/Red_hyundai_hb20.JPG",
  ],
  "Hyundai HB20S": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20HB20S%20%28second%20generation%29%20front%20view.png",
    "https://s2-autoesporte.glbimg.com/azMQHIJI2Gxnih9jvQg-7sCUybo=/0x0:1700x1065/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/G/X/FQOXcIScC1IyeA90P0PQ/hyundai-novohb20s.jpg",
  ],
  "Hyundai Creta": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/2018%20HYUNDAI%20Creta%20facelift%201.6%20Brunei%20%28front%20shot%20view%29.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Creta%20India.jpg",
  ],
  "Renault Kwid": [
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Renault_KWID_RXT%28O%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Renault_Kwid_2017_in_Montevideo_%28front%29.jpg",
  ],
  "Renault Sandero": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Renault-Sandero-2013.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/de/2019_Dacia_Sandero_Stepway_Techroad_Front.jpg",
  ],
  "Renault Logan": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Logan%20004.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dacia_Logan_Facelift_front_-_PSM_2009.jpg",
  ],
  "Ford Ka": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20Ka%20Sudamerica.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/00/2018_Ford_KA%2B_Zetec_1.0_Front.jpg",
  ],
  "Ford Ka Sedan": [
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/Ford_Ka_20150831-20150831_160519.JPG",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20-%20Figo%20Aspire%20-%20Sub-4m%20Compact%20Sedan%20-%20Kolkata%202015-09-15%203721.JPG",
  ],
  "Ford EcoSport": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20EcoSport%202.0%20Titanium%202014%20%2814431470642%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/2018_Ford_Ecosport_ST-Line_TDCi_1.5.jpg",
  ],
  "Toyota Etios": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Etios%20top%20left%20front.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/ff/2013_Toyota_Etios_Valco_E_%28Indonesia%29_front_view.jpg",
  ],
  "Toyota Yaris": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Yaris%20Sedan%202019.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2019%20Toyota%20Yaris%20LE%20sedan%2C%20front%20right%2C%2008-05-2023.jpg",
  ],
  "Toyota Corolla": [
    "https://upload.wikimedia.org/wikipedia/commons/2/24/2018_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282018-11-02%29_02.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Toyota_Corolla_Trek_1X7A0173.jpg",
  ],
  "Honda Fit": [
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Honda_Fit_Home_e_HEV.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/HONDA_FIT_%28GE%29_China.jpg",
  ],
  "Honda City": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20City%201.5%20LX%202018.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20City%20%28sixth%20generation%29%20front.JPG",
  ],
  "Honda Civic": [
    "https://upload.wikimedia.org/wikipedia/commons/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/48/Honda_Civic_%281Y7A1724%29.jpg",
  ],
  "Jeep Renegade": [
    "vehicle-images/jeep-renegade.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/88/Jeep_Renegade%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0538%29.jpg",
  ],
  "Jeep Compass": [
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Jeep_Compass_2.4_Longitude_4x4_2018.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/2019_Jeep_Compass_Limited_2.4L%2C_front_7.6.19.jpg",
  ],
};

const baseVehicles = [
  ["Chevrolet", "Onix", "Hatch", [
    ["1.0 Turbo LTZ Automático", 2022, 2023, 38500, "Automático", 82900, "Oferta destaque", ["baixa-km", "automatico"], true],
    ["1.0 LT Flex", 2020, 2021, 62400, "Manual", 64900, "Procedência garantida", ["economico", "primeiro-carro"], false],
  ]],
  ["Chevrolet", "Prisma", "Sedã", [
    ["1.4 LTZ Automático", 2018, 2019, 68200, "Automático", 66900, "Veículo verificado", ["automatico"], false],
    ["1.4 LT Flex", 2017, 2018, 74300, "Manual", 57900, "Recém-chegado", ["economico", "primeiro-carro"], false],
  ]],
  ["Chevrolet", "Tracker", "SUV", [
    ["1.4 Turbo Premier", 2019, 2020, 55700, "Automático", 96900, "Oferta destaque", ["automatico"], true],
    ["1.0 Turbo LT", 2021, 2022, 42100, "Automático", 108900, "Procedência garantida", ["automatico"], false],
  ]],
  ["Fiat", "Argo", "Hatch", [
    ["1.3 Drive Flex", 2022, 2023, 31200, "Manual", 76900, "Baixa km", ["baixa-km", "economico"], true],
    ["1.0 Drive Flex", 2021, 2022, 46800, "Manual", 64900, "Recém-chegado", ["economico", "primeiro-carro"], false],
  ]],
  ["Fiat", "Mobi", "Hatch", [
    ["1.0 Like Flex", 2021, 2022, 39700, "Manual", 54900, "Baixa km", ["baixa-km", "economico", "primeiro-carro"], false],
    ["1.0 Easy Flex", 2020, 2021, 58300, "Manual", 49900, "Veículo verificado", ["economico", "primeiro-carro"], false],
  ]],
  ["Fiat", "Cronos", "Sedã", [
    ["1.3 Drive Flex", 2022, 2023, 35600, "Manual", 79900, "Procedência garantida", ["baixa-km"], false],
    ["1.8 Precision Automático", 2020, 2021, 61200, "Automático", 74900, "Oferta destaque", ["automatico"], true],
  ]],
  ["Volkswagen", "Gol", "Hatch", [
    ["1.6 MSI Flex", 2020, 2021, 54100, "Manual", 62900, "Veículo verificado", ["economico", "primeiro-carro"], false],
    ["1.0 Trendline", 2019, 2020, 63300, "Manual", 55900, "Procedência garantida", ["economico", "primeiro-carro"], false],
  ]],
  ["Volkswagen", "Polo", "Hatch", [
    ["1.0 TSI Comfortline", 2022, 2023, 35200, "Automático", 89900, "Oferta destaque", ["baixa-km", "automatico"], true],
    ["1.6 MSI Manual", 2020, 2021, 49800, "Manual", 76900, "Recém-chegado", ["economico"], false],
  ]],
  ["Volkswagen", "Voyage", "Sedã", [
    ["1.6 MSI Comfortline", 2019, 2020, 60400, "Manual", 62900, "Procedência garantida", ["economico"], false],
    ["1.6 MSI Automático", 2020, 2021, 57200, "Automático", 66900, "Veículo verificado", ["automatico"], false],
  ]],
  ["Hyundai", "HB20", "Hatch", [
    ["1.0 Comfort Plus", 2021, 2022, 42600, "Manual", 67900, "Recém-chegado", ["economico", "primeiro-carro"], false],
    ["1.6 Vision Automático", 2020, 2021, 53800, "Automático", 78900, "Procedência garantida", ["automatico"], false],
  ]],
  ["Hyundai", "HB20S", "Sedã", [
    ["1.0 Evolution", 2021, 2022, 46200, "Manual", 74900, "Veículo verificado", ["economico"], false],
    ["1.6 Diamond Plus Automático", 2020, 2021, 58700, "Automático", 82900, "Oferta destaque", ["automatico"], true],
  ]],
  ["Hyundai", "Creta", "SUV", [
    ["1.6 Pulse Automático", 2019, 2020, 64200, "Automático", 98900, "Procedência garantida", ["automatico"], false],
    ["2.0 Prestige Automático", 2020, 2021, 58900, "Automático", 112900, "Oferta destaque", ["automatico"], true],
  ]],
  ["Renault", "Kwid", "Hatch", [
    ["1.0 Zen Flex", 2021, 2022, 29800, "Manual", 53900, "Baixa km", ["baixa-km", "economico", "primeiro-carro"], false],
    ["1.0 Intense Flex", 2020, 2021, 51600, "Manual", 48900, "Procedência garantida", ["economico", "primeiro-carro"], false],
  ]],
  ["Renault", "Sandero", "Hatch", [
    ["1.0 Zen Flex", 2020, 2021, 55400, "Manual", 57900, "Veículo verificado", ["economico", "primeiro-carro"], false],
    ["1.6 Stepway", 2019, 2020, 67100, "Manual", 66900, "Recém-chegado", ["economico"], false],
  ]],
  ["Renault", "Logan", "Sedã", [
    ["1.0 Life Flex", 2020, 2021, 49300, "Manual", 57900, "Procedência garantida", ["economico", "primeiro-carro"], false],
    ["1.6 Zen CVT", 2019, 2020, 62400, "Automático", 67900, "Veículo verificado", ["automatico"], false],
  ]],
  ["Ford", "Ka", "Hatch", [
    ["1.0 SE Flex", 2019, 2020, 59200, "Manual", 52900, "Procedência garantida", ["economico", "primeiro-carro"], false],
    ["1.5 Titanium Automático", 2018, 2019, 68400, "Automático", 61900, "Veículo verificado", ["automatico"], false],
  ]],
  ["Ford", "Ka Sedan", "Sedã", [
    ["1.0 SE Plus", 2019, 2020, 61700, "Manual", 56900, "Recém-chegado", ["economico", "primeiro-carro"], false],
    ["1.5 SEL Automático", 2018, 2019, 70200, "Automático", 63900, "Procedência garantida", ["automatico"], false],
  ]],
  ["Ford", "EcoSport", "SUV", [
    ["1.5 Freestyle", 2019, 2020, 64500, "Manual", 81900, "Veículo verificado", [], false],
    ["2.0 Titanium Automático", 2018, 2019, 72900, "Automático", 87900, "Oferta destaque", ["automatico"], true],
  ]],
  ["Toyota", "Etios", "Hatch", [
    ["1.3 X Flex", 2019, 2020, 51200, "Manual", 62900, "Procedência garantida", ["economico"], false],
    ["1.5 XLS Automático", 2018, 2019, 66500, "Automático", 69900, "Veículo verificado", ["automatico"], false],
  ]],
  ["Toyota", "Yaris", "Sedã", [
    ["1.5 XL Plus CVT", 2020, 2021, 48600, "Automático", 87900, "Procedência garantida", ["automatico"], false],
    ["1.5 XLS CVT", 2021, 2022, 39400, "Automático", 99900, "Baixa km", ["baixa-km", "automatico"], false],
  ]],
  ["Toyota", "Corolla", "Sedã", [
    ["2.0 XEI CVT", 2020, 2021, 58500, "Automático", 134900, "Procedência garantida", ["automatico"], false],
    ["2.0 Altis Hybrid", 2021, 2022, 44800, "Automático", 159900, "Oferta destaque", ["automatico"], true],
  ]],
  ["Honda", "Fit", "Hatch", [
    ["1.5 LX CVT", 2018, 2019, 69400, "Automático", 75900, "Veículo verificado", ["automatico"], false],
    ["1.5 EXL CVT", 2019, 2020, 55600, "Automático", 84900, "Procedência garantida", ["automatico"], false],
  ]],
  ["Honda", "City", "Sedã", [
    ["1.5 EX CVT", 2019, 2020, 57300, "Automático", 82900, "Recém-chegado", ["automatico"], false],
    ["1.5 LX CVT", 2018, 2019, 68800, "Automático", 74900, "Veículo verificado", ["automatico"], false],
  ]],
  ["Honda", "Civic", "Sedã", [
    ["2.0 EXL CVT", 2019, 2020, 61200, "Automático", 119900, "Baixa km", ["automatico"], false],
    ["1.5 Touring Turbo", 2018, 2019, 69500, "Automático", 129900, "Oferta destaque", ["automatico"], true],
  ]],
  ["Jeep", "Renegade", "SUV", [
    ["1.8 Longitude Automático", 2021, 2022, 46700, "Automático", 104900, "Recém-chegado", ["automatico"], true],
    ["1.8 Sport Automático", 2020, 2021, 58300, "Automático", 94900, "Procedência garantida", ["automatico"], false],
  ]],
  ["Jeep", "Compass", "SUV", [
    ["2.0 Longitude Flex", 2019, 2020, 64200, "Automático", 112900, "Veículo verificado", ["automatico"], false],
    ["2.0 Limited Diesel 4x4", 2018, 2019, 73100, "Automático", 134900, "Oferta destaque", ["automatico"], true],
  ]],
];

function slug(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).replace(/\u00a0/g, " ");
}

function estimateInstallment(price) {
  const installment = Math.round((price * 0.026) / 10) * 10;
  return `Parcelas a partir de ${formatPrice(installment)}`;
}

window.vehicles = baseVehicles.flatMap(([marca, modelo, carroceria, ads]) => {
  const nome = `${marca} ${modelo}`;
  const categoria = carroceria === "Sedã" ? "sedan" : carroceria.toLowerCase();
  return ads.map(([versao, ano, anoModelo, km, cambio, preco, selo, tags, destaque], index) => ({
    id: `${slug(marca)}-${slug(modelo)}-${anoModelo}-${index + 1}`,
    marca,
    modelo,
    nome,
    versao,
    ano,
    anoModelo,
    km,
    cambio,
    combustivel: "Flex",
    carroceria,
    preco,
    precoFormatado: formatPrice(preco),
    parcelaEstimada: estimateInstallment(preco),
    imagem: modelAdImages[nome]?.[index] || modelImages[nome],
    categoria,
    tags,
    destaque,
    selo,
    status: "Disponível",
    opcionais: [
      "Laudo cautelar aprovado",
      "Procedência verificada",
      cambio === "Automático" ? "Câmbio automático" : "Câmbio manual",
      "Revisão em dia",
    ],
    descricaoCurta: `${nome} ${versao}, seminovo demonstrativo com histórico e procedência organizados para o protótipo.`,
  }));
});

window.homeFeaturedVehicles = [
  {
    id: "home-chevrolet-onix-2023",
    marca: "Chevrolet",
    modelo: "Onix",
    nome: "Chevrolet Onix",
    versao: "1.0 Turbo LTZ Automático",
    ano: 2022,
    anoModelo: 2023,
    km: 38500,
    cambio: "Automático",
    combustivel: "Flex",
    carroceria: "Hatch",
    preco: 78900,
    precoFormatado: "R$ 78.900",
    parcelaEstimada: "Parcelas a partir de R$ 1.690",
    imagem: "vehicle-images/chevrolet-onix.jpg",
    categoria: "hatch",
    tags: ["baixa-km", "automatico"],
    destaque: true,
    selo: "Oferta destaque",
    status: "Disponível",
    opcionais: ["Multimídia", "Câmera de ré", "Controle de estabilidade", "Direção elétrica"],
    descricaoCurta: "Chevrolet Onix seminovo demonstrativo para vitrine da home.",
  },
  {
    id: "home-hyundai-hb20-2022",
    marca: "Hyundai",
    modelo: "HB20",
    nome: "Hyundai HB20",
    versao: "1.0 Comfort Plus",
    ano: 2021,
    anoModelo: 2022,
    km: 42600,
    cambio: "Manual",
    combustivel: "Flex",
    carroceria: "Hatch",
    preco: 64900,
    precoFormatado: "R$ 64.900",
    parcelaEstimada: "Parcelas a partir de R$ 1.390",
    imagem: "vehicle-images/hyundai-hb20.jpg",
    categoria: "hatch",
    tags: ["economico", "primeiro-carro"],
    destaque: false,
    selo: "Recém-chegado",
    status: "Disponível",
    opcionais: ["Ar-condicionado", "Direção elétrica", "Vidros elétricos", "Bluetooth"],
    descricaoCurta: "Hyundai HB20 seminovo demonstrativo para vitrine da home.",
  },
  {
    id: "home-fiat-argo-2023",
    marca: "Fiat",
    modelo: "Argo",
    nome: "Fiat Argo",
    versao: "1.3 Drive Flex",
    ano: 2022,
    anoModelo: 2023,
    km: 31200,
    cambio: "Manual",
    combustivel: "Flex",
    carroceria: "Hatch",
    preco: 71900,
    precoFormatado: "R$ 71.900",
    parcelaEstimada: "Parcelas a partir de R$ 1.540",
    imagem: "vehicle-images/fiat-argo.jpg",
    categoria: "hatch",
    tags: ["baixa-km", "economico"],
    destaque: true,
    selo: "Baixa km",
    status: "Disponível",
    opcionais: ["Central multimídia", "Sensor de estacionamento", "Rodas de liga", "Controle de tração"],
    descricaoCurta: "Fiat Argo seminovo demonstrativo para vitrine da home.",
  },
  {
    id: "home-renault-kwid-2022",
    marca: "Renault",
    modelo: "Kwid",
    nome: "Renault Kwid",
    versao: "1.0 Zen Flex",
    ano: 2021,
    anoModelo: 2022,
    km: 29800,
    cambio: "Manual",
    combustivel: "Flex",
    carroceria: "Hatch",
    preco: 53900,
    precoFormatado: "R$ 53.900",
    parcelaEstimada: "Parcelas a partir de R$ 1.150",
    imagem: "vehicle-images/renault-kwid.jpg",
    categoria: "hatch",
    tags: ["baixa-km", "economico", "primeiro-carro"],
    destaque: false,
    selo: "Procedência garantida",
    status: "Disponível",
    opcionais: ["Ar-condicionado", "Airbags", "Som original", "Computador de bordo"],
    descricaoCurta: "Renault Kwid seminovo demonstrativo para vitrine da home.",
  },
  {
    id: "home-volkswagen-polo-2023",
    marca: "Volkswagen",
    modelo: "Polo",
    nome: "Volkswagen Polo",
    versao: "1.0 TSI Comfortline",
    ano: 2022,
    anoModelo: 2023,
    km: 35200,
    cambio: "Automático",
    combustivel: "Flex",
    carroceria: "Hatch",
    preco: 87900,
    precoFormatado: "R$ 87.900",
    parcelaEstimada: "Parcelas a partir de R$ 1.880",
    imagem: "vehicle-images/volkswagen-polo.jpg",
    categoria: "hatch",
    tags: ["baixa-km", "automatico"],
    destaque: true,
    selo: "Oferta destaque",
    status: "Disponível",
    opcionais: ["Painel digital", "Piloto automático", "Multimídia", "Sensor de chuva"],
    descricaoCurta: "Volkswagen Polo seminovo demonstrativo para vitrine da home.",
  },
  {
    id: "home-toyota-corolla-2021",
    marca: "Toyota",
    modelo: "Corolla",
    nome: "Toyota Corolla",
    versao: "2.0 XEI CVT",
    ano: 2020,
    anoModelo: 2021,
    km: 58500,
    cambio: "Automático",
    combustivel: "Flex",
    carroceria: "Sedã",
    preco: 132900,
    precoFormatado: "R$ 132.900",
    parcelaEstimada: "Parcelas a partir de R$ 2.840",
    imagem: "vehicle-images/toyota-corolla.jpg",
    categoria: "sedan",
    tags: ["automatico"],
    destaque: false,
    selo: "Procedência garantida",
    status: "Disponível",
    opcionais: ["Bancos em couro", "Ar digital", "Controle adaptativo", "Assistente de faixa"],
    descricaoCurta: "Toyota Corolla seminovo demonstrativo para vitrine da home.",
  },
  {
    id: "home-jeep-renegade-2022",
    marca: "Jeep",
    modelo: "Renegade",
    nome: "Jeep Renegade",
    versao: "1.8 Longitude Automático",
    ano: 2021,
    anoModelo: 2022,
    km: 46700,
    cambio: "Automático",
    combustivel: "Flex",
    carroceria: "SUV",
    preco: 102900,
    precoFormatado: "R$ 102.900",
    parcelaEstimada: "Parcelas a partir de R$ 2.200",
    imagem: "vehicle-images/jeep-renegade.jpg",
    categoria: "suv",
    tags: ["automatico"],
    destaque: true,
    selo: "Recém-chegado",
    status: "Disponível",
    opcionais: ["Rodas de liga", "Controle de estabilidade", "Multimídia", "Câmera de ré"],
    descricaoCurta: "Jeep Renegade seminovo demonstrativo para vitrine da home.",
  },
  {
    id: "home-honda-civic-2020",
    marca: "Honda",
    modelo: "Civic",
    nome: "Honda Civic",
    versao: "2.0 EXL CVT",
    ano: 2019,
    anoModelo: 2020,
    km: 61200,
    cambio: "Automático",
    combustivel: "Flex",
    carroceria: "Sedã",
    preco: 119900,
    precoFormatado: "R$ 119.900",
    parcelaEstimada: "Parcelas a partir de R$ 2.560",
    imagem: "vehicle-images/honda-civic.jpg",
    categoria: "sedan",
    tags: ["automatico"],
    destaque: false,
    selo: "Baixa km",
    status: "Disponível",
    opcionais: ["Teto solar", "Bancos em couro", "Partida por botão", "Controle de estabilidade"],
    descricaoCurta: "Honda Civic seminovo demonstrativo para vitrine da home.",
  },
];
