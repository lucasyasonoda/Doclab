// Analytics — IDs configurados via variáveis de ambiente (.env), para não expor/versionar
// o ID de produção direto no código. Ver .env.example na raiz do projeto.
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? "";
export const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? "";

export const SITE = {
  name: "Doc.Lab",
  tagline: "Agência de Marketing Ético para Saúde",
  email: "contato@doclabsaude.com.br",
  privacyEmail: "privacidade@doclabag.com.br",
  whatsapp: "5515997961512",
  whatsappDisplay: "(15) 99796-1512",
  instagram: "https://instagram.com/doclabagencia",
  instagramHandle: "@doclabagencia",
  cnpj: "00.000.000/0001-00",
  address:
    "Atendimento remoto em todo o Brasil. Reuniões presenciais em São Paulo, SP mediante agendamento.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11556.372963296011!2d-47.48293602477855!3d-23.5020571973908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58abf0131c73d%3A0x62b1fd1e1d8a57f7!2sPadaria%20Real%20Centro!5e0!3m2!1spt-BR!2sbr!4v1777638223435!5m2!1spt-BR!2sbr",
};

export const HERO_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663088381413/McJchZvySyLrLarX8YduLH/hero-banner-Dmj4rwie62q2QqqrQYgKkt.webp";
export const WHY_US_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663088381413/McJchZvySyLrLarX8YduLH/services-section-o2qyywmPCDcMWtNnEf2nZb.webp";
export const CTA_BG_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663088381413/McJchZvySyLrLarX8YduLH/cta-section-8g6PdpjpLki9kAMJcxkYDB.webp";

export const NAV_LINKS = [
  { to: "/servicos", label: "Soluções" },
  { to: "/sobre", label: "Sobre" },
  { to: "/blog", label: "Blog" },
  { to: "/cases", label: "Cases" },
  { to: "/contato", label: "Contato" },
];

export const HERO_STATS = [
  { n: "98%", l: "Taxa de satisfação dos clientes" },
  { n: "10+", l: "Especialidades médicas atendidas" },
  { n: "3x", l: "Crescimento médio de presença digital" },
];

export type Differential = { icon: string; iconBox: string; title: string; body: string };

export const DIFFERENTIALS: Differential[] = [
  {
    icon: "🎓",
    iconBox: "icon-box-cyan",
    title: "Especialistas, não generalistas",
    body: "Nosso time é formado por profissionais de comunicação com foco em saúde. Conhecemos a rotina do consultório, os desafios da gestão e as restrições éticas que todo profissional enfrenta.",
  },
  {
    icon: "⚖️",
    iconBox: "icon-box-purple",
    title: "Marketing ético como prioridade",
    body: "Toda estratégia é desenvolvida dentro das normas do CFM e demais conselhos de classe. Você não precisa se preocupar em infringir as regras — essa é a nossa responsabilidade.",
  },
  {
    icon: "📊",
    iconBox: "icon-box-blue",
    title: "Crescimento baseado em dados",
    body: "Relatórios claros, metas mensuráveis e decisões fundamentadas em evidências. Nenhuma ação é tomada sem um objetivo claro, e cada resultado é rastreado e comunicado a você.",
  },
  {
    icon: "✦",
    iconBox: "icon-box-grad",
    title: "Autoridade, não volume",
    body: "Não acreditamos em quantidade de posts sem propósito. Construímos sua presença digital como reflexo fiel da sua excelência clínica — conteúdo que posiciona e que os pacientes certos leem.",
  },
];

export type WhyUsItem = { icon: string; iconBox: string; title: string; body: string };

export const WHY_US: WhyUsItem[] = [
  {
    icon: "🤝",
    iconBox: "icon-box-cyan",
    title: "Parceria de longo prazo",
    body: "Não vendemos pacotes e desaparecemos. Acompanhamos de perto a evolução do seu posicionamento e atuamos como extensão do seu consultório.",
  },
  {
    icon: "🔒",
    iconBox: "icon-box-purple",
    title: "Sigilo e conformidade total",
    body: "Zero dados de pacientes, zero exposição indevida. Comunicação estratégica, discreta e sempre alinhada à LGPD.",
  },
  {
    icon: "🌎",
    iconBox: "icon-box-grad",
    title: "Presença nacional",
    body: "Atendemos profissionais de todo o Brasil, com mais de 10 especialidades médicas já acompanhadas pela nossa equipe.",
  },
];

export type Testimonial = { name: string; role: string; quote: string; badge?: "cyan" | "purple" };

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    name: "Dra. Mariana Ferreira",
    role: "Endocrinologista Pediátrica",
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
      "Como gestora de uma clínica com 12 médicos, precisava de uma comunicação que valorizasse toda a nossa equipe sem transformar saúde em espetáculo. A Doc.Lab entregou exatamente isso: uma presença digital elegante, ética e que atrai pacientes que compartilham nossos valores.",
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
    category: "Marketing Médico",
    title: "Como construir autoridade no Instagram sem ferir o CFM",
    excerpt:
      "Entenda as fronteiras do que é permitido e descubra como transformar seu conhecimento clínico em conteúdo que gera confiança — e pacientes qualificados.",
  },
  {
    slug: "",
    badge: "purple",
    category: "Ética e Legislação",
    title: "O que diz a Resolução CFM 2.336/2023 sobre publicidade médica",
    excerpt:
      "Um guia prático e direto sobre as novas diretrizes de publicidade para médicos: o que mudou, o que é permitido e como adaptar sua comunicação.",
  },
  {
    slug: "",
    badge: "cyan",
    category: "Gestão de Consultório",
    title: "Marketing e fidelização: por que pacientes voltam (ou não voltam)",
    excerpt:
      "A relação entre comunicação digital e a experiência dentro do consultório — como o marketing ajuda na retenção de pacientes e na reputação da clínica.",
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
    icon: "💬",
    iconBox: "icon-box-cyan",
    imageBg: "cyan",
    title: "Gestão de Presença Digital",
    paragraphs: [
      "Transformamos seu conhecimento clínico em conteúdo estratégico para redes sociais. Sem sensacionalismo, sem jargões de marketing agressivo — apenas posicionamento sólido, dentro das normas do seu conselho de classe.",
      "Médicos e profissionais de saúde passam anos construindo expertise clínica. A Doc.Lab cria a ponte entre a sua excelência clínica e a linguagem digital — respeitando cada fronteira ética do caminho.",
    ],
    features: [
      "Planejamento editorial mensal",
      "Criação de conteúdo completo (texto, design e legendas)",
      "Gestão e publicação nos melhores horários",
      "Monitoramento e relatórios mensais",
      "Checagem ética em cada peça antes de publicar",
    ],
  },
  {
    id: "trafego-pago",
    number: "02",
    badge: "purple",
    icon: "📢",
    iconBox: "icon-box-purple",
    imageBg: "purple",
    title: "Tráfego Pago para Saúde",
    paragraphs: [
      "Google Ads e Meta Ads desenvolvidos com profundo respeito às diretrizes éticas do setor de saúde. Alcançamos os pacientes ideais para a sua especialidade — sem promessas de cura, sem sensacionalismo, dentro de cada norma aplicável.",
      "Cada campanha é desenvolvida por quem conhece as duas linguagens: a dos algoritmos de mídia paga e a do código de ética do setor de saúde.",
    ],
    features: [
      "Estratégia de campanhas personalizada por especialidade",
      "Criação de anúncios conformes ao CFM e às plataformas",
      "Gestão e otimização contínua, com ajustes semanais",
      "Relatórios mensais detalhados (CPC, CPL e ROI)",
    ],
  },
  {
    id: "branding",
    number: "03",
    badge: "cyan",
    icon: "✦",
    iconBox: "icon-box-blue",
    imageBg: "blue",
    title: "Posicionamento e Branding",
    paragraphs: [
      "Construímos a identidade da sua marca pessoal como profissional de saúde — do conceito à identidade visual. Uma marca que comunica excelência antes mesmo do primeiro contato.",
      "Antes de entrar no seu consultório, o paciente já pesquisou seu nome, viu seu perfil e formou uma opinião. Construir uma marca forte no setor de saúde não é vaidade — é uma forma legítima de fazer com que o paciente certo te encontre e confie em você.",
    ],
    features: [
      "Diagnóstico de posicionamento atual",
      "Definição de proposta de valor única",
      "Identidade visual (logo, paleta, tipografia)",
      "Tom de voz e guia de comunicação",
      "Manual de marca completo",
    ],
  },
  {
    id: "sites",
    number: "04",
    badge: "purple",
    icon: "🌐",
    iconBox: "icon-box-grad",
    imageBg: "grad",
    title: "Sites de Alta Conversão",
    paragraphs: [
      "Sites e landing pages desenvolvidos para transformar visitantes em pacientes qualificados. Design profissional, carregamento rápido, SEO otimizado e texto estratégico — tudo alinhado à sua especialidade e ao seu posicionamento.",
    ],
    features: [
      "Design responsivo (mobile, tablet e desktop)",
      "SEO técnico e de conteúdo otimizado",
      "Integração com WhatsApp e formulário de agendamento",
      "Configuração do Google Meu Negócio",
      "Certificado SSL e otimização de velocidade",
    ],
    note: "Landing page, site profissional ou site institucional de clínica — cada projeto se adapta ao momento da sua carreira.",
  },
  {
    id: "consultoria",
    number: "05",
    badge: "cyan",
    icon: "🧭",
    iconBox: "icon-box-cyan",
    imageBg: "cyan",
    title: "Consultoria de Marketing Ético",
    paragraphs: [
      "A incerteza sobre o que é permitido nas normas do seu conselho de classe não deve paralisar a sua comunicação. Damos clareza, segurança e um plano de ação concreto para agir dentro das regras.",
    ],
    features: [
      "Consultoria pontual de 1h30 com relatório por escrito",
      "Diagnóstico e plano de ação com análise completa de canais",
      "Publicidade médica, redes sociais, antes/depois e depoimentos",
      "Promoções, preços e conformidade com a LGPD",
    ],
  },
  {
    id: "assessoria-imprensa",
    number: "06",
    badge: "purple",
    icon: "📰",
    iconBox: "icon-box-purple",
    imageBg: "purple",
    title: "Assessoria de Imprensa",
    paragraphs: [
      "Redes sociais constroem audiência. A imprensa constrói credibilidade. Posicionamos médicos e clínicas como fontes de referência nos principais portais, revistas e programas de saúde do Brasil — dentro das normas do CFM.",
    ],
    features: [
      "Relações com jornalistas e editores de veículos de saúde",
      "Produção de releases, op-eds e notas técnicas",
      "Media training para entrevistas em rádio, TV e podcasts",
      "Clipping mensal e cálculo de valor equivalente de mídia (AVE)",
      "Gestão de comunicação em crise",
    ],
  },
  {
    id: "treinamento-equipe",
    number: "07",
    badge: "cyan",
    icon: "🤝",
    iconBox: "icon-box-blue",
    imageBg: "blue",
    title: "Treinamento de Secretárias e Time de Vendas",
    paragraphs: [
      "De nada adianta investir em marketing se a secretária não sabe converter um contato em consulta agendada. Treinamos sua equipe para atender com acolhimento, gerar confiança e transformar ligações em agendamentos — sem abordagem de vendas invasiva.",
    ],
    features: [
      "Atendimento humanizado no WhatsApp e por telefone",
      "Como lidar com objeções sem pressionar",
      "Gestão da agenda e redução de faltas (no-shows)",
      "Acolhimento presencial e jornada do paciente",
      "Indicadores de atendimento e melhoria contínua",
    ],
    note: "Disponível online ao vivo, presencial em São Paulo/SP ou em formato gravado, com sessão de acompanhamento 30 dias após o treinamento.",
  },
];

export type FaqItem = { question: string; answer: string };

export const SERVICES_FAQ: FaqItem[] = [
  {
    question: "Posso postar antes e depois de procedimentos?",
    answer:
      'Não. A exibição de "antes e depois" é vedada pelo CFM para médicos. A Doc.Lab nunca produz esse tipo de conteúdo. Trabalhamos com formatos permitidos que igualmente geram autoridade — como conteúdo educativo e depoimentos dentro das normas.',
  },
  {
    question: "Quanto tempo leva para ver resultados na gestão de redes sociais?",
    answer:
      "Os primeiros resultados geralmente aparecem entre 60 e 90 dias. O crescimento de autoridade e o reflexo em novos pacientes costuma ser mais perceptível entre 4 e 6 meses de consistência.",
  },
  {
    question: "Qual o orçamento mínimo para campanhas de tráfego pago?",
    answer:
      "Recomendamos um investimento mínimo de R$ 800/mês em verba de mídia (valor que vai diretamente para as plataformas). A verba de mídia é paga diretamente por você, com total transparência — cobramos apenas a taxa de gestão pelos nossos serviços.",
  },
  {
    question: "O CFM permite que médicos apareçam na imprensa?",
    answer:
      "Sim. O CFM permite que o médico conceda entrevistas e preste informações à imprensa com finalidade de educação em saúde. O que é vedado é usar a mídia para autopromoção, comparações com outros profissionais ou promessas de resultados.",
  },
  {
    question: "O treinamento de equipe é sobre técnicas de vendas agressivas?",
    answer:
      "Não. Nossa metodologia é baseada em atendimento humanizado. Ensinamos como acolher o paciente, responder dúvidas com clareza e facilitar a decisão de agendar — sem pressão e sem manipulação.",
  },
];

export type CaseStat = { n: string; l: string };

export const CASES_STATS: CaseStat[] = [
  { n: "98%", l: "Taxa de satisfação dos clientes" },
  { n: "+312%", l: "Crescimento médio de alcance orgânico" },
  { n: "10+", l: "Especialidades médicas atendidas" },
  { n: "4.8★", l: "Avaliação média no Google Meu Negócio" },
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
      "A Doc.Lab transformou minha presença online. Meus agendamentos aumentaram 40% em apenas 3 meses. O trabalho em redes sociais foi excepcional.",
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
      "Excelente trabalho em branding. Hoje sou reconhecida como referência na minha especialidade no Instagram. O branding ficou muito acima do esperado.",
    results: [
      { n: "+8k", l: "Seguidores em 6 meses" },
      { n: "Top 3", l: "Dermatologistas da região" },
    ],
  },
  {
    name: "Dr. Rafael Costa",
    role: "Cirurgião Plástico",
    badge: "cyan",
    quote:
      "O site que criaram é perfeito. Conversão de leads muito acima da média do mercado. Sinto que finalmente minha imagem online reflete meu trabalho.",
    results: [
      { n: "3×", l: "Mais leads pelo site" },
      { n: "95%", l: "Satisfação dos pacientes" },
    ],
  },
  {
    name: "Dra. Fernanda Lima",
    role: "Neurologista",
    badge: "purple",
    quote:
      "Nunca imaginei que marketing médico poderia ser tão eficiente. A equipe entende os limites éticos e ainda assim entrega resultados impressionantes.",
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
      "A estratégia de SEO que aplicaram fez meu consultório aparecer no topo do Google. Hoje recebo pacientes de toda a cidade sem precisar pagar por anúncios.",
    results: [
      { n: "1º", l: "No Google local" },
      { n: "+30%", l: "Tráfego orgânico" },
    ],
  },
  {
    name: "Dra. Camila Souza",
    role: "Pediatra",
    badge: "purple",
    quote:
      "Meu Instagram se tornou uma fonte real de pacientes. Os pais me encontram, leem meu conteúdo e já chegam na consulta com confiança no meu trabalho.",
    results: [
      { n: "+12k", l: "Seguidores engajados" },
      { n: "+65%", l: "Conversão de DMs" },
    ],
  },
];

export type MissionItem = { icon: string; iconBox: string; title: string; body: string };

export const MISSION_VISION_PURPOSE: MissionItem[] = [
  {
    icon: "🎯",
    iconBox: "icon-box-cyan",
    title: "Missão",
    body: "Empoderar profissionais de saúde com estratégias digitais éticas que ampliam seu alcance, fortalecem sua autoridade e atraem pacientes que valorizam sua excelência.",
  },
  {
    icon: "👁",
    iconBox: "icon-box-purple",
    title: "Visão",
    body: "Ser a referência nacional em marketing ético para saúde, reconhecida por transformar o padrão de comunicação do setor.",
  },
  {
    icon: "💡",
    iconBox: "icon-box-grad",
    title: "Propósito",
    body: "Fazer com que o paciente certo encontre o profissional certo — e que essa conexão aconteça com confiança, transparência e ética.",
  },
];

export type TimelineItem = { year: string; title: string; body: string };

export const TIMELINE: TimelineItem[] = [
  {
    year: "2020",
    title: "A semente",
    body: "Primeiras consultorias informais para médicos amigos. A pergunta repetida virou uma oportunidade.",
  },
  {
    year: "2021",
    title: "A fundação",
    body: "A Doc.Lab é oficialmente fundada, com foco exclusivo em saúde. Os primeiros clientes testam e validam a metodologia. Resultado: 100% de renovação de contrato.",
  },
  {
    year: "2023",
    title: "Expansão e método",
    body: "A metodologia Doc.Lab é formalizada. A equipe cresce. Passamos a atender 15 especialidades diferentes.",
  },
  {
    year: "Hoje",
    title: "Presença nacional",
    body: "Atendemos profissionais do Brasil inteiro.",
  },
];

export type ValueItem = { icon: string; iconBox: string; title: string; body: string };

export const VALUES: ValueItem[] = [
  {
    icon: "⚖️",
    iconBox: "icon-box-cyan",
    title: "Ética acima de tudo",
    body: "Nenhuma estratégia, campanha ou conteúdo vai ao ar sem passar pela lente da conformidade com o CFM, CRO, CFF e demais conselhos de classe. Este não é um diferencial — é uma exigência interna.",
  },
  {
    icon: "🔬",
    iconBox: "icon-box-purple",
    title: "Rigor como método",
    body: "Aplicamos ao marketing o mesmo rigor científico que os profissionais de saúde aplicam à medicina. Decisões baseadas em dados, hipóteses testadas e resultados mensuráveis.",
  },
  {
    icon: "🤝",
    iconBox: "icon-box-blue",
    title: "Parceria genuína",
    body: "Não somos fornecedores. Somos parceiros estratégicos. Celebramos suas conquistas, entendemos seus desafios e adaptamos a estratégia conforme sua carreira evolui.",
  },
  {
    icon: "📚",
    iconBox: "icon-box-grad",
    title: "Educação como prática",
    body: "Acreditamos que um cliente bem informado é um cliente mais satisfeito. Por isso, explicamos tudo o que fazemos, por que fazemos e o que esperamos de resultado em cada ação.",
  },
];

export type TeamMember = { icon: string; name: string; role: string; bio: string };

export const TEAM: TeamMember[] = [
  {
    icon: "👩‍💼",
    name: "Amábile Bianchi",
    role: "Fundadora",
    bio: "Formada em Jornalismo há 15 anos, especialista em Comunicação e Marketing pela ECA-USP.",
  },
  {
    icon: "👩‍💻",
    name: "Elizabete Moraes",
    role: "Coordenadora",
    bio: "Formada em Publicidade e Propaganda, com 15 anos de experiência na área de marketing. Especialista em gestão de tráfego pago para Google e Meta Business.",
  },
  {
    icon: "👩‍🎨",
    name: "Luisa Sampaio",
    role: "Designer",
    bio: "Formada em Design Gráfico pela Universidade de Sorocaba. Especialista em Branding.",
  },
  {
    icon: "👩‍🎓",
    name: "Graça Helena Sanches",
    role: "Estagiária",
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
    category: "Ética e Legislação",
    readTime: "12 min de leitura",
    title: "Como construir autoridade no Instagram sem ferir o CFM",
    excerpt:
      "Entenda as fronteiras do que é permitido e descubra como transformar seu conhecimento clínico em conteúdo que gera confiança — e pacientes qualificados.",
    publishedLabel: "Publicado em março de 2025",
    author: "Equipe Doc.Lab",
    content: [
      {
        paragraphs: [
          "O Instagram se tornou, nos últimos anos, uma das principais ferramentas de construção de autoridade para profissionais de saúde. E com razão: é onde os pacientes pesquisam, avaliam e decidem em quem confiar antes de marcar uma consulta.",
          "O problema é que, para médicos, o Instagram funciona em um campo minado de possibilidades e restrições. O Conselho Federal de Medicina (CFM) possui normas específicas sobre publicidade médica — e navegar por elas sem o conhecimento adequado pode resultar desde posts ineficazes até processos éticos sérios.",
          "Neste artigo, vamos detalhar o que é e o que não é permitido, e mostrar caminhos práticos para construir uma presença digital de autoridade — dentro de todas as regras.",
        ],
      },
      {
        heading: "1. A base legal: o que diz o CFM",
        paragraphs: [
          "A principal referência para publicidade médica é a Resolução CFM nº 2.336/2023, que atualizou e consolidou as normas anteriores. Ela define os limites da divulgação profissional do médico em todos os meios, incluindo as redes sociais.",
          "Alguns princípios fundamentais que você precisa conhecer:",
        ],
        list: [
          "A publicidade médica deve ter caráter educativo e informativo, jamais comercial ou sensacionalista;",
          "É vedado prometer resultados ou garantir curas;",
          'O médico não pode usar pacientes como "propaganda" — nem com consentimento;',
          'A exibição de "antes e depois" é expressamente proibida para a maioria dos procedimentos;',
          "Não é permitido utilizar superlatividade (o melhor, o mais moderno, o único).",
        ],
        callout:
          "Importante: Estas são diretrizes gerais. Cada especialidade pode ter normas adicionais emitidas pelo seu conselho regional ou federal. Sempre consulte as resoluções vigentes para a sua área.",
      },
      {
        heading: "2. O que você PODE publicar no Instagram",
        paragraphs: [
          "A boa notícia é que, dentro das normas, ainda há um universo imenso de possibilidades de conteúdo. Veja os formatos permitidos:",
          "Conteúdo educativo — Este é o tipo mais poderoso e o mais alinhado ao espírito das normas do CFM. Posts que explicam doenças, sintomas, fatores de risco, quando procurar um especialista e como funciona um procedimento são totalmente permitidos — e geram enorme credibilidade.",
          'Apresentação de serviços (sem promessas) — Você pode comunicar que realiza um procedimento ou trata determinadas condições. O que não pode é prometer resultados. Há uma diferença enorme entre "Realizamos cirurgia de catarata" (permitido) e "Nossa cirurgia de catarata vai devolver sua visão" (vedado).',
          "Bastidores do consultório (com cuidado) — Fotos da estrutura do consultório, dos equipamentos e dos protocolos de atendimento são permitidas — desde que não exponham pacientes ou informações sensíveis.",
          "Trajetória e formação profissional — Apresentar sua trajetória, especializações, publicações científicas e participações em congressos é completamente permitido e muito eficaz para construir autoridade.",
        ],
        callout:
          "Estratégia Doc.Lab: os médicos com mais engajamento nas redes sociais são aqueles que compartilham conhecimento de forma genuína, sem transformar o perfil em um catálogo de serviços. Seu Instagram deve parecer com uma conversa de consultório — não com um panfleto.",
      },
      {
        heading: "3. O que você NÃO pode publicar",
        list: [
          "Antes e depois de procedimentos estéticos ou cirúrgicos — vedação expressa para médicos na maioria dos casos;",
          "Depoimentos de pacientes sobre resultados clínicos — mesmo com autorização, viola normas sobre publicidade;",
          'Uso de "o melhor", "o único", "garantido" — linguagem superlativa e prometedora é proibida;',
          "Anúncios de promoções ou descontos em consultas — configura a medicina como atividade comercial;",
          'Participação em rankings pagos — pagar para ser indicado como "Top Médico" ou similar;',
          "Conteúdo que gera medo ou ansiedade desnecessária para induzir à consulta.",
        ],
      },
      {
        heading: "4. Uma estratégia prática para começar",
        paragraphs: [
          "Agora que você conhece as fronteiras, aqui está um roteiro para começar a construir sua presença no Instagram de forma estratégica e segura:",
        ],
        list: [
          "Passo 1: Defina seu posicionamento — para quem você fala? Qual é o seu paciente ideal?",
          "Passo 2: Estabeleça 3 a 4 pilares de conteúdo — temas recorrentes que sustentam sua autoridade.",
          "Passo 3: Crie uma rotina consistente — a consistência é mais importante que a frequência alta.",
          "Passo 4: Aprove cada conteúdo antes de publicar — revise cada peça antes de ir ao ar.",
        ],
      },
      {
        paragraphs: [
          "Lembre-se: o objetivo do seu Instagram não é ter milhões de seguidores. É fazer com que os pacientes certos confiem em você antes mesmo de entrar no consultório. Um perfil com 2.000 seguidores altamente qualificados pode ser muito mais valioso do que um com 50.000 seguidores desengajados.",
        ],
      },
      {
        heading: "5. Conclusão",
        paragraphs: [
          "Construir autoridade no Instagram como profissional de saúde é totalmente possível — e necessário nos dias de hoje. O caminho exige estratégia, consistência e respeito às normas éticas da sua profissão.",
          "A boa notícia é que, ao contrário do que muitos pensam, as normas do CFM não inviabilizam o marketing digital. Elas apenas direcionam para o caminho mais sustentável: o da comunicação baseada em conhecimento genuíno, respeito ao paciente e posicionamento de longo prazo.",
        ],
      },
    ],
  },
  {
    slug: "",
    badge: "purple",
    category: "Ética e Legislação",
    readTime: "8 min de leitura",
    title: "O que diz a Resolução CFM 2.336/2023 sobre publicidade médica",
    excerpt:
      "Um guia prático sobre as novas diretrizes: o que mudou, o que é permitido e como adaptar sua comunicação às normas vigentes.",
    external: true,
  },
  {
    slug: "",
    badge: "cyan",
    category: "Gestão de Consultório",
    readTime: "10 min de leitura",
    title: "Marketing e fidelização: por que pacientes voltam (ou não voltam)",
    excerpt:
      "A relação entre comunicação digital e a experiência dentro do consultório — como o marketing ajuda na retenção de pacientes e na reputação da clínica.",
    external: true,
  },
  {
    slug: "",
    badge: "cyan",
    category: "Marketing Médico",
    readTime: "9 min de leitura",
    title: "SEO local para consultórios: como aparecer no Google da sua cidade",
    excerpt:
      "Estratégias práticas de SEO local para médicos e clínicas. Como otimizar seu Google Meu Negócio e aparecer nos resultados certos.",
    external: true,
  },
  {
    slug: "",
    badge: "purple",
    category: "Tendências",
    readTime: "7 min de leitura",
    title: "Inteligência artificial na criação de conteúdo médico: o que é seguro usar",
    excerpt:
      "Como usar ferramentas de IA para acelerar a produção de conteúdo sem comprometer a precisão científica e a conformidade ética.",
    external: true,
  },
  {
    slug: "",
    badge: "cyan",
    category: "Marketing Médico",
    readTime: "11 min de leitura",
    title: "LinkedIn para médicos: a rede social que você está subutilizando",
    excerpt:
      "Como o LinkedIn pode ser a principal ferramenta de construção de autoridade e networking para profissionais de saúde.",
    external: true,
  },
];

export const CONTACT_CHANNELS = [
  {
    icon: "📱",
    iconBox: "icon-box-cyan",
    title: "WhatsApp",
    value: SITE.whatsappDisplay,
    href: `https://wa.me/${SITE.whatsapp}`,
    body: "A forma mais rápida de falar com nossa equipe. Respondemos em até 2 horas em horário comercial.",
  },
  {
    icon: "✉️",
    iconBox: "icon-box-purple",
    title: "E-mail",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    body: "Prefere mandar por e-mail? Respondemos todas as mensagens em até 24 horas úteis.",
  },
  {
    icon: "📸",
    iconBox: "icon-box-grad",
    title: "Instagram",
    value: SITE.instagramHandle,
    href: SITE.instagram,
    body: "Acompanhe nosso conteúdo sobre marketing ético para saúde e fale com a gente pelo DM.",
  },
];

export const CONTACT_INFO_CARDS = [
  {
    icon: "🕐",
    iconBox: "icon-box-cyan",
    title: "Horário de Atendimento",
    body: "Segunda a sexta: 8h às 18h. Respostas urgentes de clientes ativos também aos sábados.",
  },
  {
    icon: "📍",
    iconBox: "icon-box-purple",
    title: "Localização",
    body: "Atendemos clientes em todo o Brasil de forma remota. Reuniões presenciais disponíveis mediante agendamento em São Paulo, SP.",
  },
];

export const BUDGET_GOAL_OPTIONS = [
  { value: "presenca-digital", label: "Gestão de Presença Digital" },
  { value: "trafego-pago", label: "Tráfego Pago para Saúde" },
  { value: "branding", label: "Posicionamento e Branding" },
  { value: "sites", label: "Site de Alta Conversão" },
  { value: "consultoria", label: "Consultoria de Marketing Ético" },
  { value: "assessoria-imprensa", label: "Assessoria de Imprensa" },
  { value: "treinamento-equipe", label: "Treinamento de Equipe" },
  { value: "nao-sei", label: "Ainda não sei — quero orientação" },
];

export const BUDGET_PROCESS_STEPS = [
  {
    title: "Diagnóstico da sua situação atual",
    body: "O que já existe, o que falta e quais são as maiores oportunidades.",
  },
  {
    title: "Alinhamento de objetivos",
    body: "O que é sucesso para você: mais pacientes, maior autoridade ou posicionamento.",
  },
  {
    title: "Indicação das melhores soluções",
    body: "Com base no seu perfil e nos seus objetivos.",
  },
  {
    title: "Proposta personalizada",
    body: "Escopo, prazos e investimento, sem contratos longos obrigatórios.",
  },
];

export const FOOTER_SOLUTIONS_LINKS = SERVICES.map((s) => ({ id: s.id, label: s.title }));
