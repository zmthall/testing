const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})

const popup = document.querySelector("[data-carousel-container]");
const closeButton = document.querySelector("[data-close]");
const openButton = document.querySelector("[data-open]");


closeButton.addEventListener("click", () => {
    // document.querySelector("[data-main]").classList.toggle("hidden");

    if (document.querySelector("[data-main]").classList.contains("hidden")) {
        popup.classList.toggle("hidden");
        document.querySelector("[data-main]").classList.toggle("hidden");
    } else {
        popup.classList.toggle("hidden");
    }
})

openButton.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        popup.classList.toggle("hidden");
        document.querySelector("[data-main]").classList.toggle("hidden");
    } else {
        popup.classList.toggle("hidden");
    }
})
