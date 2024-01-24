// Home principal de visit al cual no se puede ingresar en caso de no estar logueado (función temporal). validamos si hay un usuario logueado y de no ser así, automaticamente se redirecciona al Login. Dado el caso que el inicio de sesión sea correcto, una vez dentro del index.html (HOME) tenemos un botón con id logout, lo seleccionamos usando el querySelector, le damos un evento tipo click junto con una arrow function que nos remueva el item de usuario logueado y automaticamente redireccionamos al login.

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

      // Manejar clic en la flecha izquierda
      document
        .querySelector(".carousel-control-prev")
        .addEventListener("click", () => {
          const currentIndex = Array.from(carouselItems).findIndex((item) =>
            item.classList.contains("active")
          );
          const newIndex =
            (currentIndex - 1 + carouselItems.length) % carouselItems.length;
          moveToIndex(newIndex);
        });

      // Manejar clic en la flecha derecha
      document
        .querySelector(".carousel-control-next")
        .addEventListener("click", () => {
          const currentIndex = Array.from(carouselItems).findIndex((item) =>
            item.classList.contains("active")
          );
          const newIndex = (currentIndex + 1) % carouselItems.length;
          moveToIndex(newIndex);
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


      // Referencias a elementos del carrusel
      const carrousel = document.getElementById("carrousel-events");
      const container = document.getElementById("container-carrousel-events");
      const cards = Array.from(document.querySelectorAll(".card"));

      // Agrega las tarjetas duplicadas al principio y al final
      const duplicatedCards = cards.map((card, index) => card.cloneNode(true));

      carrousel.innerHTML = "";
      duplicatedCards.forEach((card) => carrousel.appendChild(card));

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

        // Restablece la posición después de la transición
        setTimeout(() => {
          carrousel.style.transition = "none";
          cards.forEach((card, i) => {
            card.style.transition = "none";
            card.style.transform = i === index ? "scale(1.2)" : "scale(1)";
          });

          // Mueve las tarjetas al principio o al final según sea necesario
          if (index === 0) {
            moveToBeginning();
          } else if (index === cards.length - 1) {
            moveToEnd();
          }
        }, 500);
      }

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
      moveToCenter(0);