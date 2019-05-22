(function ($) {
  'use strict';

  $(".testConnection").on("click", ()=>{

    console.log("click !")
    let user = $("#email").val();
    console.log(user);

    sessionStorage.setItem("user",user);
    
  })

  let userSession = sessionStorage.getItem("user");

  console.log(userSession)
  let isConnect = userSession == undefined;

  console.log(!isConnect);

  $(".import-button").toggle(!isConnect);
  $(".connect-button").toggle(isConnect);

})(jQuery);