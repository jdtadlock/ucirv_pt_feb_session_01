$('.bio').animate({opacity: 1}, 1200);

$('.project-wrap').each(function(index, el) {
  $(el).delay(220 * index).animate({ opacity: 1 }, 800);

  // setTimeout(function() {
  //   $(el).animate({
  //     opacity: 1
  //   }, 800);
  // }, 250 * index);
});