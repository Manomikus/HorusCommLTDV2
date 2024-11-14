document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.animation = `bounce 1.5s ${index * 0.3}s infinite alternate ease-in-out`;
      }, index * 300);
    });
  });
  