$(function() {
  $('a[href=#section01]').on('click', function(e) {
	  console.log("click");
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

$(function() {
  $('a[href=#section02]').on('click', function(e) {
	  console.log("click");
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});