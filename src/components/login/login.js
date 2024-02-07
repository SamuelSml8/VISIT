// START DINAMIC LOGIN
const loginContent = document.querySelector("#login-content");

loginContent.innerHTML = `
<form action class="login-form grid">
<h3 class="login-title">Login</h3>
<div class="login-group grid">
  <div>
    <label for="login-email" class="login-label">Email</label>
    <input
      type="email"
      placeholder="Write your email"
      id="login-email"
      class="login-input"
    />
  </div>

  <div>
    <label for="login-password" class="login-label">Password</label>
    <input
      type="password"
      placeholder="Enter your password"
      id="login-password"
      class="login-input"
    />
  </div>
</div>

<div class="forgot">
  <span class="login-signup">
    You do not have an account? <a href="#" id="signUp">Sign up</a>
  </span>

  <a href="/src/html/forgotPass.html" class="login-forgot">
    You forgot your password
  </a>

  <button type="submit" id="loginBtn" class="login-button button">
    Login
  </button>
</div>
</form>

<i class="ri-close-line login-close" id="login-close"></i>
`;
// END DINAMIC LOGIN

// START DINAMIC SIGNUP
const signUpContent = document.querySelector("#signUp-content");

signUpContent.innerHTML = `
<form action class="login-form signUp-form grid">
<h3 class="login-title">Register</h3>
<div class="login-group grid">
  <div>
    <label for="login-email" class="login-label">Name</label>
    <input
      type="text"
      placeholder="Write your name"
      id="signUp-name"
      class="login-input"
    />
  </div>
  <div>
    <label for="login-email" class="login-label">Email</label>
    <input
      type="email"
      placeholder="Write your email"
      id="signUp-email"
      class="login-input"
    />
  </div>

  <div>
    <label for="login-password" class="login-label">Password</label>
    <input
      type="password"
      placeholder="Create your password"
      id="signUp-password"
      class="login-input"
    />
  </div>
</div>

<div class="forgot">
  <span class="login-signup">
    You have an account? <a href="#" id="haveAccount">Login</a>
  </span>

  <a href="/src/html/forgotPass.html" class="login-forgot">
    You forgot your password
  </a>

  <button type="submit" id="loginBtn" class="login-button button">
    REGISTER
  </button>
</div>
</form>

<i class="ri-close-line login-close" id="signUp-close"></i>
`;
// END DINAMIC SIGNUP

// SELECTORS
// LOGIN
const loginButton = document.getElementById("login-button");
const loginClose = document.getElementById("login-close");
// const loginContent = document.getElementById("login-content");
// SIGNUP
const signUp = document.querySelector("#signUp");
// const signUpContent = document.getElementById("signUp-content");
const signUpClose = document.getElementById("signUp-close");
const haveAccount = document.querySelector("#haveAccount");
// GET STARTED
const getStarted = document.querySelector("#getStarted");

// SHOW LOGIN
if (loginButton) {
  loginButton.addEventListener("click", (e) => {


    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      return (window.location.href = "/src/html/profileDashboard.html");
    }
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

if (getStarted) {
  getStarted.addEventListener("click", (e) => {
    e.preventDefault();
    signUpContent.classList.add("show-signup");
  });
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
      localStorage.setItem("isLogin", JSON.stringify(isLogin));
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
  }
}
