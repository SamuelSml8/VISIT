const urlTowns = "http://localhost:3000/towns";

// BUSCADOR HOTELEES
// AGREGAR LUGAR / HOTEL

const searchBtn = document.querySelector("#search-form");
searchBtn.addEventListener("click", searchTown);

function searchTown() {
  const inputSearch = document.querySelector(".search-input").value;
  console.log(inputSearch);
}

// JSON ITERATOR TOWNS
async function townsCards() {
  try {
    const response = await fetch(urlTowns);
    const pueblos = await response.json();
    const cardsPlaces = document.querySelector(".container-cards-places");
    pueblos.forEach((pueblo) => {
      const { name, calification, avg_price, description_town } = pueblo;
      cardsPlaces.innerHTML += `
    <div class="card-places-grid">
    <div>
      <img src="/public/img/towns/1.png" alt="" />
    </div>
    <div class="card-info">
      <div class="description-card">
        <h3 class="tittle">${name} <span class="poitn-title">.</span></h3>
        <p>"${description_town}."</p>
      </div>
      <div class="rating">
        <span class="price"
          ><i class="ri-price-tag-3-fill"></i> $${avg_price}</span
        >
        <div class="rate-price">
          <span class="rate"
            >${calification} <i class="ri-star-s-fill"></i
          ></span>
        </div>
        <h4><i class="ri-map-pin-line"></i> 100 KM</h4>
      </div>
      <div class="links-card-destinations"></div>
      <div class="explore-location">
        <a href="/src/components/townspage/townpage.html" class="explore">Explore</a>
      </div>
    </div>
  </div>
    `;
    });
    console.log("prueba");
  } catch (error) {
    console.log({
      Ok: false,
      Type: TypeError,
      Error: error,
    });
  }
}
townsCards();
