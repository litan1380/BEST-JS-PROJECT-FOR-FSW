// Get the email and password input fields.
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Get the submit button.
var submitButton = document.getElementById("submit");

// Listen for the click event on the submit button.
submitButton.addEventListener("click", function(event) {
  // Validate the email input field.
  var email = emailInput.value;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    // The email is invalid.
    alert("Invalid email!");
    event.preventDefault();
    return;
  }

  // Validate the password input field.
  var password = passwordInput.value;
  if (password.length < 8) {
    // The password is too short.
    alert("Password must be at least 8 characters long!");
    event.preventDefault();
    return;
  }

  // The email and password are valid.
  alert("Valid email and password!");
});
