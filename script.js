// Zobraziť/skryť viac fotiek
const btn = document.getElementById("showMoreBtn");
const hiddenImages = document.querySelectorAll(".gallery .hidden");

btn.addEventListener("click", () => {
  const isHidden = hiddenImages[0].classList.contains("hidden");

  if (isHidden) {
    // Zobraziť všetky skryté fotky
    hiddenImages.forEach(img => img.classList.remove("hidden"));
    btn.textContent = "Zobraziť menej";
  } else {
    // Skryť späť
    hiddenImages.forEach(img => img.classList.add("hidden"));
    btn.textContent = "Zobraziť viac";
  }
});

// Lightbox funkcia
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Zatvorenie lightboxu kliknutím mimo obrázka
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove("active");
  }
});
