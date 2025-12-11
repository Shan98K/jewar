const fullView = document.getElementById("fullView");
const fullImg = document.getElementById("fullImg");
const images = document.querySelectorAll(".galleryHolder img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    fullView.style.display = "flex";
    fullImg.src = img.src;
  });
});

function closeFullView() {
  fullView.style.display = "none";
  fullImg.src = "";
}
