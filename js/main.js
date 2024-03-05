const searchBtn = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*  Login   */
const logBtn = document.getElementById("login-button"),
  logClose = document.getElementById("login-close"),
  logContent = document.getElementById("login-content");

if (logBtn) {
  logBtn.addEventListener("click", () => {
    logContent.classList.add("show-log");
  });
}
if (logClose) {
  logClose.addEventListener("click", () => {
    logContent.classList.remove("show-log");
  });
}

/* Home Swiper */

let swiperBook = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlide: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});

/* Shadow Header */

const shadowH = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowH);

/* Featured slider */

let swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlide: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1220: {
      slidesPerView: 4,
      centeredSlide: false,
    },
  },
});

/* Slide new */
let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  breakpoints: {
    1220: {
      slidesPerView: 3,
    },
  },
});
let swiperTest = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  slidesPerView: "auto",
  centeredSlide: "auto",
  breakpoints: {
    1220: {
      slidesPerView: 3,
      centeredSlide: false,
    },
  },
});

/* Scroll Select active link */
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHight = current.offsetHeight,
      sectionTop = current.offsetHeight - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* Dark them */

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme"; // in css body.dark-theme
const iconTheme = "ri-sun-line";
/* If user selected  */
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* Animation */

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true, // repeat
});
sr.reveal(
  `.home__data, .featured__container, .mew__container, .join__data, .testimonial__container, .footer`
);
sr.reveal(`.home__images`, { delay: 500 });
sr.reveal(`.services__card`, { interval: 100 });
sr.reveal(`.discount__data`, { origin: "left" });
sr.reveal(`.discount__images`, { origin: "right" });
