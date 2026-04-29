attachSessionUi("admin");

const heroStats = document.querySelector("#hero-stats");
const adminSummaryGrid = document.querySelector("#admin-summary-grid");
const opsGrid = document.querySelector("#ops-grid");
const queueOverviewGrid = document.querySelector("#queue-overview-grid");
const statusFilters = document.querySelector("#status-filters");
const adminBoardList = document.querySelector("#admin-board-list");
const criteriaList = document.querySelector("#criteria-list");
const priorityList = document.querySelector("#priority-list");
const caseMeta = document.querySelector("#case-meta");
const caseNote = document.querySelector("#case-note");
const caseNextAction = document.querySelector("#case-next-action");
const caseDocuments = document.querySelector("#case-documents");

let allCases = [];
let activeFilter = "all";
let activeCaseId = null;

function renderHeroStats(stats) {
  heroStats.innerHTML = stats
    .map(
      (item) => `
        <article class="stat-card">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </article>
      `,
    )
    .join("");
}

function renderAdminSummary(items) {
  adminSummaryGrid.innerHTML = items
    .map(
      (item) => `
        <article class="card summary-card">
          <p class="eyebrow">Administrace</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
    )
    .join("");
}

function renderOps(items) {
  opsGrid.innerHTML = items
    .map(
      (item) => `
        <article class="card ops-card">
          <p class="eyebrow">Operativa</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
    )
    .join("");
}

function renderQueueOverview() {
  const metrics = [
    {
      label: "K formální kontrole",
      value: allCases.filter((item) => item.status === "check").length,
      tone: "check"
    },
    {
      label: "Vráceno k doplnění",
      value: allCases.filter((item) => item.status === "revision").length,
      tone: "revision"
    },
    {
      label: "Rozpracováno žadateli",
      value: allCases.filter((item) => item.status === "draft").length,
      tone: "draft"
    },
    {
      label: "Připraveno pro komisi",
      value: allCases.filter((item) => item.status === "approved").length,
      tone: "approved"
    }
  ];

  queueOverviewGrid.innerHTML = metrics
    .map(
      (item) => `
        <article class="queue-metric queue-metric-${item.tone}">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </article>
      `,
    )
    .join("");
}

function getFilteredCases() {
  if (activeFilter === "all") {
    return allCases;
  }
  return allCases.filter((item) => item.status === activeFilter);
}

function renderFilters() {
  const filters = [
    { id: "all", label: "Vše", count: allCases.length },
    { id: "draft", label: "Rozpracováno", count: allCases.filter((item) => item.status === "draft").length },
    { id: "check", label: "Kontrola", count: allCases.filter((item) => item.status === "check").length },
    { id: "revision", label: "Vráceno", count: allCases.filter((item) => item.status === "revision").length },
    { id: "approved", label: "Doporučeno", count: allCases.filter((item) => item.status === "approved").length },
  ];

  statusFilters.innerHTML = filters
    .map(
      (filter) => `
        <button class="button filter-button ${filter.id === activeFilter ? "active" : ""}" type="button" data-filter="${filter.id}">
          <span>${escapeHtml(filter.label)}</span>
          <strong>${escapeHtml(filter.count)}</strong>
        </button>
      `,
    )
    .join("");

  statusFilters.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderAdminBoard();
    });
  });
}

function renderAdminBoard() {
  adminBoardList.innerHTML = getFilteredCases()
    .map(
      (item) => `
        <article class="board-card board-card-selectable ${item.id === activeCaseId ? "board-card-active" : ""}" data-case-id="${escapeHtml(item.id)}">
          <div class="application-meta">
            <span class="status-badge ${statusClass(item.status)}">${escapeHtml(item.statusLabel)}</span>
            <span class="meta-pill">${escapeHtml(item.applicant)}</span>
          </div>
          <h4>${escapeHtml(item.project)}</h4>
          <p>${escapeHtml(item.note)}</p>
          <div class="application-meta">
            <span class="meta-pill">Program: ${escapeHtml(item.program)}</span>
            <span class="meta-pill">Riziko: ${escapeHtml(item.riskLabel)}</span>
          </div>
        </article>
      `,
    )
    .join("");

  adminBoardList.querySelectorAll("[data-case-id]").forEach((card) => {
    card.addEventListener("click", () => {
      activeCaseId = card.dataset.caseId;
      renderAdminBoard();
      renderCaseDetail();
    });
  });
}

function renderCriteria(items) {
  criteriaList.innerHTML = items
    .map(
      (item) => `
        <article class="criteria-card">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `,
    )
    .join("");
}

function renderPriorities(items) {
  priorityList.innerHTML = items
    .map(
      (item) => `
        <article class="board-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(item.level)}">${escapeHtml(item.label)}</span>
          </div>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `,
    )
    .join("");
}

function renderCaseDetail() {
  const activeCase = allCases.find((item) => item.id === activeCaseId) || allCases[0];
  if (!activeCase) {
    return;
  }

  caseMeta.innerHTML = `
    <div class="detail-item">
      <strong>Projekt</strong>
      <span>${escapeHtml(activeCase.project)}</span>
    </div>
    <div class="detail-item">
      <strong>Žadatel</strong>
      <span>${escapeHtml(activeCase.applicant)}</span>
    </div>
    <div class="detail-item">
      <strong>Program</strong>
      <span>${escapeHtml(activeCase.program)}</span>
    </div>
    <div class="detail-item">
      <strong>Stav</strong>
      <span>${escapeHtml(activeCase.statusLabel)}</span>
    </div>
    <div class="detail-item">
      <strong>Riziko</strong>
      <span>${escapeHtml(activeCase.riskLabel)}</span>
    </div>
    <div class="detail-item">
      <strong>Poslední aktualizace</strong>
      <span>${escapeHtml(activeCase.lastUpdate)}</span>
    </div>
  `;

  caseNote.textContent = activeCase.note;
  caseNextAction.textContent = activeCase.nextAction;

  caseDocuments.innerHTML = activeCase.documents
    .map(
      (doc) => `
        <article class="attachment-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(doc.status)}">${escapeHtml(doc.labelStatus)}</span>
          </div>
          <h4>${escapeHtml(doc.label)}</h4>
          <p>${escapeHtml(doc.note)}</p>
        </article>
      `,
    )
    .join("");
}

loadGrantData().then((data) => {
  allCases = data.adminCases;
  activeCaseId = allCases[0]?.id ?? null;
  renderHeroStats(data.heroStatsAdmin);
  renderAdminSummary(data.adminSummary);
  renderOps(data.adminOperations);
  renderQueueOverview();
  renderFilters();
  renderAdminBoard();
  renderCaseDetail();
  renderCriteria(data.evaluationCriteria);
  renderPriorities(data.priorities);
}).catch((error) => {
  console.error(error);
});
