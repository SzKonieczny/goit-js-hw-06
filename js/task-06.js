const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", validateInput);

function validateInput() {
  const expectedLength = parseInt(inputElement.getAttribute("data-length"));
  const inputValue = inputElement.value.trim();
  const isValid = inputValue.length === expectedLength;

  if (isValid) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
}
