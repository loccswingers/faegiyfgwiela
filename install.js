let installPrompt = null;
const installButton = document.querySelector("#install");

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  disableInAppInstallPrompt();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});