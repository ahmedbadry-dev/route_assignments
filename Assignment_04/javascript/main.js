// close model
const closeBtn = document.querySelector("#close-btn");
const menuBtn = document.querySelector("#menu-btn");
const mobileNav = document.querySelector("#mobile-nav");

// create overlay
const overlay = document.querySelector(".overlay");
// overlay.classList.add("overlay");
// document.body.appendChild(overlay);

function openMobileNave() {
  mobileNav.classList.add("active");
  overlay.classList.add("active");
}

function closeMobileNav() {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
}

menuBtn.addEventListener("click", openMobileNave);
closeBtn.addEventListener("click", closeMobileNav);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeMobileNav();
  }
});
