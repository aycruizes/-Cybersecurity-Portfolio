//==============================
// PROJECT SLIDER
//==============================

const projectsGrid = document.querySelector(".projects-grid");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (projectsGrid && nextBtn && prevBtn) {

    nextBtn.addEventListener("click", () => {
        projectsGrid.scrollBy({
            left: 420,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        projectsGrid.scrollBy({
            left: -420,
            behavior: "smooth"
        });
    });

}
/*==================================
HERO SLIDESHOW
==================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}, 4000);