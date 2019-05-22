(function ($) {
  'use strict';

  $(".catagories-menu li").on('click', function () {
    $(".catagories-menu li").removeClass('active');
    $(this).addClass('active');
});

})(jQuery);