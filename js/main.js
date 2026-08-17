document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const introOverlay = document.getElementById("intro-overlay");
    let count = 0;

    // Counter Interval Animation
    const updateCounter = setInterval(() => {
        count += 1;
        if (counterElement) {
            counterElement.textContent = count;
        }

        if (count >= 100) {
            clearInterval(updateCounter);
            
            // Fade out the intro overlay once reaching 100%
            if (typeof gsap !== "undefined") {
                gsap.to("#intro-overlay", {
                    duration: 1,
                    opacity: 0,
                    display: "none",
                    delay: 0.3
                });
            } else if (introOverlay) {
                introOverlay.style.transition = "opacity 0.8s ease";
                introOverlay.style.opacity = "0";
                setTimeout(() => {
                    introOverlay.style.display = "none";
                }, 800);
            }
        }
    }, 20); // Adjust duration speed as needed
});