const data = {
  heroStats: [
    { label: "Aktivní programy", value: "3" },
    { label: "Rozpracované žádosti", value: "18" },
    { label: "K hodnocení", value: "7" },
    { label: "Schváleno", value: "12" },
  ],
  programs: [
    {
      title: "Kreativní sousedství",
      deadline: "31. 5. 2026",
      support: "do 180 000 Kč",
      audience: "Spolky, školy, komunitní týmy",
      summary:
        "Menší lokální projekty zaměřené na oživení veřejného prostoru, kulturní program a sousedské akce.",
    },
    {
      title: "Mládež tvoří Karvinou",
      deadline: "14. 6. 2026",
      support: "do 90 000 Kč",
      audience: "Studentské skupiny a neformální iniciativy",
      summary:
        "Podpora studentských a mládežnických nápadů s rychlým schvalovacím procesem a menší administrativní zátěží.",
    },
    {
      title: "Kulturní piloty 2026",
      deadline: "30. 6. 2026",
      support: "do 350 000 Kč",
      audience: "Kulturní organizace a partneři města",
      summary:
        "Program pro odvážnější projekty s regionálním dosahem, testování nových formátů a spolupráci více subjektů.",
    },
  ],
  timeline: [
    {
      title: "Výběr programu",
      description:
        "Žadatel si porovná podmínky programů, výši podpory a termíny uzávěrky.",
    },
    {
      title: "Vyplnění žádosti",
      description:
        "Doplní základní informace o projektu, rozpočet, kontaktní osobu a stručný přínos pro město.",
    },
    {
      title: "Kontrola příloh",
      description:
        "Systém před odesláním zkontroluje rozpočet, čestné prohlášení a případné přílohy.",
    },
    {
      title: "Administrativní ověření",
      description:
        "Referent zkontroluje formální náležitosti a případně vrátí žádost k doplnění.",
    },
    {
      title: "Hodnocení a rozhodnutí",
      description:
        "Komise přiřadí skóre, doporučí výši podpory a žadatel obdrží výsledek v portálu.",
    },
  ],
  checklist: [
    "Projekt má jasný přínos pro obyvatele Karviné.",
    "Rozpočet obsahuje zdroje spolufinancování.",
    "Jsou doplněny kontaktní údaje odpovědné osoby.",
    "Jsou připraveny povinné přílohy a čestné prohlášení.",
    "Termín realizace odpovídá podmínkám programu.",
  ],
  applications: [
    {
      project: "Kreativní dvorek na Fryštátě",
      program: "Kreativní sousedství",
      status: "approved",
      statusLabel: "Schváleno",
      nextStep: "Připravit smlouvu a vyúčtování do 15. 12. 2026",
    },
    {
      project: "Studentský makerspace víkend",
      program: "Mládež tvoří Karvinou",
      status: "check",
      statusLabel: "Kontrola",
      nextStep: "Doplnit položkový rozpočet do 5 dnů",
    },
    {
      project: "Hudba mezi domy",
      program: "Kulturní piloty 2026",
      status: "revision",
      statusLabel: "Vráceno k úpravě",
      nextStep: "Upřesnit technické zajištění akce",
    },
  ],
  adminCases: [
    {
      project: "Studentský makerspace víkend",
      applicant: "Gymnázium Karviná",
      status: "check",
      statusLabel: "Čeká na kontrolu",
      note: "Chybí detailní rozpis honorářů a potvrzení o partnerství.",
    },
    {
      project: "Kreativní dvorek na Fryštátě",
      applicant: "Spolek Na Dvorku",
      status: "approved",
      statusLabel: "Doporučeno ke schválení",
      note: "Formální kontrola v pořádku, komise navrhla plnou podporu.",
    },
    {
      project: "Hudba mezi domy",
      applicant: "Kulturní stanice 34",
      status: "revision",
      statusLabel: "Vráceno k doplnění",
      note: "Je potřeba doplnit povolení k využití prostoru a harmonogram.",
    },
    {
      project: "Karviná design walk",
      applicant: "Místní iniciativa Kruh",
      status: "draft",
      statusLabel: "Rozpracováno",
      note: "Žadatel zatím nedokončil průvodní text a termíny realizace.",
    },
  ],
};

const heroStats = document.querySelector("#hero-stats");
const programGrid = document.querySelector("#program-grid");
const timeline = document.querySelector("#timeline");
const checklist = document.querySelector("#checklist");
const checklistToggle = document.querySelector("#checklist-toggle");
const applicationForm = document.querySelector("#application-form");
const formFeedback = document.querySelector("#form-feedback");
const applicationsTable = document.querySelector("#applications-table");
const adminBoardList = document.querySelector("#admin-board-list");
const statusFilters = document.querySelector("#status-filters");

let activeFilter = "all";

function renderHeroStats() {
  heroStats.innerHTML = data.heroStats
    .map(
      (item) => `
        <article class="stat-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `,
    )
    .join("");
}

function renderPrograms() {
  programGrid.innerHTML = data.programs
    .map(
      (program) => `
        <article class="card program-card">
          <div>
            <p class="eyebrow">Program</p>
            <h3>${program.title}</h3>
          </div>
          <p>${program.summary}</p>
          <div class="meta-row">
            <span class="meta-pill">Uzávěrka: ${program.deadline}</span>
            <span class="meta-pill">Podpora: ${program.support}</span>
          </div>
          <p><strong>Pro koho:</strong> ${program.audience}</p>
        </article>
      `,
    )
    .join("");
}

function renderTimeline() {
  timeline.innerHTML = `
    <div class="card-head">
      <div>
        <p class="eyebrow">Workflow</p>
        <h3>Životní cyklus žádosti</h3>
      </div>
    </div>
    ${data.timeline
      .map(
        (step) => `
          <div class="timeline-step">
            <h3>${step.title}</h3>
            <p>${step.description}</p>
          </div>
        `,
      )
      .join("")}
  `;
}

function renderChecklist() {
  checklist.innerHTML = data.checklist
    .map(
      (item, index) => `
        <label class="check-item" data-check-item>
          <input type="checkbox" data-check-index="${index}" />
          <span>${item}</span>
        </label>
      `,
    )
    .join("");

  checklist.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const wrapper = input.closest("[data-check-item]");
      wrapper.classList.toggle("done", input.checked);
    });
  });
}

function renderApplications() {
  applicationsTable.innerHTML = data.applications
    .map(
      (app) => `
        <tr>
          <td>${app.project}</td>
          <td>${app.program}</td>
          <td><span class="status-badge status-${app.status}">${app.statusLabel}</span></td>
          <td>${app.nextStep}</td>
        </tr>
      `,
    )
    .join("");
}

function getFilteredCases() {
  if (activeFilter === "all") {
    return data.adminCases;
  }

  return data.adminCases.filter((item) => item.status === activeFilter);
}

function renderFilters() {
  const filterDefs = [
    { id: "all", label: "Vše", count: data.adminCases.length },
    { id: "draft", label: "Rozpracováno", count: data.adminCases.filter((item) => item.status === "draft").length },
    { id: "check", label: "Kontrola", count: data.adminCases.filter((item) => item.status === "check").length },
    { id: "revision", label: "Vráceno", count: data.adminCases.filter((item) => item.status === "revision").length },
    { id: "approved", label: "Doporučeno", count: data.adminCases.filter((item) => item.status === "approved").length },
  ];

  statusFilters.innerHTML = filterDefs
    .map(
      (filter) => `
        <button class="button filter-button ${filter.id === activeFilter ? "active" : ""}" type="button" data-filter="${filter.id}">
          <span>${filter.label}</span>
          <strong>${filter.count}</strong>
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
  const cases = getFilteredCases();

  adminBoardList.innerHTML = cases
    .map(
      (item) => `
        <article class="board-card">
          <div class="application-meta">
            <span class="status-badge status-${item.status}">${item.statusLabel}</span>
            <span class="meta-pill">${item.applicant}</span>
          </div>
          <h4>${item.project}</h4>
          <p>${item.note}</p>
          <div class="board-footer">
            <span class="eyebrow">Další krok</span>
            <strong>${item.status === "approved" ? "Předat komisi" : "Zkontrolovat detail"}</strong>
          </div>
        </article>
      `,
    )
    .join("");
}

function bindEvents() {
  checklistToggle.addEventListener("click", () => {
    const inputs = [...checklist.querySelectorAll("input")];
    const shouldCheck = inputs.some((input) => !input.checked);

    inputs.forEach((input) => {
      input.checked = shouldCheck;
      input.closest("[data-check-item]").classList.toggle("done", shouldCheck);
    });
  });

  applicationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(applicationForm);
    const projectName = formData.get("projectName") || "Nový projekt";

    formFeedback.textContent =
      `Ukázka odeslána: „${projectName}“. V produkční verzi by zde následovalo uložení do systému a potvrzení e-mailem.`;
  });
}

function init() {
  renderHeroStats();
  renderPrograms();
  renderTimeline();
  renderChecklist();
  renderApplications();
  renderFilters();
  renderAdminBoard();
  bindEvents();
}

init();
