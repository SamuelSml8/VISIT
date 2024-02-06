const navbar = document.querySelector(`#header`);

navbar.innerHTML = `
<nav class="nav-bar">
        <a href="#home" class="logo-nav">
          <img src="/public/img/logo.png" alt id="logo-nav" />
        </a>
        <div class="menu-nav">
          <ul class="list-nav">
            <li class="item-nav">
              <a
                href="../foodDrink/foodDrink.html"
                class="link-nav link-home-closed"
              >
                <i class="ri-home-fill"></i>
                <span data-i18n="home">HOME</span>
              </a>
            </li>

            <li class="item-nav">
              <a href="#places" class="link-nav">
                <i class="ri-road-map-line"></i>
                <span>Places</span>
              </a>
            </li>

            <li class="item-nav">
              <a href="#hotels" class="link-nav">
                <i class="ri-hotel-line"></i>
                <span>Hotels</span>
              </a>
            </li>

            <li class="item-nav">
              <a href="#events" class="link-nav">
                <i class="ri-calendar-event-line"></i>
                <span>Events</span>
              </a>
            </li>

            <li class="item-nav">
              <a href="#food" class="link-nav">
                <i class="ri-restaurant-line"></i>
                <span data-i18n="food_drink">Food & Drink</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="actions-nav">
          <!--***** BUTTON SEARCH ***** By*JR*-->
          <i class="ri-search-line" search-button id="search-button"></i>

          <!--***** BUTTON LOGIN ***** By*JR*-->
          <i class="ri-user-line login-button" id="login-button"></i>

          <!--***** BUTTON THEME ***** By*JR*-->
          <div class="change-theme">
            <i class="ri-moon-line" theme-change id="dark-btn"></i>
            <i class="ri-sun-line hidden" id="light-btn"></i>
          </div>

          <!--***** BUTTON LANGUAGE ***** By*JR*-->

          <select title="Seleccione su país">
            <option value="es">Es</option>
            <option value="us">En</option>
          </select>
        </div>
      </nav>
`;