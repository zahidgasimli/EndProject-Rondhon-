$(document).ready(function () {
  $(document).on("click", ".barsbtn", function () {
    $(".mobilenav").slideDown(function () {
        $(this).addClass("activebar");
      });
      $(".activebar").slideUp(function () {
        $(this).removeClass("activebar");
      });
  });

  $(document).on("click", ".mobnav-icon", function () {
    $(".mobpages").slideDown(function () {
      $(this).addClass("activenav");
    });
    $(".activenav").slideUp(function () {
      $(this).removeClass("activenav");
    });
  });
});
