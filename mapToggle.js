const toggleBtn = document.getElementById("toggleMap");
const map = document.getElementById("mapContainer");

toggleBtn.addEventListener("click", () => {
    map.classList.toggle("active");
    toggleBtn.classList.toggle("active");
});
