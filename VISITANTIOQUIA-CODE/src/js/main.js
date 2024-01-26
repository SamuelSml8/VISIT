// Home principal de visit al cual no se puede ingresar en caso de no estar logueado (función temporal). validamos si hay un usuario logueado y de no ser así, automaticamente se redirecciona al Login. Dado el caso que el inicio de sesión sea correcto, una vez dentro del index.html (HOME) tenemos un botón con id logout, lo seleccionamos usando el querySelector, le damos un evento tipo click junto con una arrow function que nos remueva el item de usuario logueado y automaticamente redireccionamos al login.

//  START LOGIN
const user = JSON.parse(localStorage.getItem(`login_success`)) || false;
if (!user) {
  window.location.href = `/VISIT/VISITANTIOQUIA-CODE/src/html/login.html`;
}

const logout = document.querySelector(`#logout`);
logout.addEventListener(`click`, () => {
  alert(`Hasta pronto!`);
  localStorage.removeItem(`login_success`);
  window.location = `/VISIT/VISITANTIOQUIA-CODE/src/html/login.html`;
});
// END LOGIN

//carrousel
// Obtener referencias a los elementos del carrusel
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselInner = document.querySelector(".carousel-inner");

// Manejar clic en los elementos del carrusel
carouselItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    moveToIndex(index);
  });
});

// Función para mover el carrusel al ítem indicado
function moveToIndex(index) {
  const translateValue = `-${index * (100 / carouselItems.length)}%`;
  carouselInner.style.transform = `translateX(${translateValue})`;

  carouselItems.forEach((item) => item.classList.remove("active"));
  carouselItems[index].classList.add("active");

  const title = carouselItems[index].dataset.title;
  const description = carouselItems[index].dataset.description;

  const imgUrl = carouselItems[index].querySelector("img").src;
  document.querySelector(
    ".main-section"
  ).style.backgroundImage = `url(${imgUrl})`;

  document.querySelector(".content h1").textContent = title;
  document.querySelector(".content p").textContent = description;
}

// Función para mover la card al centro
function moveToCenter(index) {
  const cardWidth = cards[0].offsetWidth;
  const displacement = (index - Math.floor(cards.length / 2)) * cardWidth;

  carrousel.style.transition = "transform 0.5s ease-in-out";
  carrousel.style.transform = `translateX(-${displacement}px)`;

  cards.forEach((card, i) => {
    card.style.transition = "transform 0.5s ease-in-out";
    card.style.transform = i === index ? "scale(1.2)" : "scale(1)";
  });
}
  // Restablece la posición después de la transición
  // setTimeout(() => {
  //   carrousel.style.transition = "none";
  //   cards.forEach((card, i) => {
  //     card.style.transition = "none";
  //     card.style.transform = i === index ? "scale(1.2)" : "scale(1)";
  //   });

    // Mueve las tarjetas al principio o al final según sea necesario
  //   if (index === 0) {
  //     moveToBeginning();
  //   } else if (index === cards.length - 1) {
  //     moveToEnd();
  //   }
  // }, 500);

// Función para mover las tarjetas al principio
function moveToBeginning() {
  const lastCard = duplicatedCards[duplicatedCards.length - 1];
  carrousel.insertBefore(lastCard.cloneNode(true), carrousel.firstChild);
  carrousel.removeChild(lastCard);
  updateCardIndexes();
  carrousel.style.transform = `translateX(-${cards[0].offsetWidth}px)`;
}

// Función para mover las tarjetas al final
function moveToEnd() {
  const firstCard = duplicatedCards[0];
  carrousel.appendChild(firstCard.cloneNode(true));
  carrousel.removeChild(firstCard);
  updateCardIndexes();
  carrousel.style.transform = `translateX(0)`;
}

// Función para actualizar los índices de las tarjetas
function updateCardIndexes() {
  cards.forEach((card, index) => {
    card.dataset.index = index;
  });
}

// Inicializa el carrusel
// moveToCenter(0);

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".destinos-grid");
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex =
      (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * (100 + 30) + "px"; // Ajusta el valor del margen entre tarjetas
    slider.style.transform = "translateX(" + translateValue + ")";
  }

  // Automatic sliding every 3 seconds (adjust as needed)
  setInterval(nextSlide, 3000);

});

const urlHotels = 'http://localhost:4002/hotels';

async function hotelsCardsRecomended() {
  const response = await fetch(urlHotels);
  const hoteles = await response.json();
  console.log(hoteles);
  if(hoteles && hoteles.length > 0){
      hoteles.forEach((hotel) => {
    const hotelCards = document.querySelector('.slide-track');
    const { hotel_name, avg_price, img_hotel } = hotel;
    hotelCards.innerHTML += `
    <div class="slide">
    <img
      src="${img_hotel}"
      alt="Hotel image"
    />
    <a href class="name-hotel">${hotel_name}</a>
    <p class="price-hotel">$${avg_price}</p>
    <div class="hotel-link">
      <button href="#" class="button-explore-hotels">Explore</button>
      <i class="ri-price-tag-3-line button-icon"></i>
      <i class="ri-heart-line button-icon"></i>
    </div>
  </div>
    `;
  });
  }else{
    console.log(error)
  }

}
hotelsCardsRecomended()
