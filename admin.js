attachSessionUi("admin");

const heroStats = document.querySelector("#hero-stats");
const adminSummaryGrid = document.querySelector("#admin-summary-grid");
const statusFilters = document.querySelector("#status-filters");
const adminBoardList = document.querySelector("#admin-board-list");
const criteriaList = document.querySelector("#criteria-list");
const priorityList = document.querySelector("#priority-list");

let allCases = [];
let activeFilter = "all";

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
        <article class="board-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(item.status)}">${escapeHtml(item.statusLabel)}</span>
            <span class="meta-pill">${escapeHtml(item.applicant)}</span>
          </div>
          <h4>${escapeHtml(item.project)}</h4>
          <p>${escapeHtml(item.note)}</p>
        </article>
      `,
    )
    .join("");
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

loadGrantData().then((data) => {
  allCases = data.adminCases;
  renderHeroStats(data.heroStatsAdmin);
  renderAdminSummary(data.adminSummary);
  renderFilters();
  renderAdminBoard();
  renderCriteria(data.evaluationCriteria);
  renderPriorities(data.priorities);
}).catch((error) => {
  console.error(error);
});
