const el = document.getElementById("typewriter");
const texts = ["Studio Prisma", "Moda Expert"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const full = texts[i];

  if (isDeleting) {
    current = full.substring(0, j--);
  } else {
    current = full.substring(0, j++);
  }

  el.textContent = current;
  el.classList.add("cursor");

  let speed = isDeleting ? 80 : 120;

  if (!isDeleting && j === full.length + 1) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();

document.addEventListener("DOMContentLoaded", () => {
  const circle = document.querySelector(".circle");
  const title = circle.querySelector("h4");
  const text = circle.querySelector("p");

  const contents = {
    Descoberta:
      "Explorar novas ideias e caminhos que podem transformar projetos em algo único.",
    Pesquisa:
      "Investigar e analisar profundamente para encontrar soluções sólidas e eficazes.",
    Designing:
      "Transformar conceitos em formas visuais e funcionais que encantam e resolvem.",
    Ajustes:
      "Refinar detalhes até alcançar o equilíbrio perfeito entre estética e eficiência.",
  };

  const iconAreas = document.querySelectorAll(".icon-area");

  iconAreas.forEach((area) => {
    area.addEventListener("click", () => {
      const selectedTitle = area.querySelector("h3").textContent;
      title.textContent = selectedTitle;
      text.textContent = contents[selectedTitle] || "Conteúdo em breve...";

      iconAreas.forEach((a) =>
        a.querySelector(".icon").classList.remove("active")
      );

      area.querySelector(".icon").classList.add("active");
    });
  });
});

// === JS para mover o carrossel ===
document.addEventListener("DOMContentLoaded", () => {
  const area = document.querySelector(".carrossel-area");

  // Criar estrutura
  area.innerHTML = `
    <button class="carrossel-control prev">&laquo;</button>
    <div class="carrossel-track">
      <div class="carrossel-item"><img src="./assets/images/item-1.webp" alt="item 1"></div>
      <div class="carrossel-item"><img src="./assets/images/item-2.webp" alt="item 2"></div>
      <div class="carrossel-item"><img src="./assets/images/item-3.webp" alt="item 3"></div>
      <div class="carrossel-item"><img src="./assets/images/item-4.webp" alt="item 4"></div>
      <div class="carrossel-item"><img src="./assets/images/item-5.webp" alt="item 5"></div>
    </div>
    <button class="carrossel-control next">&raquo;</button>
  `;

  const track = area.querySelector(".carrossel-track");
  const items = area.querySelectorAll(".carrossel-item");
  const prev = area.querySelector(".prev");
  const next = area.querySelector(".next");

  const totalItems = items.length;
  const visibleItems = 3;
  let index = 0;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  prev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  next.addEventListener("click", () => {
    if (index < totalItems - visibleItems) {
      index++;
      updateCarousel();
    }
  });

  updateCarousel();
});
