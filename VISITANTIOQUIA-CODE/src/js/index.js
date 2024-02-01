 // MENU ***** By*JR*
 const searchButton = document.getElementById("search-button");
 const searchClose = document.getElementById("search-close");
 const searchContent = document.getElementById("search-content");

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


  // SHOW LOGIN ***** By*JR*
  const loginButton = document.getElementById("login-button");
  const loginClose = document.getElementById("login-close");
  const loginContent = document.getElementById("login-content");

  // SHOW LOGIN ***** By*JR*
  if (loginButton) {
    loginButton.addEventListener("click", () => {
      loginContent.classList.add("show-login");
    });
  }

  //  LOGIN HIDDEN ***** By*JR*
  if (loginClose) {
    loginClose.addEventListener("click", () => {
      loginContent.classList.remove("show-login");
    });
  };

//   ***** CARRUSEL MANUELA PUEBLOS ***** By*JR*

  var swiper = new Swiper(".mySwiper-towns", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





