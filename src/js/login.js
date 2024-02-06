// SELECTORS
// LOGIN
const loginButton = document.getElementById("login-button");
const loginClose = document.getElementById("login-close");
const loginContent = document.getElementById("login-content");
// SIGNUP
const signUp = document.querySelector("#signUp");
const signUpContent = document.getElementById("signUp-content");
const signUpClose = document.getElementById("signUp-close");
const haveAccount = document.querySelector("#haveAccount");
// GET STARTED
const getStarted = document.querySelector('#getStarted')

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
// SHOW SIGN UP
if (signUp) {
  signUp.addEventListener("click", (e) => {
    e.preventDefault();
    signUpContent.classList.add("show-signup");
  });
}

if(getStarted){
  getStarted.addEventListener("click", e => {
    e.preventDefault();
    signUpContent.classList.add("show-signup")
  })
}

// SIGN UP HIDDEN
if (signUpClose) {
  signUpClose.addEventListener("click", (e) => {
    e.preventDefault();
    signUpContent.classList.remove("show-signup");
  });
}

if (haveAccount) {
  haveAccount.addEventListener("click", (e) => {
    e.preventDefault();
    signUpContent.classList.remove("show-signup");
  });
}

// VALIDATION
const urlUsers = "http://localhost:3000/users";

// SELECTORS
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector("#login-email");
const passwordInput = document.querySelector("#login-password");

// EVENT LOGIN BUTTON
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginValidation();
});

// REQUEST DB SIMULATION
async function getUsers() {
  const response = await fetch(urlUsers);
  const data = await response.json();
  return data;
}

// VALIDATION FIELDS
async function loginValidation() {
  let isLogin = false;
  let userName = "";
  const users = await getUsers();
  console.log(users);
  if (emailInput.value == "" || passwordInput.value == "") {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Opps...",
      text: `Fields required`,
      showConfirmButton: false,
      timer: 2500,
    });
    return;
  }
  users.forEach((user) => {
    const { name } = user;

    if (
      emailInput.value === user.email &&
      passwordInput.value === user.password
    ) {
      isLogin = true;
      userName = name;
    }
  });

  if (isLogin) {
    // console.log(isLogin);
    await Swal.fire({
      position: "center",
      icon: "success",
      title: "WELCOME TO VISIT",
      text: `We will be your bestfriend, ${userName}.`,
      showConfirmButton: false,
      timer: 2500,
    });
    window.location = "/index.html";
  } else {
    console.log(isLogin);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Opps...",
      text: `Email or password incorrect`,
      showConfirmButton: false,
      timer: 2500,
    });
  }
}

// SIGN UP
const signUpForm = document.querySelector(".signUp-form");
const nameRegisterInput = document.querySelector("#signUp-name");
const emailRegisterInput = document.querySelector("#signUp-email");
const passwordRegisterInput = document.querySelector("#signUp-password");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    name: nameRegisterInput.value,
    email: emailRegisterInput.value,
    password: passwordRegisterInput.value,
  };
  await registerValidation(user);
});

async function createAccount(user) {
  const response = await fetch(urlUsers, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

async function registerValidation(user) {
  const response = await fetch(urlUsers);
  const users = await response.json();

  for (const userDb of users) {
    const { email } = userDb;
    if (email === user.email) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Opps...",
        text: `Account already created`,
        showConfirmButton: false,
        timer: 2500,
      });
      return;
    }
  }

  if (user.name === "" || user.email === "" || user.password === "") {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Opps...",
      text: `Fields required`,
      showConfirmButton: false,
      timer: 2500,
    });
    return;
  } else {
    await createAccount(user);
    await Swal.fire({
      position: "center",
      icon: "success",
      title: "WELCOME TO VISIT",
      text: `We will be your bestfriend`,
      showConfirmButton: false,
      timer: 2500,
    });
    signUpContent.classList.remove("show-signup");
    console.log(user);
  }
}