$(document).ready(() => {
    $("#location-01").on("click", () => {
      if ($("#location-01").hasClass("hidden")) {
        $("#location-01").removeClass("hidden");
        console.log("Clicked on location-01 h6 element");
      } else {
        $("#location-show-01").addClass("hidden");
        console.log("Clicked on location-show-01 element");
      }
    });
  });
  