const showOnClick = "#location-show-01";
const hideOnClick = "#locations-hide";

$(document).ready(() => {
  $(hideOnClick).on("click", () => {
    $(showOnClick).removeClass("hidden");
    $(hideOnClick).addClass("hidden");
    console.log("Clicked on location-01 h6 element.");
  });
});