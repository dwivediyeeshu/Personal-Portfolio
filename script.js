const lightMode = document.querySelector("#theme-switch");

lightMode.addEventListener("click", function (e) {
  const bodyTheme = document.querySelector("body");

  if (bodyTheme.className === "lightmode") {
    bodyTheme.className = "";
  } else {
    bodyTheme.className = "lightmode";
  }
});
const chatbotDisplay = document.querySelector("#chat-toggle");
const exitButton = document.querySelector("#closing");
const chatWindow = document.querySelector("#chat-window");

chatbotDisplay.addEventListener("click", function () {
  chatWindow.classList.toggle("hidden");
});

exitButton.addEventListener("click", () => {
  chatWindow.className = "hidden";
});
