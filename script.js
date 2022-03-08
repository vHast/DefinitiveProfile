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
  // The location of Barcelona
  const barcelona = { lat: 41.3874, lng: 2.1686 };
  // The map, centered at Barcelona
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: barcelona,
  });
  // The marker, positioned at Barcelona
  const marker = new google.maps.Marker({
    position: barcelona,
    map: map,
  });
}
