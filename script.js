document.getElementById("chatbotToggle").addEventListener("click", () => {
  const chatbot = document.querySelector(".chatbot");
  chatbot.classList.toggle("minimized");
  const body = chatbot.querySelector(".chatbot-body");
  body.style.display = body.style.display === "none" ? "block" : "none";
  const arrow = chatbot.querySelector(".arrow");
  arrow.innerHTML = arrow.innerHTML === "▼" ? "▲" : "▼";
});

const options = document.querySelectorAll(".chatbot-option");
let selectedOption = null;

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
    selectedOption = option.getAttribute("data-url");
  });
});

document.querySelector(".get-started-button").addEventListener("click", () => {
  if (selectedOption) {
    window.location.href = selectedOption;
  } else {
    alert("Please select an option.");
  }
});
