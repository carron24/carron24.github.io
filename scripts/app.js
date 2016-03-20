'use strict';

$(document).ready(function() {

  $('.about').on('click', function(event){
    event.stopPropagation(); //stops event from traversing up the DOM
    event.preventDefault(); //stops event from jumping page to top
    $(this).find('.aboutme').slideToggle();

  });

  $('.btn').on('click', function(){
    var $this = $(this);
    if($this.hasClass("btn-phone")){
      $this.parent().find('.email').slideUp();
      $this.parent().find('.phone').slideToggle();
    }
    else if($this.hasClass("btn-email")){
      $this.parent().find('.phone').slideUp();
      $this.parent().find('.email').slideToggle();
    }
  });

$('nav a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});




$(function() { $('body').hide().show(); });

});
