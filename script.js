const button = document.getElementById("button");
const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const successDiv = document.getElementById("success");
const errorDiv = document.getElementById("error");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  if (regexEmail.test(email.value)) {
    successDiv.classList.add("show");
    errorDiv.classList.remove("show");

    setTimeout(() => {
      successDiv.classList.remove("show");
      email.value = "";
    }, 2000);
  } else {
    errorDiv.classList.add("show");
    successDiv.classList.remove("show");

    setTimeout(() => {
      errorDiv.classList.remove("show");
    }, 2000);
  }
});
