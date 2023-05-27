document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll("nav ul li");
  
    menuItems.forEach(function(item) {
      item.addEventListener("mouseenter", function() {
        this.classList.add("hover");
      });
  
      item.addEventListener("mouseleave", function() {
        this.classList.remove("hover");
      });
    });
  });