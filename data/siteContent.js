export const site = {
  name: "Barber Prime",
  monogram: "BP",
  city: "Manaus",
  state: "Amazonas",
  whatsappNumber: "5592900000000",
  whatsappMessage: "Olá! Gostaria de agendar um horário na Barber Prime.",
  address: "Rua Exemplo, 000 — Centro",
  addressCity: "Manaus · Amazonas",
  addressNote: "Endereço demonstrativo",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Manaus%2C%20Amazonas%2C%20Brasil",
  demoNotice:
    "Projeto demonstrativo: nome do projeto, endereço, telefone, horários e demais informações comerciais são fictícios e servem apenas para ilustrar o layout.",
  agency: "Nexion Digital",
  creditLine: "Projeto demonstrativo fictício — Desenvolvido por Nexion Digital.",
};

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Galeria", href: "#galeria" },
  { label: "A barbearia", href: "#sobre" },
  { label: "Horários", href: "#horarios" },
  { label: "Localização", href: "#localizacao" },
];

export const heroImage =
  "https://media.base44.com/images/public/6aebd9395a678a6d8c51ebb9/8a2498695_generated_5552c247.png";

export const aboutImage =
  "https://media.base44.com/images/public/6aebd9395a678a6d8c51ebb9/0cd46b065_generated_a7b17154.png";

export const aboutInsetImage =
  "https://media.base44.com/images/public/6aebd9395a678a6d8c51ebb9/6554c2488_generated_image.png";

export const heroMeta = [
  { label: "Agendamento", value: "Somente por WhatsApp" },
  { label: "Endereço", value: "Centro · Manaus" },
  { label: "Atendimento", value: "Seg a sáb" },
];

export const services = [
  {
    number: "01",
    name: "Corte Prime",
    description:
      "Leitura de rosto, máquina e tesoura em equilíbrio. Um corte desenhado para a sua estrutura, finalizado na navalha.",
  },
  {
    number: "02",
    name: "Barba Clássica",
    description:
      "Toalha quente, óleo pré-barba e navalha. Contornos definidos, pele tratada e nenhuma pressa.",
  },
  {
    number: "03",
    name: "Ritual Prime",
    description:
      "A experiência completa: corte, barba, toalha quente e finalização com produtos premium.",
  },
  {
    number: "04",
    name: "Navalhado & Acabamento",
    description:
      "Pezinho, contornos e desenho de linhas com precisão milimétrica entre um corte e outro.",
  },
  {
    number: "05",
    name: "Terapia Capilar",
    description:
      "Diagnóstico do couro cabeludo, limpeza profunda e hidratação para devolver textura e brilho.",
  },
];

export const differentials = [
  {
    index: "I",
    icon: "calendar",
    title: "Hora marcada",
    description:
      "Atendimento exclusivamente por agendamento. Sem filas, sem espera, com o tempo reservado para você.",
  },
  {
    index: "II",
    icon: "scissors",
    title: "Barbeiros especialistas",
    description:
      "Profissionais dedicados ao corte masculino e à barbearia clássica, em constante aperfeiçoamento.",
  },
  {
    index: "III",
    icon: "droplets",
    title: "Produtos premium",
    description:
      "Linha profissional para cabelo, barba e pele — escolhida peça por peça para o resultado final.",
  },
  {
    index: "IV",
    icon: "armchair",
    title: "Ambiente reservado",
    description:
      "Luz baixa, couro e som discreto. Um intervalo de calma no meio da rotina.",
  },
];

export const gallery = [
  {
    src: "https://media.base44.com/images/public/6aebd9395a678a6d8c51ebb9/d3a7c34b8_generated_82a44117.png",
    alt: "Estação de espelhos com molduras em latão em barbearia escura",
    caption: "Salão",
  },
  {
    src: "https://media.base44.com/images/public/6aebd9395a678a6d8c51ebb9/ab6538d07_generated_image.png",
    alt: "Retrato de cliente com corte degradê e barba desenhada",
    caption: "Resultado",
  },
  {
    src: "https://media.base44.com/images/public/6aebd9395a678a6d8c51ebb9/39a26e77f_generated_d4dc00e6.png",
    alt: "Detalhe de corte degradê com acabamento preciso",
    caption: "Degradê",
  },
  {
    src: "https://media.base44.com/images/public/6aebd9395a678a6d8c51ebb9/8fc3077ea_generated_37dcd22b.png",
    alt: "Cadeira de barbeiro em couro com detalhes em latão",
    caption: "A cadeira",
  },
  {
    src: "https://media.base44.com/images/public/6aebd9395a678a6d8c51ebb9/11e447726_generated_79c6c648.png",
    alt: "Mãos do barbeiro aparando a barba com tesoura",
    caption: "Barba",
  },
  {
    src: "https://media.base44.com/images/public/6aebd9395a678a6d8c51ebb9/8b6560a65_generated_image.png",
    alt: "Toalha quente aplicada no rosto do cliente antes do barbear",
    caption: "Toalha quente",
  },
];

export const hours = [
  { day: "Segunda a sexta", time: "09h — 20h" },
  { day: "Sábado", time: "08h — 18h" },
  { day: "Domingo", time: "Fechado" },
];

export const principles = [
  "Atendimento individual, com hora marcada",
  "Técnica clássica com estética contemporânea",
  "Conforto e privacidade em cada visita",
];