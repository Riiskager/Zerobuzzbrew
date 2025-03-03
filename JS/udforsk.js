const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let scrollStep = 220; // Fast længde for hvert klik

nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
});



const ipaCarousel = document.querySelector(".kasse-carousel");
const prevIpaBtn = document.getElementById("prev-kasse");
const nextIpaBtn = document.getElementById("next-kasse");

let scrollStep = 220; // Fast længde for hvert klik

nextIpaBtn.addEventListener("click", () => {
    ipaCarousel.scrollBy({ left: scrollStep, behavior: "smooth" });
});

prevIpaBtn.addEventListener("click", () => {
    ipaCarousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
});