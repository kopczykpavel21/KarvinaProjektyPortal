const session = attachSessionUi("applicant");

const heroStats = document.querySelector("#hero-stats");
const applicantSummaryGrid = document.querySelector("#applicant-summary-grid");
const sourceGrid = document.querySelector("#source-grid");
const programGrid = document.querySelector("#program-grid");
const projectSummary = document.querySelector("#project-summary");
const projectAlerts = document.querySelector("#project-alerts");
const projectTimeline = document.querySelector("#project-timeline");
const projectAttachments = document.querySelector("#project-attachments");

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

function renderApplicantSummary(items) {
  applicantSummaryGrid.innerHTML = items
    .map(
      (item) => `
        <article class="card summary-card">
          <p class="eyebrow">Žadatel</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
    )
    .join("");
}

function renderSources(items) {
  sourceGrid.innerHTML = items
    .map(
      (item) => `
        <article class="card source-card">
          <p class="eyebrow">Zdroj</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <a class="button button-secondary" href="${item.url}" target="_blank" rel="noreferrer">
            Otevřít oficiální stránku
          </a>
        </article>
      `,
    )
    .join("");
}

function renderPrograms(programs) {
  programGrid.innerHTML = programs
    .map(
      (program) => `
        <article class="card program-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(program.status)}">${escapeHtml(program.statusLabel)}</span>
            <span class="meta-pill">${escapeHtml(program.type)}</span>
          </div>
          <div>
            <p class="eyebrow">Program</p>
            <h3>${escapeHtml(program.title)}</h3>
          </div>
          <p>${escapeHtml(program.summary)}</p>
          <div class="meta-row">
            <span class="meta-pill">Termín: ${escapeHtml(program.window)}</span>
            <span class="meta-pill">Podpora: ${escapeHtml(program.amount)}</span>
          </div>
          <a class="button button-primary" href="./program.html?slug=${encodeURIComponent(program.slug)}">
            Otevřít podstránku programu
          </a>
        </article>
      `,
    )
    .join("");
}

function renderProject(project) {
  projectSummary.innerHTML = `
    <div class="application-meta">
      <span class="status-badge ${statusClass(project.status)}">${escapeHtml(project.statusLabel)}</span>
      <span class="meta-pill">${escapeHtml(project.program)}</span>
    </div>
    <h3>${escapeHtml(project.title)}</h3>
    <p>${escapeHtml(project.summary)}</p>
    <div class="detail-grid">
      <div class="detail-item">
        <strong>Žadatel</strong>
        <span>${escapeHtml(project.owner)}</span>
      </div>
      <div class="detail-item">
        <strong>Výše žádosti</strong>
        <span>${escapeHtml(project.amount)}</span>
      </div>
      <div class="detail-item detail-item-wide">
        <strong>Další termín</strong>
        <span>${escapeHtml(project.nextDeadline)} – ${escapeHtml(project.nextDeadlineDate)}</span>
      </div>
    </div>
  `;

  projectAlerts.innerHTML = project.alerts
    .map(
      (alert) => `
        <article class="board-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(alert.level)}">${escapeHtml(alert.label)}</span>
          </div>
          <h4>${escapeHtml(alert.title)}</h4>
          <p>${escapeHtml(alert.description)}</p>
        </article>
      `,
    )
    .join("");

  projectTimeline.innerHTML = project.milestones
    .map(
      (step) => `
        <div class="timeline-step">
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.description)}</p>
        </div>
      `,
    )
    .join("");

  projectAttachments.innerHTML = project.attachments
    .map(
      (attachment) => `
        <article class="attachment-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(attachment.status)}">${escapeHtml(attachment.labelStatus)}</span>
          </div>
          <h4>${escapeHtml(attachment.label)}</h4>
          <p>${escapeHtml(attachment.note)}</p>
        </article>
      `,
    )
    .join("");
}

loadGrantData().then((data) => {
  renderHeroStats(data.heroStatsApplicant);
  renderApplicantSummary(data.applicantSummary);
  renderSources(data.sources);
  renderPrograms(data.programs);
  renderProject(data.project);
}).catch((error) => {
  console.error(error);
});
