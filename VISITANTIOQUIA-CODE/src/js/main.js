// Home principal de visit al cual no se puede ingresar en caso de no estar logueado (función temporal). validamos si hay un usuario logueado y de no ser así, automaticamente se redirecciona al Login. Dado el caso que el inicio de sesión sea correcto, una vez dentro del index.html (HOME) tenemos un botón con id logout, lo seleccionamos usando el querySelector, le damos un evento tipo click junto con una arrow function que nos remueva el item de usuario logueado y automaticamente redireccionamos al login.

const user = JSON.parse(localStorage.getItem(`login_success`)) || false;
if (!user) {
  window.location.href = `/VISITANTIOQUIA-CODE/src/html/login.html`;
}

const logout = document.querySelector(`#logout`);
logout.addEventListener(`click`, () => {
  alert(`Hasta pronto!`);
  localStorage.removeItem(`login_success`);
  window.location = `/VISITANTIOQUIA-CODE/src/html/login.html`;
});
