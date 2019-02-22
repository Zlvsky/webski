$(function(){
  var text = $('.text');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      text.removeClass('hidden');
    } else {
      text.addClass('hidden');
    }
  });
});

$(function(){
  var text = $('.jeden');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      text.removeClass('hidden');
    } else {
      text.addClass('hidden');
    }
  });
});

$(function(){
  var text = $('.dwa');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
      text.removeClass('hidden');
    } else {
      text.addClass('hidden');
    }
  });
});

$(function(){
  var text = $('.trzy');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
      text.removeClass('hidden');
    } else {
      text.addClass('hidden');
    }
  });
});

$(function(){
  var text = $('.btn');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
      text.removeClass('hidden');
    } else {
      text.addClass('hidden');
    }
  });
});
