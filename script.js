const chatbotDisplay = document.querySelector("#chat-toggle");
const exitButton = document.querySelector("#closing");
const chatWindow = document.querySelector("#chat-window");

chatbotDisplay.addEventListener("click", function () {
  chatWindow.classList.toggle("hidden");
});

exitButton.addEventListener("click", () => {
  chatWindow.className = "hidden";
});
