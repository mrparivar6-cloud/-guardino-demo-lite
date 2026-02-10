function reflect() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
    output.innerText = "Take your time. You can start when ready.";
    return;
  }

  output.innerText =
    "I’m here with you. Let’s slow down and look at this together.\n\n" +
    "What feels most unclear right now?";
}
