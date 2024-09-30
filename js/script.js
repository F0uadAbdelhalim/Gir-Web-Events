const select = document.querySelector("#type");
const passwordInput = document.querySelectorAll(".password");
const providerPassowrd = document.querySelectorAll(".provider-password");
const companyIdInput = document.querySelector(".companyId");
const companyWebsite = document.querySelector(".website");
const account = document.querySelector(".account");

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 4,
  perMove: 1,
});

splide.mount();

select.addEventListener("change", function (e) {
  const selected = e.target.value;

  if (selected == "Company providers") {
    passwordInput.forEach((input) => {
      input.classList.add("d-none");
    });
    providerPassowrd.forEach((input) => {
      input.classList.remove("d-none");
    });
    account.classList.remove("d-none");
    companyIdInput.classList.remove("d-none");
    companyWebsite.classList.remove("d-none");
  } else if (selected == "user") {
    passwordInput.forEach((input) => {
      input.classList.add("d-none");
    });
    providerPassowrd.forEach((input) => {
      input.classList.remove("d-none");
    });
    companyIdInput.classList.add("d-none");
    companyWebsite.classList.add("d-none");
  } else {
    passwordInput.forEach((input) => {
      input.classList.remove("d-none");
    });
    providerPassowrd.forEach((input) => {
      input.classList.add("d-none");
    });
    companyIdInput.classList.add("d-none");
    companyWebsite.classList.add("d-none");
  }
});
