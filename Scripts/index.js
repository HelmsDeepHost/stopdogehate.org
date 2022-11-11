document.addEventListener("DOMContentLoaded", function(event) { 
  //randomly choose page message
  var messages = ["Much Sad :(", "Wow...", "Plz halp :("];
  document.getElementById("pageTitle").innerHTML = messages[Math.floor(Math.random() * 3)];
});
