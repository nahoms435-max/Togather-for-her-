document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const progressBar = document.getElementById("progress-bar");
    const introOverlay = document.getElementById("intro-overlay");
    let count = 0;

    const updateCounter = setInterval(() => {
        count += 1;
        if (counterElement) counterElement.textContent = count;
        if (progressBar) progressBar.style.width = count + "%";

        if (count >= 100) {
            clearInterval(updateCounter);

            if (typeof gsap !== "undefined") {
                gsap.to("#intro-overlay", {
                    duration: 1,
                    opacity: 0,
                    y: "-100%",
                    ease: "power3.inOut",
                    onComplete: () => {
                        introOverlay.style.display = "none";
                    }
                });
            } else if (introOverlay) {
                introOverlay.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                introOverlay.style.opacity = "0";
                introOverlay.style.transform = "translateY(-100%)";
                setTimeout(() => {
                    introOverlay.style.display = "none";
                }, 800);
            }
        }
    }, 15);
});