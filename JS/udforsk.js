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