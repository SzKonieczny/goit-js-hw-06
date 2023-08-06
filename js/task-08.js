const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formValues = {};

  formData.forEach((value, name) => {
    formValues[name] = value;
  });

  if (formValues.email.trim() === "" || formValues.password.trim() === "") {
    alert("Please fill in all fields.");
  } else {
    console.log(formValues);
    loginForm.reset();
  }
}
