// SEARCH
const searchButton = document.getElementById("search-button");
const searchClose = document.getElementById("search-close");
const searchContent = document.getElementById("search-content");
const changeThemeBtn = document.querySelector(".change-theme");

// SHOW SEARCH
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

//  SEARCH HIDDEN
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

// JSON ITERATOR HOTELS
const urlHotels = "http://localhost:3000/hotels";

async function hotelsCardsRecomended() {
  try {
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
  } catch (error) {
    console.log({
      Ok: false,
      Type: TypeError,
      Error: error,
    });
  }
}
hotelsCardsRecomended();

// JSON ITERATOR EVENTS
const urlEvents = "http://localhost:3000/events";

async function eventsRecomended() {
  try {
    const response = await fetch(urlEvents);
    const data = await response.json();
    data.forEach((event) => {
      const eventCards = document.querySelector("#eventsCards");
      const { event_name, img_event } = event;
      eventCards.innerHTML += `
      <div class="swiper-slide">
        <img alt="${event_name}" src="${img_event}"/>
      </div>
  `;
    });
  } catch (error) {
    console.log({
      Ok: false,
      Type: TypeError,
      Error: error,
    });
  }
}
eventsRecomended();

// JSON ITERATOR RESTAURANTS
const urlRestaurants = "http://localhost:3000/restaurants";

async function restaurantsRecomended() {
  try {
    const response = await fetch(urlRestaurants);
    const data = await response.json();
    data.forEach((restaurant) => {
      const restaurantGrid = document.querySelector("#restaurantGrid");
      const { img_restaurant, restaurant_name } = restaurant;
      restaurantGrid.innerHTML += `
      <div class="card-restaurant" id="item-1">
        <img src="${img_restaurant}" alt="${restaurant_name}"/>
      <div class="mask"></div>
        <div class="heart-icons">
          <i class="ri-heart-line"></i>
          <i class="ri-heart-fill"></i>
        </div>
        <div class="item-body">
          <h3>Nombre del restaurante</h3>
          <div>
            <i class="ri-star-fill"></i>
            4.9
          </div>
        </div>
      </div>
  `;
    });
  } catch (error) {
    console.log({
      Ok: false,
      Type: TypeError,
      Error: error,
    });
  }
}
restaurantsRecomended();

// TOWNS SECTION ITERATION (6)
const imgs = ['/public/img/towns/1.png','/public/img/towns/2.png','/public/img/towns/3.png','/public/img/towns/4.png','/public/img/towns/5.png','/public/img/towns/6.png']

const swiperTowns = document.querySelector('#swiper-towns')
for (let s = 0; s < imgs.length; s++) {
  swiperTowns.innerHTML += `
  <div class="swiper-slide">
  <img src="${imgs[s]}" alt="" />
  </div>
  `
}

// JSON ITERATION SERVICES

const urlServices = 'http://localhost:3000/services'

async function servicesVisit(){
  const response = await fetch(urlServices);
  const data = await response.json()
  const banerServices = document.querySelector("#services")
  data.forEach(service => {
    const {class_icon, title, text} = service
    banerServices.innerHTML += `
    <div class="item-services-text">
    <i class="${class_icon}"></i>
    <h3 class="item-tittle-services">${title}</h3>
    <p class="text-baner-item-services">
      ${text}
    </p>
  </div>
    `
  });
}
servicesVisit()

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