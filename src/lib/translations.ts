export type Lang = "en" | "pt";

type Dictionary = {
  nav: { services: string; work: string; process: string; packages: string; about: string; contact: string; cta: string };
  hero: { tag: string; title: string; titleAccent: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; stats: { k: string; v: string }[] };
  problems: { eyebrow: string; title: string; items: { t: string; d: string }[] };
  services: { eyebrow: string; title: string; subtitle: string; items: { t: string; d: string; bullets: string[] }[] };
  proof: { eyebrow: string; title: string; subtitle: string; items: { k: string; v: string }[] };
  cases: { eyebrow: string; title: string; items: { tag: string; t: string; problem: string; solution: string; result: string }[] };
  clients: { eyebrow: string; title: string; subtitle: string; items: { name: string; location: string; role: string; scope: string; tags: string[] }[] };
  tech: { eyebrow: string; title: string; subtitle: string; groups: { t: string; items: string[] }[] };
  process: { eyebrow: string; title: string; steps: { n: string; t: string; d: string }[] };
  packages: { eyebrow: string; title: string; items: { t: string; who: string; deliverables: string[]; featured?: boolean }[] };
  about: { eyebrow: string; title: string; role: string; body: string; langs: string };
  contact: {
    eyebrow: string; title: string; ctaCall: string; ctaEmail: string;
    form: { name: string; company: string; email: string; type: string; typeOptions: string[]; desc: string; deadline: string; submit: string; sent: string };
  };
  footer: { tagline: string; rights: string };
};

export const translations: Record<Lang, Dictionary> = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      packages: "Packages",
      about: "About",
      contact: "Contact",
      cta: "Book a call",
    },
    hero: {
      tag: "AI Engineering · Software Consultancy",
      title: "Software with AI, APIs and recommendation —",
      titleAccent: "from architecture to deploy.",
      subtitle:
        "I build digital systems for companies that need to turn data, documents and internal processes into scalable products with AI, APIs, automation and software architecture.",
      ctaPrimary: "Book a call",
      ctaSecondary: "See services",
      stats: [
        { k: "40M+", v: "customers in recommendation base" },
        { k: "20K+", v: "concurrent users in production" },
        { k: "3K+", v: "users on RAG microservices" },
        { k: "BR · PT · EU · LATAM", v: "delivery footprint" },
      ],
    },
    problems: {
      eyebrow: "What I solve",
      title: "Concrete problems, shipped to production.",
      items: [
        { t: "Robust APIs for digital products", d: "REST, FastAPI, auth, queues and workers — designed to scale and to be operated." },
        { t: "AI integrated into existing systems", d: "Not a side experiment. LLMs wired into your backend, your data and your workflows." },
        { t: "Internal assistants and corporate chatbots", d: "Conversational layers over Git, SQL, documents and operational knowledge." },
        { t: "Smart search across documents and data", d: "Hybrid search, sparse + dense embeddings and reranking that actually returns relevant results." },
        { t: "Recommendation systems", d: "Products, customers, content or companies — using vector search, filters and metadata boosting." },
        { t: "Data shaped for AI", d: "Chunking, indexing, ETL pipelines and metadata strategy for structured and unstructured sources." },
        { t: "From prototype to production", d: "Take a notebook or PoC and turn it into a deployed, monitored, evolvable system." },
        { t: "Architecture, deploy and scalability", d: "Design or review of architecture, dockerization, server deploy and capacity planning." },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Four core practices.",
      subtitle: "Tech is chosen by problem, not by preference.",
      items: [
        {
          t: "APIs & Backends",
          d: "Production-grade backends for digital products and integrations.",
          bullets: ["REST APIs · FastAPI · Node when needed", "Auth, queues, workers, microservices", "Database integration & data modeling", "Dockerization, deploy & technical docs"],
        },
        {
          t: "Applied AI & LLMs",
          d: "LLMs integrated into real systems — not isolated demos.",
          bullets: ["Corporate chatbots & internal assistants", "RAG over documents, SQL and internal bases", "OpenAI and other model providers", "Agentic workflows & AI endpoints"],
        },
        {
          t: "Recommendation & Smart Search",
          d: "Retrieval and recommendation that holds up at scale.",
          bullets: ["Embeddings & vector search", "Hybrid search · RRF · reranking", "Metadata boosting & filtering", "Relevance evaluation and tuning"],
        },
        {
          t: "Architecture, Deploy & Consultancy",
          d: "Technical direction for teams shipping AI and backend products.",
          bullets: ["Architecture design and review", "Technical planning for MVPs", "Deploy on servers and infra", "Continuous technical support"],
        },
      ],
    },
    proof: {
      eyebrow: "Track record",
      title: "Real systems. Real scale.",
      subtitle: "A selection of measurable outcomes from delivered work.",
      items: [
        { k: "40M+", v: "customers indexed in vector recommendation pipeline" },
        { k: "20K+", v: "concurrent users on a real-time recommendation system" },
        { k: "3K+", v: "users across LATAM and EU on RAG microservices" },
        { k: "4 regions", v: "Brazil · Portugal · LATAM · European Union" },
      ],
    },
    cases: {
      eyebrow: "Case studies",
      title: "Anonymized work.",
      items: [
        {
          tag: "Recommendation",
          t: "Vector-based recommendation at scale",
          problem: "Need to recommend customers, products and companies based on structured and unstructured signals.",
          solution: "Embeddings, vector search, metadata boosting, filters and reranking on a multi-million record base.",
          result: "Recommendation layer applied in a large-scale production context.",
        },
        {
          tag: "RAG",
          t: "RAG assistant over documents and internal bases",
          problem: "Knowledge spread across documents, databases and tools — slow and unreliable to access.",
          solution: "Chunking & indexing strategy, hybrid retrieval (sparse + dense + RRF) wired into an LLM.",
          result: "Assistant answering grounded questions over real internal data.",
        },
        {
          tag: "Agentic",
          t: "Agentic chatbot for internal support",
          problem: "Support team needed faster access to logs, internal bases and operational knowledge.",
          solution: "Agentic workflows with RAG, PostgreSQL and Cassandra integration, Docker, LangChain, LangGraph and OpenAI.",
          result: "Conversational interface increasing operational productivity.",
        },
      ],
    },
    clients: {
      eyebrow: "Selected experience",
      title: "Where the work has shipped.",
      subtitle: "A snapshot of organizations and engagements behind the systems above.",
      items: [
        {
          name: "SPMS",
          location: "Portugal · Public Health IT",
          role: "AI & Backend Engineering",
          scope: "Largest engagement to date. Backend APIs, integrations with GitHub, GitLab and Atlassian, video and document processing, chunking and indexing into vector databases, S3 storage, internal chatbots, deploy via ArgoCD and GitLab CI.",
          tags: ["APIs", "RAG", "Vector DBs", "Video & Docs", "S3", "ArgoCD", "GitLab CI", "Chatbots"],
        },
        {
          name: "Sebrae PR",
          location: "Brazil · Business Support",
          role: "AI & Data Engineering",
          scope: "Recommendation algorithms, ETL pipelines, RAG systems and AI-powered application development to support business intelligence and end-user products.",
          tags: ["Recommendation", "ETL", "RAG", "AI Apps"],
        },
        {
          name: "Wise Systems",
          location: "Brazil · Software Studio",
          role: "AI & Backend Engineering",
          scope: "Chatbots, REST APIs and SaaS development — from architecture to delivery of production-grade product features.",
          tags: ["Chatbots", "APIs", "SaaS"],
        },
      ],
    },
    tech: {
      eyebrow: "Stack",
      title: "Tools, picked per problem.",
      subtitle: "Python is the main backbone — never the constraint.",
      groups: [
        { t: "Backend", items: ["Python", "FastAPI", "REST APIs", "Microservices", "Node.js"] },
        { t: "AI & LLMs", items: ["RAG", "Embeddings", "LangChain", "LangGraph", "OpenAI", "Agents"] },
        { t: "Data & Search", items: ["Vector DBs", "PostgreSQL", "MongoDB", "Cassandra", "Hybrid Search", "RRF"] },
        { t: "Infra & Deploy", items: ["Docker", "Servers", "RabbitMQ", "Queues", "ETL Pipelines"] },
        { t: "Frontend & Product", items: ["React", "JavaScript", "Dashboards", "Data Viz"] },
      ],
    },
    process: {
      eyebrow: "How I work",
      title: "Five steps. No theater.",
      steps: [
        { n: "01", t: "Technical diagnosis", d: "Understand the problem, the data and the existing systems before proposing anything." },
        { n: "02", t: "Solution design", d: "Architecture, scope, trade-offs and a clear delivery plan." },
        { n: "03", t: "Implementation", d: "Build in iterations with working software at every step." },
        { n: "04", t: "Deploy", d: "Dockerization, server deploy and operational handover." },
        { n: "05", t: "Evolution & support", d: "Monitor, refine and grow the system after go-live." },
      ],
    },
    packages: {
      eyebrow: "Engagements",
      title: "Four ways to start.",
      items: [
        { t: "AI & Architecture Diagnostic", who: "For teams unsure where to start with AI or how to fix a stuck architecture.", deliverables: ["Technical audit", "Architecture review", "Roadmap & recommendations"] },
        { t: "AI / API / Automation MVP", who: "For companies validating an AI, API or automation product.", deliverables: ["Architecture & build", "Working MVP", "Deploy & documentation"], featured: true },
        { t: "Production System", who: "For products that need to scale beyond the MVP.", deliverables: ["Production-grade backend", "AI/Search integration", "Infra, deploy & monitoring"] },
        { t: "Monthly Consultancy", who: "For tech teams that need ongoing senior support.", deliverables: ["Architecture guidance", "Code & PR review", "Hands-on contribution"] },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Pedro Kochinski",
      role: "AI Engineer · Software Consultant",
      body: "AI Engineer and software developer specialized in applied AI, APIs, RAG, vector search, recommendation systems and architecture. Real-world experience on large-scale data, microservices, AI assistants, deploy and products used in Brazil, Portugal, LATAM and the European Union.",
      langs: "English C1 · German B1 · Portuguese (native)",
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Have an AI, automation or recommendation idea you need turned into working software?",
      ctaCall: "Book a call",
      ctaEmail: "Send a brief by email",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        type: "Project type",
        typeOptions: ["Applied AI / LLMs", "API / Backend", "Recommendation / Search", "Architecture / Consultancy", "Other"],
        desc: "Problem description",
        deadline: "Desired deadline",
        submit: "Send brief",
        sent: "Brief drafted in your email client.",
      },
    },
    footer: {
      tagline: "Software consultancy · AI · APIs · Recommendation",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      services: "Serviços",
      work: "Cases",
      process: "Processo",
      packages: "Pacotes",
      about: "Sobre",
      contact: "Contato",
      cta: "Agendar conversa",
    },
    hero: {
      tag: "Engenharia de IA · Consultoria de Software",
      title: "Software com IA, APIs e recomendação —",
      titleAccent: "da arquitetura ao deploy.",
      subtitle:
        "Desenvolvo sistemas digitais para empresas que precisam transformar dados, documentos e processos internos em produtos escaláveis usando IA, APIs, automação e arquitetura de software.",
      ctaPrimary: "Agendar conversa",
      ctaSecondary: "Ver serviços",
      stats: [
        { k: "40M+", v: "clientes em base de recomendação" },
        { k: "20K+", v: "usuários concorrentes em produção" },
        { k: "3K+", v: "usuários em microserviços RAG" },
        { k: "BR · PT · UE · LATAM", v: "atuação geográfica" },
      ],
    },
    problems: {
      eyebrow: "O que eu resolvo",
      title: "Problemas concretos, entregues em produção.",
      items: [
        { t: "APIs robustas para produtos digitais", d: "REST, FastAPI, autenticação, filas e workers — pensados para escalar e serem operados." },
        { t: "IA integrada a sistemas existentes", d: "Não é experimento isolado. LLMs conectadas ao seu backend, seus dados e seus fluxos." },
        { t: "Assistentes internos e chatbots corporativos", d: "Camadas conversacionais sobre Git, SQL, documentos e conhecimento operacional." },
        { t: "Busca inteligente em documentos e dados", d: "Hybrid search, embeddings sparse + dense e reranking que devolve resultados relevantes." },
        { t: "Sistemas de recomendação", d: "Produtos, clientes, conteúdos ou empresas — com vector search, filtros e metadata boosting." },
        { t: "Dados organizados para uso com IA", d: "Chunking, indexação, pipelines ETL e estratégia de metadados para fontes estruturadas e não." },
        { t: "Do protótipo à produção", d: "Pegar notebook ou PoC e transformar em sistema deployado, monitorado e evolutivo." },
        { t: "Arquitetura, deploy e escalabilidade", d: "Desenho ou revisão de arquitetura, dockerização, deploy em servidor e planejamento de capacidade." },
      ],
    },
    services: {
      eyebrow: "Serviços",
      title: "Quatro frentes principais.",
      subtitle: "A tecnologia é escolhida pelo problema, não por preferência.",
      items: [
        {
          t: "APIs e Backends",
          d: "Backends production-grade para produtos digitais e integrações.",
          bullets: ["APIs REST · FastAPI · Node quando faz sentido", "Auth, filas, workers, microserviços", "Integração com banco e modelagem de dados", "Dockerização, deploy e documentação técnica"],
        },
        {
          t: "IA Aplicada e LLMs",
          d: "LLMs integradas a sistemas reais — não a demos isoladas.",
          bullets: ["Chatbots corporativos e assistentes internos", "RAG sobre documentos, SQL e bases internas", "OpenAI e outros provedores de modelos", "Workflows agentic e endpoints com IA"],
        },
        {
          t: "Recomendação e Busca Inteligente",
          d: "Retrieval e recomendação que aguentam escala real.",
          bullets: ["Embeddings e vector search", "Hybrid search · RRF · reranking", "Metadata boosting e filtragem", "Avaliação e melhoria de relevância"],
        },
        {
          t: "Arquitetura, Deploy e Consultoria",
          d: "Direção técnica para times que entregam produtos com IA e backend.",
          bullets: ["Desenho e revisão de arquitetura", "Planejamento técnico para MVPs", "Deploy em servidores e infra", "Apoio técnico contínuo"],
        },
      ],
    },
    proof: {
      eyebrow: "Provas",
      title: "Sistemas reais. Escala real.",
      subtitle: "Uma seleção de resultados mensuráveis de projetos entregues.",
      items: [
        { k: "40M+", v: "clientes indexados em pipeline de recomendação vetorial" },
        { k: "20K+", v: "usuários concorrentes em recomendação em tempo real" },
        { k: "3K+", v: "usuários em microserviços RAG na LATAM e UE" },
        { k: "4 regiões", v: "Brasil · Portugal · LATAM · União Europeia" },
      ],
    },
    cases: {
      eyebrow: "Mini cases",
      title: "Trabalhos anonimizados.",
      items: [
        {
          tag: "Recomendação",
          t: "Recomendação vetorial em larga escala",
          problem: "Necessidade de recomendar clientes, produtos e empresas a partir de sinais estruturados e não estruturados.",
          solution: "Embeddings, vector search, metadata boosting, filtros e reranking em base com milhões de registros.",
          result: "Camada de recomendação aplicada em contexto de produção em larga escala.",
        },
        {
          tag: "RAG",
          t: "Assistente RAG sobre documentos e bases internas",
          problem: "Conhecimento espalhado em documentos, bancos e ferramentas — acesso lento e pouco confiável.",
          solution: "Estratégia de chunking e indexação, retrieval híbrido (sparse + dense + RRF) integrado a uma LLM.",
          result: "Assistente respondendo perguntas com base em dados internos reais.",
        },
        {
          tag: "Agentic",
          t: "Chatbot agentic para suporte interno",
          problem: "Time de suporte precisava acessar logs, bases internas e conhecimento operacional com mais velocidade.",
          solution: "Workflows agentic com RAG, integração PostgreSQL e Cassandra, Docker, LangChain, LangGraph e OpenAI.",
          result: "Interface conversacional aumentando a produtividade operacional.",
        },
      ],
    },
    clients: {
      eyebrow: "Experiência selecionada",
      title: "Onde o trabalho foi entregue.",
      subtitle: "Uma amostra das organizações e engajamentos por trás dos sistemas acima.",
      items: [
        {
          name: "SPMS",
          location: "Portugal · TI da Saúde Pública",
          role: "Engenharia de IA e Backend",
          scope: "Maior projeto em que participei. APIs backend, integrações com GitHub, GitLab e Atlassian, processamento de vídeo e documentos, chunking e indexação em bancos vetoriais, storage S3, chatbots internos, deploy com ArgoCD e GitLab CI.",
          tags: ["APIs", "RAG", "Vector DBs", "Vídeo e Docs", "S3", "ArgoCD", "GitLab CI", "Chatbots"],
        },
        {
          name: "Sebrae PR",
          location: "Brasil · Apoio empresarial",
          role: "Engenharia de IA e Dados",
          scope: "Algoritmos de recomendação, pipelines ETL, sistemas RAG e desenvolvimento de aplicações com IA para apoiar inteligência de negócio e produtos para usuários finais.",
          tags: ["Recomendação", "ETL", "RAG", "Apps com IA"],
        },
        {
          name: "Wise Systems",
          location: "Brasil · Software Studio",
          role: "Engenharia de IA e Backend",
          scope: "Chatbots, APIs REST e desenvolvimento de SaaS — da arquitetura à entrega de funcionalidades de produto em produção.",
          tags: ["Chatbots", "APIs", "SaaS"],
        },
      ],
    },
      subtitle: "Python é a espinha principal — nunca a limitação.",
      groups: [
        { t: "Backend", items: ["Python", "FastAPI", "APIs REST", "Microserviços", "Node.js"] },
        { t: "IA e LLMs", items: ["RAG", "Embeddings", "LangChain", "LangGraph", "OpenAI", "Agentes"] },
        { t: "Dados e Busca", items: ["Vector DBs", "PostgreSQL", "MongoDB", "Cassandra", "Hybrid Search", "RRF"] },
        { t: "Infra e Deploy", items: ["Docker", "Servidores", "RabbitMQ", "Filas", "Pipelines ETL"] },
        { t: "Frontend e Produto", items: ["React", "JavaScript", "Dashboards", "Data Viz"] },
      ],
    },
    process: {
      eyebrow: "Como trabalho",
      title: "Cinco passos. Sem teatro.",
      steps: [
        { n: "01", t: "Diagnóstico técnico", d: "Entender o problema, os dados e os sistemas existentes antes de propor qualquer coisa." },
        { n: "02", t: "Desenho da solução", d: "Arquitetura, escopo, trade-offs e um plano de entrega claro." },
        { n: "03", t: "Implementação", d: "Construção em iterações, com software funcionando a cada passo." },
        { n: "04", t: "Deploy", d: "Dockerização, deploy em servidor e handover operacional." },
        { n: "05", t: "Evolução e suporte", d: "Monitorar, refinar e evoluir o sistema depois do go-live." },
      ],
    },
    packages: {
      eyebrow: "Pacotes",
      title: "Quatro formas de começar.",
      items: [
        { t: "Diagnóstico de IA e Arquitetura", who: "Para times sem clareza de por onde começar com IA ou como destravar uma arquitetura.", deliverables: ["Auditoria técnica", "Revisão de arquitetura", "Roadmap e recomendações"] },
        { t: "MVP de IA, API ou Automação", who: "Para empresas validando um produto com IA, API ou automação.", deliverables: ["Arquitetura e construção", "MVP funcionando", "Deploy e documentação"], featured: true },
        { t: "Sistema em Produção", who: "Para produtos que precisam escalar além do MVP.", deliverables: ["Backend production-grade", "Integração de IA/Busca", "Infra, deploy e monitoramento"] },
        { t: "Consultoria Mensal", who: "Para times técnicos que precisam de apoio sênior contínuo.", deliverables: ["Direção arquitetural", "Revisão de código e PRs", "Contribuição hands-on"] },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Pedro Kochinski",
      role: "AI Engineer · Consultor de Software",
      body: "AI Engineer e desenvolvedor de software especializado em IA aplicada, APIs, RAG, busca vetorial, sistemas de recomendação e arquitetura. Experiência em projetos reais envolvendo bases de larga escala, microserviços, assistentes com IA, deploy e produtos usados no Brasil, Portugal, LATAM e União Europeia.",
      langs: "Inglês C1 · Alemão B1 · Português (nativo)",
    },
    contact: {
      eyebrow: "Vamos conversar",
      title: "Quer transformar uma ideia de IA, automação ou recomendação em software funcionando?",
      ctaCall: "Agendar conversa",
      ctaEmail: "Enviar briefing por e-mail",
      form: {
        name: "Nome",
        company: "Empresa",
        email: "E-mail",
        type: "Tipo de projeto",
        typeOptions: ["IA Aplicada / LLMs", "API / Backend", "Recomendação / Busca", "Arquitetura / Consultoria", "Outro"],
        desc: "Descrição do problema",
        deadline: "Prazo desejado",
        submit: "Enviar briefing",
        sent: "Briefing aberto no seu cliente de e-mail.",
      },
    },
    footer: {
      tagline: "Consultoria de software · IA · APIs · Recomendação",
      rights: "Todos os direitos reservados.",
    },
  },
};

export type Dict = Dictionary;
