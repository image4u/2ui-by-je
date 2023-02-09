$(document).ready(function() {
    $(".card").hover(
      function() {
        $(this)
          .find(".btn-primary")
          .addClass("btn-primary-hover");
      },
      function() {
        $(this)
          .find(".btn-primary")
          .removeClass("btn-primary-hover");
      }
    );
  
    $(".btn-primary").focus(function() {
      $(this).addClass("btn-primary-active");
    });
  
    $(".btn-primary").blur(function() {
      $(this).removeClass("btn-primary-active");
    });
  });
  