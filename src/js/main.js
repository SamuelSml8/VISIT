// MENU ***** By*JR*
const searchButton = document.getElementById("search-button");
const searchClose = document.getElementById("search-close");
const searchContent = document.getElementById("search-content");
const changeThemeBtn = document.querySelector(".change-theme");


// SHOW MENU ***** By*JR*
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

//  MENU HIDDEN ***** By*JR*
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*  ***** LOGIN JS ***** By*JR* */

// JSON ITERATOR HOTELS
const urlHotels = "http://localhost:3000/hotels";

async function hotelsCardsRecomended() {
  const response = await fetch(urlHotels);
  const hoteles = await response.json();
  console.log(hoteles);
  hoteles.forEach((hotel) => {
    const hotelCards = document.querySelector(".slide-track");
    const { hotel_name, avg_price, img_hotel } = hotel;
    hotelCards.innerHTML += `
    <div class="slide">
            <img src="${img_hotel}" alt />
            <a href class="name-hotel">${hotel_name}</a>
            <p class="price-hotel">$${avg_price}</p>
            <div class="hotel-link">
              <div class="stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>

              <a href="" class="link-explore-hotel">Explore</a>
            </div>
          </div>
    `;
  });
}

hotelsCardsRecomended();

// JSON ITERATOR EVENTS

const urlEvents = "http://localhost:3000/events";

// async function eventsRecomended() {
//   const response = await fetch(urlEvents);
//   const data = await response.json();
  
//   const eventCards = document.querySelector("#eventosCards");
//   data.forEach((event) => {
//     // const { event_name, img_event } = event;
//     eventCards.innerHTML += `
//     <div class="swiper-slide">
//     <img alt="${event.event_name}" src="${event.img_event}"/>
//   </div>
//   `
//   })
// }



// MODO OSCURO
changeThemeBtn.addEventListener("click", () => {
  const html = document.querySelector("html");
  const isDark = html.getAttribute("data-theme");

  const sunBtn = document.querySelector("#light-btn");
  const moonBtn = document.querySelector("#dark-btn");
  moonBtn.classList.add("hidden");

  if (isDark === "dark") {
    html.setAttribute("data-theme", "light");
    moonBtn.classList.remove("hidden");
    sunBtn.classList.add("hidden");
  } else {
    html.setAttribute("data-theme", "dark");
    moonBtn.classList.add("hidden");
    sunBtn.classList.remove("hidden");
  }
});

const options = { origin: "top", distance: "60px", duration: 2500, delay: 50 };

ScrollReveal().reveal(".home-section", options);
ScrollReveal().reveal(".carrousel-towns", options);
ScrollReveal().reveal(".baner-hotels", options);
ScrollReveal().reveal(".carrusel-infinito", options);
ScrollReveal().reveal(".baner-hotels", options);
ScrollReveal().reveal(".container-items", options);
ScrollReveal().reveal(".baner-hotels", options);
ScrollReveal().reveal(".container-baner-services", options);
ScrollReveal().reveal(".events", options);
ScrollReveal().reveal(".baner-hotels", options);
ScrollReveal().reveal(".food-drinks", options);
