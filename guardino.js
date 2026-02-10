document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const button = document.getElementById("reflectBtn");
  const response = document.getElementById("response");

  button.addEventListener("click", () => {
    const text = input.value.trim();

    if (!text) {
      response.textContent = "Please write something first.";
      return;
    }

    response.textContent =
      "Thank you for sharing. Take a moment to reflect on your thoughts.";
  });
});
