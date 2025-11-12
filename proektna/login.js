document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const welcomeMessage = document.createElement("span");
  welcomeMessage.setAttribute("id", "success-message");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username");
    localStorage.setItem("loggedInUsername", username.value);
    const currentUrlWithoutFile = window.location.href.slice(0, -10);
    window.location.href = currentUrlWithoutFile + "index.html";
  });
});
