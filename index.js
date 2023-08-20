const slides = document.querySelectorAll(".slide");

const removeClassActive = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
};

for (const slide of slides) {
  slide.addEventListener("click", () => {
    removeClassActive();
    slide.classList.add("active");
  });
}
