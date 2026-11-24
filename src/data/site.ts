/**
 * Conteúdo editável do site Box140.
 * Todos os textos, contatos, serviços, fotos de antes/depois, depoimentos e
 * horários ficam aqui. Edite este arquivo para atualizar o site.
 */

export const site = {
  name: 'Box140',
  fullName: 'Box140 – Estética de Motos',
  title: 'Box140 | Estética e Detalhamento de Motos em Itu/SP',
  description:
    'Estética e detalhamento de motos em Itu/SP. Lavagem detalhada, polimento técnico, higienização de motor e proteção da pintura, com atenção a cada detalhe e preço justo.',
  keywords:
    'estética de motos Itu, polimento de moto Itu, lavagem detalhada de moto, detalhamento de motos, vitrificação de moto, higienização de motor, Box140',
  url: 'https://box140-motorcycle-detailing.netlify.app',
  motto: 'Cuidando do seu sonho',
  faith: 'O segredo é ter fé',

  // Troque pelo número real (somente dígitos, com 55 + DDD).
  whatsappNumber: '5511900000000',
  whatsappDisplay: '(11) 90000-0000',
  whatsappDefaultMessage:
    'Olá! Vi o site da Box140 e gostaria de um orçamento para minha moto.',

  instagramHandle: '@box140_',
  instagramUrl: 'https://www.instagram.com/box140_/',

  address: {
    street: "Rua Maria de Lourdes Pires D'elboux, 140",
    district: 'Parque São Camilo',
    city: 'Itu',
    state: 'SP',
    zip: '13309-824',
  },

  // Horário de funcionamento (edite conforme a rotina do box).
  hours: [
    { days: 'Segunda a sexta', time: '8h às 18h' },
    { days: 'Sábado', time: '8h às 13h' },
    { days: 'Domingo e feriados', time: 'Fechado' },
  ],
  // Mesmo horário no formato schema.org (usado pelo Google).
  openingHoursSchema: ['Mo-Fr 08:00-18:00', 'Sa 08:00-13:00'],
}

export const fullAddress = `${site.address.street} – ${site.address.district}, ${site.address.city} – ${site.address.state}, CEP ${site.address.zip}`

const addressQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`,
)

export const maps = {
  embed: `https://www.google.com/maps?q=${addressQuery}&output=embed`,
  view: `https://www.google.com/maps/search/?api=1&query=${addressQuery}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`,
  waze: `https://waze.com/ul?q=${addressQuery}&navigate=yes`,
}

export function whatsappLink(message: string = site.whatsappDefaultMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const nav = [
  { id: 'servicos', label: 'Serviços' },
  { id: 'antes-e-depois', label: 'Antes e Depois' },
  { id: 'como-trabalhamos', label: 'Como Trabalhamos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'localizacao', label: 'Localização' },
  { id: 'contato', label: 'Contato' },
]

export const hero = {
  eyebrow: 'Estética e detalhamento de motos · Itu/SP',
  title: 'Cuidando do seu sonho, em cada detalhe.',
  subtitle:
    'Estética e detalhamento de motos em Itu. Lavagem detalhada, polimento e proteção com atenção a cada parte da sua moto.',
  image: '/img/hero.jpg',
  imageAlt:
    'Moto preta recém-polida em estúdio escuro, com luz lateral refletindo no tanque',
}

export type Service = {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'lavagem',
    name: 'Lavagem detalhada',
    description:
      'Limpeza completa, incluindo rodas, motor, carenagens, correntes e áreas de difícil acesso.',
    image: '/img/servico-lavagem.jpg',
    imageAlt: 'Roda traseira de moto sendo enxaguada, com espuma escorrendo',
  },
  {
    id: 'polimento',
    name: 'Polimento técnico',
    description:
      'Correção de riscos leves, marcas e opacidade, para recuperar o brilho e a profundidade da pintura.',
    image: '/img/servico-polimento.jpg',
    imageAlt: 'Politriz com boina laranja sobre tanque vermelho brilhante',
  },
  {
    id: 'motor',
    name: 'Higienização de motor e peças',
    description:
      'Desengraxe e limpeza cuidadosa de motor, escapamento e partes metálicas.',
    image: '/img/servico-motor.jpg',
    imageAlt: 'Motor de moto limpo, com aletas e escapamento sem sujeira',
  },
  {
    id: 'plasticos',
    name: 'Revitalização de plásticos',
    description: 'Recuperação da cor e do aspecto de plásticos e peças foscas.',
    image: '/img/servico-plasticos.jpg',
    imageAlt: 'Carenagem plástica preta fosca com aspecto renovado',
  },
  {
    id: 'protecao',
    name: 'Proteção da pintura',
    description:
      'Cera, selante ou vitrificação: uma camada de proteção que mantém o brilho por mais tempo e facilita as próximas lavagens.',
    image: '/img/servico-protecao.jpg',
    imageAlt: 'Gotas de água formando esferas sobre tanque azul protegido',
  },
  {
    id: 'corrente',
    name: 'Limpeza e lubrificação de corrente',
    description:
      'Corrente e coroa limpas e lubrificadas, para rodar mais suave e durar mais.',
    image: '/img/servico-corrente.jpg',
    imageAlt: 'Corrente e coroa de moto limpas e lubrificadas',
  },
  {
    id: 'pacotes',
    name: 'Pacotes e manutenção periódica',
    description:
      'Para quem quer manter a moto sempre em dia. Montamos uma rotina de cuidados de acordo com o seu uso.',
    image: '/img/servico-pacotes.jpg',
    imageAlt: 'Duas motos limpas lado a lado no estúdio da Box140',
  },
]

export function serviceMessage(serviceName: string) {
  return `Olá! Vi o site da Box140 e quero o serviço de ${serviceName.toLowerCase()} para minha moto. Pode me passar um orçamento?`
}

export const comparisonCategories = [
  { id: 'lavagem', label: 'Lavagem' },
  { id: 'polimento', label: 'Polimento' },
  { id: 'motor', label: 'Motor' },
  { id: 'plasticos', label: 'Plásticos' },
] as const

export type ComparisonCategory = (typeof comparisonCategories)[number]['id']

export type Comparison = {
  id: string
  category: ComparisonCategory
  bike: string
  service: string
  before: string
  after: string
}

// Troque os arquivos em /public/img pelas fotos reais (mesmo enquadramento no antes e no depois).
export const comparisons: Comparison[] = [
  {
    id: 'ad-1',
    category: 'polimento',
    bike: 'Honda CB 1300',
    service: 'Polimento e proteção',
    before: '/img/ad-1-antes.jpg',
    after: '/img/ad-1-depois.jpg',
  },
  {
    id: 'ad-2',
    category: 'lavagem',
    bike: 'Yamaha MT-07',
    service: 'Lavagem detalhada',
    before: '/img/ad-2-antes.jpg',
    after: '/img/ad-2-depois.jpg',
  },
  {
    id: 'ad-3',
    category: 'motor',
    bike: 'Kawasaki Z900RS',
    service: 'Higienização de motor',
    before: '/img/ad-3-antes.jpg',
    after: '/img/ad-3-depois.jpg',
  },
  {
    id: 'ad-4',
    category: 'plasticos',
    bike: 'Honda XR 250 Tornado',
    service: 'Revitalização de plásticos',
    before: '/img/ad-4-antes.jpg',
    after: '/img/ad-4-depois.jpg',
  },
  {
    id: 'ad-5',
    category: 'lavagem',
    bike: 'BMW R 1250 GS',
    service: 'Lavagem detalhada de rodas e suspensão',
    before: '/img/ad-5-antes.jpg',
    after: '/img/ad-5-depois.jpg',
  },
  {
    id: 'ad-6',
    category: 'polimento',
    bike: 'Harley-Davidson Road Glide',
    service: 'Polimento técnico',
    before: '/img/ad-6-antes.jpg',
    after: '/img/ad-6-depois.jpg',
  },
]

export const steps = [
  {
    title: 'Avaliação',
    description:
      'Olhamos a moto com você e indicamos o que ela realmente precisa.',
    icon: 'search',
  },
  {
    title: 'Preparação',
    description: 'Pré-lavagem e proteção das partes sensíveis.',
    icon: 'shield',
  },
  {
    title: 'Execução',
    description:
      'Cada etapa feita com calma, com os produtos certos para cada superfície.',
    icon: 'spray',
  },
  {
    title: 'Conferência',
    description: 'Revisão final peça por peça antes da entrega.',
    icon: 'check',
  },
  {
    title: 'Entrega',
    description: 'Sua moto pronta, com orientações para manter o resultado.',
    icon: 'key',
  },
] as const

export const reasons = [
  {
    title: 'Atenção aos detalhes',
    description: 'Cada parte da moto recebe cuidado.',
    icon: 'detail',
  },
  {
    title: 'Produtos de qualidade',
    description: 'Linha profissional, segura para pintura, plásticos e metais.',
    icon: 'drop',
  },
  {
    title: 'Preço justo',
    description: 'Um trabalho bem feito, com valor honesto.',
    icon: 'tag',
  },
  {
    title: 'Atendimento próximo',
    description: 'Você fala direto com quem cuida da sua moto.',
    icon: 'chat',
  },
] as const

export const about = {
  title: 'Quem cuida da sua moto',
  paragraphs: [
    'A Box140 nasceu da garagem de casa, de quem sempre gostou de moto e nunca conseguiu deixar uma suja parada. O que começou cuidando das motos dos amigos virou um box montado para fazer esse trabalho direito.',
    'Aqui não tem pressa nem fila de produção. Cada moto entra, é avaliada com calma e recebe o que precisa, com produtos adequados para cada superfície. Você fala direto comigo, do orçamento à entrega.',
  ],
  closing: 'Aqui, cada moto é tratada como o sonho de alguém. Porque é.',
  image: '/img/sobre.jpg',
  imageAlt: 'Responsável pela Box140 limpando o tanque de uma moto no box',
}

// Depoimentos de exemplo: troque pelas avaliações reais dos clientes.
export const testimonials = [
  {
    name: 'Rafael Mendonça',
    bike: 'Honda CB 650R',
    text: 'Levei a moto com a pintura bem marcada e voltou com outro brilho. Explicou tudo o que ia fazer antes de começar.',
    rating: 5,
  },
  {
    name: 'Juliana Prado',
    bike: 'Yamaha Fazer 250',
    text: 'Atendimento muito atencioso. Limpou até o que eu nem sabia que estava sujo. Preço justo pelo trabalho.',
    rating: 5,
  },
  {
    name: 'Marcos Teixeira',
    bike: 'BMW F 850 GS',
    text: 'Voltei de viagem com a moto cheia de barro. Motor, rodas e corrente ficaram limpos de verdade, sem pressa.',
    rating: 5,
  },
  {
    name: 'Diego Albuquerque',
    bike: 'Kawasaki Ninja 400',
    text: 'Fiz a vitrificação e a moto continua fácil de lavar meses depois. Recomendo para quem gosta de cuidar.',
    rating: 5,
  },
  {
    name: 'Thiago Bueno',
    bike: 'Triumph Tiger 900',
    text: 'Os plásticos estavam desbotados e voltaram ao preto original. Dá para ver o capricho em cada peça.',
    rating: 5,
  },
]

export const finalCta = {
  title: 'Sua moto merece esse cuidado. Vamos conversar?',
  subtitle: 'Orçamento sem compromisso, direto pelo WhatsApp.',
}
