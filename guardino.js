const btn = document.getElementById("reflectBtn");
const input = document.getElementById("input");
const response = document.getElementById("response");

btn.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) {
    response.textContent = "Say a little more. I'm listening.";
    return;
  }

  response.textContent =
    "Let's slow down. What part of this feels most uncertain right now?";
});
