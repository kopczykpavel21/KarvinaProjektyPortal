attachSessionUi("applicant");

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const programTitle = document.querySelector("#program-title");
const programSummary = document.querySelector("#program-summary");
const programLinks = document.querySelector("#program-links");
const programStatus = document.querySelector("#program-status");
const programMeta = document.querySelector("#program-meta");
const programSwitcher = document.querySelector("#program-switcher");
const programSteps = document.querySelector("#program-steps");
const programFields = document.querySelector("#program-fields");
const programAttachments = document.querySelector("#program-attachments");
const programTips = document.querySelector("#program-tips");
const attachmentsToggle = document.querySelector("#attachments-toggle");

function renderProgram(program) {
  document.title = `${program.title} | Portál pro žadatele`;
  programTitle.textContent = program.title;
  programSummary.textContent = program.summary;
  programStatus.textContent = program.statusLabel;
  programStatus.className = `status-badge ${statusClass(program.status)}`;

  programLinks.innerHTML = program.links
    .map(
      (link) => `
        <a class="button button-secondary" href="${link.url}" target="_blank" rel="noreferrer">
          ${escapeHtml(link.label)}
        </a>
      `,
    )
    .join("");

  programMeta.innerHTML = `
    <div class="detail-item">
      <strong>Typ programu</strong>
      <span>${escapeHtml(program.type)}</span>
    </div>
    <div class="detail-item">
      <strong>Termín / režim</strong>
      <span>${escapeHtml(program.window)}</span>
    </div>
    <div class="detail-item">
      <strong>Podpora</strong>
      <span>${escapeHtml(program.amount)}</span>
    </div>
    <div class="detail-item">
      <strong>Pro koho</strong>
      <span>${escapeHtml(program.audience)}</span>
    </div>
    <div class="detail-item detail-item-wide">
      <strong>Kontakt</strong>
      <span>${escapeHtml(program.contact)}</span>
    </div>
    <div class="detail-item detail-item-wide">
      <strong>Poznámka</strong>
      <span>${escapeHtml(program.notes)}</span>
    </div>
  `;

  programSteps.innerHTML = program.applicationFlow
    .map(
      (step) => `
        <div class="timeline-step">
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.description)}</p>
        </div>
      `,
    )
    .join("");

  programFields.innerHTML = program.formFields
    .map(
      (field) => `
        <article class="criteria-card">
          <h4>${escapeHtml(field.label)}</h4>
          <p>${escapeHtml(field.description)}</p>
        </article>
      `,
    )
    .join("");

  programAttachments.innerHTML = program.docs
    .map(
      (doc, index) => `
        <label class="check-item" data-attachment-item>
          <input type="checkbox" data-attachment-index="${index}" />
          <span>${escapeHtml(doc)}</span>
        </label>
      `,
    )
    .join("");

  programTips.innerHTML = program.tips
    .map(
      (tip) => `
        <article class="board-card">
          <div class="application-meta">
            <span class="status-badge ${statusClass(tip.level)}">${escapeHtml(tip.label)}</span>
          </div>
          <h4>${escapeHtml(tip.title)}</h4>
          <p>${escapeHtml(tip.description)}</p>
        </article>
      `,
    )
    .join("");

  programAttachments.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      input.closest("[data-attachment-item]").classList.toggle("done", input.checked);
    });
  });
}

function renderProgramSwitcher(programs, activeSlug) {
  programSwitcher.innerHTML = programs
    .map(
      (program) => `
        <a class="button ${program.slug === activeSlug ? "button-primary" : "button-secondary"}" href="./program.html?slug=${encodeURIComponent(program.slug)}">
          ${escapeHtml(program.title)}
        </a>
      `,
    )
    .join("");
}

attachmentsToggle.addEventListener("click", () => {
  const inputs = [...programAttachments.querySelectorAll("input")];
  const shouldCheck = inputs.some((input) => !input.checked);

  inputs.forEach((input) => {
    input.checked = shouldCheck;
    input.closest("[data-attachment-item]").classList.toggle("done", shouldCheck);
  });
});

loadGrantData().then((data) => {
  const program = data.programs.find((item) => item.slug === slug) || data.programs[0];
  renderProgramSwitcher(data.programs, program.slug);
  renderProgram(program);
}).catch((error) => {
  console.error(error);
  programTitle.textContent = "Program se nepodařilo načíst";
});
