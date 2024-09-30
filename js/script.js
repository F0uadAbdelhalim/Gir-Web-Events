const select = document.querySelector("#type");
const passwordInput = document.querySelectorAll(".password");
const providerPassowrd = document.querySelectorAll(".provider-password");
const companyIdInput = document.querySelector(".companyId");
const companyWebsite = document.querySelector(".website");
const account = document.querySelector(".account");

const splideTrindsOne = new Splide(".trinds__slider--one", {
  type: "loop",
  perPage: 4, // Default for large screens
  perMove: 1, // Moves one slide at a time
  breakpoints: {
    // Bootstrap's medium screen size (768px and below)
    768: {
      perPage: 2, // Show 2 slides on medium screens
    },
    // Bootstrap's small screen size (576px and below)
    576: {
      perPage: 1, // Show 1 slide on smaller screens
    },
  },
});

splideTrindsOne.mount();

const splideTrindsTwo = new Splide(".trinds__slider--two", {
  type: "loop",
  perPage: 4, // Default for large screens
  perMove: 1, // Moves one slide at a time
  breakpoints: {
    // Bootstrap's medium screen size (768px and below)
    768: {
      perPage: 2, // Show 2 slides on medium screens
    },
    // Bootstrap's small screen size (576px and below)
    576: {
      perPage: 1, // Show 1 slide on smaller screens
    },
  },
});

splideTrindsTwo.mount();

const splideTrindsThree = new Splide(".trinds__slider--three", {
  type: "loop",
  perPage: 4, // Default for large screens
  perMove: 1, // Moves one slide at a time

  breakpoints: {
    // Bootstrap's medium screen size (768px and below)
    768: {
      perPage: 2, // Show 2 slides on medium screens
    },
    // Bootstrap's small screen size (576px and below)
    576: {
      perPage: 1, // Show 1 slide on smaller screens
    },
  },
});

splideTrindsThree.mount();

var splide = new Splide(".progress", {
  pagination: false,
});
var bar = splide.root.querySelector(".my-slider-progress-bar");

// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
  var end = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%";
});

splide.mount();

//////////////////////////////////////////////
//// toggle
const btnStart = document.querySelector(".start__planning");
const overlay = document.querySelector(".overlay");
const overlayContent = document.querySelector(".overlay__content");
const btnClose = document.querySelector(".close");

btnStart.addEventListener("click", function () {
  overlay.classList.toggle("visually-hidden");
  overlayContent.classList.toggle("visually-hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.toggle("visually-hidden");
  overlayContent.classList.toggle("visually-hidden");
});

btnClose.addEventListener("click", function () {
  overlay.classList.toggle("visually-hidden");
  overlayContent.classList.toggle("visually-hidden");
});
////////////////////////////////////////

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
