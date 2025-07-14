// This is a controller for the application's main authentication/UI view.
// It handles showing different states like loading, requesting access, pending, banned, etc.

// Immediately-invoked function passing in a context object
(function (context) {
  // --- Global and DOM Element Selectors ---
  // An object to hold references to all the important UI elements
  const ui = {
    form: document.querySelector("#form"),
    errorIcon: document.querySelector("#errorIcon"),
    bannedIcon: document.querySelector("#bannedIcon"),
    outdatedIcon: document.querySelector("#outdatedIcon"),
    login: document.querySelector(".auth-login"),
    headerTitle: document.querySelector(".auth-header h2"),
    headerSubtitle: document.querySelector(".auth-header p"),
    approvedBadge: document.querySelector("#approved"),
    usernameInput: document.querySelector("[data-ui='username']"),
    requestBtn: document.querySelector("[data-ui='request-btn']"),
    pendingBtn: document.querySelector("[data-ui='pending-btn']"),
    downloadBtn: document.querySelector("[data-ui='download-btn']"),
    tokenInput: document.querySelector("[data-ui='token']"),
    loginBtn: document.querySelector("[data-ui='login-btn']"),
    rememberCheck: document.querySelector("[data-ui='remember-check']"),
    tokenWarn: document.querySelector("#tokenWarn"),
  };

  // --- Main UI State Controller ---
  // This function changes the view based on the provided status
  function setViewState(status, payload = {}) {
    // Hide all icons and sections first
    ui.form.style.display = "none";
    $("#loadingOverlay").fadeOut(200);
    ui.errorIcon.style.display = "none";
    ui.bannedIcon.style.display = "none";
    ui.login.style.alignItems = "flex-start";
    ui.approvedBadge.style.display = "none";

    // Hide all direct children of the form
    Object.values(ui).forEach((element) => {
      if (element && element.parentElement === ui.form) {
        element.style.display = "none";
      }
    });

    // Show the correct view based on the status
    switch (status) {
      case "loading":
        $("#loadingOverlay").fadeIn(200);
        ui.headerTitle.textContent = "Gota Redux Client";
        ui.headerSubtitle.textContent = "Checking client version...";
        break;

      case "request-activation":
        ui.headerTitle.textContent = "Beta Access";
        ui.headerSubtitle.textContent =
          "To get started, please provide your Discord username to request access.";
        ui.usernameInput.style.display = "";
        ui.requestBtn.style.display = "";
        ui.form.style.display = "flex";
        break;

      case "pending":
        ui.headerTitle.textContent = "Request Pending";
        ui.headerSubtitle.textContent =
          "Your request is awaiting approval. We will notify you on Discord.";
        ui.usernameInput.value = payload.username || "";
        ui.usernameInput.disabled = true;
        ui.usernameInput.style.display = "";
        ui.pendingBtn.style.display = "";
        ui.form.style.display = "flex";
        break;

      case "approved":
        ui.headerTitle.textContent = "Welcome, " + payload.username;
        ui.headerSubtitle.textContent =
          "Please enter your exclusive beta token to launch the client.";
        ui.approvedBadge.textContent = payload.username;
        ui.approvedBadge.setAttribute("variant", "success");
        ui.approvedBadge.style.display = "inline-flex";
        ui.tokenInput.style.display = "";
        ui.loginBtn.style.display = "";
        ui.rememberCheck.style.display = "";
        ui.tokenWarn.style.display = "none";
        ui.form.style.display = "flex";
        break;

      case "banned":
        document.querySelector(".bgImage")?.remove();
        ui.bannedIcon.style.display = "block";
        ui.login.style.alignItems = "center";
        ui.login.style.textAlign = "center";
        ui.headerTitle.textContent = "Device Permanently Banned";
        ui.headerSubtitle.textContent =
          "This device has been flagged for violating our terms of service.";
        ui.approvedBadge.textContent = payload.username || "Banned";
        ui.approvedBadge.setAttribute("variant", "danger");
        ui.approvedBadge.style.display = "inline-flex";
        break;

      case "outdated":
        document.querySelector(".bgImage")?.remove();
        ui.outdatedIcon.style.display = "block";
        ui.login.style.alignItems = "center";
        ui.login.style.textAlign = "center";
        ui.headerTitle.textContent = "Client Update Required";
        ui.headerSubtitle.textContent =
          "Your client is outdated. Please download the latest version to continue.";
        ui.downloadBtn.style.display = "";
        ui.form.style.display = "flex";
        ui.downloadBtn.onclick = () => {
          window.ipcRenderer.send("app:open-download-page");
        };
        break;

      case "error":
        document.querySelector(".bgImage")?.remove();
        ui.errorIcon.style.display = "block";
        ui.login.style.alignItems = "center";
        ui.login.style.textAlign = "center";
        ui.headerTitle.textContent = "Authentication Error";
        ui.headerSubtitle.textContent =
          "We were unable to validate your device. Please try again later.";
        break;
    }
  }

  // --- Event Listeners ---
  document.addEventListener("DOMContentLoaded", () => {
    // Sanitize username input to allow only valid characters
    ui.usernameInput.addEventListener("input", () => {
      const sanitized = ui.usernameInput.value
        .toLowerCase()
        .replace(new RegExp("[^a-z0-9_]", "g"), "")
        .trim();
      if (ui.usernameInput.value !== sanitized) {
        ui.usernameInput.value = sanitized;
      }
      ui.requestBtn.disabled = sanitized.length < 2; // Discord usernames are at least 2 chars
    });

    // Enable login button only if token has the correct length (16 chars)
    ui.tokenInput.addEventListener("input", () => {
      ui.loginBtn.disabled = ui.tokenInput.value.trim().length !== 16;
    });

    // Request token button
    ui.requestBtn.addEventListener("click", async () => {
      if (ui.requestBtn.disabled) {
        return;
      }
      setViewState("loading");
      const response = await window.api.invoke(
        "request:token",
        ui.usernameInput.value
      );
      if (response.success) {
        setViewState("pending", { username: response.user.username });
      } else {
        setViewState("error");
      }
    });

    // Login button
    ui.loginBtn.addEventListener("click", async () => {
      if (ui.loginBtn.disabled) {
        return;
      }
      setViewState("loading");
      const response = await window.api.invoke("validate:token", {
        token: ui.tokenInput.value,
      });
      if (!response.valid) {
        const currentUsername = document.querySelector("#approved").textContent;
        setViewState("approved", { username: currentUsername });
        ui.tokenInput.value = ""; // Clear incorrect token
      }
    });

    // Window controls
    document
      .querySelector("#appMinimize")
      .addEventListener("click", () => window.ipcRenderer.minimize());
    document
      .querySelector("#appClose")
      .addEventListener("click", () => window.ipcRenderer.close());

    // Listen for authentication state changes from the main process
    window.api.onAuthState(({ status, payload }) => {
      setViewState(status, payload);
    });

    // Set initial state to loading
    setViewState("loading");
  });
})({
  // This object is passed as the 'this' context, providing a getter for the window object.
  get ILW6gu38cc2e_State() {
    return window;
  },
});
