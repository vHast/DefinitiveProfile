const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// Map -- Contact.html

// Initialize and add the map
function initMap() {
  // The location of Tallinn
  const tallinn = { lat: 59.4370, lng: 24.7536 };
  // The map, centered at Tallinn
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: tallinn,
  });
  // The marker, positioned at Tallinn
  const marker = new google.maps.Marker({
    position: tallinn,
    map: map,
  });
}
