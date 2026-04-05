// =========================
// MENU DEROULANT (DROPDOWN)
// =========================
function toggleDropdown(e) {
  e.preventDefault();
  const parent = e.target.closest('.dropdown');
  if (parent) {
    parent.classList.toggle('active');
  }
}

// =========================
// MENU MOBILE
// =========================
function toggleMenu(){
  const menu = document.getElementById("menu");
  if(menu){
    menu.classList.toggle("active");
  }
}

// Fermer le menu mobile quand on clique sur un lien (expérience mobile améliorée)
document.addEventListener("DOMContentLoaded", function(){
  const menu = document.getElementById("menu");
  const links = menu ? menu.querySelectorAll("a") : [];
  links.forEach(link => {
    link.addEventListener("click", function(){
      if(window.innerWidth <= 900 && menu.classList.contains("active")){
        menu.classList.remove("active");
      }
    });
  });
});

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