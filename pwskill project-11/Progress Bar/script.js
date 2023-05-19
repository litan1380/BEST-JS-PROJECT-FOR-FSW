window.addEventListener("scroll", function() {
    var windowHeight = window.innerHeight;
    var fullHeight = document.documentElement.scrollHeight;
    var scrolledHeight = window.scrollY;
    var progress = (scrolledHeight / (fullHeight - windowHeight)) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
  });
  