// Wait until page fully loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("GVSU LakerStore homepage loaded!");

  // Example: Simple scroll effect for navbar
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Example: Button click interaction
  const shopBtn = document.querySelector(".shop-btn");
  if (shopBtn) {
    shopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Shop page coming soon!");
    });
  }
});
