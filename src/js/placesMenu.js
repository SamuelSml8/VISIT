let datosRestaurante = [
  {
    imagen: "/img/places/restaurantes/res1.png",
    plato: "mariscos",
    link: "https://ancla.tumenu.co/",
  },
  {
    imagen: "/img/places/restaurantes/res2.png",
    plato: "calamares",
    link: "https://es.restaurantguru.com/Calamares-Ocean-Food-Barranquilla-2",
  },
  {
    imagen: "/img/places/restaurantes/res3.png",
    plato: "calamares",
    link: "https://es.restaurantguru.com/Calamares-Ocean-Food-Barranquilla-2",
  },
];

const url = "http://localhost:3000";

let restaurantPlate;
let contenedorRes;
let ultimoId = -1;

function obtenerIdAleatorio(datos) {
  const longitudDatos = datos.length;
  if (longitudDatos === 1) {
    return 0;
  }

  let indiceAleatorio;

  do {
    indiceAleatorio = Math.floor(Math.random() * longitudDatos);
  } while (indiceAleatorio === ultimoId);

  ultimoId = indiceAleatorio;

  return indiceAleatorio;
}

function cambiarContenido(opcion) {
  let cardTown = document.querySelector(".contenedor-img");
  switch (opcion) {
    case "to-get":
      cardTown.innerHTML = '<iframe class="maps-i" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.246931413323!2d-75.1607109742877!3d6.231142776490212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e441d2972edf1bb%3A0xc8e9c49c096f7adc!2sGuatape%2C%20Guatap%C3%A9%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1707309265249!5m2!1ses!2sco"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
      break;

    case "eat":
      cardTown.innerHTML = ` 
        <div class="contenedor-res">
          <div class="galeria">
            <div class="imagenPlatos">
              <img src="/img/places/restaurantes/res1.png">
            </div>
            <div class="textPlatos">
              <h2>ANCLA mare & tierra</h2>
              <button class="visitRestaurant restaurantBtn"><a href="https://www.instagram.com/anclamareyterra/" target="_blank">Visitar</a></button>
              <button class="nextBtn restaurantBtn">Next</button>
            </div>
          </div>
        </div>`;
      galeria = document.querySelector(".galeria");
      break;

    case "to-do":
      cardTown.innerHTML = ` <div class="contenedor-lug">
      <div class="lugares">
          
         
            <div class="textLug"><h2>Malecon</h2></div>

            <div class="pLugares"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero iure vitae, omnis ratione iste itaque soluta voluptate et, cumque quia illo molestiae veniam rerum dicta accusantium, dolorem nobis animi ipsum?</p></div>

            <div class="botonLugares" ><button class="btonS">Siguiente</button></div>

          
          
          <div class="imagenLugar"><img src="/img/places/lugares/malecon.jpeg"></div>
        </div>
    </div>`;
      break;

    case "celebration":
      cardTown.innerHTML = ` <div class="contenedor-lug">
      <div class="Celebration">
          <div class="textCelebration"><h2>Fiesta Zócalos, Flores, Silletas y Colores</h2></div>
          <div class="pCelebration"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero iure vitae, omnis ratione iste itaque soluta voluptate et, cumque quia illo molestiae veniam rerum dicta accusantium, dolorem nobis animi ipsum?</p></div>
        </div>
    </div>`;

      break;

    default:
      break;
  }

  if (galeria != undefined) {
    galeria.addEventListener("click", function (event) {
      if (event.target.classList.contains("nextBtn")) {
        let id = obtenerIdAleatorio(datosRestaurante);
      galeria.innerHTML = "";
      galeria.innerHTML = `
      <div class="imagenPlatos">
        <img src="${datosRestaurante[id].imagen}">
      </div>
      <div class="textPlatos">
        <h2>${datosRestaurante[id].plato}</h2>
        <button class="visitRestaurant restaurantBtn"><a href="${datosRestaurante[id].link}" target="_blank">Visitar</a></button>
        <button class="nextBtn restaurantBtn">Next</button>
      </div>
      `;
      }
    });
  }
}
