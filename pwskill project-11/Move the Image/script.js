var image = document.getElementById("image");

// Set the initial position of the image.
image.style.left = 0;
image.style.top = 0;

// Listen for thekeydown event.
document.addEventListener("keydown", function(event) {
  // Get the key code of the pressed key.
  var keyCode = event.keyCode;

  // Move the image in the direction of the pressed key.
  switch (keyCode) {
    case 37: // Left arrow key
      image.style.left -= 10;
      break;
    case 38: // Up arrow key
      image.style.top -= 10;
      break;
    case 39: // Right arrow key
      image.style.left += 10;
      break;
    case 40: // Down arrow key
      image.style.top += 10;
      break;
  }
});
