//--- Nyheder ---
const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const scrollStep = 220; // Fast længde for hvert klik

if (carousel && prevBtn && nextBtn) { 
    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
}

// --- Månedens kasser CAROUSEL ---
const ipaCarousel = document.querySelector(".kasse-carousel");
const prevIpaBtn = document.getElementById("prev-kasse");
const nextIpaBtn = document.getElementById("next-kasse");

const scrollStepIpa = 220; // Fast længde for hvert klik

if (ipaCarousel && prevIpaBtn && nextIpaBtn) { 
    nextIpaBtn.addEventListener("click", () => {
        ipaCarousel.scrollBy({ left: scrollStepIpa, behavior: "smooth" });
    });

    prevIpaBtn.addEventListener("click", () => {
        ipaCarousel.scrollBy({ left: -scrollStepIpa, behavior: "smooth" });
    });
}

