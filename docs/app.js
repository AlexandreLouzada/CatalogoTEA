// ===================== DADOS EXPANDIDOS =====================
const EMBEDDED_APPS = [{
  id:"proloquo",nome:"Proloquo",versao:"3.2.1",fornecedor:"AssistiveWare",
  descricao:"App de comunicação alternativa com vocabulário baseado em pictogramas, voltado para pessoas com fala limitada ou ausente.",
  descricaoSimples:"Ajuda a pessoa a se comunicar usando figuras.",
  descricaoFacil:"App para se comunicar com figuras. A pessoa escolhe a figura e o app fala.",
  categoriaTecnologica:"CAA",objetivo:["Comunicação"],categorias:["Comunicação Alternativa (CAA)"],
  idades:["Crianças","Adolescentes","Adultos"],nivelApoio:[1,2,3],idioma:["Português","Inglês","Espanhol"],
  contexto:["Escola","Domicílio"],plataformas:["iOS","iPadOS"],preco:"Pago",
  mediacao:{requerida:true,tipo:"Família/Profissional",tempoSessao:"15-20 min/sessão",materiais:["Guia de introdução","Vídeos tutoriais"]},
  acessibilidade:["Pictogramas","Personalização de cores/sons","Compatível com leitura de tela"],
  acessibilidadeVerificacao:{recursos:["Contraste","Leitor de tela","Foco visível"],formaVerificacao:"Testada (W3C)",dataVerificacao:"2025-08-15"},
  requisitosTecnicos:{so:["iOS 14+"],dispositivos:["iPad","iPhone"],conectividade:"Offline com sincronização opcional",permissoes:["Microfone (opcional)"]},
  evidencias:[{tipo:"Quase-experimental",nivel:"Moderado",desenho:"Pré-pós com grupo único",amostra:"28 participantes",duracao:"8 semanas",instrumentos:["SRS-2","SUS"],resultados:"Melhora significativa na comunicação expressiva (p<0,05)",limitacoes:"Amostra pequena, sem grupo controle"}],
  suporte:{canaisTecnicos:["E-mail","Base de conhecimento"],canaisTerapeuticos:["Webinars","Materiais para pais/educadores"],materiaisEducadores:["Guia de implementação escolar","Planos de aula"],sla:"48h úteis"},
  riscosSensorial:{som:"Configurável (desligável)",brilho:"Reduzido",animacao:"Mínima",configRecomendadas:"Desativar sons, reduzir brilho, modo escuro"},
  rating:4.6,votos:214,engajamento:{metricas:"Adesão > 70% (6 semanas)",fonte:"Autorrelato"},
  proveniencia:{fontes:["SLR 2024","Curadoria especialista"],curador:"Equipe TEA",dataUltimaRevisao:"2025-10-12",historico:[{data:"2025-10-12",descricao:"Atualização de evidências"},{data:"2025-06-01",descricao:"Inclusão no catálogo"}]},
  finalidade:"Apoiar comunicação expressiva por pictogramas e pranchas de comunicação.",
  exemplosUso:["Comunicar necessidades básicas em sala de aula","Criar quadros de escolha guiada","Participar de rodas de conversa"],
  privacidade:"Política de privacidade disponível. Dados armazenados localmente com opção de backup em nuvem."
},{
  id:"alfabetiza",nome:"Alfabetiza Fácil",versao:"2.0",fornecedor:"Instituto ABCD",
  descricao:"Jogos estruturados para consciência fonológica e alfabetização com baixo estímulo sensorial, ideal para crianças autistas.",
  descricaoSimples:"Ajuda na alfabetização com atividades curtas e organizadas.",
  descricaoFacil:"App com jogos para aprender a ler e escrever. Sem pressa e sem barulho.",
  categoriaTecnologica:"Apps/Plataformas Web",objetivo:["Alfabetização"],categorias:["Educação"],
  idades:["Crianças"],nivelApoio:[1,2],idioma:["Português"],
  contexto:["Escola","Domicílio"],plataformas:["Android","Web"],preco:"Freemium",
  mediacao:{requerida:false,tipo:"Família/Professor",tempoSessao:"5-10 min/sessão",materiais:["Guia rápido","Cartilha de atividades"]},
  acessibilidade:["Baixo estímulo sensorial","Personalização de cores/sons"],
  acessibilidadeVerificacao:{recursos:["Contraste","Redução de animações","Fonte ampliável"],formaVerificacao:"Declarada",dataVerificacao:"2025-05-20"},
  requisitosTecnicos:{so:["Android 8+","Navegador moderno"],dispositivos:["Tablet","Smartphone","Computador"],conectividade:"Requer internet para download; offline após",permissoes:["Armazenamento"]},
  evidencias:[{tipo:"Estudo piloto",nivel:"Inicial",desenho:"Pré-pós com grupo único",amostra:"12 participantes",duracao:"4 semanas",instrumentos:["Teste de consciência fonológica","SUS"],resultados:"Ganho médio de 23% na pontuação",limitacoes:"Amostra pequena, sem grupo controle"}],
  suporte:{canaisTecnicos:["E-mail"],canaisTerapeuticos:[],materiaisEducadores:["Vídeos de uso em sala"],sla:"72h úteis"},
  riscosSensorial:{som:"Mínimo (desligável)",brilho:"Configurável",animacao:"Reduzida",configRecomendadas:"Ativar modo escuro, reduzir sons"},
  rating:4.2,votos:128,engajamento:{metricas:"Taxa de conclusão > 60%",fonte:"Dados da plataforma"},
  proveniencia:{fontes:["SLR 2024","Indicação de especialista"],curador:"Equipe TEA",dataUltimaRevisao:"2025-09-01",historico:[{data:"2025-09-01",descricao:"Revisão de evidências"},{data:"2025-03-15",descricao:"Inclusão no catálogo"}]},
  finalidade:"Apoiar alfabetização inicial com rotinas previsíveis e baixa carga sensorial.",
  exemplosUso:["Sessões curtas de 5 a 7 minutos","Atividades sem tempo limite","Reforço positivo após cada etapa"],
  privacidade:"Dados fictícios para fins de prototipação."
},{
  id:"calma",nome:"Calma+",versao:"1.5",fornecedor:"Mente Digital",
  descricao:"Técnicas de respiração guiada e regulação emocional com feedback visual mínimo e interface de baixo estímulo.",
  descricaoSimples:"Ajuda a pessoa a se acalmar com respiração guiada.",
  descricaoFacil:"App para aprender a respirar e se acalmar. Mostra o que fazer.",
  categoriaTecnologica:"Apps/Plataformas Web",objetivo:["Autorregulação"],categorias:["Regulação Emocional","Terapia e Saúde"],
  idades:["Adolescentes","Adultos","Pais/Terapeutas"],nivelApoio:[1,2,3],idioma:["Português","Inglês"],
  contexto:["Escola","Clínica","Domicílio"],plataformas:["Android","iOS"],preco:"Gratuito",
  mediacao:{requerida:false,tipo:"Autônomo",tempoSessao:"3-10 min/sessão",materiais:[]},
  acessibilidade:["Baixo estímulo sensorial","Personalização de cores/sons"],
  acessibilidadeVerificacao:{recursos:["Contraste","Navegação por teclado","Foco visível","Redução de animações"],formaVerificacao:"Testada (W3C)",dataVerificacao:"2025-07-10"},
  requisitosTecnicos:{so:["Android 9+","iOS 13+"],dispositivos:["Smartphone","Tablet"],conectividade:"Offline após download inicial",permissoes:[]},
  evidencias:[{tipo:"Quase-experimental",nivel:"Moderado",desenho:"Grupo controle não aleatório",amostra:"45 participantes",duracao:"12 semanas",instrumentos:["SCARED","GAD-7","SUS"],resultados:"Redução de 34% nos escores de ansiedade (p<0,01)",limitacoes:"Sem randomização, amostra de conveniência"}],
  suporte:{canaisTecnicos:["E-mail","FAQ"],canaisTerapeuticos:["Newsletter com dicas de uso"],materiaisEducadores:["Guia de implementação escolar"],sla:"48h úteis"},
  riscosSensorial:{som:"Mínimo (desligável)",brilho:"Reduzido por padrão",animacao:"Suave e opcional",configRecomendadas:"Modo noturno, vibração desligada"},
  rating:4.8,votos:501,engajamento:{metricas:"Adesão > 80% nas primeiras 4 semanas",fonte:"Autorrelato + dados de uso"},
  proveniencia:{fontes:["SLR 2024","Avaliação independente"],curador:"Equipe TEA",dataUltimaRevisao:"2025-11-01",historico:[{data:"2025-11-01",descricao:"Adição de novo estudo"},{data:"2025-05-10",descricao:"Inclusão no catálogo"}]},
  finalidade:"Auxiliar na autorregulação emocional com rotinas guiadas de respiração e relaxamento.",
  exemplosUso:["Usar antes da aula para reduzir ansiedade","Usar em momentos de sobrecarga sensorial","Apoiar rotina de sono com sessão guiada"],
  privacidade:"Não coleta dados pessoais. Sessões armazenadas localmente."
},{
  id:"socialmix",nome:"SocialMix",versao:"2.3",fornecedor:"Inclusão Digital Ltda.",
  descricao:"Treino de habilidades sociais com histórias sociais, simulações de situações cotidianas e feedback guiado.",
  descricaoSimples:"Ajuda a praticar situações sociais do dia a dia.",
  descricaoFacil:"App para aprender a conversar e lidar com situações sociais. Mostra exemplos.",
  categoriaTecnologica:"Jogos Sérios",objetivo:["Habilidades Sociais"],categorias:["Habilidades Sociais","Educação"],
  idades:["Adolescentes","Adultos"],nivelApoio:[1,2],idioma:["Português","Inglês","Espanhol"],
  contexto:["Escola","Clínica","Domicílio"],plataformas:["Web","Android"],preco:"Freemium",
  mediacao:{requerida:true,tipo:"Profissional (recomendado)",tempoSessao:"20-30 min/sessão",materiais:["Manual do terapeuta","Fichas de acompanhamento"]},
  acessibilidade:["Pictogramas","Compatível com leitura de tela"],
  acessibilidadeVerificacao:{recursos:["Leitor de tela","Foco visível","Legendas"],formaVerificacao:"Declarada",dataVerificacao:"2025-04-18"},
  requisitosTecnicos:{so:["Android 10+","Navegador moderno"],dispositivos:["Tablet","Computador"],conectividade:"Requer internet",permissoes:["Microfone (para prática de diálogo)"]},
  evidencias:[{tipo:"Ensaio clínico piloto",nivel:"Moderado",desenho:"Pré-pós com grupo controle",amostra:"32 participantes",duracao:"10 semanas",instrumentos:["SRS-2","Vineland-II"],resultados:"Melhora em iniciação social e reciprocidade",limitacoes:"Amostra pequena, perda de seguimento de 15%"}],
  suporte:{canaisTecnicos:["E-mail","Chat"],canaisTerapeuticos:["Supervisão online","Grupo de terapeutas"],materiaisEducadores:["Guia de aplicação em sala","Vídeos demonstrativos"],sla:"24h úteis"},
  riscosSensorial:{som:"Moderado (configurável)",brilho:"Reduzido",animacao:"Moderada",configRecomendadas:"Reduzir volume, desativar animações de fundo"},
  rating:3.9,votos:77,engajamento:{metricas:"Uso médio de 3x/semana (8 semanas)",fonte:"Autorrelato"},
  proveniencia:{fontes:["SLR 2024","Indicação de profissional"],curador:"Equipe TEA",dataUltimaRevisao:"2025-08-20",historico:[{data:"2025-08-20",descricao:"Atualização de versão"},{data:"2025-04-01",descricao:"Inclusão no catálogo"}]},
  finalidade:"Ensinar habilidades sociais por meio de histórias sociais, simulações e role-play guiado.",
  exemplosUso:["Como pedir ajuda em sala de aula","Como iniciar uma conversa","Como lidar com frustrações em jogos"],
  privacidade:"Dados de áudio processados localmente. Política de privacidade disponível."
},{
  id:"rotina-visual",nome:"Rotina Visual",versao:"1.8",fornecedor:"Autismo Tech",
  descricao:"Organizador de rotina com imagens, etapas sequenciais e lembretes configuráveis, com suporte a pictogramas personalizados.",
  descricaoSimples:"Mostra a rotina em passos com imagens.",
  descricaoFacil:"App que mostra o que fazer agora e depois. Usa figuras.",
  categoriaTecnologica:"Apps/Plataformas Web",objetivo:["Funções Executivas","Vida Diária"],categorias:["Educação","Terapia e Saúde"],
  idades:["Crianças","Adolescentes","Pais/Terapeutas"],nivelApoio:[1,2],idioma:["Português","Inglês"],
  contexto:["Escola","Domicílio"],plataformas:["Android","iOS","Web"],preco:"Freemium",
  mediacao:{requerida:false,tipo:"Família/Professor",tempoSessao:"5-15 min para configurar",materiais:["Banco de pictogramas","Modelos de rotina"]},
  acessibilidade:["Pictogramas","Baixo estímulo sensorial","Personalização de cores/sons"],
  acessibilidadeVerificacao:{recursos:["Pictogramas","Contraste","Foco visível","Redução de animações"],formaVerificacao:"Testada (W3C)",dataVerificacao:"2025-06-22"},
  requisitosTecnicos:{so:["Android 8+","iOS 13+","Navegador moderno"],dispositivos:["Tablet","Smartphone"],conectividade:"Offline com sincronização opcional",permissoes:["Armazenamento","Notificações"]},
  evidencias:[{tipo:"Estudo de caso múltiplo",nivel:"Inicial",desenho:"Linha de base múltipla",amostra:"6 participantes",duracao:"6 semanas",instrumentos:["Registro de comportamentos","Questionário de satisfação"],resultados:"Redução de comportamentos de esquiva nas transições",limitacoes:"N pequeno, sem generalização"}],
  suporte:{canaisTecnicos:["E-mail","Base de conhecimento"],canaisTerapeuticos:[],materiaisEducadores:["Modelos de rotina escolar","Webinar de introdução"],sla:"72h úteis"},
  riscosSensorial:{som:"Opcional e suave",brilho:"Configurável",animacao:"Mínima",configRecomendadas:"Usar modo escuro, sons desligados"},
  rating:4.4,votos:189,engajamento:{metricas:"Uso diário por > 70% dos usuários após 30 dias",fonte:"Dados da plataforma"},
  proveniencia:{fontes:["SLR 2024","Curadoria especialista"],curador:"Equipe TEA",dataUltimaRevisao:"2025-10-01",historico:[{data:"2025-10-01",descricao:"Revisão de acessibilidade"},{data:"2025-06-15",descricao:"Inclusão no catálogo"}]},
  finalidade:"Apoiar previsibilidade e organização da rotina diária com sequências visuais.",
  exemplosUso:["Montar sequência da manhã (escovar dentes, vestir, café)","Preparar transições entre atividades escolares","Acompanhar tarefas de casa"],
  privacidade:"Imagens armazenadas localmente. Backup em nuvem opcional criptografado."
},{
  id:"falacomigo",nome:"FalaComigo",versao:"1.2",fornecedor:"TechAcessível",
  descricao:"Prancha de comunicação dinâmica com voz sintetizada, ideal para crianças com fala não funcional. Oferece vocabulário organizado por categorias.",
  descricaoSimples:"Ajuda a criança a falar usando figuras que viram voz.",
  descricaoFacil:"App para falar com figuras. A criança toca na figura e o app fala por ela.",
  categoriaTecnologica:"CAA",objetivo:["Comunicação"],categorias:["Comunicação Alternativa (CAA)"],
  idades:["Crianças","Adolescentes"],nivelApoio:[2,3],idioma:["Português"],
  contexto:["Escola","Clínica","Domicílio"],plataformas:["Android","iOS","Web"],preco:"Gratuito (com doações)",
  mediacao:{requerida:true,tipo:"Família/Profissional intensivo",tempoSessao:"10-20 min/sessão",materiais:["Guia de implementação AAC","Vídeos tutoriais","Cartão de comunicação rápida"]},
  acessibilidade:["Pictogramas","Personalização de cores/sons"],
  acessibilidadeVerificacao:{recursos:["Pictogramas personalizáveis","Contraste ajustável","Foco visível"],formaVerificacao:"Declarada",dataVerificacao:"2025-09-05"},
  requisitosTecnicos:{so:["Android 9+","iOS 14+","Navegador moderno"],dispositivos:["Tablet","Smartphone"],conectividade:"Offline após download",permissoes:["Microfone (configuração)","Armazenamento"]},
  evidencias:[{tipo:"Relato de caso",nivel:"Exploratório",desenho:"Série de casos",amostra:"4 participantes",duracao:"12 semanas",instrumentos:["Registro de comunicação funcional","Perguntas aos pais"],resultados:"Aumento de tentativas de comunicação espontânea",limitacoes:"Sem grupo controle, amostra muito pequena"}],
  suporte:{canaisTecnicos:["E-mail","WhatsApp"],canaisTerapeuticos:["Grupo de apoio para pais","Fonoaudiólogos parceiros"],materiaisEducadores:["Guia de uso em sala de aula","Cartazes de comunicação"],sla:"24h úteis"},
  riscosSensorial:{som:"Voz sintetizada configurável (tom e velocidade)",brilho:"Reduzido",animacao:"Mínima",configRecomendadas:"Voz suave, velocidade reduzida, contraste alto"},
  rating:4.1,votos:56,engajamento:{metricas:"Adesão de 65% após 30 dias",fonte:"Autorrelato + dados de uso"},
  proveniencia:{fontes:["Indicação de fonoaudiólogo","Curadoria"],curador:"Equipe TEA",dataUltimaRevisao:"2025-10-05",historico:[{data:"2025-10-05",descricao:"Inclusão no catálogo"}]},
  finalidade:"Prover comunicação funcional por meio de prancha dinâmica com voz sintetizada.",
  exemplosUso:["Pedir água, comida ou ir ao banheiro","Expressar desconforto ou emoções","Participar de atividades em grupo com apoio"],
  privacidade:"Dados de uso anônimos para melhoria. Sem coleta de dados pessoais."
},{
  id:"incluirmais",nome:"Incluir+",versao:"1.0",fornecedor:"Universidade Federal (Projeto de extensão)",
  descricao:"Jogo sério multiplataforma com cenários interativos para desenvolvimento de habilidades sociais e empatia, com suporte a realidade aumentada.",
  descricaoSimples:"Jogo para aprender sobre emoções e convivência.",
  descricaoFacil:"Jogo que ensina sobre sentimentos e como se dar bem com os outros.",
  categoriaTecnologica:"RV/RA",objetivo:["Habilidades Sociais","Vida Diária"],categorias:["Habilidades Sociais","Educação"],
  idades:["Crianças","Adolescentes"],nivelApoio:[1,2],idioma:["Português","Inglês"],
  contexto:["Escola","Domicílio"],plataformas:["Android","iOS","Web"],preco:"Gratuito",
  mediacao:{requerida:false,tipo:"Professor/Família",tempoSessao:"15-25 min/sessão",materiais:["Guia pedagógico","Fichas de atividades complementares"]},
  acessibilidade:["Pictogramas","Baixo estímulo sensorial","Personalização de cores/sons"],
  acessibilidadeVerificacao:{recursos:["Contraste","Legendas","Foco visível","Navegação por teclado","Redução de RA opcional"],formaVerificacao:"Testada (W3C + usuários)",dataVerificacao:"2025-11-10"},
  requisitosTecnicos:{so:["Android 10+","iOS 15+","Navegador moderno"],dispositivos:["Tablet","Smartphone","Computador (versão Web)"],conectividade:"Requer internet para download; modo offline disponível",permissoes:["Câmera (RA opcional)","Armazenamento"]},
  evidencias:[{tipo:"Estudo piloto",nivel:"Inicial",desenho:"Pré-pós com grupo único",amostra:"20 participantes",duracao:"8 semanas",instrumentos:["Escala de Empatia","SRS-2","SUS"],resultados:"Melhora de 18% na pontuação de empatia autorrelatada",limitacoes:"Sem grupo controle, amostra autosselecionada"}],
  suporte:{canaisTecnicos:["E-mail","FAQ online"],canaisTerapeuticos:[],materiaisEducadores:["Plano de aula","Vídeos demonstrativos"],sla:"96h úteis"},
  riscosSensorial:{som:"Configurável",brilho:"Reduzido no modo noturno",animacao:"Moderada (reduzível)",configRecomendadas:"RA desligada, modo noturno, volume baixo"},
  rating:4.0,votos:34,engajamento:{metricas:"Sessão média de 18 min",fonte:"Dados da plataforma"},
  proveniencia:{fontes:["Projeto de pesquisa","Curadoria"],curador:"Equipe TEA",dataUltimaRevisao:"2025-11-15",historico:[{data:"2025-11-15",descricao:"Inclusão no catálogo"}]},
  finalidade:"Desenvolver habilidades sociais e empatia por meio de cenários interativos e gamificação.",
  exemplosUso:["Reconhecer expressões faciais em diferentes contextos","Praticar respostas adequadas em situações sociais","Resolver conflitos simulados com mediação do jogo"],
  privacidade:"Dados de progresso armazenados localmente. Sem compartilhamento externo."
}];

// ===================== ESTADO =====================
const state = {
  route:"inicio",apps:[],query:"",filters:{categoriaTecnologica:[],objetivo:[],idades:[],nivelApoio:[],contexto:[],acessibilidade:[]},
  compareItems:[],currentAppId:null,currentPage:1,pageSize:6,
  favorites:new Set(JSON.parse(localStorage.getItem("favorites")||"[]")),
  reviews:JSON.parse(localStorage.getItem("reviews")||"{}"),
  prefs:JSON.parse(localStorage.getItem("prefs")||JSON.stringify({focus:false,facil:false,contrast:false,reduceMotion:true}))
};

// ===================== DEFINIÇÃO DAS FACETAS =====================
const FACETS = {
  categoriaTecnologica:{label:"Categoria",options:["Apps/Plataformas Web","CAA","Jogos Sérios","RV/RA","Robótica","Vestíveis","IA"]},
  objetivo:{label:"Objetivo",options:["Comunicação","Habilidades Sociais","Autorregulação","Funções Executivas","Alfabetização","Vida Diária"]},
  idades:{label:"Público",options:["Crianças","Adolescentes","Adultos","Pais/Terapeutas"]},
  nivelApoio:{label:"Nível de Apoio",options:[1,2,3],fmt:v=>`Nível ${v}`},
  contexto:{label:"Contexto",options:["Escola","Clínica","Domicílio"]},
  acessibilidade:{label:"Acessibilidade",options:["Baixo estímulo sensorial","Pictogramas","Personalização de cores/sons","Compatível com leitura de tela","Alto contraste","Teclado","Legenda"]}
};

// ===================== DOM REFS =====================
const views = {
  inicio:document.querySelector("#viewInicio"),buscar:document.querySelector("#viewBuscar"),
  ficha:document.querySelector("#viewFicha"),comparar:document.querySelector("#viewComparar"),
  submeter:document.querySelector("#viewSubmeter"),relatorios:document.querySelector("#viewRelatorios"),
  ajuda:document.querySelector("#viewAjuda"),sobre:document.querySelector("#viewSobre")
};

// ===================== INIT =====================
document.addEventListener("DOMContentLoaded",init);
function init(){
  state.apps=EMBEDDED_APPS;
  bindNavigation();initBuscar();initComparar();initSubmitForm();initAjuda();
  bindPreferences();bindCiteModal();
  applyPrefs();renderInicio();renderRelatorios();
  setRoute("inicio");
}

// ===================== NAVEGAÇÃO =====================
function bindNavigation(){
  document.body.addEventListener("click",e=>{
    const t=e.target.closest("[data-route]");
    if(t){e.preventDefault();setRoute(t.getAttribute("data-route"));closeMobileMenu();}
  });
  document.querySelector("#menuToggle").addEventListener("click",()=>{
    const n=document.querySelector("#mainNav"),o=n.classList.toggle("open");
    document.querySelector("#menuToggle").setAttribute("aria-expanded",String(o));
  });
}
function closeMobileMenu(){
  document.querySelector("#mainNav").classList.remove("open");
  document.querySelector("#menuToggle").setAttribute("aria-expanded","false");
}
function setRoute(route){
  if(!views[route])return;
  state.route=route;
  Object.values(views).forEach(v=>v.classList.remove("active"));
  views[route].classList.add("active");
  document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.getAttribute("data-route")===route));
  document.querySelector("#conteudo").focus({preventScroll:true});
  window.scrollTo(0,0);
  if(route==="inicio")renderInicio();
  if(route==="buscar"){renderFacets();renderResults();}
  if(route==="ficha")renderFicha();
  if(route==="comparar"){renderCompareSelector();renderCompareTable();}
  if(route==="relatorios")renderRelatorios();
}

// ===================== INÍCIO =====================
function renderInicio(){
  const c=document.querySelector("#homeHighlights");
  const h=[...state.apps].sort((a,b)=>b.rating-a.rating).slice(0,3);
  c.innerHTML=h.map(a=>`
    <article class="app-card">
      <div class="app-card-header">
        <div><h3>${esc(a.nome)}</h3>${stars(a.rating,a.votos)}</div>
      </div>
      <p>${esc(getDesc(a))}</p>
      <div class="pill-list">${a.categorias.map(pill).join("")}${a.objetivo.map(o=>`<span class="pill chip-objetivo">${esc(o)}</span>`).join("")}</div>
    </article>
  `).join("");
}

// ===================== BUSCAR =====================
function initBuscar(){
  document.querySelector("#btnPesquisar").addEventListener("click",e=>{e.preventDefault();state.query=document.querySelector("#buscarInput").value.trim();state.currentPage=1;renderResults();});
  document.querySelector("#buscarInput").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();state.query=e.target.value.trim();state.currentPage=1;renderResults();}});
  document.querySelector("#btnLimpar").addEventListener("click",()=>{
    state.query="";state.filters={categoriaTecnologica:[],objetivo:[],idades:[],nivelApoio:[],contexto:[],acessibilidade:[]};
    document.querySelector("#buscarInput").value="";state.currentPage=1;
    renderFacets();renderResults();
  });
  document.querySelector("#btnBuscarAcessibilidade").addEventListener("click",()=>{
    document.querySelector("#prefsModal").classList.remove("hidden");
    syncPrefInputs();document.querySelector("#closePrefs").focus();
  });
  document.querySelector("#facetToggle").addEventListener("click",()=>{
    const g=document.querySelector("#facetGroups"),o=g.classList.toggle("open");
    document.querySelector("#facetToggle").setAttribute("aria-expanded",String(o));
  });
}

function renderFacets(){
  const container=document.querySelector("#facetGroups");
  container.innerHTML=Object.entries(FACETS).map(([key,f])=>`
    <div class="facet-group">
      <button class="facet-group-header ${state.filters[key].length?"":"collapsed"}" data-facet-key="${key}" aria-expanded="${state.filters[key].length?"true":"false"}">${esc(f.label)}</button>
      <div class="facet-group-body ${state.filters[key].length?"":"collapsed"}">
        ${f.options.map(o=>{
          const display=f.fmt?f.fmt(o):o;
          const checked=state.filters[key].includes(o);
          return `<label><input type="checkbox" data-facet-key="${key}" value="${esc(String(o))}" ${checked?"checked":""}> ${esc(display)}</label>`;
        }).join("")}
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".facet-group-header").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const body=btn.nextElementSibling,expanded=body.classList.toggle("collapsed");
      btn.classList.toggle("collapsed");btn.setAttribute("aria-expanded",!expanded);
    });
  });
  container.querySelectorAll("input[data-facet-key]").forEach(input=>{
    input.addEventListener("change",()=>{
      const key=input.dataset.facetKey;
      const val=FACETS[key]?.options.includes(parseInt(input.value))?parseInt(input.value):input.value;
      state.filters[key]=input.checked?[...state.filters[key],val]:state.filters[key].filter(v=>v!==val);
      state.currentPage=1;renderResults();renderActiveFilters();updateFacetHeaders();
    });
  });
  renderActiveFilters();
}

function updateFacetHeaders(){
  Object.keys(FACETS).forEach(key=>{
    const header=document.querySelector(`.facet-group-header[data-facet-key="${key}"]`);
    if(header){
      const hasActive=state.filters[key].length>0;
      header.classList.toggle("collapsed",!hasActive);
      if(header.nextElementSibling)header.nextElementSibling.classList.toggle("collapsed",!hasActive);
      header.setAttribute("aria-expanded",String(hasActive));
    }
  });
}

function renderActiveFilters(){
  const container=document.querySelector("#activeFilters");
  const active=[];
  Object.entries(state.filters).forEach(([key,vals])=>{
    vals.forEach(v=>{
      const f=FACETS[key];let label=v;
      if(f){
        const match=f.options.find(o=>o===v);
        if(match!==undefined)label=f.fmt?f.fmt(match):match;
      }
      active.push({key,val,label});
    });
  });
  container.innerHTML=active.map(f=>`<span class="filter-chip">${esc(String(f.label))} <button class="filter-chip-remove" data-fkey="${f.key}" data-fval="${esc(String(f.val))}" aria-label="Remover filtro ${esc(String(f.label))}">×</button></span>`).join("");
  container.querySelectorAll(".filter-chip-remove").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const key=btn.dataset.fkey;
      const raw=btn.dataset.fval;
      const val=FACETS[key]?.options.includes(parseInt(raw))?parseInt(raw):raw;
      state.filters[key]=state.filters[key].filter(v=>v!==val);
      state.currentPage=1;renderFacets();renderResults();
    });
  });
}

function getFilteredApps(){
  return state.apps.filter(app=>{
    if(state.query){
      const q=state.query.toLowerCase();
      if(!app.nome.toLowerCase().includes(q)&&!app.descricao.toLowerCase().includes(q)&&!app.finalidade.toLowerCase().includes(q)&&!app.objetivo.some(o=>o.toLowerCase().includes(q)))return false;
    }
    if(state.filters.categoriaTecnologica.length&&!state.filters.categoriaTecnologica.includes(app.categoriaTecnologica))return false;
    if(state.filters.objetivo.length&&!state.filters.objetivo.some(o=>app.objetivo.includes(o)))return false;
    if(state.filters.idades.length&&!state.filters.idades.some(a=>app.idades.includes(a)))return false;
    if(state.filters.nivelApoio.length&&!state.filters.nivelApoio.some(n=>app.nivelApoio.includes(n)))return false;
    if(state.filters.contexto.length&&!state.filters.contexto.some(c=>app.contexto.includes(c)))return false;
    if(state.filters.acessibilidade.length&&!state.filters.acessibilidade.every(a=>app.acessibilidade.includes(a)))return false;
    return true;
  });
}

function renderResults(){
  const filtered=getFilteredApps(),total=filtered.length;
  const totalPages=Math.ceil(total/state.pageSize)||1;
  if(state.currentPage>totalPages)state.currentPage=totalPages;
  const start=(state.currentPage-1)*state.pageSize,end=Math.min(start+state.pageSize,total);
  const pageItems=filtered.slice(start,end);

  const count=document.querySelector("#resultCount");
  count.textContent=total?`${total} tecnologia(s) encontrada(s).`:"";

  const grid=document.querySelector("#resultsGrid");
  if(!total){
    grid.innerHTML=`<div class="empty-state"><p><strong>Nenhuma tecnologia encontrada.</strong></p><p>Tente remover alguns filtros ou buscar por termos diferentes.</p></div>`;
    document.querySelector("#pagination").innerHTML="";
    return;
  }

  grid.innerHTML=pageItems.map(app=>{
    const isFav=state.favorites.has(app.id),inCompare=state.compareItems.includes(app.id);
    const lastUpdate=app.proveniencia.dataUltimaRevisao||"";
    return `
      <article class="result-card" data-app-id="${app.id}">
        <div class="result-card-top">
          <input type="checkbox" class="result-card-check" data-compare="${app.id}" ${inCompare?"checked":""} aria-label="Comparar ${esc(app.nome)}" ${state.compareItems.length>=3&&!inCompare?"disabled":""}>
          <div class="result-card-title">
            <h3>${esc(app.nome)}</h3>
            <div class="rating" aria-label="Avaliação ${app.rating} de 5">${"★".repeat(Math.round(app.rating))}${"☆".repeat(5-Math.round(app.rating))}<small>${app.rating.toFixed(1)} (${app.votos})</small></div>
          </div>
          <button class="favorite ${isFav?"active":""}" data-favorite="${app.id}" aria-label="${isFav?"Remover dos favoritos":"Adicionar aos favoritos"}">${isFav?"♥":"♡"}</button>
        </div>
        <p style="font-size:.88rem;margin:0">${esc(getDesc(app))}</p>
        <div class="result-card-chips">
          ${app.objetivo.map(o=>`<span class="chip chip-objetivo">${esc(o)}</span>`).join("")}
          <span class="chip chip-publico">${esc(app.idades.join("/"))}</span>
          <span class="chip chip-nivel">Nível ${app.nivelApoio.join("-")}</span>
          ${app.acessibilidade.slice(0,2).map(a=>`<span class="chip chip-a11y">${esc(a)}</span>`).join("")}
          ${lastUpdate?`<span class="chip chip-atualizacao">${esc(lastUpdate)}</span>`:""}
        </div>
        <div class="result-card-actions">
          <button class="button button-secondary" style="flex:1;padding:6px 12px;font-size:.85rem" data-open-app="${app.id}">Ver detalhes</button>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-open-app]").forEach(btn=>{
    btn.addEventListener("click",()=>{state.currentAppId=btn.dataset.openApp;setRoute("ficha");});
  });
  grid.querySelectorAll("[data-favorite]").forEach(btn=>{
    btn.addEventListener("click",()=>{toggleFavorite(btn.dataset.favorite);renderResults();});
  });
  grid.querySelectorAll("[data-compare]").forEach(cb=>{
    cb.addEventListener("change",()=>{toggleCompare(cb.dataset.compare);});
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages){
  const c=document.querySelector("#pagination");
  if(totalPages<=1){c.innerHTML="";return;}
  let html=`<button class="page-btn" data-page="prev" ${state.currentPage<=1?"disabled":""}>«</button>`;
  for(let i=1;i<=totalPages;i++)html+=`<button class="page-btn ${i===state.currentPage?"active":""}" data-page="${i}">${i}</button>`;
  html+=`<button class="page-btn" data-page="next" ${state.currentPage>=totalPages?"disabled":""}>»</button>`;
  c.innerHTML=html;
  c.querySelectorAll(".page-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      if(btn.dataset.page==="prev"&&state.currentPage>1)state.currentPage--;
      else if(btn.dataset.page==="next"&&state.currentPage<totalPages)state.currentPage++;
      else if(btn.dataset.page!=="prev"&&btn.dataset.page!=="next")state.currentPage=parseInt(btn.dataset.page);
      renderResults();
    });
  });
}

// ===================== FICHA =====================
function renderFicha(){
  const app=state.apps.find(a=>a.id===state.currentAppId);
  if(!app){document.querySelector("#fichaContent").innerHTML=`<div class="card"><p>Aplicativo não encontrado.</p></div>`;return;}
  const isFav=state.favorites.has(app.id);
  const appR=state.reviews[app.id]||[];
  const acc=app.acessibilidadeVerificacao;

  document.querySelector("#fichaContent").innerHTML=`
    <div class="ficha-header">
      <div>
        <h2 id="detailTitle">${esc(app.nome)}</h2>
        <p class="ficha-versao">v${esc(app.versao)} | ${esc(app.fornecedor)}</p>
        <p>${esc(getDesc(app))}</p>
        <div class="pill-list" style="margin-top:8px">${pill(app.categoriaTecnologica)} ${app.objetivo.map(o=>pill(o)).join("")} ${pill(app.preco)}</div>
        <div class="rating" style="margin-top:8px" aria-label="Avaliação ${app.rating} de 5">${"★".repeat(Math.round(app.rating))}${"☆".repeat(5-Math.round(app.rating))}<small>${app.rating.toFixed(1)} (${app.votos} votos)</small></div>
      </div>
      <div class="ficha-actions">
        <button class="button button-secondary" id="fichaCompararBtn" data-compare-app="${app.id}">${state.compareItems.includes(app.id)?"Remover da comparação":"Comparar"}</button>
        <button class="favorite ${isFav?"active":""}" id="fichaFavBtn" data-favorite="${app.id}" aria-label="${isFav?"Remover dos favoritos":"Adicionar aos favoritos"}">${isFav?"♥":"♡"}</button>
        <button class="button button-secondary" id="fichaCitarBtn" data-cite="${app.id}">Citar</button>
      </div>
    </div>

    <div class="badge-row">
      <div class="badge badge-evidence" data-tip="evidencia-${app.id}">Evidência: ${app.evidencias.length?app.evidencias[0].nivel:"N/A"}</div>
      <div class="badge badge-access" data-tip="acessibilidade-${app.id}">Acessibilidade: ${acc.formaVerificacao||"Declarada"}</div>
      <div class="badge badge-update" data-tip="atualizacao-${app.id}">Atualização: ${app.proveniencia.dataUltimaRevisao||"N/A"}</div>
    </div>

    <div class="ficha-body">
      <div class="ficha-col-left">
        <div class="ficha-section">
          <h2>Objetivos</h2>
          <p>${esc(app.finalidade)}</p>
          <h3>Exemplos de uso</h3>
          <ul>${app.exemplosUso.map(e=>`<li>${esc(e)}</li>`).join("")}</ul>
        </div>
        <div class="ficha-section">
          <h2>Público / Idade / Nível</h2>
          <p><strong>Idade:</strong> ${esc(app.idades.join(", "))}</p>
          <p><strong>Nível de Apoio:</strong> ${app.nivelApoio.join(", ")}</p>
          <p><strong>Preferências sensoriais/ling.:</strong> ${esc(app.idioma.join(", "))}</p>
          <p><strong>Mediação:</strong> ${app.mediacao.tipo}${app.mediacao.requerida?" (requerida)":" (não requerida)"}</p>
          ${app.mediacao.materiais.length?`<p><strong>Materiais de apoio:</strong></p><ul>${app.mediacao.materiais.map(m=>`<li>${esc(m)}</li>`).join("")}</ul>`:""}
        </div>
        <div class="ficha-section">
          <h2>Contexto & Mediação</h2>
          <p><strong>Contextos:</strong> ${esc(app.contexto.join(", "))}</p>
          <p><strong>Tempo por sessão:</strong> ${esc(app.mediacao.tempoSessao)}</p>
          <p><strong>Plataformas:</strong> ${esc(app.plataformas.join(", "))}</p>
          <div class="pill-list" style="margin-top:8px">${app.acessibilidade.map(pill).join("")}</div>
        </div>
      </div>
      <div class="ficha-col-right">
        <div class="ficha-section">
          <h2>Requisitos & Custo/Licença</h2>
          <p><strong>SO:</strong> ${esc(app.requisitosTecnicos.so.join(", "))}</p>
          <p><strong>Dispositivos:</strong> ${esc(app.requisitosTecnicos.dispositivos.join(", "))}</p>
          <p><strong>Conectividade:</strong> ${esc(app.requisitosTecnicos.conectividade)}</p>
          <p><strong>Custo:</strong> ${esc(app.preco)}</p>
          <p><strong>Idioma:</strong> ${esc(app.idioma.join(", "))}</p>
        </div>
        <div class="ficha-section">
          <h2>Suporte</h2>
          ${app.suporte.canaisTecnicos.length?`<p><strong>Técnico:</strong> ${esc(app.suporte.canaisTecnicos.join(", "))}</p>`:""}
          ${app.suporte.canaisTerapeuticos.length?`<p><strong>Terapêutico:</strong> ${esc(app.suporte.canaisTerapeuticos.join(", "))}</p>`:""}
          ${app.suporte.materiaisEducadores.length?`<p><strong>Materiais:</strong> ${esc(app.suporte.materiaisEducadores.join(", "))}</p>`:""}
          ${app.suporte.sla?`<p><strong>SLA:</strong> ${esc(app.suporte.sla)}</p>`:""}
        </div>
        <div class="ficha-section">
          <h2>Engajamento / Aderência</h2>
          <p>${esc(app.engajamento.metricas)}</p>
          <p style="color:var(--muted);font-size:.85rem">Fonte: ${esc(app.engajamento.fonte)}</p>
        </div>
        <div class="ficha-section">
          <h2>Evidência / Proveniência / Histórico</h2>
          ${app.evidencias.length?app.evidencias.map(ev=>`
            <p><strong>Tipo:</strong> ${esc(ev.tipo)} — ${esc(ev.nivel)}</p>
            <p><strong>Desenho:</strong> ${esc(ev.desenho)}</p>
            <p><strong>Amostra:</strong> ${esc(ev.amostra)} (${esc(ev.duracao)})</p>
            <p><strong>Instrumentos:</strong> ${esc(ev.instrumentos.join(", "))}</p>
            <p><strong>Resultados:</strong> ${esc(ev.resultados)}</p>
            ${ev.limitacoes?`<p style="color:var(--warning);font-size:.85rem"><strong>Limitações:</strong> ${esc(ev.limitacoes)}</p>`:""}
          `).join(""):"<p>Evidência não disponível.</p>"}
          <hr style="border-color:var(--border);margin:12px 0">
          <p><strong>Fonte:</strong> ${esc(app.proveniencia.fontes.join(", "))}</p>
          <p><strong>Curador:</strong> ${esc(app.proveniencia.curador)}</p>
          <p><strong>Últ. revisão:</strong> ${esc(app.proveniencia.dataUltimaRevisao)}</p>
          ${app.proveniencia.historico.length?`<p><strong>Histórico:</strong></p><ul>${app.proveniencia.historico.map(h=>`<li>${esc(h.data)} — ${esc(h.descricao)}</li>`).join("")}</ul>`:""}
        </div>
      </div>
    </div>

    <div class="ficha-section">
      <h2>Risco Sensorial / Configurações Recomendadas</h2>
      <p><strong>Som:</strong> ${esc(app.riscosSensorial.som)}</p>
      <p><strong>Brilho:</strong> ${esc(app.riscosSensorial.brilho)}</p>
      <p><strong>Animação:</strong> ${esc(app.riscosSensorial.animacao)}</p>
      <p><strong>Configurações recomendadas:</strong> ${esc(app.riscosSensorial.configRecomendadas)}</p>
    </div>

    <div class="ficha-section">
      <h2>Avaliações de Usuários</h2>
      <form id="reviewForm" class="review-form" style="display:grid;gap:10px;margin-bottom:16px">
        <label><strong>Sua nota</strong></label>
        <div class="stars-input" role="radiogroup" aria-label="Nota de 1 a 5">${[1,2,3,4,5].map(n=>`<button type="button" class="star-button" data-star="${n}" aria-label="Dar nota ${n}">★</button>`).join("")}</div>
        <label for="reviewComment"><strong>Comentário opcional</strong></label>
        <textarea id="reviewComment" rows="3" placeholder="Conte brevemente sua experiência." style="width:100%;border:1px solid var(--border);border-radius:var(--radius-md);padding:12px 14px;font:inherit"></textarea>
        <button type="submit" class="button button-primary">Enviar avaliação</button>
      </form>
      <div class="review-list" style="display:grid;gap:10px;margin-top:12px">
        ${appR.length?appR.map(r=>`<div class="review-item" style="border:1px solid var(--border);border-radius:var(--radius-md);padding:12px;background:var(--surface-soft)"><strong>Nota: ${r.nota}/5</strong>${r.comentario?`<p>${esc(r.comentario)}</p>`:""}</div>`).join(""):"<p style='color:var(--muted)'>Nenhuma avaliação ainda. Seja o primeiro(a)!</p>"}
      </div>
    </div>
  `;

  document.querySelector("#fichaCompararBtn")?.addEventListener("click",()=>{toggleCompare(app.id);renderFicha();});
  document.querySelector("#fichaFavBtn")?.addEventListener("click",()=>{toggleFavorite(app.id);renderFicha();});
  document.querySelector("#fichaCitarBtn")?.addEventListener("click",()=>openCiteModal(app));
  bindBadgeTooltips(app);
  bindReviewForm(app.id);
}

function bindBadgeTooltips(app){
  document.querySelectorAll("[data-tip]").forEach(el=>{
    const tipId=el.dataset.tip;
    let content="";
    if(tipId.startsWith("evidencia-")){
      const ev=app.evidencias[0];content=ev?`<strong>${esc(ev.tipo)}</strong> — ${esc(ev.nivel)}<br>${esc(ev.desenho)}<br>Amostra: ${esc(ev.amostra)}`:"Evidência não disponível.";
    }else if(tipId.startsWith("acessibilidade-")){
      const v=app.acessibilidadeVerificacao;content=`<strong>Verificação:</strong> ${esc(v.formaVerificacao)}<br><strong>Data:</strong> ${esc(v.dataVerificacao)}<br><strong>Recursos:</strong> ${esc(v.recursos.join(", "))}`;
    }else if(tipId.startsWith("atualizacao-")){
      const p=app.proveniencia;content=`<strong>Última revisão:</strong> ${esc(p.dataUltimaRevisao)}<br><strong>Curador:</strong> ${esc(p.curador)}${p.historico.length?`<br><strong>Última alteração:</strong> ${esc(p.historico[0].descricao)}`:""}`;
    }
    el.addEventListener("mouseenter",()=>showTooltip(el,content));
    el.addEventListener("mouseleave",hideTooltip);
    el.addEventListener("focus",()=>showTooltip(el,content));
    el.addEventListener("blur",hideTooltip);
  });
}

function showTooltip(el,html){
  const t=document.querySelector("#tooltipContainer");
  t.innerHTML=html;t.classList.remove("hidden");
  const r=el.getBoundingClientRect();
  t.style.left=r.left+"px";t.style.top=(r.bottom+8)+"px";
}
function hideTooltip(){document.querySelector("#tooltipContainer").classList.add("hidden");}

function bindReviewForm(appId){
  let selectedStar=0;
  const container=document.querySelector("#fichaContent");
  container.querySelectorAll(".star-button").forEach(b=>{
    b.addEventListener("click",()=>{
      selectedStar=Number(b.dataset.star);
      container.querySelectorAll(".star-button").forEach(btn=>btn.classList.toggle("active",Number(btn.dataset.star)<=selectedStar));
    });
  });
  const form=container.querySelector("#reviewForm");
  if(form)form.addEventListener("submit",e=>{
    e.preventDefault();
    if(!selectedStar){alert("Selecione uma nota de 1 a 5.");return;}
    const comentario=container.querySelector("#reviewComment").value.trim();
    state.reviews[appId]=[{nota:selectedStar,comentario},...(state.reviews[appId]||[])];
    localStorage.setItem("reviews",JSON.stringify(state.reviews));
    renderFicha();
  });
}

// ===================== COMPARAR =====================
function initComparar(){
  document.querySelector("#exportCSV").addEventListener("click",exportCSV);
  document.querySelector("#exportPDF").addEventListener("click",()=>window.print());
  document.querySelector("#saveCompare").addEventListener("click",()=>{
    localStorage.setItem("savedCompare",JSON.stringify(state.compareItems));
    alert("Comparação salva!");
  });
}

function toggleCompare(appId){
  const idx=state.compareItems.indexOf(appId);
  if(idx>=0)state.compareItems.splice(idx,1);
  else if(state.compareItems.length>=3){alert("Máximo de 3 tecnologias para comparação.");return;}
  else state.compareItems.push(appId);
  if(state.route==="buscar")renderResults();
  renderCompareSelector();renderCompareTable();
}

function renderCompareSelector(){
  const c=document.querySelector("#compareSelector");
  const apps=state.compareItems.map(id=>state.apps.find(a=>a.id===id)).filter(Boolean);
  if(!apps.length){c.innerHTML="";return;}
  c.innerHTML=apps.map(a=>`
    <div class="compare-selector-item">
      <span><strong>${esc(a.nome)}</strong></span>
      <button class="compare-selector-remove" data-compare-remove="${a.id}" aria-label="Remover ${esc(a.nome)}">×</button>
    </div>
  `).join("");
  c.querySelectorAll("[data-compare-remove]").forEach(btn=>{
    btn.addEventListener("click",()=>{toggleCompare(btn.dataset.compareRemove);renderCompareSelector();renderCompareTable();if(state.route==="buscar")renderResults();});
  });
}

function renderCompareTable(){
  const wrapper=document.querySelector("#compareTableWrapper");
  const empty=document.querySelector("#compareEmpty");
  const apps=state.compareItems.map(id=>state.apps.find(a=>a.id===id)).filter(Boolean);

  if(!apps.length){wrapper.classList.add("hidden");empty.classList.remove("hidden");return;}
  wrapper.classList.remove("hidden");empty.classList.add("hidden");

  const fields=[
    {key:"Objetivo",fn:a=>a.objetivo.join(", ")},
    {key:"Público/Idade",fn:a=>a.idades.join(", ")},
    {key:"Nível de Apoio",fn:a=>a.nivelApoio.join(", ")},
    {key:"Acessibilidade (rec./val.)",fn:a=>a.acessibilidade.join(", ")+(a.acessibilidadeVerificacao?` (${a.acessibilidadeVerificacao.formaVerificacao})`:"")},
    {key:"Contexto & Mediação",fn:a=>a.contexto.join(", ")+(a.mediacao.requerida?" | Requer mediação":"")},
    {key:"Requisitos Técnicos",fn:a=>`${a.requisitosTecnicos.so.join(", ")} | ${a.requisitosTecnicos.dispositivos.join(", ")} | ${a.requisitosTecnicos.conectividade}`},
    {key:"Idioma",fn:a=>a.idioma.join(", ")},
    {key:"Custo/Licença",fn:a=>a.preco},
    {key:"Evidência (tipo/nível)",fn:a=>a.evidencias.length?`${a.evidencias[0].tipo} / ${a.evidencias[0].nivel}`:"—"},
    {key:"Atualização (data/versão)",fn:a=>`${a.proveniencia.dataUltimaRevisao||"—"} | v${a.versao}`},
    {key:"Engajamento",fn:a=>a.engajamento.metricas}
  ];

  document.querySelector("#compareHead").innerHTML=`<tr><th>Campo</th>${apps.map(a=>`<th>${esc(a.nome)}</th>`).join("")}</tr>`;
  document.querySelector("#compareBody").innerHTML=fields.map(f=>`
    <tr><td class="field-name">${f.key}</td>${apps.map(a=>`<td>${esc(f.fn(a)||"—")}</td>`).join("")}</tr>
  `).join("");
}

function exportCSV(){
  const apps=state.compareItems.map(id=>state.apps.find(a=>a.id===id)).filter(Boolean);
  if(!apps.length){alert("Nenhuma tecnologia selecionada para exportar.");return;}
  const fields=["Objetivo","Público/Idade","Nível de Apoio","Acessibilidade","Contexto & Mediação","Requisitos Técnicos","Idioma","Custo/Licença","Evidência","Atualização","Engajamento"];
  let csv="Campo;"+apps.map(a=>a.nome).join(";")+"\n";
  const vals={
    "Objetivo":a=>a.objetivo.join(", "),
    "Público/Idade":a=>a.idades.join(", "),
    "Nível de Apoio":a=>a.nivelApoio.join(", "),
    "Acessibilidade":a=>a.acessibilidade.join(", "),
    "Contexto & Mediação":a=>a.contexto.join(", "),
    "Requisitos Técnicos":a=>a.requisitosTecnicos.so.join(", "),
    "Idioma":a=>a.idioma.join(", "),
    "Custo/Licença":a=>a.preco,
    "Evidência":a=>a.evidencias.length?a.evidencias[0].tipo+" / "+a.evidencias[0].nivel:"N/A",
    "Atualização":a=>a.proveniencia.dataUltimaRevisao,
    "Engajamento":a=>a.engajamento.metricas
  };
  fields.forEach(f=>{csv+=f+";"+apps.map(a=>`"${(vals[f](a)||"—").replace(/"/g,'""')}"`).join(";")+"\n";});
  const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");a.href=url;a.download="comparacao-catalogo-tea.csv";a.click();
  URL.revokeObjectURL(url);
}

// ===================== SUBMETER =====================
let submitStep=1;const TOTAL_STEPS=4;
function initSubmitForm(){
  document.querySelector("#stepNext").addEventListener("click",()=>{
    if(submitStep<TOTAL_STEPS){submitStep++;showSubmitStep();}
  });
  document.querySelector("#stepPrev").addEventListener("click",()=>{
    if(submitStep>1){submitStep--;showSubmitStep();}
  });
  document.querySelector("#submitForm").addEventListener("submit",e=>{
    e.preventDefault();
    document.querySelector("#submitFeedback").classList.remove("hidden");
    document.querySelector("#stepSubmit").disabled=true;
    document.querySelector("#submitForm").reset();
  });
  // Access checkboxes
  const accContainer=document.querySelector("#subAccessCheckboxes");
  if(accContainer)accContainer.innerHTML=FACETS.acessibilidade.options.map(o=>`<label><input type="checkbox" value="${esc(o)}"> ${esc(o)}</label>`).join("");
}

function showSubmitStep(){
  document.querySelectorAll(".step-form-page").forEach(p=>p.classList.remove("active"));
  document.querySelector(`.step-form-page[data-page="${submitStep}"]`).classList.add("active");
  document.querySelectorAll(".step").forEach(s=>s.classList.toggle("active",parseInt(s.dataset.step)===submitStep));
  document.querySelector("#stepPrev").classList.toggle("hidden",submitStep===1);
  document.querySelector("#stepNext").classList.toggle("hidden",submitStep===TOTAL_STEPS);
  document.querySelector("#stepSubmit").classList.toggle("hidden",submitStep!==TOTAL_STEPS);
  if(submitStep===TOTAL_STEPS)renderSubmitReview();
}

function renderSubmitReview(){
  const getVal=id=>document.querySelector(`#${id}`)?.value||"";
  document.querySelector("#submitReview").innerHTML=`
    <p><strong>Nome:</strong> ${esc(getVal("subNome"))||"—"}</p>
    <p><strong>Versão:</strong> ${esc(getVal("subVersao"))||"—"}</p>
    <p><strong>Fornecedor:</strong> ${esc(getVal("subFornecedor"))||"—"}</p>
    <p><strong>Categoria:</strong> ${esc(getVal("subCategoria"))||"—"}</p>
    <p><strong>Objetivo:</strong> ${esc(getVal("subObjetivo"))||"—"}</p>
    <p><strong>Público:</strong> ${esc(getVal("subPublico"))||"—"}</p>
    <p><strong>Nível:</strong> ${esc(getVal("subNivel"))||"—"}</p>
    <p><strong>Contexto:</strong> ${esc(getVal("subContexto"))||"—"}</p>
    <p><strong>Licença:</strong> ${esc(getVal("subPreco"))||"—"}</p>
    <p><strong>Evidência:</strong> ${esc(getVal("subEvidencia"))||"—"}</p>
  `;
}

// ===================== RELATÓRIOS =====================
function renderRelatorios(){
  const apps=state.apps;
  const total=apps.length;
  const porCategoria={};apps.forEach(a=>{porCategoria[a.categoriaTecnologica]=(porCategoria[a.categoriaTecnologica]||0)+1;});
  const porObjetivo={};apps.forEach(a=>a.objetivo.forEach(o=>{porObjetivo[o]=(porObjetivo[o]||0)+1;}));
  const comEvidencia=apps.filter(a=>a.evidencias.length>0).length;
  const desatualizados=apps.filter(a=>{
    if(!a.proveniencia.dataUltimaRevisao)return true;
    const d=new Date(a.proveniencia.dataUltimaRevisao);
    const umAno=new Date();umAno.setFullYear(umAno.getFullYear()-1);
    return d<umAno;
  }).length;
  const porNivel={1:0,2:0,3:0};apps.forEach(a=>a.nivelApoio.forEach(n=>porNivel[n]=(porNivel[n]||0)+1));

  document.querySelector("#reportGrid").innerHTML=`
    <div class="report-card"><div class="report-number">${total}</div><div class="report-label">Total de tecnologias</div></div>
    <div class="report-card"><div class="report-number">${comEvidencia}</div><div class="report-label">Com evidência</div></div>
    <div class="report-card"><div class="report-number">${desatualizados}</div><div class="report-label">Desatualizadas (>1 ano)</div></div>
    <div class="report-card"><div class="report-number">${Object.keys(porCategoria).length}</div><div class="report-label">Categorias representadas</div></div>
    <div class="report-card" style="grid-column:1/-1;text-align:left">
      <div class="report-label" style="font-weight:700;color:var(--text-strong);margin-bottom:8px">Distribuição por Categoria</div>
      ${Object.entries(porCategoria).map(([k,v])=>`<span class="pill">${esc(k)}: ${v}</span>`).join(" ")}
    </div>
    <div class="report-card" style="grid-column:1/-1;text-align:left">
      <div class="report-label" style="font-weight:700;color:var(--text-strong);margin-bottom:8px">Distribuição por Objetivo</div>
      ${Object.entries(porObjetivo).map(([k,v])=>`<span class="pill">${esc(k)}: ${v}</span>`).join(" ")}
    </div>
    <div class="report-card" style="grid-column:1/-1;text-align:left">
      <div class="report-label" style="font-weight:700;color:var(--text-strong);margin-bottom:8px">Distribuição por Nível de Apoio</div>
      ${Object.entries(porNivel).map(([k,v])=>`<span class="pill">Nível ${k}: ${v}</span>`).join(" ")}
    </div>
  `;
}

// ===================== AJUDA =====================
function initAjuda(){
  const sync=()=>{
    document.querySelector("#ajContraste").checked=state.prefs.contrast;
    document.querySelector("#ajFoco").checked=state.prefs.focus;
    document.querySelector("#ajLeituraFacil").checked=state.prefs.facil;
    document.querySelector("#ajAnimacoes").checked=state.prefs.reduceMotion;
  };
  document.querySelector("#viewAjuda").addEventListener("view-active",sync);
  document.querySelector("#ajContraste").addEventListener("change",function(){state.prefs.contrast=this.checked;applyPrefs();savePrefs();});
  document.querySelector("#ajFoco").addEventListener("change",function(){state.prefs.focus=this.checked;applyPrefs();savePrefs();});
  document.querySelector("#ajLeituraFacil").addEventListener("change",function(){state.prefs.facil=this.checked;savePrefs();const r=state.route;if(r==="buscar"||r==="inicio"||r==="ficha"){if(r==="buscar")renderResults();else if(r==="inicio")renderInicio();else if(r==="ficha")renderFicha();}});
  document.querySelector("#ajAnimacoes").addEventListener("change",function(){state.prefs.reduceMotion=this.checked;applyPrefs();savePrefs();});
  // Sync when view becomes active
  const observer=new MutationObserver(()=>{if(!document.querySelector("#viewAjuda").classList.contains("hidden"))sync();});
  observer.observe(document.querySelector("#viewAjuda"),{attributes:true,attributeFilter:["class"]});
}

// ===================== CITE MODAL =====================
let citeApp=null;
function bindCiteModal(){
  document.querySelector("#closeCite").addEventListener("click",()=>document.querySelector("#citeModal").classList.add("hidden"));
  document.querySelector("#citeModal").addEventListener("click",e=>{if(e.target===e.currentTarget)document.querySelector("#citeModal").classList.add("hidden");});
  document.querySelectorAll(".cite-format-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".cite-format-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");renderCite(btn.dataset.format);
    });
  });
  document.querySelector("#citeCopy").addEventListener("click",()=>{
    const txt=document.querySelector("#citeOutput").textContent;
    navigator.clipboard.writeText(txt).then(()=>{const b=document.querySelector("#citeCopy");b.textContent="Copiado!";setTimeout(()=>b.textContent="Copiar",2000);});
  });
}
function openCiteModal(app){
  citeApp=app;document.querySelector("#citeModal").classList.remove("hidden");
  renderCite("abnt");
}
function renderCite(format){
  if(!citeApp)return;
  const a=citeApp,t=document.querySelector("#citeOutput");
  if(format==="abnt")t.textContent=`${a.fornecedor}. ${a.nome}: versão ${a.versao}. ${new Date().getFullYear()}. Disponível em: [link]. Acesso em: ${new Date().toLocaleDateString("pt-BR")}.`;
  else if(format==="apa")t.textContent=`${a.fornecedor}. (${new Date().getFullYear()}). ${a.nome} (Versão ${a.versao}). [Aplicativo]. Acesso em ${new Date().toLocaleDateString("pt-BR")}.`;
  else if(format==="bibtex")t.textContent=`@misc{${a.id}_${new Date().getFullYear()},\n  author = {${a.fornecedor}},\n  title = {${a.nome}},\n  year = {${new Date().getFullYear()}},\n  note = {Versão ${a.versao}}\n}`;
}

// ===================== FAVORITOS =====================
function toggleFavorite(id){
  if(state.favorites.has(id))state.favorites.delete(id);else state.favorites.add(id);
  localStorage.setItem("favorites",JSON.stringify(Array.from(state.favorites)));
}

// ===================== PREFERENCES =====================
function bindPreferences(){
  const m=document.querySelector("#prefsModal");
  document.querySelector("#openPrefs").addEventListener("click",()=>{syncPrefInputs();m.classList.remove("hidden");document.querySelector("#closePrefs").focus();});
  document.querySelector("#closePrefs").addEventListener("click",()=>m.classList.add("hidden"));
  m.addEventListener("click",e=>{if(e.target===m)m.classList.add("hidden");});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")m.classList.add("hidden");});
  document.querySelector("#applyPrefs").addEventListener("click",()=>{
    state.prefs.focus=document.querySelector("#prefFocus").checked;
    state.prefs.facil=document.querySelector("#prefFacil").checked;
    state.prefs.contrast=document.querySelector("#prefContrast").checked;
    state.prefs.reduceMotion=document.querySelector("#prefMotion").checked;
    savePrefs();applyPrefs();
    const r=state.route;
    if(r==="buscar"||r==="inicio"||r==="ficha"){
      if(r==="buscar")renderResults();else if(r==="inicio")renderInicio();else if(r==="ficha")renderFicha();
    }
    m.classList.add("hidden");
  });
}
function syncPrefInputs(){
  document.querySelector("#prefFocus").checked=state.prefs.focus;
  document.querySelector("#prefFacil").checked=state.prefs.facil;
  document.querySelector("#prefContrast").checked=state.prefs.contrast;
  document.querySelector("#prefMotion").checked=state.prefs.reduceMotion;
}
function applyPrefs(){
  document.body.classList.toggle("focus-mode",state.prefs.focus);
  document.body.classList.toggle("high-contrast",state.prefs.contrast);
  document.body.classList.toggle("reduce-motion",state.prefs.reduceMotion);
  document.querySelector("#focusBanner").classList.toggle("hidden",!state.prefs.focus);
}
function savePrefs(){localStorage.setItem("prefs",JSON.stringify(state.prefs));}

// ===================== UTILITIES =====================
function getDesc(app){return state.prefs.facil?app.descricaoFacil:app.descricao;}
function stars(v,vt){const r=Math.round(v);return `<div class="rating" aria-label="Avaliação ${v} de 5">${"★".repeat(r)}${"☆".repeat(5-r)}<small>${v.toFixed(1)} (${vt})</small></div>`;}
function pill(t){return t?`<span class="pill">${esc(t)}</span>`:"";}
function esc(v){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}
