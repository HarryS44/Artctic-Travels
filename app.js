const showOnClick = "#location-show-01";
const hideOnClick = "#locations-hide";

$(document).ready(() => {
  $(hideOnClick).on("click", () => {
    $(showOnClick).removeClass("hidden");
    $(hideOnClick).addClass("hidden");
    console.log("Clicked on location-01 h6 element");
  });
});

$(document).ready(() => {
  let currentIndex = 0;
  const slides = $(".slider img");
  const totalSlides = slides.length;

  const showSlide = (index) => {
    slides.hide();
    slides.eq(index).fadeIn();
  };

  $("#prevBtn").on("click", () => {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  $("#nextBtn").on("click", () => {
    currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });
});
