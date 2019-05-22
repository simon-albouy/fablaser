(function ($) {
  'use strict';


  let isConnect = window.user == "";

  console.log(isConnect);
  
  $(".connect-button").toogle(isConnect);

})(jQuery);