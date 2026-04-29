const SESSION_KEY = "karvina-grants-session";

function getSession() {
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setSession(session) {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  window.localStorage.removeItem(SESSION_KEY);
}

function loginMock({ username, role }) {
  setSession({
    username,
    role,
    loggedAt: new Date().toISOString(),
  });
}

function requireRole(expectedRole) {
  const session = getSession();
  if (!session) {
    window.location.href = "./index.html";
    return null;
  }

  if (expectedRole && session.role !== expectedRole) {
    window.location.href = expectedRole === "admin" ? "./admin.html" : "./applicant.html";
    return null;
  }

  return session;
}

function attachSessionUi(expectedRole) {
  const session = requireRole(expectedRole);
  if (!session) {
    return null;
  }

  const userNode = document.querySelector("#session-user");
  const roleNode = document.querySelector("#session-role-label");
  const logoutButton = document.querySelector("#logout-button");

  if (userNode) {
    userNode.textContent = session.username;
  }

  if (roleNode) {
    roleNode.textContent = session.role === "admin" ? "Administrace" : "Žadatel";
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      clearSession();
      window.location.href = "./index.html";
    });
  }

  return session;
}
