const videoCards = document.querySelectorAll(".video-card");
const lightbox = document.getElementById("lightbox");
const videoFrame = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close");

videoCards.forEach(card => {
  card.addEventListener("click", () => {
    const videoUrl = card.getAttribute("data-video");
    videoFrame.src = videoUrl + "?autoplay=1";
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  videoFrame.src = "";
  lightbox.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    videoFrame.src = "";
    lightbox.style.display = "none";
  }
});
