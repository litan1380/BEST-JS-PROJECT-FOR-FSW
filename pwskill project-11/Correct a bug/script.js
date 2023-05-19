function doubleCartQuantity() {
    // Get the cart array.
    var cart = document.getElementById("cart").value;
  
    // Split the cart array into an array of objects.
    var cartItems = cart.split(",");
  
    // Iterate over each item in the cart array.
    for (var i = 0; i < cartItems.length; i++) {
      // Get the quantity of the item.
      var quantity = parseInt(cartItems[i].split(":")[1], 10);
  
      // Double the quantity of the item.
      quantity *= 2;
  
      // Update the quantity of the item in the cart array.
      cartItems[i] = cartItems[i].split(":")[0] + ":" + quantity;
    }
  
    // Rebuild the cart array into a string.
    var newCart = cartItems.join(",");
  
    // Set the cart value to the new cart string.
    document.getElementById("cart").value = newCart;
  }