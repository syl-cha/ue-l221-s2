$(document).ready(function ($) {
   $('.js-main-nav-button').on('click tap', function() {
       $('#main-nav').toggleClass('is-open');
   });
    
    $('.js-gallery').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
});