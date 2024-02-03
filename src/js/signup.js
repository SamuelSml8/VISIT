// Seleccionamos el formulario de registro y lo guardamos en una variable para darle un evento tipo submit, junto con una arrow function a la cual le pasamos el evento, obtenemos los valores ingresados por el usuario para Username y Password para agregarlos posteriormente a la base de datos que simulamos dónde guardamos los usuarios. Validamos si el usuario ya está registrado mediante al username, el cual es único, de ser verdadero enviamos una alerta con el mensaje "El usuario ya está registrado" y de lo contrario hacemos push y agregamos un objeto con las llaves valor de name, username y password correspondientes diligenciadas en el formulario de registro. Por último enviamos un alert de registro exitoso y redireccionamos al login.hmtml

// const signupForm = document.querySelector(`#signupForm`);
// signupForm.addEventListener(`submit`, (e) => {
//   e.preventDefault();
//   const name = document.querySelector(`#name`).value;
//   const username = document.querySelector(`#username`).value;
//   const password = document.querySelector(`#password`).value;

//   const Users = JSON.parse(localStorage.getItem(`users`)) || [];

//   const isUserRegistered = Users.find((user) => user.username === username);
//   if (isUserRegistered) {
//     return alert(`El usuario ya está registrado`);
//   }

//   Users.push({
//     name: name,
//     username: username,
//     password: password,
//   });

//   localStorage.setItem(`users`, JSON.stringify(Users));
//   alert(`Registro exitoso`);
//   //   REDIRECCIÓN A LOGIN
//   window.location.href = `/VISIT/VISITANTIOQUIA-CODE/src/html/login.html`;
// });
