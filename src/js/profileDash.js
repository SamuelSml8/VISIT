const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMenu = document.querySelectorAll(".enlace")

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("bx-menu")){
        iconoMenu.classList.replace("bx-menu", "bx-x")
    }else {
        iconoMenu.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("bx-menu", "bx-x")
    })
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        // Remover la clase 'seleccionado' de todos los enlaces
        enlacesMenu.forEach(e => e.classList.remove("seleccionado"));

        // Agregar la clase 'seleccionado' al enlace clickeado
        enlace.classList.add("seleccionado");

        // Cerrar el menú después de hacer clic en un enlace (opcional)
        menuDashboard.classList.remove("open");
        iconoMenu.classList.replace("bx-x", "bx-menu");
    });
});

enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      // Restaurar el contenido dinámico aquí según el enlace seleccionado
      const pageId = enlace.textContent
        .toLowerCase()
        .trim()
        .replace(" ", "-");
      mostrarPagina(pageId);
    });
  });

  function mostrarPagina(pageId) {
    // Ocultar todas las páginas
    document.querySelectorAll(".dashboard-page").forEach(page => {
      page.style.display = "none";
    });
  
    // Mostrar la página correspondiente al enlace seleccionado
    const selectedPage = document.getElementById(pageId + "-page");
    if (selectedPage) {
      selectedPage.style.display = "block";
    }
  }