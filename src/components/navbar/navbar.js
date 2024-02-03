const navbar = document.querySelector(`header`);

navbar.innerHTML = `
<nav class="nav-bar">
        <a href="../../index.html" class="logo-nav">
          <img src="../navbar/img/logo.png" alt id="logo-nav" />
        </a>
        <div class="menu-nav">
          <ul class="list-nav">
            <li class="item-nav">
              <a href class="link-nav">
                <i class="ri-home-line"></i>
                <span>HOTELS</span>
              </a>
            </li>

            <li class="item-nav">
              <a href class="link-nav">
                <i class="ri-hotel-line"></i>
                <span>FOOD & DRINK</span>
              </a>
            </li>

            <li class="item-nav">
              <a href class="link-nav">
                <i class="ri-road-map-line"></i>
                <span>PLACES</span>
              </a>
            </li>

            <li class="item-nav">
              <a href class="link-nav">
                <i class="ri-calendar-event-line"></i>
                <span>EVENTS</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- START SEARCH -->
        <div class="search" id="search-content"></div>
        <!-- END SEARCH -->
        <!-- START LOGIN -->
        <div class="login grid" id="login-content"></div>
        <!-- END LOGIN -->

        <!-- END NAVBAR -->

        <div class="actions-nav">
          <!--* START BUTTON SEARCH -->
          <i class="ri-search-line" search-button id="search-button"></i>
          <!--* END BUTTON SEARCH -->

          <!--* START BUTTON LOGIN -->
          <i class="ri-user-line login-button" id="login-button"></i>
          <!--* END BUTTON LOGIN -->

          <!--* START BUTTON THEME -->
          <i class="ri-moon-line" theme-change id="theme-button"></i>
          <!--* END BUTTON THEME -->

          <!--* START BUTTON LANGUAGE -->
          <i class="ri-english-input" language-button id="change-language"></i>
          <!--* END BUTTON LANGUAGE -->

        </div>
      </nav>
`;
