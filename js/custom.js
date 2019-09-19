(function ($) {
  'use strict';

  $(document).ready(function () {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker({

    });
  });


  //Avoid pinch zoom on iOS
  document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  }, false);
})(jQuery)