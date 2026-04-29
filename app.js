const syncDate = "2026-04-29";

const data = {
  sources: [
    {
      title: "Granty a dotace",
      url: "https://www.karvina.cz/magistrat/granty-dotace",
      description:
        "Rozcestník města Karviná s odkazy na vyhlášené dotační tituly, sociální dotace a Fond primátora.",
    },
    {
      title: "Poskytované městem",
      url: "https://www.karvina.cz/magistrat/poskytovane-mestem",
      description:
        "Přehled grantů, dotací a finančních podpor poskytovaných městem občanům, spolkům i firmám.",
    },
  ],
  heroStats: [
    { label: "Katalogované položky", value: "11" },
    { label: "Vybrané aktivní nebo průběžné cesty", value: "5" },
    { label: "Oficiální zdroje", value: "2" },
    { label: "Ukázkový projekt", value: "1" },
  ],
  applicantSummary: [
    {
      title: "Najít vhodný program",
      text: "Žadatel si podle typu projektu vybere vhodný grant, otevře oficiální článek a zkontroluje podmínky programu.",
    },
    {
      title: "Zkontrolovat přílohy",
      text: "U každého programu je samostatný checklist povinných příloh, který může žadatel použít před podáním.",
    },
    {
      title: "Sledovat vlastní projekt",
      text: "Projektový workspace ukazuje termíny, notifikace a stav dokumentů pro konkrétní žádost.",
    },
  ],
  programs: [
    {
      id: "voucher-vii",
      title: "Voucher pro začínající podnikatele v Karviné VII",
      status: "open",
      statusLabel: "Otevírá se",
      type: "Programová dotace",
      summary:
        "Podpora začínajících a nově vzniklých podnikatelských subjektů a provozoven na území statutárního města Karviné.",
      window: "4. 5. 2026 až 22. 5. 2026",
      amount: "max. 50 000 Kč na projekt",
      audience: "Začínající a nově vzniklé podnikatelské subjekty a provozovny v Karviné",
      admin: "Odbor školství a rozvoje",
      contact: "Ing. Klára Stáňová, 596 387 646, klara.stanova@karvina.cz",
      notes:
        "Vyhlášeno usnesením Rady města Karviné č. 2819 ze dne 25. 3. 2026.",
      docs: [
        "Podmínky dotačního programu",
        "Příloha č. 1a Žádost pro FOP",
        "Příloha č. 1b Žádost pro PO",
        "Příloha č. 2 Vzor smlouvy o poskytnutí dotace",
        "Příloha č. 3 Čestné prohlášení",
        "Příloha č. 4 Formulář finanční vypořádání dotace a změna",
        "Příloha č. 5 Kritéria věcného hodnocení",
      ],
      links: [
        { label: "Oficiální článek", url: "https://www.karvina.cz/magistrat/voucher-pro-zacinajici-podnikatele-v-karvine-vii" },
        { label: "Přehled Poskytované městem", url: "https://www.karvina.cz/magistrat/poskytovane-mestem" },
      ],
    },
    {
      id: "sport-2026",
      title: "Podpora tělovýchovných a sportovních aktivit pro rok 2026",
      status: "closed",
      statusLabel: "Uzavřeno",
      type: "Programová dotace",
      summary:
        "Dotační program města Karviné pro sportovní činnost, kluby a organizace v roce 2026.",
      window: "24. 11. 2025 až 28. 11. 2025",
      amount: "dle programu a rozpočtu projektu",
      audience: "Sportovní kluby, oddíly a další oprávněné subjekty",
      admin: "Odbor školství a rozvoje",
      contact: "Marcela Hübnerová, 596 387 484, marcela.hubnerova@karvina.cz",
      notes:
        "Vyhlášeno usnesením Rady města Karviné č. 2498 ze dne 22. 10. 2025.",
      docs: [
        "Dotační program na podporu SPORTU 2026.pdf",
        "Příloha č. 1 Žádost o poskytnutí dotace z rozpočtu statutárního města Karviné 2026.docx",
        "Příloha č. 2 Rozpočet projektu.xls",
        "Příloha č. 3 Smlouva o poskytnutí dotace - vzor.pdf",
        "Příloha č. 4 Finanční vypořádání dotace.xlsx",
        "Příloha č. 5 Čestné prohlášení žadatele o podporu v režimu de minimis.doc",
      ],
      links: [
        { label: "Oficiální článek", url: "https://www.karvina.cz/magistrat/podpora-telovychovnych-a-sportovnich-aktivit-pro-rok-2025-1" },
        { label: "Přehled Poskytované městem", url: "https://www.karvina.cz/magistrat/poskytovane-mestem" },
      ],
    },
    {
      id: "kreativni-business-2025",
      title: "Kreativní business – podpora iniciativ mládeže 2025",
      status: "closed",
      statusLabel: "Archiv 2025",
      type: "Programová dotace",
      summary:
        "Mikroprojekty neformálních skupin mládeže se zaměřením na neformální vzdělávání, aktivní občanství a veřejný život města.",
      window: "1. 6. 2025 až 15. 9. 2025",
      amount: "5 000 Kč až 30 000 Kč na projekt",
      audience: "Neformální skupiny mládeže, obyvatelé Karviné ve věku 13 až 30 let",
      admin: "Odbor školství a rozvoje",
      contact: "Ing. Klára Stáňová, 596 387 646, klara.stanova@karvina.cz",
      notes:
        "Žádosti do 31. 7. 2025 byly hodnoceny v 1. kole, do 15. 9. 2025 ve 2. kole.",
      docs: [
        "Podmínky dotačního programu",
        "Formulář Žádosti o poskytnutí dotace",
        "Žádost o poskytnutí dotace – příloha a rozpočet",
        "Vzor Smlouvy o poskytnutí dotace",
        "Formulář Finanční vypořádání poskytnuté dotace",
      ],
      links: [
        { label: "Oficiální článek", url: "https://www.karvina.cz/magistrat/dotacni-program-kreativni-business-podpora-inciativ-mladeze" },
        { label: "Přehled Poskytované městem", url: "https://www.karvina.cz/magistrat/poskytovane-mestem" },
      ],
    },
    {
      id: "disabled-spolky-2026",
      title: "Podpora činnosti spolků zaměřených na podporu osob se zdravotním postižením nebo zdravotním omezením pro rok 2026",
      status: "closed",
      statusLabel: "Uzavřeno",
      type: "Programová dotace",
      summary:
        "Program pro celoroční činnost, konkrétní akce a rekondiční či edukační pobyty spolků zaměřených na podporu osob se zdravotním postižením nebo zdravotním omezením.",
      window: "2. 1. 2026 až 31. 1. 2026",
      amount: "dle jednotlivých titulů programu",
      audience: "Spolky zaměřené na podporu osob se zdravotním postižením nebo zdravotním omezením",
      admin: "Odbor sociální",
      contact: "Pavlína Fiedorová, 596 387 398 nebo Bc. Andrea Wiechecová, 596 387 248",
      notes:
        "Program má tři tituly: celoroční činnost a materiální vybavení, konkrétní akce, rekondiční nebo edukační pobyt.",
      docs: [
        "Žádost o programovou dotaci 2026",
        "Rozpočet projektu",
        "Zásady pro poskytování dotací",
        "Finanční vypořádání dotace pro rok 2026",
        "Podmínky dotačního programu 2026",
      ],
      links: [
        { label: "Podmínky programu", url: "https://www.karvina.cz/magistrat/podminky-dotacniho-programu-podpora-cinnosti-spolku-3" },
        { label: "Rozcestník Granty a dotace", url: "https://www.karvina.cz/magistrat/granty-dotace" },
      ],
    },
    {
      id: "social-individual",
      title: "Žádost o dotaci z rozpočtu statutárního města Karviné (sociální oblast)",
      status: "ongoing",
      statusLabel: "Průběžně",
      type: "Individuální dotace",
      summary:
        "Dotace pro registrované sociální služby a návazné služby nejsou programové, ale jdou cestou individuálních žádostí.",
      window: "Průběžně podle potřeby / podáním individuální žádosti",
      amount: "individuální posouzení",
      audience: "Fyzické a právnické osoby v sociální oblasti, registrované a návazné služby",
      admin: "Odbor sociální, oddělení sociálního plánování a podpory",
      contact: "Pavlína Fiedorová, Odbor sociální",
      notes:
        "Podání elektronicky na epodatelna@karvina.cz nebo datovou schránkou es5bv8q, případně osobně či poštou.",
      docs: [
        "Žádost o dotaci registrované sociální služby 2026",
        "Žádost o dotaci návazné služby 2026",
        "Rozpočet projektu",
        "Čestné prohlášení k podpoře de minimis",
        "Finanční vypořádání dotace",
        "Přehled o úhradách plateb čerpané dotace",
        "Zásady pro poskytování dotací",
      ],
      links: [
        { label: "Oficiální stránka sociální dotace", url: "https://www.karvina.cz/magistrat/zadost-o-dotaci-z-rozpoctu-smk" },
        { label: "Rozcestník Granty a dotace", url: "https://www.karvina.cz/magistrat/granty-dotace" },
      ],
    },
    {
      id: "fond-primatora",
      title: "Individuální dotace z rozpočtu statutárního města Karviné / Fond primátora",
      status: "ongoing",
      statusLabel: "Průběžně",
      type: "Individuální dotace",
      summary:
        "Pokud žádost nespadá do vyhlášeného dotačního programu, je možné požádat o individuální dotaci z rozpočtu města – Fond primátora.",
      window: "Průběžně podle individuální žádosti",
      amount: "individuální posouzení",
      audience: "Fyzické a právnické osoby v oblasti sportu, kultury, školství, volného času, sociální oblasti a dalších",
      admin: "Odbor školství a rozvoje",
      contact: "Marcela Hübnerová, 596 387 484, marcela.hubnerova@karvina.cz; Ing. Renáta Kytková, 596 387 745, renata.kytkova@karvina.cz",
      notes:
        "Formuláře pro individuální žádost jsou dostupné elektronicky ke stažení na oficiální stránce města.",
      docs: [
        "Formulář Individuální žádost o dotaci FO 2026",
        "Formulář Individuální žádost o dotaci PO a FOP 2026",
        "Rozpočet projektu 2026",
        "Vzorová smlouva o poskytnutí dotace č. 1",
        "Vzorová smlouva o poskytnutí dotace č. 2 (FO)",
      ],
      links: [
        { label: "Fond primátora", url: "https://www.karvina.cz/magistrat/poskytovani-dotaci-a-grantu-z-rozpoctu-statutarniho-mesta" },
        { label: "Individuální dotace", url: "https://www.karvina.cz/magistrat/individualni-dotace-z-rozpoctu-statutarniho-mesta-karvine" },
      ],
    },
  ],
  project: {
    title: "ReUse pro Lidi",
    status: "check",
    statusLabel: "Ukázkový projekt",
    program: "Kreativní business – podpora iniciativ mládeže 2025",
    owner: "Neformální tým ReUse pro Lidi",
    amount: "28 000 Kč",
    nextDeadline: "Finanční vypořádání a závěrečná zpráva",
    nextDeadlineDate: "2025-12-15",
    summary:
      "Pilotní ukázka toho, jak může portál vést menší lokální projekt od žádosti přes schválení až po závěrečné vyúčtování a kontrolu příloh.",
    alerts: [
      {
        level: "check",
        title: "Chybí rozpočet ve formátu programu",
        description:
          "Portál by upozornil, že je nahraný obecný rozpočet, ale ne programová příloha „Žádost – příloha a rozpočet“.",
      },
      {
        level: "revision",
        title: "Blíží se termín finančního vypořádání",
        description:
          "Systém může automaticky připomenout závěrečné finanční vypořádání a finální zprávu před uzávěrkou projektu.",
      },
      {
        level: "approved",
        title: "Formulář žádosti byl v pořádku",
        description:
          "Po podání by administrátor viděl, že základní žádost prošla formální kontrolou bez vrácení.",
      },
    ],
    milestones: [
      {
        title: "Podání žádosti",
        description: "Žádost byla vytvořena v programu Kreativní business – podpora iniciativ mládeže 2025.",
      },
      {
        title: "Kontrola příloh",
        description: "Portál zkontroloval formulář žádosti, přílohu s rozpočtem a vzorové vyúčtování.",
      },
      {
        title: "Hodnocení v 1. kole",
        description: "Projekt spadá mezi menší mikroprojekty a byl připraven pro rychlé hodnocení.",
      },
      {
        title: "Realizace aktivit",
        description: "Projekt přešel do realizační fáze a portal sleduje termíny, rozpočet a výstupy.",
      },
      {
        title: "Závěrečné vypořádání",
        description: "Na konci portal ověří finanční vypořádání, závěrečnou zprávu a přiložené doklady.",
      },
    ],
    attachments: [
      { label: "Formulář žádosti", status: "done", note: "Nahráno a validováno." },
      { label: "Žádost – příloha a rozpočet", status: "missing", note: "Chybí oficiální programová příloha." },
      { label: "Vzor smlouvy / schválená smlouva", status: "done", note: "Uložena jako referenční dokument." },
      { label: "Finanční vypořádání dotace", status: "pending", note: "Bude vyžadováno při uzavření projektu." },
      { label: "Závěrečná zpráva", status: "pending", note: "Zatím není přiložena." },
    ],
  },
  catalog: [
    {
      title: "Voucher pro začínající podnikatele v Karviné VII",
      type: "Program",
      date: "30. 3. 2026",
      url: "https://www.karvina.cz/magistrat/voucher-pro-zacinajici-podnikatele-v-karvine-vii",
    },
    {
      title: "Podpora tělovýchovných a sportovních aktivit pro rok 2026",
      type: "Program",
      date: "24. 10. 2025",
      url: "https://www.karvina.cz/magistrat/podpora-telovychovnych-a-sportovnich-aktivit-pro-rok-2025-1",
    },
    {
      title: "Voucher pro začínající podnikatele v Karviné VI",
      type: "Archiv programu",
      date: "27. 6. 2025",
      url: "https://www.karvina.cz/magistrat/poskytovane-mestem",
    },
    {
      title: "Kreativní business – podpora inciativ mládeže 2025",
      type: "Program",
      date: "23. 4. 2025",
      url: "https://www.karvina.cz/magistrat/dotacni-program-kreativni-business-podpora-inciativ-mladeze",
    },
    {
      title: "Voucher pro začínající podnikatele v Karviné V",
      type: "Archiv programu",
      date: "4. 4. 2025",
      url: "https://www.karvina.cz/magistrat/poskytovane-mestem",
    },
    {
      title: "Individuální dotace z rozpočtu statutárního města Karviné",
      type: "Individuální dotace",
      date: "28. 1. 2025",
      url: "https://www.karvina.cz/magistrat/individualni-dotace-z-rozpoctu-statutarniho-mesta-karvine",
    },
    {
      title: "Podpora tělovýchovných a sportovních aktivit pro rok 2025",
      type: "Archiv programu",
      date: "14. 11. 2024",
      url: "https://www.karvina.cz/magistrat/poskytovane-mestem",
    },
    {
      title: "Voucher pro začínající podnikatele v Karviné IV",
      type: "Archiv programu",
      date: "26. 8. 2024",
      url: "https://www.karvina.cz/magistrat/poskytovane-mestem",
    },
    {
      title: "Kreativní business – podpora iniciativ mládeže 2024",
      type: "Archiv programu",
      date: "2. 7. 2024",
      url: "https://www.karvina.cz/magistrat/poskytovane-mestem",
    },
    {
      title: "Podpora činnosti spolků zaměřených na podporu osob se zdravotním postižením nebo zdravotním omezením pro rok 2026",
      type: "Program",
      date: "2. 1. 2026 až 31. 1. 2026",
      url: "https://www.karvina.cz/magistrat/podminky-dotacniho-programu-podpora-cinnosti-spolku-3",
    },
    {
      title: "Dotace pro registrované sociální služby a návazné služby",
      type: "Individuální dotace",
      date: "průběžně",
      url: "https://www.karvina.cz/magistrat/zadost-o-dotaci-z-rozpoctu-smk",
    },
  ],
  adminCases: [
    {
      project: "ReUse pro Lidi",
      applicant: "Neformální tým ReUse pro Lidi",
      status: "check",
      statusLabel: "Kontrola příloh",
      note: "Chybí programová příloha s rozpočtem a bude potřeba závěrečné finanční vypořádání.",
    },
    {
      project: "Start voucher pro kavárenský provoz",
      applicant: "Nový podnik Karviná",
      status: "draft",
      statusLabel: "Rozpracováno",
      note: "Žadatel vyplnil základní formulář, ale ještě nepřiložil čestné prohlášení a vypořádání.",
    },
    {
      project: "Sportovní den mládeže 2026",
      applicant: "TJ Mládež Karviná",
      status: "approved",
      statusLabel: "Doporučeno",
      note: "Žádost je formálně v pořádku a obsahuje rozpočet i přílohy programu sport 2026.",
    },
    {
      project: "Sociální podpora terénní služby",
      applicant: "Návazná služba Karviná",
      status: "revision",
      statusLabel: "Vráceno k doplnění",
      note: "Je třeba doplnit přehled úhrad plateb a čestné prohlášení de minimis.",
    },
  ],
  adminSummary: [
    {
      title: "Formální kontrola",
      text: "Administrátor vidí, které žádosti mají chybějící povinné dokumenty, rozpočty nebo čestná prohlášení.",
    },
    {
      title: "Hodnoticí pohled",
      text: "Hodnotitelé mají oddělený přehled žádostí připravených pro věcné hodnocení a orientační kritéria.",
    },
    {
      title: "Prioritizace práce",
      text: "Interní část umí zvýraznit žádosti s blížící se uzávěrkou, vrácené žádosti i projekty bez vypořádání.",
    },
  ],
  evaluationCriteria: [
    {
      title: "Soulad s programem",
      description: "Projekt odpovídá účelu programu, cílové skupině a pravidlům dané výzvy.",
    },
    {
      title: "Kvalita rozpočtu",
      description: "Rozpočet je přiměřený, čitelný a obsahuje způsobilé výdaje i případné spolufinancování.",
    },
    {
      title: "Přínos pro Karvinou",
      description: "Projekt má jasný místní dopad, přínos pro obyvatele nebo konkrétní komunitu ve městě.",
    },
    {
      title: "Realizovatelnost",
      description: "Žadatel má realistický harmonogram, kapacity a základní organizační nebo partnerské zajištění.",
    },
  ],
  priorities: [
    {
      level: "revision",
      title: "ReUse pro Lidi",
      description: "Doplnit programovou přílohu s rozpočtem před uzavřením projektového spisu.",
    },
    {
      level: "check",
      title: "Sociální podpora terénní služby",
      description: "Zkontrolovat přehled úhrad plateb a čestné prohlášení de minimis.",
    },
    {
      level: "approved",
      title: "Sportovní den mládeže 2026",
      description: "Žádost je připravená pro věcné hodnocení komise bez dalších formálních zásahů.",
    },
  ],
};

const heroStats = document.querySelector("#hero-stats");
const applicantSummaryGrid = document.querySelector("#applicant-summary-grid");
const sourceGrid = document.querySelector("#source-grid");
const programGrid = document.querySelector("#program-grid");
const detailTitle = document.querySelector("#detail-title");
const detailStatus = document.querySelector("#detail-status");
const detailMeta = document.querySelector("#detail-meta");
const detailSummary = document.querySelector("#detail-summary");
const detailGrid = document.querySelector("#detail-grid");
const detailLinks = document.querySelector("#detail-links");
const docsChecklist = document.querySelector("#docs-checklist");
const docsToggle = document.querySelector("#docs-toggle");
const projectSummary = document.querySelector("#project-summary");
const projectAlerts = document.querySelector("#project-alerts");
const projectTimeline = document.querySelector("#project-timeline");
const projectAttachments = document.querySelector("#project-attachments");
const catalogTable = document.querySelector("#catalog-table");
const adminSummaryGrid = document.querySelector("#admin-summary-grid");
const statusFilters = document.querySelector("#status-filters");
const adminBoardList = document.querySelector("#admin-board-list");
const criteriaList = document.querySelector("#criteria-list");
const priorityList = document.querySelector("#priority-list");

let activeProgramId = data.programs[0].id;
let activeFilter = "all";

function statusClass(status) {
  if (status === "open") return "status-approved";
  if (status === "ongoing") return "status-check";
  if (status === "closed") return "status-revision";
  if (status === "draft") return "status-draft";
  if (status === "approved") return "status-approved";
  if (status === "revision") return "status-revision";
  return "status-check";
}

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

function renderApplicantSummary() {
  applicantSummaryGrid.innerHTML = data.applicantSummary
    .map(
      (item) => `
        <article class="card summary-card">
          <p class="eyebrow">Žadatel</p>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderSources() {
  sourceGrid.innerHTML = data.sources
    .map(
      (source) => `
        <article class="card source-card">
          <p class="eyebrow">Zdroj</p>
          <h3>${source.title}</h3>
          <p>${source.description}</p>
          <a class="button button-secondary" href="${source.url}" target="_blank" rel="noreferrer">
            Otevřít oficiální stránku
          </a>
        </article>
      `,
    )
    .join("");
}

function renderPrograms() {
  programGrid.innerHTML = data.programs
    .map(
      (program) => `
        <article class="card program-card ${program.id === activeProgramId ? "program-card-active" : ""}">
          <div class="application-meta">
            <span class="status-badge ${statusClass(program.status)}">${program.statusLabel}</span>
            <span class="meta-pill">${program.type}</span>
          </div>
          <div>
            <p class="eyebrow">Program</p>
            <h3>${program.title}</h3>
          </div>
          <p>${program.summary}</p>
          <div class="meta-row">
            <span class="meta-pill">Termín: ${program.window}</span>
            <span class="meta-pill">Podpora: ${program.amount}</span>
          </div>
          <button class="button button-secondary" type="button" data-program="${program.id}">
            Zobrazit detail programu
          </button>
        </article>
      `,
    )
    .join("");

  programGrid.querySelectorAll("[data-program]").forEach((button) => {
    button.addEventListener("click", () => {
      activeProgramId = button.dataset.program;
      renderPrograms();
      renderProgramDetail();
    });
  });
}

function renderProgramDetail() {
  const program = data.programs.find((item) => item.id === activeProgramId);
  detailTitle.textContent = program.title;
  detailStatus.textContent = program.statusLabel;
  detailStatus.className = `status-badge ${statusClass(program.status)}`;
  detailSummary.textContent = program.summary;
  detailMeta.innerHTML = `
    <span class="meta-pill">Synchronizace: ${syncDate}</span>
    <span class="meta-pill">${program.type}</span>
  `;
  detailGrid.innerHTML = `
    <div class="detail-item">
      <strong>Termín / režim</strong>
      <span>${program.window}</span>
    </div>
    <div class="detail-item">
      <strong>Výše podpory</strong>
      <span>${program.amount}</span>
    </div>
    <div class="detail-item">
      <strong>Pro koho</strong>
      <span>${program.audience}</span>
    </div>
    <div class="detail-item">
      <strong>Administrátor</strong>
      <span>${program.admin}</span>
    </div>
    <div class="detail-item detail-item-wide">
      <strong>Kontakt</strong>
      <span>${program.contact}</span>
    </div>
    <div class="detail-item detail-item-wide">
      <strong>Poznámka</strong>
      <span>${program.notes}</span>
    </div>
  `;
  detailLinks.innerHTML = program.links
    .map(
      (link) => `
        <a class="button button-secondary" href="${link.url}" target="_blank" rel="noreferrer">
          ${link.label}
        </a>
      `,
    )
    .join("");

  docsChecklist.innerHTML = program.docs
    .map(
      (doc, index) => `
        <label class="check-item" data-doc-item>
          <input type="checkbox" data-doc-index="${index}" />
          <span>${doc}</span>
        </label>
      `,
    )
    .join("");

  docsChecklist.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      input.closest("[data-doc-item]").classList.toggle("done", input.checked);
    });
  });
}

function renderProject() {
  const project = data.project;
  projectSummary.innerHTML = `
    <div class="application-meta">
      <span class="status-badge ${statusClass(project.status)}">${project.statusLabel}</span>
      <span class="meta-pill">${project.program}</span>
    </div>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <div class="detail-grid">
      <div class="detail-item">
        <strong>Žadatel</strong>
        <span>${project.owner}</span>
      </div>
      <div class="detail-item">
        <strong>Výše žádosti</strong>
        <span>${project.amount}</span>
      </div>
      <div class="detail-item detail-item-wide">
        <strong>Další termín</strong>
        <span>${project.nextDeadline} – ${project.nextDeadlineDate}</span>
      </div>
    </div>
  `;

  projectAlerts.innerHTML = project.alerts
    .map(
      (alert) => `
        <article class="board-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(alert.level)}">${
              alert.level === "approved"
                ? "Hotovo"
                : alert.level === "revision"
                  ? "Pozor"
                  : "Kontrola"
            }</span>
          </div>
          <h4>${alert.title}</h4>
          <p>${alert.description}</p>
        </article>
      `,
    )
    .join("");

  projectTimeline.innerHTML = project.milestones
    .map(
      (step) => `
        <div class="timeline-step">
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </div>
      `,
    )
    .join("");

  projectAttachments.innerHTML = project.attachments
    .map(
      (attachment) => `
        <article class="attachment-card attachment-${attachment.status}">
          <div class="application-meta">
            <span class="status-badge ${statusClass(
              attachment.status === "done"
                ? "approved"
                : attachment.status === "missing"
                  ? "revision"
                  : "check",
            )}">
              ${
                attachment.status === "done"
                  ? "Nahráno"
                  : attachment.status === "missing"
                    ? "Chybí"
                    : "Čeká"
              }
            </span>
          </div>
          <h4>${attachment.label}</h4>
          <p>${attachment.note}</p>
        </article>
      `,
    )
    .join("");
}

function renderCatalog() {
  catalogTable.innerHTML = data.catalog
    .map(
      (item) => `
        <tr>
          <td>${item.title}</td>
          <td>${item.type}</td>
          <td>${item.date}</td>
          <td>
            <a href="${item.url}" target="_blank" rel="noreferrer">Otevřít</a>
          </td>
        </tr>
      `,
    )
    .join("");
}

function renderAdminSummary() {
  adminSummaryGrid.innerHTML = data.adminSummary
    .map(
      (item) => `
        <article class="card summary-card summary-card-admin">
          <p class="eyebrow">Administrace</p>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
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
  const filters = [
    { id: "all", label: "Vše", count: data.adminCases.length },
    { id: "draft", label: "Rozpracováno", count: data.adminCases.filter((item) => item.status === "draft").length },
    { id: "check", label: "Kontrola", count: data.adminCases.filter((item) => item.status === "check").length },
    { id: "revision", label: "Vráceno", count: data.adminCases.filter((item) => item.status === "revision").length },
    { id: "approved", label: "Doporučeno", count: data.adminCases.filter((item) => item.status === "approved").length },
  ];

  statusFilters.innerHTML = filters
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
  adminBoardList.innerHTML = getFilteredCases()
    .map(
      (item) => `
        <article class="board-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(item.status)}">${item.statusLabel}</span>
            <span class="meta-pill">${item.applicant}</span>
          </div>
          <h4>${item.project}</h4>
          <p>${item.note}</p>
        </article>
      `,
    )
    .join("");
}

function renderCriteria() {
  criteriaList.innerHTML = data.evaluationCriteria
    .map(
      (item) => `
        <article class="criteria-card">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderPriorities() {
  priorityList.innerHTML = data.priorities
    .map(
      (item) => `
        <article class="board-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(item.level)}">${
              item.level === "approved"
                ? "Připraveno"
                : item.level === "revision"
                  ? "Urgentní"
                  : "Prověřit"
            }</span>
          </div>
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

function bindEvents() {
  docsToggle.addEventListener("click", () => {
    const inputs = [...docsChecklist.querySelectorAll("input")];
    const shouldCheck = inputs.some((input) => !input.checked);

    inputs.forEach((input) => {
      input.checked = shouldCheck;
      input.closest("[data-doc-item]").classList.toggle("done", shouldCheck);
    });
  });
}

function init() {
  renderHeroStats();
  renderApplicantSummary();
  renderSources();
  renderPrograms();
  renderProgramDetail();
  renderProject();
  renderCatalog();
  renderAdminSummary();
  renderFilters();
  renderAdminBoard();
  renderCriteria();
  renderPriorities();
  bindEvents();
}

init();
