// USER LOGIN / SIGNUP
class loginData{
  constructor(username, password){
    this.username = username;
    this.password = password;
  }
}

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

let signupUsername = document.getElementById('signupUsername');
let signupPassword = document.getElementById('signupPassword');
let signupConfirmPassword = document.getElementById('signupConfirmPassword');

let loginUsername = document.getElementById('loginUsername');
let loginPassword = document.getElementById('loginPassword');

let logins = JSON.parse(localStorage.getItem("logins")) ?? [];

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let username = signupUsername.value;
  let password = signupPassword.value;
  if(password != signupConfirmPassword.value){
    alert("PASSWORDS NOT MATCH");
    return;
  }
  for(let i = 0; i < logins.length; i++){
    if(username === logins[i].username){
      alert("USERNAME ALREADY TAKEN");
      return;
    }
  }
  logins.push(new loginData(username, password));
  alert("SUCCESSFUL SIGNUP");
  localStorage.setItem("logins", JSON.stringify(logins));
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let username = loginUsername.value;
  let password = loginUsername.value;

  for(let i = 0; i < logins.length; i++){
    if(username === logins[i].username && password === logins[i].password){
      alert("LOGGED IN");
      return;
    }
  }
  alert("INVALID LOGIN");
}
