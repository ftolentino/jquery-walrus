$(document).ready(function() {
  $("clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $("newClickable").click(function() {
    $("sand-castles-hidden").slideToggle();
    $("sand-castles-show").slideToggle();

  });
});

$(document).ready(function() {              //Light button
  $("button#light").click(function () {
    $("body").removeClass();
    $("theme").removeClass();
  });
});

$(document).ready(function() {              //Dark Button
  $("button#dark").click(function () {
    $("theme").removeClass("container");
    $("body").addClass("bg-dark");
    $("theme").addClass("light-text");
  });
});

  $(document).ready(function() {
    $("h1").click(function () {
      $("h1").addClass("border-3");
      $("h1").addClass("bg-info");
    });
  });