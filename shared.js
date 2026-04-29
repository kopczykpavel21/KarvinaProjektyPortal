async function loadGrantData() {
  const response = await fetch("./grants.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Nepodařilo se načíst grantová data.");
  }
  return response.json();
}

function statusClass(status) {
  if (status === "open" || status === "approved" || status === "done") return "status-approved";
  if (status === "ongoing" || status === "check" || status === "pending") return "status-check";
  if (status === "closed" || status === "revision" || status === "missing") return "status-revision";
  if (status === "draft") return "status-draft";
  return "status-check";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
