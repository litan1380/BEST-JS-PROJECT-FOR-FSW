function changeText() {
    var heading = document.getElementById("heading");
    var text = heading.textContent;
  
    if (text === "The most affordable learning platform") {
      heading.textContent = "PW Skills";
    } else {
      heading.textContent = "The most affordable learning platform";
    }
  }
  