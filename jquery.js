$(window).scroll(function(){
    var posicao = $(window).scrollTop();
    var cor = Math.round(posicao / 900);
    $('#nav').css('background', pegarCor(cor));
   });
   pegarCor = function(cor){
     switch(cor){
       case 1:
         return "#ccf381";
         break;
         case 2:
         return "#ccf381";
         break;
         case 3: 
         return "#ccf381";
         break;
         default:
         return "#fff";
         break;
     }
   };
   

var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
  var $target = $('.anime'),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 6);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});



var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
  var $target = $('.animeMation'),
      animationClass = 'anime-2',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 6);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});