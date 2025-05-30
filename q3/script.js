function login() {
    var name = document.getElementById("nameInput").value;
    if (name === "") {
      document.getElementById("message").innerHTML = "Please enter your name.";
      return;
    }
  
    document.getElementById("message").innerHTML = "Logging in...";
  
var promise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 2000); 
    });
  
    promise.then(function() {
      document.getElementById("message").innerHTML = "Welcome back, " + name + "!";
    });
  }
  