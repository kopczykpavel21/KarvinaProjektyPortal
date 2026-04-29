const data = {
  heroStats: [
    { label: "Aktivní programy", value: "3" },
    { label: "Rozpracované žádosti", value: "18" },
    { label: "K hodnocení", value: "7" },
    { label: "Schváleno", value: "12" },
  ],
  programs: [
    {
      title: "Voucher pro začínající podnikatele",
      deadline: "31. 5. 2026",
      support: "do 120 000 Kč",
      audience: "Začínající podnikatelé a nové malé firmy",
      summary:
        "Program zaměřený na rozjezd podnikání, první služby, marketing, vybavení a odborné poradenství pro nové podnikatelské záměry v Karviné.",
    },
    {
      title: "Kreativní business",
      deadline: "14. 6. 2026",
      support: "do 250 000 Kč",
      audience: "Kreativci, studia, kulturní a designové projekty",
      summary:
        "Podpora kreativních a kulturně-podnikatelských projektů s důrazem na lokální dopad, inovaci služeb a oživení městského prostředí.",
    },
    {
      title: "Podpora sportovních aktivit",
      deadline: "30. 6. 2026",
      support: "do 180 000 Kč",
      audience: "Sportovní kluby, oddíly a volnočasové organizace",
      summary:
        "Program pro pravidelnou sportovní činnost, turnaje, nábor mládeže, komunitní akce a menší vybavení spojené se sportovními aktivitami.",
    },
  ],
  timeline: [
    {
      title: "Výběr programu",
      description:
        "Žadatel si porovná podmínky programů Voucher pro začínající podnikatele, Kreativní business a Podpora sportovních aktivit.",
    },
    {
      title: "Vyplnění žádosti",
      description:
        "Doplní základní informace o projektu, rozpočet, kontaktní osobu a stručný přínos pro město Karviná nebo cílovou skupinu.",
    },
    {
      title: "Kontrola příloh",
      description:
        "Systém před odesláním zkontroluje rozpočet, čestné prohlášení, popis projektu a případné povinné přílohy podle konkrétního programu.",
    },
    {
      title: "Administrativní ověření",
      description:
        "Referent zkontroluje formální náležitosti a v případě potřeby vrátí žádost k doplnění nebo opravě.",
    },
    {
      title: "Hodnocení a rozhodnutí",
      description:
        "Komise nebo odpovědný odbor přiřadí hodnocení, doporučí výši podpory a žadatel obdrží výsledek v portálu.",
    },
  ],
  checklist: [
    "Projekt odpovídá vybranému programu a jeho pravidlům.",
    "Rozpočet obsahuje způsobilé výdaje a zdroje spolufinancování.",
    "Jsou doplněny kontaktní údaje odpovědné osoby nebo organizace.",
    "Jsou připraveny povinné přílohy a čestná prohlášení.",
    "Termín realizace odpovídá podmínkám výzvy.",
  ],
  applications: [
    {
      project: "Start voucher pro lokální grafické studio",
      program: "Voucher pro začínající podnikatele",
      status: "approved",
      statusLabel: "Schváleno",
      nextStep: "Připravit smlouvu a vyúčtování do 15. 12. 2026",
    },
    {
      project: "Městská kreativní dílna",
      program: "Kreativní business",
      status: "check",
      statusLabel: "Kontrola",
      nextStep: "Doplnit položkový rozpočet a plán propagace do 5 dnů",
    },
    {
      project: "Letní sportovní příměstský kemp",
      program: "Podpora sportovních aktivit",
      status: "revision",
      statusLabel: "Vráceno k úpravě",
      nextStep: "Upřesnit personální zajištění a harmonogram aktivit",
    },
  ],
  adminCases: [
    {
      project: "Městská kreativní dílna",
      applicant: "Ateliér Karviná Lab",
      status: "check",
      statusLabel: "Čeká na kontrolu",
      note: "Chybí detailní rozpis služeb, honorářů a potvrzení o spolupráci s partnery.",
    },
    {
      project: "Start voucher pro lokální grafické studio",
      applicant: "Studio Start Karviná",
      status: "approved",
      statusLabel: "Doporučeno ke schválení",
      note: "Formální kontrola v pořádku, projekt splňuje podmínky programu pro začínající podnikatele.",
    },
    {
      project: "Letní sportovní příměstský kemp",
      applicant: "Sport klub Mládež Karviná",
      status: "revision",
      statusLabel: "Vráceno k doplnění",
      note: "Je potřeba doplnit kapacity trenérů, bezpečnostní zajištění a časový plán kempu.",
    },
    {
      project: "Podnikatelský voucher pro řemeslný provoz",
      applicant: "Nová dílna Fryštát",
      status: "draft",
      statusLabel: "Rozpracováno",
      note: "Žadatel zatím nedokončil průvodní text, finanční plán a rozpis počátečních nákladů.",
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
