// Seleccionamos del login.html el elemento id LoginForm mediante querySelector para agregarle un evento tipo submit con una arrow function para guardar los valores ingresados en los input "username" y "password" en sus respectivas variables. Usamos localStorage para simular una base de datos, validamos que el usuario y la contraseña coincidan, de ser así salta una alerta al usuario dandole la bienvenida a VISIT, agregamos un usuario logueado al localStorage para permitirle pasar al home y lo redireccionamos al index.

const loginForm = document.querySelector(`#loginForm`);
loginForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const username = document.querySelector(`#username`).value;
  const password = document.querySelector(`#password`).value;

  const Users = JSON.parse(localStorage.getItem(`users`)) || [];
  const validUser = Users.find(
    (user) => user.username === username && user.password === password
  );
  if (!validUser) {
    return alert(`Usuario o contraseña incorrecta`);
  }

  alert(`Bienvenido a Visit`);
  localStorage.setItem(`login_success`, JSON.stringify(validUser));
  window.location.href = `/VISITANTIOQUIA-CODE/src/html/index.html`;
});
