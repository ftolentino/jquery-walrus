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

$(document).ready(function() {
  $("button#light").click(function () {
    $(".light-text").removeClass();
    $("body").removeClass();
  });
});

$(document).ready(function() {
  $("button#dark").click(function () {
    $("body").removeClass();
    $(".dark-text").removeClass()
    $(".dark-text").addClass("light-text");
    $("body").addClass("bg-dark");
  });
});