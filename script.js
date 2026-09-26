//==============================
// PROJECT SLIDER
//==============================

const projectsGrid = document.querySelector(".projects-grid");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (projectsGrid && nextBtn && prevBtn) {
    
 function getScrollAmount() {
        const projectCard = projectsGrid.querySelector(".project-card");

        if (!projectCard) return 0;

        const cardWidth = projectCard.offsetWidth;
        const gap = 30;

        return cardWidth + gap;
    }

    nextBtn.addEventListener("click", () => {
        projectsGrid.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        projectsGrid.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    });

}


//==============================
// HERO SLIDESHOW
//==============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if (slides.length > 0) {

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 4000);

}
