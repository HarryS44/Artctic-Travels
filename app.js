/*const showOnClick = "#location-show-01";
const hideOnClick = "#locations-hide";

$(document).ready(() => {
  $(hideOnClick).on("click", () => {
    $(showOnClick).removeClass("hidden");
    $(hideOnClick).addClass("hidden");
    console.log("Clicked on location-01 h6 element.");
  });
});

$(document).ready(() => {
  let $active = $('#slider img.active');
  if ($active.length === 0) $active = $('#slider img:last');

  let $next = $active.next().length ? $active.next() : $('#slider img:first');

  setInterval(() => {
      $active.fadeOut(3000, () => {
          $active.removeClass('active');
          $next.addClass('active');
          $active = $next;

          // Update $next to the next image after $active
          $next = $active.next().length ? $active.next() : $('#slider img:first');
      });
  }, 3000);
});



//Review the abve code*/
