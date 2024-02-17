$(document).ready(() => {
    $("#location-01 h6").click(() => {
        $(this).removeClass("hidden");
        $("#locations-hidden").addClass("hidden");
    });
});
