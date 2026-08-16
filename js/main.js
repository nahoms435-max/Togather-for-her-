
const tl = gsap.timeline();


const counterEl = document.getElementById("counter");
const counterObj = { value: 0 };

tl.to(counterObj, {
  value: 100,
  duration: 1.2,
  ease: "power2.inOut",
  onUpdate: () => {
    counterEl.textContent = Math.floor(counterObj.value);
  }
});

tl.to("#counter-screen", {
  opacity: 0,
  duration: 0.2
});


tl.to("#flash-layer", {
  opacity: 1,
  duration: 0.1
}).to("#flash-layer", {
  opacity: 0,
  duration: 0.2
});


const words = ["#word-dignity", "#word-health", "#word-hope"];
words.forEach((word) => {
  tl.to(word, { opacity: 1, scale: 1.1, duration: 0.25, ease: "back.out(1.7)" })
    .to(word, { opacity: 0, scale: 1, duration: 0.15, delay: 0.1 });
});


tl.to("#intro-overlay", {
  opacity: 0,
  duration: 0.4,
  onComplete: () => {
    document.getElementById("intro-overlay").style.display = "none";
  }
});

tl.to("#hero-logo", {
  opacity: 1,
  scale: 1,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.2")
.to("#hero-tagline", {
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out"
}, "-=0.4");


const menuToggle = document.getElementById('menuToggle');
const teamModal = document.getElementById('teamModal');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  teamModal.classList.toggle('active');
  if (teamModal.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});