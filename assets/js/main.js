function enterSite() {
  const loadingScreen = document.querySelector(".loading-screen");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const logo = document.querySelector(".logo");
  let progress = 0;

  // Masque tout le contenu sauf l'écran de chargement
  document.body.classList.add("hidden-content");
  loadingScreen.classList.remove("hidden");

  const loadingInterval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(loadingInterval);

      // Déclenche une animation de disparition et redirige après l'animation
      loadingScreen.classList.add("fadeOut"); // Active la transition de fade-out

      setTimeout(() => {
        window.location.replace("home.html"); // Ou window.location.assign("pages/about.html")
      }, 500);
    } else {
      progress += 5;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;
      logo.style.transform = `rotateY(${progress * 3.6}deg)`;
    }
  }, 100);
}
// Header behaviour

let lastScrollTop = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Gérer l'apparition du header
  if (scrollTop < window.innerHeight && scrollTop > 0) {
    // Le header reste caché dans le bloc hero
    header.classList.add("hidden");
  } else if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scroll Down - Hide Header
    header.classList.add("hidden");
  } else if (scrollTop < lastScrollTop && scrollTop > window.innerHeight) {
    // Scroll Up - Show Header
    header.classList.remove("hidden");
  } else if (scrollTop <= 0) {
    // Retour à la position de départ
    header.classList.remove("hidden");
    header.classList.add("transparent");
  }

  // Ajuster l'opacité selon la position de défilement
  if (scrollTop > window.innerHeight) {
    header.classList.remove("transparent");
    header.classList.add("translucent");
  } else {
    header.classList.remove("translucent");
    header.classList.add("transparent");
  }

  lastScrollTop = scrollTop;
});

// Sélectionner le bouton toggle et le menu de navigation
const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector("header nav");

// Activer/désactiver le menu
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("open"); // Active la croix sur le bouton
  nav.classList.toggle("open-menu"); // Affiche le menu
});

document
  .querySelector(".submit-button")
  .addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)";
    this.style.boxShadow = "0px 8px 20px rgba(81, 165, 244, 0.7)";
  });

document
  .querySelector(".submit-button")
  .addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "0px 4px 15px rgba(81, 165, 244, 0.5)";
  });

// card behaviour
document.addEventListener("DOMContentLoaded", () => {
  const cardContainers = document.querySelectorAll(".card-container");
  const loadingScreen = document.querySelector(".loading-screen");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const logo = document.querySelector(".logo");

  cardContainers.forEach((card) => {
    card.addEventListener("click", () => {
      // Retire l'effet des autres cartes
      cardContainers.forEach((c) => c.classList.remove("active"));

      // Applique la classe active pour l'effet de zoom et de rotation
      card.classList.add("active");

      setTimeout(() => {
        // Masque la carte après l'animation
        card.style.opacity = "0";
        100;

        // Affiche l'écran de chargement après la disparition de la carte
        loadingScreen.classList.remove("hidden");

        // Animation de la barre de chargement
        let progress = 0;
        const loadingInterval = setInterval(() => {
          progress += 2;
          progressBar.style.width = `${progress}%`;
          progressText.innerText = `${progress}%`;
          logo.style.transform = `rotateY(${progress * 3.6}deg)`;

          if (progress >= 100) {
            clearInterval(loadingInterval);
            // Redirige vers la page de service une fois le chargement terminé
            const serviceUrl = card.getAttribute("data-service-url");
            if (serviceUrl) {
              window.location.href = serviceUrl;
            }
          }
        }, 30); // Ajustez la vitesse de l'animation de chargement ici
      }, 1000); // Délai pour l'animation de la carte
    });
  });
});

// Effet de particules
const particlesContainer = document.getElementById("particles-js");
for (let i = 0; i < 50; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${2 + Math.random() * 3}s`;
  particlesContainer.appendChild(particle);
}

// partner
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
