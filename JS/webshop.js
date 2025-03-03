
//--- Mest populære ---
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

// --- IPA CAROUSEL ---
const ipaCarousel = document.querySelector(".ipa-carousel");
const prevIpaBtn = document.getElementById("prev-ipa");
const nextIpaBtn = document.getElementById("next-ipa");

const scrollStepIpa = 220; // Fast længde for hvert klik

if (ipaCarousel && prevIpaBtn && nextIpaBtn) { 
    nextIpaBtn.addEventListener("click", () => {
        ipaCarousel.scrollBy({ left: scrollStepIpa, behavior: "smooth" });
    });

    prevIpaBtn.addEventListener("click", () => {
        ipaCarousel.scrollBy({ left: -scrollStepIpa, behavior: "smooth" });
    });
}
