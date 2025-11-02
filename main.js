const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
.introduction0 {


  position: absolute; /* Karta bude umístěna absolutně */
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.919);
  padding: 20px;
  border-radius: 15px;
  border: 0.2px solid rgba(255, 255, 255, 0.085);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8);
  max-width: 90%; /* Maximální šířka karty */
  width: auto;
  text-align: center;
  backdrop-filter: blur(5px);
  box-sizing: border-box;
  transition: all 0.3s ease;
  overflow: hidden;
  max-height: 150px;
  text-align: ;

  transform: translateX(50%);

  transition: all 0.3s ease;



}

.introduction0:hover {
  transform: translateX(50%) scale(1.03); /* Zvětšení karty */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.9); /* Větší stín pro efekt */
}