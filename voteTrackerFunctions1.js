function greetUser(){
  if (localStorage.getItem("username") == null) {
    var username = prompt("Welcome to Bus Mall Vote Tracker!", "Enter Your Name");
    localStorage.setItem("username", username);
    document.getElementById("greeting").innerText = "Welcome " +username;
  }else {
    var username = localStorage.getItem("username");
    document.getElementById("greeting").innerText = "Welcome back " +username;
  }
  
}
