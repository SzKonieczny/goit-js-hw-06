// Pobiernie listy wszystkich  li z klasą.item wewnątrz ul#categories
const categoryItems = document.querySelectorAll("ul#categories li.item");

// Oblicznie liczby kategorii (elementów li z klasą.item)
const categoriesCount = categoryItems.length;
console.log("Number of categories:", categoriesCount);

// Iteracja przez każdy element li z klasą.item
categoryItems.forEach((item) => {
  // Pobieranie tekst h2 dla danego elementu li
  const headerText = item.querySelector("h2").textContent;

  // Pobieranie wszystkich elementów li wewnątrz danego elementu li.item
  const elements = item.querySelectorAll("ul li");

  // Oblicanie liczby elementów w danej kategorii (wszystkich w jej obrębie <li>)
  const elementsCount = elements.length;

  console.log(`Category: ${headerText}`);
  console.log(`Elements: ${elementsCount}`);
});
