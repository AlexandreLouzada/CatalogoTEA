const EMBEDDED_APPS = [
  {
    "id": "proloquo",
    "nome": "Proloquo (exemplo)",
    "descricao": "App de comunicação alternativa com vocabulário baseado em pictogramas.",
    "descricaoSimples": "Ajuda a pessoa a se comunicar usando pictogramas.",
    "categorias": [
      "Comunicação Alternativa (CAA)"
    ],
    "idades": [
      "Crianças",
      "Adolescentes",
      "Adultos"
    ],
    "acessibilidade": [
      "Pictogramas",
      "Personalização de cores/sons",
      "Compatível com leitura de tela"
    ],
    "plataformas": [
      "iOS"
    ],
    "preco": "Pago",
    "finalidade": "Apoiar comunicação expressiva por pictogramas.",
    "exemplosUso": [
      "Rotinas diárias: comer, beber e banheiro.",
      "Comunicar preferências em sala de aula.",
      "Criar quadros de escolha guiada."
    ],
    "privacidade": "Verificar política oficial do aplicativo antes do uso.",
    "rating": 4.6,
    "votos": 214
  },
  {
    "id": "alfabetiza",
    "nome": "Alfabetiza Fácil",
    "descricao": "Jogos estruturados para consciência fonológica e alfabetização com baixo estímulo sensorial.",
    "descricaoSimples": "Ajuda na alfabetização com atividades curtas e organizadas.",
    "categorias": [
      "Educação"
    ],
    "idades": [
      "Crianças"
    ],
    "acessibilidade": [
      "Baixo estímulo sensorial",
      "Personalização de cores/sons"
    ],
    "plataformas": [
      "Android",
      "Web"
    ],
    "preco": "Freemium",
    "finalidade": "Apoiar alfabetização inicial com rotinas previsíveis.",
    "exemplosUso": [
      "Sessões curtas de 5 a 7 minutos.",
      "Atividades sem tempo limite.",
      "Reforço positivo após cada etapa."
    ],
    "privacidade": "Dados fictícios para fins de prototipação.",
    "rating": 4.2,
    "votos": 128
  },
  {
    "id": "calma",
    "nome": "Calma+",
    "descricao": "Técnicas de respiração guiada e regulação emocional com feedback visual mínimo.",
    "descricaoSimples": "Ajuda a pessoa a se acalmar com respiração guiada.",
    "categorias": [
      "Regulação Emocional",
      "Terapia e Saúde"
    ],
    "idades": [
      "Adolescentes",
      "Adultos",
      "Pais/Terapeutas"
    ],
    "acessibilidade": [
      "Baixo estímulo sensorial",
      "Personalização de cores/sons"
    ],
    "plataformas": [
      "Android",
      "iOS"
    ],
    "preco": "Gratuito",
    "finalidade": "Auxiliar em autorregulação com rotinas guiadas.",
    "exemplosUso": [
      "Usar antes da aula para reduzir ansiedade.",
      "Usar em intervalos ou momentos de sobrecarga.",
      "Apoiar rotina de sono."
    ],
    "privacidade": "Verificar coleta de dados sensíveis em contexto terapêutico.",
    "rating": 4.8,
    "votos": 501
  },
  {
    "id": "socialmix",
    "nome": "SocialMix",
    "descricao": "Treino de habilidades sociais com histórias sociais e simulações de situações do cotidiano.",
    "descricaoSimples": "Ajuda a praticar situações sociais do dia a dia.",
    "categorias": [
      "Habilidades Sociais",
      "Educação"
    ],
    "idades": [
      "Adolescentes",
      "Adultos"
    ],
    "acessibilidade": [
      "Pictogramas",
      "Compatível com leitura de tela"
    ],
    "plataformas": [
      "Web",
      "Android"
    ],
    "preco": "Freemium",
    "finalidade": "Ensinar scripts sociais em contextos do dia a dia.",
    "exemplosUso": [
      "Como pedir ajuda.",
      "Como iniciar uma conversa.",
      "Como lidar com frustrações."
    ],
    "privacidade": "Dados fictícios para fins de prototipação.",
    "rating": 3.9,
    "votos": 77
  },
  {
    "id": "rotina-visual",
    "nome": "Rotina Visual",
    "descricao": "Organizador de rotina com imagens, etapas sequenciais e lembretes configuráveis.",
    "descricaoSimples": "Mostra a rotina em passos com imagens.",
    "categorias": [
      "Educação",
      "Terapia e Saúde"
    ],
    "idades": [
      "Crianças",
      "Adolescentes",
      "Pais/Terapeutas"
    ],
    "acessibilidade": [
      "Pictogramas",
      "Baixo estímulo sensorial",
      "Personalização de cores/sons"
    ],
    "plataformas": [
      "Android",
      "iOS",
      "Web"
    ],
    "preco": "Freemium",
    "finalidade": "Apoiar previsibilidade e organização da rotina.",
    "exemplosUso": [
      "Montar sequência da manhã.",
      "Preparar transições entre atividades.",
      "Acompanhar tarefas escolares."
    ],
    "privacidade": "Verificar se imagens pessoais são armazenadas localmente ou em nuvem.",
    "rating": 4.4,
    "votos": 189
  }
];

const state = {
  route: "home",
  apps: [],
  query: "",
  categories: [],
  ages: [],
  access: [],
  currentAppId: null,
  favorites: new Set(JSON.parse(localStorage.getItem("favorites") || "[]")),
  reviews: JSON.parse(localStorage.getItem("reviews") || "{}"),
  prefs: JSON.parse(localStorage.getItem("prefs") || JSON.stringify({
    focus: false,
    simple: false,
    contrast: false,
    reduceMotion: true
  }))
};

const FILTERS = {
  categories: ["Educação", "Comunicação Alternativa (CAA)", "Habilidades Sociais", "Regulação Emocional", "Terapia e Saúde"],
  ages: ["Crianças", "Adolescentes", "Adultos", "Pais/Terapeutas"],
  access: ["Baixo estímulo sensorial", "Pictogramas", "Personalização de cores/sons", "Compatível com leitura de tela"]
};

const views = {
  home: document.querySelector("#viewHome"),
  buscar: document.querySelector("#viewBuscar"),
  lista: document.querySelector("#viewLista"),
  detalhe: document.querySelector("#viewDetalhe"),
  recomendacoes: document.querySelector("#viewRecomendacoes"),
  guia: document.querySelector("#viewGuia"),
  comunidade: document.querySelector("#viewComunidade"),
  sobre: document.querySelector("#viewSobre")
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  bindNavigation();
  bindSearch();
  bindPreferences();
  bindSuggestionForm();
  renderFilterGroup("categoryFilters", FILTERS.categories, "categories");
  renderFilterGroup("ageFilters", FILTERS.ages, "ages");
  renderFilterGroup("accessFilters", FILTERS.access, "access");
  applyPrefs();

  state.apps = EMBEDDED_APPS;

  renderAll();
  setRoute("home");
}

function bindNavigation() {
  document.body.addEventListener("click", (event) => {
    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget) {
      const route = routeTarget.getAttribute("data-route");
      setRoute(route);
      closeMobileMenu();
    }
  });

  const menuToggle = document.querySelector("#menuToggle");
  const mainNav = document.querySelector("#mainNav");

  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

function bindSearch() {
  document.querySelector("#searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = document.querySelector("#searchInput").value.trim();
    renderList();
    setRoute("lista");
  });

  document.querySelector("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value.trim();
  });

  document.querySelector("#clearFilters").addEventListener("click", () => {
    state.query = "";
    state.categories = [];
    state.ages = [];
    state.access = [];
    document.querySelector("#searchInput").value = "";
    document.querySelectorAll(".checkbox-row input").forEach(input => input.checked = false);
    renderList();
  });
}

function bindPreferences() {
  const modal = document.querySelector("#prefsModal");
  document.querySelector("#openPrefs").addEventListener("click", () => {
    syncPrefInputs();
    modal.classList.remove("hidden");
    document.querySelector("#closePrefs").focus();
  });

  document.querySelector("#closePrefs").addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (event) => { if (event.target === modal) modal.classList.add("hidden"); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") modal.classList.add("hidden"); });

  document.querySelector("#applyPrefs").addEventListener("click", () => {
    state.prefs.focus = document.querySelector("#prefFocus").checked;
    state.prefs.simple = document.querySelector("#prefSimple").checked;
    state.prefs.contrast = document.querySelector("#prefContrast").checked;
    state.prefs.reduceMotion = document.querySelector("#prefMotion").checked;
    savePrefs();
    applyPrefs();
    renderAll();
    modal.classList.add("hidden");
  });
}

function bindSuggestionForm() {
  document.querySelector("#suggestForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#suggestFeedback").classList.remove("hidden");
    event.target.reset();
  });
}

function syncPrefInputs() {
  document.querySelector("#prefFocus").checked = state.prefs.focus;
  document.querySelector("#prefSimple").checked = state.prefs.simple;
  document.querySelector("#prefContrast").checked = state.prefs.contrast;
  document.querySelector("#prefMotion").checked = state.prefs.reduceMotion;
}

function applyPrefs() {
  document.body.classList.toggle("focus-mode", state.prefs.focus);
  document.body.classList.toggle("high-contrast", state.prefs.contrast);
  document.body.classList.toggle("reduce-motion", state.prefs.reduceMotion);
  document.querySelector("#focusBanner").classList.toggle("hidden", !state.prefs.focus);
}

function savePrefs() { localStorage.setItem("prefs", JSON.stringify(state.prefs)); }
function saveFavorites() { localStorage.setItem("favorites", JSON.stringify(Array.from(state.favorites))); }
function saveReviews() { localStorage.setItem("reviews", JSON.stringify(state.reviews)); }

function setRoute(route) {
  if (!views[route]) return;
  state.route = route;
  Object.values(views).forEach(view => view.classList.remove("active"));
  views[route].classList.add("active");
  document.querySelectorAll(".nav-link").forEach(button => button.classList.toggle("active", button.getAttribute("data-route") === route));
  document.querySelector("#conteudo").focus({ preventScroll: true });
  window.scrollTo(0, 0);
  if (route === "lista") renderList();
  if (route === "recomendacoes") renderRecommendations();
  if (route === "detalhe") renderDetail();
}

function closeMobileMenu() {
  const mainNav = document.querySelector("#mainNav");
  const menuToggle = document.querySelector("#menuToggle");
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function renderAll() {
  renderHome();
  renderList();
  renderRecommendations();
  if (state.currentAppId) renderDetail();
}

function renderHome() {
  const container = document.querySelector("#homeHighlights");
  const highlighted = [...state.apps].sort((a, b) => b.rating - a.rating).slice(0, 3);
  container.innerHTML = highlighted.map(app => `
    <article class="app-card">
      <div class="app-card-header"><div><h3>${escapeHtml(app.nome)}</h3>${renderStars(app.rating, app.votos)}</div></div>
      <p>${escapeHtml(getDescription(app))}</p>
      <div class="pill-list">${app.categorias.map(renderPill).join("")}</div>
    </article>
  `).join("");
}

function renderFilterGroup(containerId, items, stateKey) {
  const container = document.querySelector(`#${containerId}`);
  container.innerHTML = items.map(item => `
    <label class="checkbox-row">
      <input type="checkbox" value="${escapeAttr(item)}" data-filter-key="${stateKey}" />
      <span>${escapeHtml(item)}</span>
    </label>
  `).join("");

  container.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", (event) => {
      const key = event.target.dataset.filterKey;
      const value = event.target.value;
      state[key] = event.target.checked ? [...state[key], value] : state[key].filter(item => item !== value);
      renderList();
    });
  });
}

function getFilteredApps() {
  return state.apps.filter(app => {
    const matchesQuery = !state.query ||
      app.nome.toLowerCase().includes(state.query.toLowerCase()) ||
      app.descricao.toLowerCase().includes(state.query.toLowerCase()) ||
      app.finalidade.toLowerCase().includes(state.query.toLowerCase());
    const matchesCategory = state.categories.length === 0 || state.categories.some(category => app.categorias.includes(category));
    const matchesAge = state.ages.length === 0 || state.ages.some(age => app.idades.includes(age));
    const matchesAccess = state.access.length === 0 || state.access.every(access => app.acessibilidade.includes(access));
    return matchesQuery && matchesCategory && matchesAge && matchesAccess;
  });
}

function renderList() {
  const filtered = getFilteredApps();
  document.querySelector("#resultCount").textContent = `${filtered.length} aplicativo(s) encontrado(s).`;
  document.querySelector("#appsGrid").innerHTML = filtered.map(renderAppCard).join("");
  document.querySelectorAll("[data-open-app]").forEach(button => {
    button.addEventListener("click", () => { state.currentAppId = button.dataset.openApp; setRoute("detalhe"); });
  });
  bindFavoriteButtons();
}

function renderRecommendations() {
  const sorted = [...state.apps].sort((a, b) => b.rating - a.rating);
  document.querySelector("#recommendationsGrid").innerHTML = sorted.map(renderAppCard).join("");
  document.querySelectorAll("[data-open-app]").forEach(button => {
    button.addEventListener("click", () => { state.currentAppId = button.dataset.openApp; setRoute("detalhe"); });
  });
  bindFavoriteButtons();
}

function renderAppCard(app) {
  const isFavorite = state.favorites.has(app.id);
  return `
    <article class="app-card">
      <div class="app-card-header">
        <div><h3>${escapeHtml(app.nome)}</h3>${renderStars(app.rating, app.votos)}</div>
        <button class="favorite ${isFavorite ? "active" : ""}" data-favorite="${escapeAttr(app.id)}" aria-label="${isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}">${isFavorite ? "♥" : "♡"}</button>
      </div>
      <p>${escapeHtml(getDescription(app))}</p>
      <div class="pill-list">${app.categorias.map(renderPill).join("")}</div>
      <div class="pill-list">${renderPill("Plataformas: " + app.plataformas.join(", "))}${renderPill(app.preco)}</div>
      <button class="button button-secondary" data-open-app="${escapeAttr(app.id)}">Ver detalhes</button>
    </article>
  `;
}

function bindFavoriteButtons() {
  document.querySelectorAll("[data-favorite]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.favorite;
      if (state.favorites.has(id)) state.favorites.delete(id);
      else state.favorites.add(id);
      saveFavorites();
      renderAll();
    });
  });
}

function renderDetail() {
  const app = state.apps.find(item => item.id === state.currentAppId);
  if (!app) { document.querySelector("#detailContent").innerHTML = `<p>Aplicativo não encontrado.</p>`; return; }
  const isFavorite = state.favorites.has(app.id);
  const appReviews = state.reviews[app.id] || [];

  document.querySelector("#detailContent").innerHTML = `
    <div class="detail-main">
      <section class="detail-card">
        <div class="detail-title-row">
          <div><h1 id="detailTitle">${escapeHtml(app.nome)}</h1><p>${escapeHtml(getDescription(app))}</p>${renderStars(app.rating, app.votos)}</div>
          <button class="favorite ${isFavorite ? "active" : ""}" data-favorite="${escapeAttr(app.id)}" aria-label="${isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}">${isFavorite ? "♥" : "♡"}</button>
        </div>
        <div class="pill-list">${renderPill("Finalidade: " + app.finalidade)}${renderPill("Plataformas: " + app.plataformas.join(", "))}${renderPill("Modelo: " + app.preco)}</div>
      </section>
      <section class="detail-card"><h2>Exemplos de uso</h2><ul>${app.exemplosUso.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
      <section class="detail-card"><h2>Avaliação de Usabilidade Inclusiva</h2>${renderChecklist(app)}</section>
    </div>
    <aside class="detail-side">
      <section class="detail-card"><h2>Informações</h2><p><strong>Público-alvo:</strong> ${escapeHtml(app.idades.join(", "))}</p><p><strong>Privacidade:</strong> ${escapeHtml(app.privacidade)}</p><div class="pill-list">${app.acessibilidade.map(renderPill).join("")}</div></section>
      <section class="detail-card">
        <h2>Avaliar este app</h2>
        <form id="reviewForm" class="review-form">
          <label>Nota</label>
          <div class="stars-input" role="radiogroup" aria-label="Nota de 1 a 5">${[1,2,3,4,5].map(n => `<button type="button" class="star-button" data-star="${n}" aria-label="Dar nota ${n}">★</button>`).join("")}</div>
          <label for="reviewComment">Comentário opcional</label>
          <textarea id="reviewComment" rows="4" placeholder="Conte brevemente sua experiência."></textarea>
          <button type="submit" class="button button-primary">Enviar avaliação</button>
        </form>
        <div class="review-list">${appReviews.map(review => `<div class="review-item"><strong>Nota: ${review.nota}/5</strong>${review.comentario ? `<p>${escapeHtml(review.comentario)}</p>` : ""}</div>`).join("")}</div>
      </section>
    </aside>
  `;
  bindFavoriteButtons();
  bindReviewForm(app.id);
}

function bindReviewForm(appId) {
  let selectedStar = 0;
  document.querySelectorAll(".star-button").forEach(button => {
    button.addEventListener("click", () => {
      selectedStar = Number(button.dataset.star);
      document.querySelectorAll(".star-button").forEach(btn => btn.classList.toggle("active", Number(btn.dataset.star) <= selectedStar));
    });
  });
  document.querySelector("#reviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!selectedStar) { alert("Selecione uma nota de 1 a 5."); return; }
    const comentario = document.querySelector("#reviewComment").value.trim();
    state.reviews[appId] = [{ nota: selectedStar, comentario }, ...(state.reviews[appId] || [])];
    saveReviews();
    renderDetail();
  });
}

function renderChecklist(app) {
  const items = [
    ["Interface simples e previsível", true],
    ["Controle de sons/cores", app.acessibilidade.includes("Personalização de cores/sons")],
    ["Uso de pictogramas", app.acessibilidade.includes("Pictogramas")],
    ["Compatível com leitura de tela", app.acessibilidade.includes("Compatível com leitura de tela")],
    ["Baixo estímulo sensorial", app.acessibilidade.includes("Baixo estímulo sensorial")]
  ];
  return `<ul class="check-list">${items.map(([label, ok]) => `<li><span class="${ok ? "check-ok" : "check-no"}">${ok ? "✓" : "○"}</span> ${escapeHtml(label)}</li>`).join("")}</ul>`;
}

function renderStars(value, votes) {
  const rounded = Math.round(value);
  const stars = Array.from({ length: 5 }, (_, index) => index < rounded ? "★" : "☆").join("");
  return `<div class="rating" aria-label="Avaliação ${value} de 5">${stars}<small>${value.toFixed(1)} (${votes})</small></div>`;
}

function renderPill(text) { return `<span class="pill">${escapeHtml(text)}</span>`; }
function getDescription(app) { return state.prefs.simple ? app.descricaoSimples : app.descricao; }
function escapeHtml(value) { return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"); }
function escapeAttr(value) { return escapeHtml(value); }
