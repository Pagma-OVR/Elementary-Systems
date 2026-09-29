export type Product = {
  slug: string;
  code: string;
  name: string;
  sector: string;
  positioning: string;
  description: string;
  problem: { title: string; items: string[] };
  solution: { title: string; description: string; points: string[] };
  flow: { title: string; description: string }[];
  modules: { title: string; description: string }[];
  useCases: string[];
  customization: string;
  seo: { title: string; description: string };
};

export const products: Product[] = [
  {
    slug: "fieldflow",
    code: "01",
    name: "FieldFlow",
    sector: "Serviços em campo",
    positioning: "Gestão de serviços técnicos e operações em campo.",
    description:
      "Organiza ordens de serviço, equipes e atendimentos externos em um fluxo único, do chamado ao encerramento.",
    problem: {
      title: "O processo que o FieldFlow organiza",
      items: [
        "Chamados recebidos por WhatsApp sem registro central",
        "Escalas e deslocamentos controlados em planilhas soltas",
        "Histórico de cada cliente espalhado em conversas",
        "Dificuldade para saber o que está aberto, atrasado ou concluído",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description:
        "Centraliza chamados, agenda equipes e registra cada atendimento com status claro e rastreável.",
      points: [
        "Fila única de chamados com prioridade e status",
        "Agenda de equipes e roteiros por região",
        "Registro de atendimento com histórico por cliente",
        "Visão de pendências, atrasos e conclusões",
      ],
    },
    flow: [
      { title: "Chamado", description: "Solicitação registrada com dados e prioridade." },
      { title: "Agendamento", description: "Equipe designada com data e região." },
      { title: "Execução", description: "Atendimento executado e registrado." },
      { title: "Encerramento", description: "Serviço concluído com histórico salvo." },
      { title: "Controle", description: "Pendências e prazos visíveis em um painel." },
    ],
    modules: [
      { title: "Chamados", description: "Registro central de solicitações com status e prioridade." },
      { title: "Equipes", description: "Organização de técnicos, escalas e regiões." },
      { title: "Atendimentos", description: "Histórico completo por cliente e local." },
      { title: "Acompanhamento", description: "Visão de prazos, atrasos e conclusões." },
    ],
    useCases: [
      "Assistência técnica e manutenção",
      "Instalação e suporte externo",
      "Operações com equipes móveis",
    ],
    customization: "Adapte campos, fluxos de aprovação e relatórios à rotina da sua operação.",
    seo: {
      title: "FieldFlow — Gestão de serviços técnicos e operações em campo",
      description:
        "FieldFlow organiza chamados, equipes e atendimentos em campo em um sistema único e rastreável.",
    },
  },
  {
    slug: "buildflow",
    code: "02",
    name: "BuildFlow",
    sector: "Obras e reformas",
    positioning: "Gestão de pequenas obras, reformas e equipes.",
    description:
      "Estrutura cronogramas, equipes e medições de obra em um controle simples e visível para todos.",
    problem: {
      title: "O processo que o BuildFlow organiza",
      items: [
        "Cronograma controlado de cabeça ou em mensagens",
        "Equipes sem visão clara do que executar por dia",
        "Medições e avanços registrados em papéis soltos",
        "Retrabalho por falta de sequência e responsabilidade",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description:
        "Transforma a obra em etapas sequenciais com responsáveis, prazos e avanço mensurável.",
      points: [
        "Etapas da obra com sequência e responsáveis",
        "Cronograma visível por equipe e período",
        "Registro de avanço e pendências por etapa",
        "Histórico de cada obra em um só lugar",
      ],
    },
    flow: [
      { title: "Planejamento", description: "Obra dividida em etapas e responsáveis." },
      { title: "Execução", description: "Equipes executam conforme sequência." },
      { title: "Medição", description: "Avanço registrado por etapa." },
      { title: "Ajuste", description: "Pendências tratadas antes da próxima fase." },
      { title: "Entrega", description: "Obra concluída com histórico completo." },
    ],
    modules: [
      { title: "Obras", description: "Cadastro e organização de cada obra ou reforma." },
      { title: "Etapas", description: "Sequência de execução com prazos e responsáveis." },
      { title: "Equipes", description: "Distribuição de pessoas por frente de trabalho." },
      { title: "Medições", description: "Registro de avanço e pendências." },
    ],
    useCases: ["Pequenas construtoras", "Reformas residenciais e comerciais", "Manutenção predial"],
    customization: "Adapte etapas, checklists e relatórios ao padrão de cada obra.",
    seo: {
      title: "BuildFlow — Gestão de pequenas obras, reformas e equipes",
      description: "BuildFlow organiza etapas, equipes e medições de obra em um fluxo claro.",
    },
  },
  {
    slug: "cleanflow",
    code: "03",
    name: "CleanFlow",
    sector: "Limpeza profissional",
    positioning: "Gestão de empresas e operações de limpeza.",
    description:
      "Organiza contratos, rotas de equipes e visitas recorrentes sem depender de mensagens soltas.",
    problem: {
      title: "O processo que o CleanFlow organiza",
      items: [
        "Contratos e frequências controlados em planilhas",
        "Escalas de equipes montadas manualmente a cada semana",
        "Faltas e substituições comunicadas por mensagem",
        "Dificuldade para comprovar visitas realizadas",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description:
        "Centraliza clientes, contratos recorrentes e escalas em uma rotina operacional clara.",
      points: [
        "Contratos com frequência e escopo definidos",
        "Escalas automáticas por equipe e local",
        "Registro de visitas executadas",
        "Visão de cobertura e pendências",
      ],
    },
    flow: [
      { title: "Contrato", description: "Cliente e frequência registrados." },
      { title: "Escala", description: "Equipe designada por local e horário." },
      { title: "Execução", description: "Visita realizada e registrada." },
      { title: "Cobertura", description: "Faltas e substituições reorganizadas." },
      { title: "Controle", description: "Histórico de visitas por contrato." },
    ],
    modules: [
      { title: "Contratos", description: "Clientes, locais e frequências em um cadastro único." },
      { title: "Escalas", description: "Distribuição de equipes por turno e região." },
      { title: "Visitas", description: "Registro de execução e ocorrências." },
      { title: "Cobertura", description: "Gestão de faltas e substituições." },
    ],
    useCases: ["Empresas de limpeza comercial", "Limpeza pós-obra", "Serviços recorrentes por contrato"],
    customization: "Adapte frequências, checklists por local e regras de escala.",
    seo: {
      title: "CleanFlow — Gestão de empresas e operações de limpeza",
      description: "CleanFlow organiza contratos, escalas e visitas recorrentes de limpeza.",
    },
  },
  {
    slug: "rentalflow",
    code: "04",
    name: "RentalFlow",
    sector: "Locação",
    positioning: "Gestão de locação de equipamentos.",
    description:
      "Controla disponibilidade, reservas, retiradas e devoluções em um fluxo simples e confiável.",
    problem: {
      title: "O processo que o RentalFlow organiza",
      items: [
        "Disponibilidade confirmada de cabeça ou por mensagem",
        "Reservas anotadas sem controle de conflito",
        "Devoluções atrasadas sem aviso estruturado",
        "Histórico de cada equipamento fragmentado",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description: "Transforma o estoque em disponibilidade visível e cada locação em um ciclo rastreável.",
      points: [
        "Catálogo com disponibilidade real",
        "Reservas com retirada e devolução previstas",
        "Ciclo completo por equipamento",
        "Alertas de atraso e conflito",
      ],
    },
    flow: [
      { title: "Reserva", description: "Pedido registrado com período definido." },
      { title: "Retirada", description: "Equipamento entregue com registro." },
      { title: "Uso", description: "Período acompanhado com devolução prevista." },
      { title: "Devolução", description: "Recebimento e conferência registrados." },
      { title: "Disponibilidade", description: "Item liberado novamente ao catálogo." },
    ],
    modules: [
      { title: "Catálogo", description: "Equipamentos com status de disponibilidade." },
      { title: "Reservas", description: "Controle de períodos e conflitos." },
      { title: "Movimentações", description: "Retiradas e devoluções registradas." },
      { title: "Histórico", description: "Uso completo por item e cliente." },
    ],
    useCases: ["Locadoras de equipamentos", "Ferramentas e máquinas", "Estruturas para eventos"],
    customization: "Adapte categorias, prazos, taxas e termos por tipo de equipamento.",
    seo: {
      title: "RentalFlow — Gestão de locação de equipamentos",
      description: "RentalFlow controla disponibilidade, reservas e devoluções de equipamentos.",
    },
  },
  {
    slug: "warrantyflow",
    code: "05",
    name: "WarrantyFlow",
    sector: "Pós-venda",
    positioning: "Gestão de garantia, pós-venda e RMA.",
    description:
      "Organiza solicitações de garantia em um fluxo rastreável, do registro à resolução.",
    problem: {
      title: "O processo que o WarrantyFlow organiza",
      items: [
        "Solicitações recebidas em canais diferentes sem padrão",
        "Prazos de garantia verificados manualmente",
        "Casos parados sem responsável definido",
        "Histórico de cada produto difícil de recuperar",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description: "Padroniza cada solicitação com status, prazo e histórico completo.",
      points: [
        "Registro único por solicitação",
        "Verificação de cobertura e prazo",
        "Etapas com responsável e status",
        "Histórico completo por produto e cliente",
      ],
    },
    flow: [
      { title: "Solicitação", description: "Pedido registrado com dados do produto." },
      { title: "Triagem", description: "Cobertura e categoria verificadas." },
      { title: "Tratamento", description: "Reparo, troca ou análise conduzidos." },
      { title: "Resolução", description: "Desfecho registrado e comunicado." },
      { title: "Histórico", description: "Caso arquivado com rastreabilidade." },
    ],
    modules: [
      { title: "Solicitações", description: "Fila central com status e prioridade." },
      { title: "Cobertura", description: "Regras de prazo e elegibilidade." },
      { title: "Tratamento", description: "Etapas e responsáveis por caso." },
      { title: "Histórico", description: "Rastreabilidade por produto e cliente." },
    ],
    useCases: ["Assistências autorizadas", "Varejo com pós-venda", "Distribuidores com RMA"],
    customization: "Adapte etapas, prazos e políticas à regra de cada operação.",
    seo: {
      title: "WarrantyFlow — Gestão de garantia, pós-venda e RMA",
      description: "WarrantyFlow organiza solicitações de garantia em fluxo rastreável.",
    },
  },
  {
    slug: "pestflow",
    code: "06",
    name: "PestFlow",
    sector: "Controle de pragas",
    positioning: "Gestão de empresas de controle de pragas.",
    description:
      "Organiza contratos recorrentes, visitas programadas e obrigações técnicas em um só sistema.",
    problem: {
      title: "O processo que o PestFlow organiza",
      items: [
        "Visitas recorrentes controladas em agenda manual",
        "Contratos com periodicidades diferentes sem visão única",
        "Registros técnicos exigidos espalhados em papéis",
        "Revisitas e ocorrências sem rastreabilidade",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description: "Centraliza contratos, agenda recorrente e registros técnicos por cliente.",
      points: [
        "Contratos com periodicidade definida",
        "Agenda recorrente por técnico e região",
        "Registro técnico por visita",
        "Histórico completo por local atendido",
      ],
    },
    flow: [
      { title: "Contrato", description: "Cliente e periodicidade registrados." },
      { title: "Agenda", description: "Visitas programadas por período." },
      { title: "Visita", description: "Serviço executado com registro técnico." },
      { title: "Ocorrência", description: "Revisitas tratadas com rastreio." },
      { title: "Ciclo", description: "Próxima visita gerada automaticamente na rotina." },
    ],
    modules: [
      { title: "Contratos", description: "Clientes, locais e periodicidades." },
      { title: "Agenda", description: "Programação recorrente por equipe." },
      { title: "Registros", description: "Dados técnicos de cada visita." },
      { title: "Ocorrências", description: "Revisitas e tratamentos complementares." },
    ],
    useCases: ["Dedetizadoras", "Controle preventivo recorrente", "Contratos comerciais e condominiais"],
    customization: "Adapte periodicidades, formulários técnicos e relatórios.",
    seo: {
      title: "PestFlow — Gestão de empresas de controle de pragas",
      description: "PestFlow organiza contratos recorrentes e visitas de controle de pragas.",
    },
  },
  {
    slug: "routeflow",
    code: "07",
    name: "RouteFlow",
    sector: "Entregas locais",
    positioning: "Gestão de entregas locais e operações de distribuição.",
    description:
      "Organiza pedidos, rotas e entregas do dia em uma operação visível e controlável.",
    problem: {
      title: "O processo que o RouteFlow organiza",
      items: [
        "Pedidos chegando por vários canais sem fila única",
        "Rotas montadas manualmente a cada dia",
        "Entregadores sem sequência clara de entrega",
        "Falta de visão sobre entregues, pendentes e atrasados",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description: "Centraliza pedidos do dia e organiza a sequência de entrega por rota.",
      points: [
        "Fila única de pedidos do dia",
        "Rotas organizadas por região e prioridade",
        "Status por entrega em tempo de operação",
        "Fechamento do dia com pendências claras",
      ],
    },
    flow: [
      { title: "Pedido", description: "Solicitação registrada com destino." },
      { title: "Rota", description: "Pedidos agrupados por região." },
      { title: "Saída", description: "Entregador recebe sequência definida." },
      { title: "Entrega", description: "Status atualizado por parada." },
      { title: "Fechamento", description: "Dia encerrado com pendências visíveis." },
    ],
    modules: [
      { title: "Pedidos", description: "Fila central do dia com destinos." },
      { title: "Rotas", description: "Agrupamento por região e sequência." },
      { title: "Entregas", description: "Status por parada e responsável." },
      { title: "Fechamento", description: "Resumo operacional do dia." },
    ],
    useCases: ["Delivery local", "Distribuição urbana", "Entregas recorrentes por rota"],
    customization: "Adapte regiões, janelas de entrega e regras de rota.",
    seo: {
      title: "RouteFlow — Gestão de entregas locais e distribuição",
      description: "RouteFlow organiza pedidos, rotas e entregas locais em operação visível.",
    },
  },
  {
    slug: "distributorflow",
    code: "08",
    name: "DistributorFlow",
    sector: "B2B",
    positioning: "Portal de pedidos e operação B2B para distribuidores.",
    description:
      "Organiza pedidos de clientes recorrentes em um portal simples, sem depender de mensagens.",
    problem: {
      title: "O processo que o DistributorFlow organiza",
      items: [
        "Pedidos recebidos por WhatsApp sem padrão",
        "Tabelas de preço diferentes por cliente sem controle",
        "Falta de histórico consolidado por comprador",
        "Retrabalho para digitar pedidos em outro sistema",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description: "Centraliza catálogo, condições por cliente e pedidos em um portal único.",
      points: [
        "Catálogo organizado por cliente",
        "Condições comerciais por perfil",
        "Pedidos padronizados e rastreáveis",
        "Histórico completo por comprador",
      ],
    },
    flow: [
      { title: "Catálogo", description: "Produtos e condições por cliente." },
      { title: "Pedido", description: "Compra registrada no portal." },
      { title: "Confirmação", description: "Pedido validado pela operação." },
      { title: "Separação", description: "Itens preparados para envio." },
      { title: "Histórico", description: "Pedidos arquivados por cliente." },
    ],
    modules: [
      { title: "Catálogo", description: "Produtos e preços por perfil de cliente." },
      { title: "Pedidos", description: "Fila padronizada com status." },
      { title: "Clientes", description: "Condições e histórico por comprador." },
      { title: "Operação", description: "Confirmação e preparação de pedidos." },
    ],
    useCases: ["Distribuidores regionais", "Atacado com clientes recorrentes", "Vendas B2B por catálogo"],
    customization: "Adapte tabelas, prazos e regras por cliente ou região.",
    seo: {
      title: "DistributorFlow — Portal de pedidos B2B para distribuidores",
      description: "DistributorFlow organiza pedidos B2B recorrentes em portal único.",
    },
  },
  {
    slug: "collectionsflow",
    code: "09",
    name: "CollectionsFlow",
    sector: "Financeiro",
    positioning: "Gestão de contas a receber e cobranças.",
    description:
      "Organiza títulos em aberto, vencimentos e rotina de cobrança em um controle direto.",
    problem: {
      title: "O processo que o CollectionsFlow organiza",
      items: [
        "Contas a receber espalhadas em planilhas",
        "Vencimentos acompanhados manualmente",
        "Cobranças feitas sem sequência ou registro",
        "Falta de visão sobre atrasos e prioridades",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description: "Centraliza títulos, vencimentos e ações de cobrança em uma rotina clara.",
      points: [
        "Carteira única de títulos em aberto",
        "Vencimentos organizados por prioridade",
        "Rotina de cobrança com registro",
        "Visão de atrasos e recuperações",
      ],
    },
    flow: [
      { title: "Título", description: "Valor a receber registrado com vencimento." },
      { title: "Acompanhamento", description: "Vencimentos monitorados por prioridade." },
      { title: "Cobrança", description: "Ações registradas por título." },
      { title: "Baixa", description: "Recebimento confirmado e arquivado." },
      { title: "Carteira", description: "Saldo em aberto sempre visível." },
    ],
    modules: [
      { title: "Títulos", description: "Contas a receber com vencimento e status." },
      { title: "Vencimentos", description: "Organização por prazo e prioridade." },
      { title: "Cobranças", description: "Rotina e registro de ações." },
      { title: "Baixas", description: "Confirmação de recebimentos." },
    ],
    useCases: ["Prestadores de serviço recorrentes", "Escolas e cursos", "Operações com carteira ativa"],
    customization: "Adapte réguas de cobrança, prazos e relatórios financeiros.",
    seo: {
      title: "CollectionsFlow — Gestão de contas a receber e cobranças",
      description: "CollectionsFlow organiza títulos, vencimentos e rotina de cobrança.",
    },
  },
  {
    slug: "complianceflow",
    code: "10",
    name: "ComplianceFlow",
    sector: "Documentos",
    positioning: "Gestão de documentos, vencimentos, inspeções e obrigações operacionais.",
    description:
      "Centraliza documentos e vencimentos críticos para que nenhuma obrigação passe despercebida.",
    problem: {
      title: "O processo que o ComplianceFlow organiza",
      items: [
        "Documentos guardados em pastas físicas ou arquivos soltos",
        "Vencimentos lembrados apenas quando já passaram",
        "Inspeções sem histórico organizado",
        "Obrigações diferentes por unidade sem visão central",
      ],
    },
    solution: {
      title: "Como o sistema organiza a operação",
      description: "Transforma obrigações em um calendário controlado com responsáveis e evidências.",
      points: [
        "Repositório central de documentos",
        "Vencimentos com responsáveis definidos",
        "Inspeções registradas com histórico",
        "Visão de riscos e pendências",
      ],
    },
    flow: [
      { title: "Cadastro", description: "Documento ou obrigação registrada." },
      { title: "Prazo", description: "Vencimento definido com responsável." },
      { title: "Evidência", description: "Inspeção ou renovação registrada." },
      { title: "Alerta", description: "Pendências priorizadas antes do vencimento." },
      { title: "Conformidade", description: "Histórico completo por obrigação." },
    ],
    modules: [
      { title: "Documentos", description: "Repositório central com versões." },
      { title: "Vencimentos", description: "Calendário de obrigações e responsáveis." },
      { title: "Inspeções", description: "Registros e evidências por local." },
      { title: "Pendências", description: "Visão de riscos e prazos críticos." },
    ],
    useCases: ["Operações com licenças e alvarás", "Frotas e equipamentos regulados", "Unidades com obrigações recorrentes"],
    customization: "Adapte tipos de documento, prazos e responsáveis por unidade.",
    seo: {
      title: "ComplianceFlow — Gestão de documentos, vencimentos e inspeções",
      description: "ComplianceFlow centraliza documentos e vencimentos críticos da operação.",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const productSlugs = products.map((p) => p.slug);
