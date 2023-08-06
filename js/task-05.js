const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Funkcja do aktualizacji zawartości elementu <span> na podstawie wartości pola input
function updateNameOutput() {
  if (nameInput.value.trim() !== "") {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}

// Słuchacz zdarzenia "input" do pola input#name-input
nameInput.addEventListener("input", updateNameOutput);
