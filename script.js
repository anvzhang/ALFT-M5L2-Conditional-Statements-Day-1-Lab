
let secretUsername = ("joe");
let secretPassword = ("1234");
let button = document.querySelector("button");

button.addEventListener("click", function() {
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  //Write your conditionals here
  if (!(username && password)) {
    console.log("You need to enter SOMETHING.");
  } else if (username === secretUsername && password === secretPassword) {
    console.log("Success!");
  } else if (username === secretUsername && password !== secretPassword) {
    console.log("Wrong password - be careful, don't mess this up too many times.");
  } else if (username !== secretUsername && password === secretPassword) {
    console.log("Wrong username - is there a typo?");
  } else {
    console.log("Incorrect username and password. Hmm. Suspicious.")
  }

});