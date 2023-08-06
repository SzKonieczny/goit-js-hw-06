const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Funkcja do tworzenia kodu HTML dla img
function createImageHTML(image) {
  return `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
}

// Pobierane referencję do listy ul po klasie
const ulGallery = document.querySelector(".gallery");

// Kod HTML dla wszystkich img i połączenie go w jednym ciągu
const galleryHTML = images.map(createImageHTML).join("");

// Wstawiny cały kod HTML galerii do listy ul jednocześnie
ulGallery.insertAdjacentHTML("beforeend", galleryHTML);

console.log(ulGallery);
