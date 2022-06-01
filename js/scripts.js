$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".newClickable").click(function() {
    $(".sand-castles-hidden").slideToggle();
    $(".sand-castles-show").slideToggle();

  });
});