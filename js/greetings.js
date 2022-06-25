const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreetings(username);
};

function paintGreetings(username) {
  greeting.classList.remove("hidden");
  greeting.innerHTML = `Hello ${username}`
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
  //show the form
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  //show the greetings
  paintGreetings(savedUsername)
}
