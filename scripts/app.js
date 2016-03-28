'use strict';

function About(el){
  var about = this;
  this.el = el;

  this.toggleAbout = function(){
    $.ajax('aboutme.html',{
      context: about,
      success: function(response){
        this.el.find('.aboutme').html(response).slideToggle();
      },
      error: function() {
        this.el.find('.aboutme').html('<p>There was an error processing your request</p>');
      },
      timeout: 3000,
      beforeSend: function(){
        this.el.addClass('loading');
      },
      complete: function(){
        this.el.removeClass('loading');
      }
    });
  };

  this.el.on('click', this.toggleAbout);
}

$(document).ready(function() {

  
  var aboutFill = new About('.about');


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


$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
$(".right").click(function(){
    $("#myCarousel").carousel("next");
});

$(function() { $('body').hide().show(); });

});
