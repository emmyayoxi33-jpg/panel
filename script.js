// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.hash !== "") {
      e.preventDefault();
      const section = document.querySelector(link.hash);
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth"
      });
      navMenu.classList.remove("active");
    }
  });
});

// FADE IN ON SCROLL
const fades = document.querySelectorAll(".fade-in");

function fadeInCheck() {
  const trigger = window.innerHeight + window.scrollY;

  fades.forEach(el => {
    if (trigger > el.offsetTop + 50) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", fadeInCheck);
fadeInCheck();

// BACK TO TOP
const topBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});