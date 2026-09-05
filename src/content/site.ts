// Analytics â€” IDs configurados via variÃ¡veis de ambiente (.env), para nÃ£o expor/versionar
// o ID de produÃ§Ã£o direto no cÃ³digo. Ver .env.example na raiz do projeto.
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? "";
export const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? "";

export const SITE = {
  name: "Doc.Lab",
  tagline: "AgÃªncia de Marketing Ã‰tico para SaÃºde",
  email: "contato@doclabmkt.com.br",
  privacyEmail: "privacidade@doclabmkt.com.br",
  whatsapp: "5515997961512",
  whatsappDisplay: "(15) 99796-1512",
  instagram: "https://instagram.com/doclabmkt",
  instagramHandle: "@doclabmkt",
  cnpj: "00.000.000/0001-00",
  address:
    "Atendimento remoto em todo o Brasil. ReuniÃµes presenciais em SÃ£o Paulo, SP mediante agendamento.",
};

export const HERO_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663088381413/McJchZvySyLrLarX8YduLH/hero-banner-Dmj4rwie62q2QqqrQYgKkt.webp";
export const WHY_US_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663088381413/McJchZvySyLrLarX8YduLH/services-section-o2qyywmPCDcMWtNnEf2nZb.webp";
export const CTA_BG_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663088381413/McJchZvySyLrLarX8YduLH/cta-section-8g6PdpjpLki9kAMJcxkYDB.webp";

export const NAV_LINKS = [
  { to: "/servicos", label: "SoluÃ§Ãµes" },
  { to: "/sobre", label: "Sobre" },
  { to: "/blog", label: "Blog" },
  { to: "/cases", label: "Cases" },
  { to: "/contato", label: "Contato" },
];

export type Differential = { icon: string; iconBox: string; title: string; body: string };

export const DIFFERENTIALS: Differential[] = [
  {
    icon: "ðŸŽ“",
    iconBox: "icon-box-cyan",
    title: "Especialistas, nÃ£o generalistas",
    body: "Nosso time Ã© formado por profissionais de comunicaÃ§Ã£o com foco em saÃºde. Conhecemos a rotina do consultÃ³rio, os desafios da gestÃ£o e as restriÃ§Ãµes Ã©ticas que todo profissional enfrenta.",
  },
  {
    icon: "âš–ï¸",
    iconBox: "icon-box-purple",
    title: "Marketing Ã©tico como prioridade",
    body: "Toda estratÃ©gia Ã© desenvolvida dentro das normas do CFM e demais conselhos de classe. VocÃª nÃ£o precisa se preocupar em infringir as regras â€” essa Ã© a nossa responsabilidade.",
  },
  {
    icon: "ðŸ“Š",
    iconBox: "icon-box-blue",
    title: "Crescimento baseado em dados",
    body: "RelatÃ³rios claros, metas mensurÃ¡veis e decisÃµes fundamentadas em evidÃªncias. Nenhuma aÃ§Ã£o Ã© tomada sem um objetivo claro, e cada resultado Ã© rastreado e comunicado a vocÃª.",
  },
  {
    icon: "âœ¦",
    iconBox: "icon-box-grad",
    title: "Autoridade, nÃ£o volume",
    body: "NÃ£o acreditamos em quantidade de posts sem propÃ³sito. ConstruÃ­mos sua presenÃ§a digital como reflexo fiel da sua excelÃªncia clÃ­nica â€” conteÃºdo que posiciona e que os pacientes certos leem.",
  },
];

export type WhyUsItem = { icon: string; iconBox: string; title: string; body: string };

export const WHY_US: WhyUsItem[] = [
  {
    icon: "ðŸ¤",
    iconBox: "icon-box-cyan",
    title: "Parceria de longo prazo",
    body: "NÃ£o vendemos pacotes e desaparecemos. Acompanhamos de perto a evoluÃ§Ã£o do seu posicionamento e atuamos como extensÃ£o do seu consultÃ³rio.",
  },
  {
    icon: "ðŸ”’",
    iconBox: "icon-box-purple",
    title: "Sigilo e conformidade total",
    body: "Zero dados de pacientes, zero exposiÃ§Ã£o indevida. ComunicaÃ§Ã£o estratÃ©gica, discreta e sempre alinhada Ã  LGPD.",
  },
  {
    icon: "ðŸŒŽ",
    iconBox: "icon-box-grad",
    title: "PresenÃ§a nacional",
    body: "Atendemos profissionais de todo o Brasil, com mais de 10 especialidades mÃ©dicas jÃ¡ acompanhadas pela nossa equipe.",
  },
];

export type Testimonial = { name: string; role: string; quote: string; badge?: "cyan" | "purple" };

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    name: "Dra. Mariana Ferreira",
    role: "Endocrinologista PediÃ¡trica",
    quote: "Depoimento a ser adicionado.",
  },
  {
    name: "Dra. Caroline Reiche",
    role: "Pediatra",
    quote: "Depoimento a ser adicionado.",
  },
  {
    name: "Adriana Fava",
    role: "Dermatologista",
    quote:
      "Como gestora de uma clÃ­nica com 12 mÃ©dicos, precisava de uma comunicaÃ§Ã£o que valorizasse toda a nossa equipe sem transformar saÃºde em espetÃ¡culo. A Doc.Lab entregou exatamente isso: uma presenÃ§a digital elegante, Ã©tica e que atrai pacientes que compartilham nossos valores.",
  },
];

export type BlogPreview = {
  slug: string;
  badge: "cyan" | "purple";
  category: string;
  title: string;
  excerpt: string;
  external?: boolean;
};

export const HOME_BLOG_PREVIEWS: BlogPreview[] = [
  {
    slug: "como-construir-autoridade-instagram-sem-ferir-cfm",
    badge: "cyan",
    category: "Marketing MÃ©dico",
    title: "Como construir autoridade no Instagram sem ferir o CFM",
    excerpt:
      "Entenda as fronteiras do que Ã© permitido e descubra como transformar seu conhecimento clÃ­nico em conteÃºdo que gera confianÃ§a â€” e pacientes qualificados.",
  },
  {
    slug: "",
    badge: "purple",
    category: "Ã‰tica e LegislaÃ§Ã£o",
    title: "O que diz a ResoluÃ§Ã£o CFM 2.336/2023 sobre publicidade mÃ©dica",
    excerpt:
      "Um guia prÃ¡tico e direto sobre as novas diretrizes de publicidade para mÃ©dicos: o que mudou, o que Ã© permitido e como adaptar sua comunicaÃ§Ã£o.",
  },
  {
    slug: "",
    badge: "cyan",
    category: "GestÃ£o de ConsultÃ³rio",
    title: "Marketing e fidelizaÃ§Ã£o: por que pacientes voltam (ou nÃ£o voltam)",
    excerpt:
      "A relaÃ§Ã£o entre comunicaÃ§Ã£o digital e a experiÃªncia dentro do consultÃ³rio â€” como o marketing ajuda na retenÃ§Ã£o de pacientes e na reputaÃ§Ã£o da clÃ­nica.",
  },
];

export type ServiceItem = {
  id: string;
  number: string;
  badge: "cyan" | "purple";
  icon: string;
  iconBox: string;
  imageBg: "cyan" | "purple" | "blue" | "grad";
  title: string;
  paragraphs: string[];
  features: string[];
  note?: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "presenca-digital",
    number: "01",
    badge: "cyan",
    icon: "âœ¦",
    iconBox: "icon-box-cyan",
    imageBg: "cyan",
    title: "GestÃ£o de PresenÃ§a Digital",
    paragraphs: [
      "Transformamos seu conhecimento clÃ­nico em conteÃºdo estratÃ©gico para redes sociais. Sem sensacionalismo, sem jargÃµes de marketing agressivo â€” apenas posicionamento sÃ³lido, dentro das normas do seu conselho de classe.",
      "MÃ©dicos e profissionais de saÃºde passam anos construindo expertise clÃ­nica. A Doc.Lab cria a ponte entre a sua excelÃªncia clÃ­nica e a linguagem digital â€” respeitando cada fronteira Ã©tica do caminho.",
    ],
    features: [
      "Planejamento editorial mensal",
      "CriaÃ§Ã£o de conteÃºdo completo (texto, design e legendas)",
      "GestÃ£o e publicaÃ§Ã£o nos melhores horÃ¡rios",
      "Monitoramento e relatÃ³rios mensais",
      "Checagem Ã©tica em cada peÃ§a antes de publicar",
    ],
  },
  {
    id: "trafego-pago",
    number: "02",
    badge: "purple",
    icon: "âœŽ",
    iconBox: "icon-box-purple",
    imageBg: "purple",
    title: "TrÃ¡fego Pago para SaÃºde",
    paragraphs: [
      "Google Ads e Meta Ads desenvolvidos com profundo respeito Ã s diretrizes Ã©ticas do setor de saÃºde. AlcanÃ§amos os pacientes ideais para a sua especialidade â€” sem promessas de cura, sem sensacionalismo, dentro de cada norma aplicÃ¡vel.",
      "Cada campanha Ã© desenvolvida por quem conhece as duas linguagens: a dos algoritmos de mÃ­dia paga e a do cÃ³digo de Ã©tica do setor de saÃºde.",
    ],
    features: [
      "EstratÃ©gia de campanhas personalizada por especialidade",
      "CriaÃ§Ã£o de anÃºncios conformes ao CFM e Ã s plataformas",
      "GestÃ£o e otimizaÃ§Ã£o contÃ­nua, com ajustes semanais",
      "RelatÃ³rios mensais detalhados (CPC, CPL e ROI)",
    ],
  },
  {
    id: "branding",
    number: "03",
    badge: "cyan",
    icon: "âœ¦",
    iconBox: "icon-box-blue",
    imageBg: "blue",
    title: "Posicionamento e Branding",
    paragraphs: [
      "ConstruÃ­mos a identidade da sua marca pessoal como profissional de saÃºde â€” do conceito Ã  identidade visual. Uma marca que comunica excelÃªncia antes mesmo do primeiro contato.",
      "Antes de entrar no seu consultÃ³rio, o paciente jÃ¡ pesquisou seu nome, viu seu perfil e formou uma opiniÃ£o. Construir uma marca forte no setor de saÃºde nÃ£o Ã© vaidade â€” Ã© uma forma legÃ­tima de fazer com que o paciente certo te encontre e confie em vocÃª.",
    ],
    features: [
      "DiagnÃ³stico de posicionamento atual",
      "DefiniÃ§Ã£o de proposta de valor Ãºnica",
      "Identidade visual (logo, paleta, tipografia)",
      "Tom de voz e guia de comunicaÃ§Ã£o",
      "Manual de marca completo",
    ],
  },
  {
    id: "sites",
    number: "04",
    badge: "purple",
    icon: "â—†",
    iconBox: "icon-box-grad",
    imageBg: "grad",
    title: "Sites de Alta ConversÃ£o",
    paragraphs: [
      "Sites e landing pages desenvolvidos para transformar visitantes em pacientes qualificados. Design profissional, carregamento rÃ¡pido, SEO otimizado e texto estratÃ©gico â€” tudo alinhado Ã  sua especialidade e ao seu posicionamento.",
    ],
    features: [
      "Design responsivo (mobile, tablet e desktop)",
      "SEO tÃ©cnico e de conteÃºdo otimizado",
      "IntegraÃ§Ã£o com WhatsApp e formulÃ¡rio de agendamento",
      "ConfiguraÃ§Ã£o do Google Meu NegÃ³cio",
      "Certificado SSL e otimizaÃ§Ã£o de velocidade",
    ],
    note: "Landing page, site profissional ou site institucional de clÃ­nica â€” cada projeto se adapta ao momento da sua carreira.",
  },
  {
    id: "consultoria",
    number: "05",
    badge: "cyan",
    icon: "ðŸ§­",
    iconBox: "icon-box-cyan",
    imageBg: "cyan",
    title: "Consultoria de Marketing Ã‰tico",
    paragraphs: [
      "A incerteza sobre o que Ã© permitido nas normas do seu conselho de classe nÃ£o deve paralisar a sua comunicaÃ§Ã£o. Damos clareza, seguranÃ§a e um plano de aÃ§Ã£o concreto para agir dentro das regras.",
    ],
    features: [
      "Consultoria pontual de 1h30 com relatÃ³rio por escrito",
      "DiagnÃ³stico e plano de aÃ§Ã£o com anÃ¡lise completa de canais",
      "Publicidade mÃ©dica, redes sociais, antes/depois e depoimentos",
      "PromoÃ§Ãµes, preÃ§os e conformidade com a LGPD",
    ],
  },
  {
    id: "assessoria-imprensa",
    number: "06",
    badge: "purple",
    icon: "âœŽ",
    iconBox: "icon-box-purple",
    imageBg: "purple",
    title: "Assessoria de Imprensa",
    paragraphs: [
      "Redes sociais constroem audiÃªncia. A imprensa constrÃ³i autoridade. Posicionamos mÃ©dicos e clÃ­nicas como fontes de referÃªncia nos principais portais, revistas e programas de saÃºde do Brasil â€” dentro das normas do CFM.",
    ],
    features: [
      "RelaÃ§Ãµes com jornalistas e editores de veÃ­culos de saÃºde",
      "ProduÃ§Ã£o de releases, artigos e notas tÃ©cnicas",
      "Media training para entrevistas em rÃ¡dio, TV e podcasts",
      "Clipping mensal e cÃ¡lculo de valor equivalente de mÃ­dia (AVE)",
      "GestÃ£o de comunicaÃ§Ã£o em crise",
    ],
  },
  {
    id: "treinamento-equipe",
    number: "07",
    badge: "cyan",
    icon: "ðŸ¤",
    iconBox: "icon-box-blue",
    imageBg: "blue",
    title: "Treinamento de SecretÃ¡rias e Time de Vendas",
    paragraphs: [
      "De nada adianta investir em marketing se a secretÃ¡ria nÃ£o sabe converter um contato em consulta agendada. Treinamos sua equipe para atender com acolhimento, gerar confianÃ§a e transformar ligaÃ§Ãµes em agendamentos â€” sem abordagem de vendas invasiva.",
    ],
    features: [
      "Atendimento humanizado no WhatsApp e por telefone",
      "Como lidar com objeÃ§Ãµes sem pressionar",
      "GestÃ£o da agenda e reduÃ§Ã£o de faltas (no-shows)",
      "Acolhimento presencial e jornada do paciente",
      "Indicadores de atendimento e melhoria contÃ­nua",
    ],
    note: "DisponÃ­vel online ao vivo, presencial em SÃ£o Paulo/SP ou em formato gravado, com sessÃ£o de acompanhamento 30 dias apÃ³s o treinamento.",
  },
];

export type FaqItem = { question: string; answer: string };

export const SERVICES_FAQ: FaqItem[] = [
  {
    question: "Posso postar antes e depois de procedimentos?",
    answer:
      'NÃ£o. A exibiÃ§Ã£o de "antes e depois" Ã© vedada pelo CFM para mÃ©dicos. A Doc.Lab nunca produz esse tipo de conteÃºdo. Trabalhamos com formatos permitidos que igualmente geram autoridade â€” como conteÃºdo educativo e depoimentos dentro das normas.',
  },
  {
    question: "Quanto tempo leva para ver resultados na gestÃ£o de redes sociais?",
    answer:
      "Os primeiros resultados geralmente aparecem entre 60 e 90 dias. O crescimento de autoridade e o reflexo em novos pacientes costuma ser mais perceptÃ­vel entre 4 e 6 meses de consistÃªncia.",
  },
  {
    question: "Qual o orÃ§amento mÃ­nimo para campanhas de trÃ¡fego pago?",
    answer:
      "Recomendamos um investimento mÃ­nimo de R$ 800/mÃªs em verba de mÃ­dia (valor que vai diretamente para as plataformas). A verba de mÃ­dia Ã© paga diretamente por vocÃª, com total transparÃªncia â€” cobramos apenas a taxa de gestÃ£o pelos nossos serviÃ§os.",
  },
  {
    question: "O CFM permite que mÃ©dicos apareÃ§am na imprensa?",
    answer:
      "Sim. O CFM permite que o mÃ©dico conceda entrevistas e preste informaÃ§Ãµes Ã  imprensa com finalidade de educaÃ§Ã£o em saÃºde. O que Ã© vedado Ã© usar a mÃ­dia para autopromoÃ§Ã£o, comparaÃ§Ãµes com outros profissionais ou promessas de resultados.",
  },
  {
    question: "O treinamento de equipe Ã© sobre tÃ©cnicas de vendas agressivas?",
    answer:
      "NÃ£o. Nossa metodologia Ã© baseada em atendimento humanizado. Ensinamos como acolher o paciente, responder dÃºvidas com clareza e facilitar a decisÃ£o de agendar â€” sem pressÃ£o e sem manipulaÃ§Ã£o.",
  },
];

export type CaseStat = { n: string; l: string };

export const CASES_STATS: CaseStat[] = [
  { n: "98%", l: "Taxa de satisfaÃ§Ã£o dos clientes" },
  { n: "+312%", l: "Crescimento mÃ©dio de alcance orgÃ¢nico" },
  { n: "10+", l: "Especialidades mÃ©dicas atendidas" },
  { n: "4.8â˜…", l: "AvaliaÃ§Ã£o mÃ©dia no Google Meu NegÃ³cio" },
];

export const HERO_STATS = [
  { n: "+120%", l: "Growth médio" },
  { n: "40+", l: "Clientes no setor de saúde" },
  { n: "6 anos", l: "Dedicados ao marketing médico" },
];

export type CaseTestimonial = {
  name: string;
  role: string;
  badge: "cyan" | "purple";
  quote: string;
  results: { n: string; l: string }[];
};

export const CASES: CaseTestimonial[] = [
  {
    name: "Dr. Carlos Mendes",
    role: "Cardiologista",
    badge: "cyan",
    quote:
      "A Doc.Lab transformou minha presenÃ§a online. Meus agendamentos aumentaram 40% em apenas 3 meses. O trabalho em redes sociais foi excepcional.",
    results: [
      { n: "+40%", l: "Agendamentos" },
      { n: "3 meses", l: "Para ver resultados" },
    ],
  },
  {
    name: "Dra. Juliana Silva",
    role: "Dermatologista",
    badge: "purple",
    quote:
      "Excelente trabalho em branding. Hoje sou reconhecida como referÃªncia na minha especialidade no Instagram. O branding ficou muito acima do esperado.",
    results: [
      { n: "+8k", l: "Seguidores em 6 meses" },
      { n: "Top 3", l: "Dermatologistas da regiÃ£o" },
    ],
  },
  {
    name: "Dr. Rafael Costa",
    role: "CirurgiÃ£o PlÃ¡stico",
    badge: "cyan",
    quote:
      "O site que criaram Ã© perfeito. ConversÃ£o de leads muito acima da mÃ©dia do mercado. Sinto que finalmente minha imagem online reflete meu trabalho.",
    results: [
      { n: "3Ã—", l: "Mais leads pelo site" },
      { n: "95%", l: "SatisfaÃ§Ã£o dos pacientes" },
    ],
  },
  {
    name: "Dra. Fernanda Lima",
    role: "Neurologista",
    badge: "purple",
    quote:
      "Nunca imaginei que marketing mÃ©dico poderia ser tÃ£o eficiente. A equipe entende os limites Ã©ticos e ainda assim entrega resultados impressionantes.",
    results: [
      { n: "+55%", l: "Novos pacientes" },
      { n: "4 meses", l: "Retorno do investimento" },
    ],
  },
  {
    name: "Dr. Marcos Almeida",
    role: "Ortopedista",
    badge: "cyan",
    quote:
      "A estratÃ©gia de SEO que aplicaram fez meu consultÃ³rio aparecer no topo do Google. Hoje recebo pacientes de toda a cidade sem precisar pagar por anÃºncios.",
    results: [
      { n: "1Âº", l: "No Google local" },
      { n: "+30%", l: "TrÃ¡fego orgÃ¢nico" },
    ],
  },
  {
    name: "Dra. Camila Souza",
    role: "Pediatra",
    badge: "purple",
    quote:
      "Meu Instagram se tornou uma fonte real de pacientes. Os pais me encontram, leem meu conteÃºdo e jÃ¡ chegam na consulta com confianÃ§a no meu trabalho.",
    results: [
      { n: "+12k", l: "Seguidores engajados" },
      { n: "+65%", l: "ConversÃ£o de DMs" },
    ],
  },
];

export type MissionItem = { icon: string; iconBox: string; title: string; body: string };

export const MISSION_VISION_PURPOSE: MissionItem[] = [
  {
    icon: "ðŸŽ¯",
    iconBox: "icon-box-cyan",
    title: "MissÃ£o",
    body: "Empoderar profissionais de saÃºde com estratÃ©gias digitais Ã©ticas que ampliam seu alcance, fortalecem sua autoridade e atraem pacientes que valorizam sua excelÃªncia.",
  },
  {
    icon: "ðŸ‘",
    iconBox: "icon-box-purple",
    title: "VisÃ£o",
    body: "Ser a referÃªncia nacional em marketing Ã©tico para saÃºde, reconhecida por transformar o padrÃ£o de comunicaÃ§Ã£o do setor.",
  },
  {
    icon: "ðŸ’¡",
    iconBox: "icon-box-grad",
    title: "PropÃ³sito",
    body: "Fazer com que o paciente certo encontre o profissional certo â€” e que essa conexÃ£o aconteÃ§a com confianÃ§a, transparÃªncia e Ã©tica.",
  },
];

export type TimelineItem = { year: string; title: string; body: string };

export const TIMELINE: TimelineItem[] = [
  {
    year: "2020",
    title: "A semente",
    body: "Primeiras consultorias informais para mÃ©dicos amigos. A pergunta repetida virou uma oportunidade.",
  },
  {
    year: "2021",
    title: "A fundaÃ§Ã£o",
    body: "A Doc.Lab Ã© oficialmente fundada, com foco exclusivo em saÃºde. Os primeiros clientes testam e validam a metodologia. Resultado: 100% de renovaÃ§Ã£o de contrato.",
  },
  {
    year: "2023",
    title: "ExpansÃ£o e mÃ©todo",
    body: "A metodologia Doc.Lab Ã© formalizada. A equipe cresce. Passamos a atender 15 especialidades diferentes.",
  },
  {
    year: "Hoje",
    title: "PresenÃ§a nacional",
    body: "Atendemos profissionais do Brasil inteiro.",
  },
];

export type ValueItem = { icon: string; iconBox: string; title: string; body: string };

export const VALUES: ValueItem[] = [
  {
    icon: "âš–ï¸",
    iconBox: "icon-box-cyan",
    title: "Ã‰tica acima de tudo",
    body: "Nenhuma estratÃ©gia, campanha ou conteÃºdo vai ao ar sem passar pela lente da conformidade com o CFM, CRO, CFF e demais conselhos de classe. Este nÃ£o Ã© um diferencial â€” Ã© uma exigÃªncia interna.",
  },
  {
    icon: "ðŸ”¬",
    iconBox: "icon-box-purple",
    title: "Rigor como mÃ©todo",
    body: "Aplicamos ao marketing o mesmo rigor cientÃ­fico que os profissionais de saÃºde aplicam Ã  medicina. DecisÃµes baseadas em dados, hipÃ³teses testadas e resultados mensurÃ¡veis.",
  },
  {
    icon: "âœ¦",
    iconBox: "icon-box-blue",
    title: "Parceria genuÃ­na",
    body: "NÃ£o somos fornecedores. Somos parceiros estratÃ©gicos. Celebramos suas conquistas, entendemos seus desafios e adaptamos a estratÃ©gia conforme sua carreira evolui.",
  },
  {
    icon: "ðŸ“š",
    iconBox: "icon-box-grad",
    title: "EducaÃ§Ã£o como prÃ¡tica",
    body: "Acreditamos que um cliente bem informado Ã© um cliente mais satisfeito. Por isso, explicamos tudo o que fazemos, por que fazemos e o que esperamos de resultado em cada aÃ§Ã£o.",
  },
];

export type TeamMember = { icon: string; name: string; role: string; bio: string };

export const TEAM: TeamMember[] = [
  {
    icon: "ðŸ‘©â€ðŸ’¼",
    name: "AmÃ¡bile Bianchi",
    role: "Fundadora",
    bio: "Formada em Jornalismo hÃ¡ 15 anos, especialista em ComunicaÃ§Ã£o e Marketing pela ECA-USP.",
  },
  {
    icon: "ðŸ‘©â€ðŸ’»",
    name: "Elizabete Moraes",
    role: "Coordenadora",
    bio: "Formada em Publicidade e Propaganda, com 15 anos de experiÃªncia na Ã¡rea de marketing. Especialista em gestÃ£o de trÃ¡fego pago para Google e Meta Business.",
  },
  {
    icon: "ðŸ‘©â€ðŸŽ¨",
    name: "Luisa Sampaio",
    role: "Designer",
    bio: "Formada em Design GrÃ¡fico pela Universidade de Sorocaba. Especialista em Branding.",
  },
  {
    icon: "ðŸ‘©â€ðŸŽ“",
    name: "GraÃ§a Helena Sanches",
    role: "EstagiÃ¡ria",
    bio: "Graduanda em Jornalismo pela Universidade de Sorocaba.",
  },
];

export type BlogArticle = {
  slug: string;
  badge: "cyan" | "purple";
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  publishedLabel?: string;
  author?: string;
  external?: boolean; // links straight to /orcamento (not yet written)
  content?: { heading?: string; paragraphs?: string[]; list?: string[]; callout?: string }[];
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "como-construir-autoridade-instagram-sem-ferir-cfm",
    badge: "purple",
    category: "Ã‰tica e LegislaÃ§Ã£o",
    readTime: "12 min de leitura",
    title: "Como construir autoridade no Instagram sem ferir o CFM",
    excerpt:
      "Entenda as fronteiras do que Ã© permitido e descubra como transformar seu conhecimento clÃ­nico em conteÃºdo que gera confianÃ§a â€” e pacientes qualificados.",
    publishedLabel: "Publicado em marÃ§o de 2025",
    author: "Equipe Doc.Lab",
    content: [
      {
        paragraphs: [
          "O Instagram se tornou, nos Ãºltimos anos, uma das principais ferramentas de construÃ§Ã£o de autoridade para profissionais de saÃºde. E com razÃ£o: Ã© onde os pacientes pesquisam, avaliam e decidem em quem confiar antes de marcar uma consulta.",
          "O problema Ã© que, para mÃ©dicos, o Instagram funciona em um campo minado de possibilidades e restriÃ§Ãµes. O Conselho Federal de Medicina (CFM) possui normas especÃ­ficas sobre publicidade mÃ©dica â€” e navegar por elas sem o conhecimento adequado pode resultar desde posts ineficazes atÃ© processos Ã©ticos sÃ©rios.",
          "Neste artigo, vamos detalhar o que Ã© e o que nÃ£o Ã© permitido, e mostrar caminhos prÃ¡ticos para construir uma presenÃ§a digital de autoridade â€” dentro de todas as regras.",
        ],
      },
      {
        heading: "1. A base legal: o que diz o CFM",
        paragraphs: [
          "A principal referÃªncia para publicidade mÃ©dica Ã© a ResoluÃ§Ã£o CFM nÂº 2.336/2023, que atualizou e consolidou as normas anteriores. Ela define os limites da divulgaÃ§Ã£o profissional do mÃ©dico em todos os meios, incluindo as redes sociais.",
          "Alguns princÃ­pios fundamentais que vocÃª precisa conhecer:",
        ],
        list: [
          "A publicidade mÃ©dica deve ter carÃ¡ter educativo e informativo, jamais comercial ou sensacionalista;",
          "Ã‰ vedado prometer resultados ou garantir curas;",
          'O mÃ©dico nÃ£o pode usar pacientes como "propaganda" â€” nem com consentimento;',
          'A exibiÃ§Ã£o de "antes e depois" Ã© expressamente proibida para a maioria dos procedimentos;',
          "NÃ£o Ã© permitido utilizar superlatividade (o melhor, o mais moderno, o Ãºnico).",
        ],
        callout:
          "Importante: Estas sÃ£o diretrizes gerais. Cada especialidade pode ter normas adicionais emitidas pelo seu conselho regional ou federal. Sempre consulte as resoluÃ§Ãµes vigentes para a sua Ã¡rea.",
      },
      {
        heading: "2. O que vocÃª PODE publicar no Instagram",
        paragraphs: [
          "A boa notÃ­cia Ã© que, dentro das normas, ainda hÃ¡ um universo imenso de possibilidades de conteÃºdo. Veja os formatos permitidos:",
          "ConteÃºdo educativo â€” Este Ã© o tipo mais poderoso e o mais alinhado ao espÃ­rito das normas do CFM. Posts que explicam doenÃ§as, sintomas, fatores de risco, quando procurar um especialista e como funciona um procedimento sÃ£o totalmente permitidos â€” e geram enorme credibilidade.",
          'ApresentaÃ§Ã£o de serviÃ§os (sem promessas) â€” VocÃª pode comunicar que realiza um procedimento ou trata determinadas condiÃ§Ãµes. O que nÃ£o pode Ã© prometer resultados. HÃ¡ uma diferenÃ§a enorme entre "Realizamos cirurgia de catarata" (permitido) e "Nossa cirurgia de catarata vai devolver sua visÃ£o" (vedado).',
          "Bastidores do consultÃ³rio (com cuidado) â€” Fotos da estrutura do consultÃ³rio, dos equipamentos e dos protocolos de atendimento sÃ£o permitidas â€” desde que nÃ£o exponham pacientes ou informaÃ§Ãµes sensÃ­veis.",
          "TrajetÃ³ria e formaÃ§Ã£o profissional â€” Apresentar sua trajetÃ³ria, especializaÃ§Ãµes, publicaÃ§Ãµes cientÃ­ficas e participaÃ§Ãµes em congressos Ã© completamente permitido e muito eficaz para construir autoridade.",
        ],
        callout:
          "EstratÃ©gia Doc.Lab: os mÃ©dicos com mais engajamento nas redes sociais sÃ£o aqueles que compartilham conhecimento de forma genuÃ­na, sem transformar o perfil em um catÃ¡logo de serviÃ§os. Seu Instagram deve parecer com uma conversa de consultÃ³rio â€” nÃ£o com um panfleto.",
      },
      {
        heading: "3. O que vocÃª NÃƒO pode publicar",
        list: [
          "Antes e depois de procedimentos estÃ©ticos ou cirÃºrgicos â€” vedaÃ§Ã£o expressa para mÃ©dicos na maioria dos casos;",
          "Depoimentos de pacientes sobre resultados clÃ­nicos â€” mesmo com autorizaÃ§Ã£o, viola normas sobre publicidade;",
          'Uso de "o melhor", "o Ãºnico", "garantido" â€” linguagem superlativa e prometedora Ã© proibida;',
          "AnÃºncios de promoÃ§Ãµes ou descontos em consultas â€” configura a medicina como atividade comercial;",
          'ParticipaÃ§Ã£o em rankings pagos â€” pagar para ser indicado como "Top MÃ©dico" ou similar;',
          "ConteÃºdo que gera medo ou ansiedade desnecessÃ¡ria para induzir Ã  consulta.",
        ],
      },
      {
        heading: "4. Uma estratÃ©gia prÃ¡tica para comeÃ§ar",
        paragraphs: [
          "Agora que vocÃª conhece as fronteiras, aqui estÃ¡ um roteiro para comeÃ§ar a construir sua presenÃ§a no Instagram de forma estratÃ©gica e segura:",
        ],
        list: [
          "Passo 1: Defina seu posicionamento â€” para quem vocÃª fala? Qual Ã© o seu paciente ideal?",
          "Passo 2: EstabeleÃ§a 3 a 4 pilares de conteÃºdo â€” temas recorrentes que sustentam sua autoridade.",
          "Passo 3: Crie uma rotina consistente â€” a consistÃªncia Ã© mais importante que a frequÃªncia alta.",
          "Passo 4: Aprove cada conteÃºdo antes de publicar â€” revise cada peÃ§a antes de ir ao ar.",
        ],
      },
      {
        paragraphs: [
          "Lembre-se: o objetivo do seu Instagram nÃ£o Ã© ter milhÃµes de seguidores. Ã‰ fazer com que os pacientes certos confiem em vocÃª antes mesmo de entrar no consultÃ³rio. Um perfil com 2.000 seguidores altamente qualificados pode ser muito mais valioso do que um com 50.000 seguidores desengajados.",
        ],
      },
      {
        heading: "5. ConclusÃ£o",
        paragraphs: [
          "Construir autoridade no Instagram como profissional de saÃºde Ã© totalmente possÃ­vel â€” e necessÃ¡rio nos dias de hoje. O caminho exige estratÃ©gia, consistÃªncia e respeito Ã s normas Ã©ticas da sua profissÃ£o.",
          "A boa notÃ­cia Ã© que, ao contrÃ¡rio do que muitos pensam, as normas do CFM nÃ£o inviabilizam o marketing digital. Elas apenas direcionam para o caminho mais sustentÃ¡vel: o da comunicaÃ§Ã£o baseada em conhecimento genuÃ­no, respeito ao paciente e posicionamento de longo prazo.",
        ],
      },
    ],
  },
  {
    slug: "",
    badge: "purple",
    category: "Ã‰tica e LegislaÃ§Ã£o",
    readTime: "8 min de leitura",
    title: "O que diz a ResoluÃ§Ã£o CFM 2.336/2023 sobre publicidade mÃ©dica",
    excerpt:
      "Um guia prÃ¡tico sobre as novas diretrizes: o que mudou, o que Ã© permitido e como adaptar sua comunicaÃ§Ã£o Ã s normas vigentes.",
    external: true,
  },
  {
    slug: "",
    badge: "cyan",
    category: "GestÃ£o de ConsultÃ³rio",
    readTime: "10 min de leitura",
    title: "Marketing e fidelizaÃ§Ã£o: por que pacientes voltam (ou nÃ£o voltam)",
    excerpt:
      "A relaÃ§Ã£o entre comunicaÃ§Ã£o digital e a experiÃªncia dentro do consultÃ³rio â€” como o marketing ajuda na retenÃ§Ã£o de pacientes e na reputaÃ§Ã£o da clÃ­nica.",
    external: true,
  },
  {
    slug: "",
    badge: "cyan",
    category: "Marketing MÃ©dico",
    readTime: "9 min de leitura",
    title: "SEO local para consultÃ³rios: como aparecer no Google da sua cidade",
    excerpt:
      "EstratÃ©gias prÃ¡ticas de SEO local para mÃ©dicos e clÃ­nicas. Como otimizar seu Google Meu NegÃ³cio e aparecer nos resultados certos.",
    external: true,
  },
  {
    slug: "",
    badge: "purple",
    category: "TendÃªncias",
    readTime: "7 min de leitura",
    title: "InteligÃªncia artificial na criaÃ§Ã£o de conteÃºdo mÃ©dico: o que Ã© seguro usar",
    excerpt:
      "Como usar ferramentas de IA para acelerar a produÃ§Ã£o de conteÃºdo sem comprometer a precisÃ£o cientÃ­fica e a conformidade Ã©tica.",
    external: true,
  },
  {
    slug: "",
    badge: "cyan",
    category: "Marketing MÃ©dico",
    readTime: "11 min de leitura",
    title: "LinkedIn para mÃ©dicos: a rede social que vocÃª estÃ¡ subutilizando",
    excerpt:
      "Como o LinkedIn pode ser a principal ferramenta de construÃ§Ã£o de autoridade e networking para profissionais de saÃºde.",
    external: true,
  },
];

export const CONTACT_CHANNELS = [
  {
    icon: "ðŸ“±",
    iconBox: "icon-box-cyan",
    title: "WhatsApp",
    value: SITE.whatsappDisplay,
    href: `https://wa.me/${SITE.whatsapp}`,
    body: "A forma mais rÃ¡pida de falar com nossa equipe. Respondemos em atÃ© 2 horas em horÃ¡rio comercial.",
  },
  {
    icon: "âœ‰ï¸",
    iconBox: "icon-box-purple",
    title: "E-mail",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    body: "Prefere mandar por e-mail? Respondemos todas as mensagens em atÃ© 24 horas Ãºteis.",
  },
  {
    icon: "ðŸ“¸",
    iconBox: "icon-box-grad",
    title: "Instagram",
    value: SITE.instagramHandle,
    href: SITE.instagram,
    body: "Acompanhe nosso conteÃºdo sobre marketing Ã©tico para saÃºde e fale com a gente pelo DM.",
  },
];

export const CONTACT_INFO_CARDS = [
  {
    icon: "ðŸ•",
    iconBox: "icon-box-cyan",
    title: "HorÃ¡rio de Atendimento",
    body: "Segunda a sexta: 8h Ã s 18h. Respostas urgentes de clientes ativos tambÃ©m aos sÃ¡bados.",
  },
  {
    icon: "ðŸ“",
    iconBox: "icon-box-purple",
    title: "LocalizaÃ§Ã£o",
    body: "Atendemos clientes em todo o Brasil de forma remota. ReuniÃµes presenciais disponÃ­veis mediante agendamento em SÃ£o Paulo, SP.",
  },
];

export const BUDGET_GOAL_OPTIONS = [
  { value: "presenca-digital", label: "GestÃ£o de PresenÃ§a Digital" },
  { value: "trafego-pago", label: "TrÃ¡fego Pago para SaÃºde" },
  { value: "branding", label: "Posicionamento e Branding" },
  { value: "sites", label: "Site de Alta ConversÃ£o" },
  { value: "consultoria", label: "Consultoria de Marketing Ã‰tico" },
  { value: "assessoria-imprensa", label: "Assessoria de Imprensa" },
  { value: "treinamento-equipe", label: "Treinamento de Equipe" },
  { value: "nao-sei", label: "Ainda nÃ£o sei â€” quero orientaÃ§Ã£o" },
];

export const BUDGET_PROCESS_STEPS = [
  {
    title: "DiagnÃ³stico da sua situaÃ§Ã£o atual",
    body: "O que jÃ¡ existe, o que falta e quais sÃ£o as maiores oportunidades.",
  },
  {
    title: "Alinhamento de objetivos",
    body: "O que Ã© sucesso para vocÃª: mais pacientes, maior autoridade ou posicionamento.",
  },
  {
    title: "IndicaÃ§Ã£o das melhores soluÃ§Ãµes",
    body: "Com base no seu perfil e nos seus objetivos.",
  },
  {
    title: "Proposta personalizada",
    body: "Escopo, prazos e investimento, sem contratos longos obrigatÃ³rios.",
  },
];

export const FOOTER_SOLUTIONS_LINKS = SERVICES.map((s) => ({ id: s.id, label: s.title }));
