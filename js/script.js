document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu responsivo
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }

  // Slideshow do hero
  const images = [
    'img/slide1.jpg',
  ];

  let current = 0;
  const bg = document.querySelector('.hero-background');

  // Pré-carregar imagens
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  if (bg) {
    bg.style.backgroundImage =
      `linear-gradient(rgba(15,46,32,0.7), rgba(15,46,32,0.7)), url(${images[current]})`;

    setInterval(() => {
      current = (current + 1) % images.length;
      bg.style.opacity = 0;
      setTimeout(() => {
        bg.style.backgroundImage =
          `linear-gradient(rgba(15,46,32,0.7), rgba(15,46,32,0.7)), url(${images[current]})`;
        bg.style.opacity = 1;
      }, 800);
    }, 6000);
  }
});
