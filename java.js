// =========================
// MENU MOBILE
// =========================
function toggleMenu(){
  const menu = document.getElementById("menu");
  if(menu){
    menu.classList.toggle("active");
  }
}

// =========================
// SCROLL ANIMATION HERO (SAFE)
// =========================
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-text");
  if(hero){
    hero.style.transform = `translateY(${window.scrollY * 0.03}px)`;
  }
});

// =========================
// SCROLL REVEAL SIMPLE (PRO)
// =========================
const revealElements = document.querySelectorAll(
  ".skill-card, .experience-card, .certification-card"
);

function revealOnScroll(){
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "0.6s ease";
    }
  });
}

// init state
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();