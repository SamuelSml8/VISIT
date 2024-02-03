// SELECTORS
const loginButton = document.getElementById("login-button");
const loginClose = document.getElementById("login-close");
const loginContent = document.getElementById("login-content");

// SHOW LOGIN
if (loginButton) {
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    loginContent.classList.add("show-login");
  });
}

//  LOGIN HIDDEN
if (loginClose) {
  loginClose.addEventListener("click", (e) => {
    e.preventDefault();
    loginContent.classList.remove("show-login");
  });
}

// VALIDATION
const urlUsers = "http://localhost:3000/users";

// SELECTORS
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector("#login-email");
const passwordInput = document.querySelector("#login-password");

loginForm.addEventListener("submit", loginValidation);

async function getUsers() {
  const response = await fetch(urlUsers);
  const data = await response.json();
  return data;
}

async function loginValidation() {
  let isLogin = false;
  let userName = '';
  const users = await getUsers();
  console.log(users);

  users.forEach((user) => {
    const {name} = user;
    if (
      emailInput.value === user.email &&
      passwordInput.value === user.password
    ) {
      isLogin = true;
      userName = name
    }

    if (emailInput.value == "" || passwordInput.value == "") {
      isLogin = false;
    }
  });

  if (isLogin) {
    // alert(`WELCOME ${userName}`);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "WELCOME TO VISIT",
      text: `We will be your bestfriend, ${userName}.`,
      showConfirmButton: false,
      timer: 2500
    });
  }

  if (!isLogin) {
    alert("BAD");
  }
}
