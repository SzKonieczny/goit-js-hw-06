let counterValue = 0;

// Pobranie referencje do przycisków i spanu z DOM
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueSpan = document.getElementById("value");

// Funkcja do aktualizacji wartości licznika i interfejsu
function updateCounterValue(action) {
  if (action === "increment") {
    counterValue++;
  } else if (action === "decrement") {
    counterValue--;
  }

  // Aktualizujemy zawartość elementu <span> z wartością licznika
  valueSpan.textContent = counterValue;
}

// Słuchacze kliknięć przycisków
decrementBtn.addEventListener("click", () => updateCounterValue("decrement"));
incrementBtn.addEventListener("click", () => updateCounterValue("increment"));
