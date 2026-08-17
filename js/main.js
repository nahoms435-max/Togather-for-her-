document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const introOverlay = document.getElementById("intro-overlay");
    let count = 0;

    const updateCounter = setInterval(() => {
        count += 1;
        if (counterElement) {
            counterElement.textContent = count;
        }

        if (count >= 100) {
            clearInterval(updateCounter);

            if (typeof gsap !== "undefined") {
                gsap.to("#intro-overlay", {
                    duration: 0.8,
                    opacity: 0,
                    onComplete: () => {
                        introOverlay.style.display = "none";
                    }
                });
            } else if (introOverlay) {
                introOverlay.style.transition = "opacity 0.8s ease";
                introOverlay.style.opacity = "0";
                setTimeout(() => {
                    introOverlay.style.display = "none";
                }, 800);
            }
        }
    }, 15);
});