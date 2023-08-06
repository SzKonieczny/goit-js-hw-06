const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Funkcja tworząca i dodająca <li> do listy <ul>
function createAndAppendLiElement(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("item");
  return li;
}

// Pobieranie referencję do listy ul po ID
const ulElement = document.getElementById("ingredients");

// Tworzenie i dodawanie <li> do listy <ul> za pomocą pętli for
for (const ingredient of ingredients) {
  const liElement = createAndAppendLiElement(ingredient);
  ulElement.appendChild(liElement);
}

console.log(ulElement);
