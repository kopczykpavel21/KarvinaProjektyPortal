const loginForm = document.querySelector("#login-form");
const loginFeedback = document.querySelector("#login-feedback");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "").trim();
  const role = String(formData.get("role") || "applicant");

  if (!username || !password) {
    loginFeedback.textContent = "Vyplňte prosím jméno i heslo.";
    return;
  }

  loginMock({ username, role });
  loginFeedback.textContent = "Přihlášení proběhlo, přesměrovávám…";
  window.location.href = role === "admin" ? "./admin.html" : "./applicant.html";
});
