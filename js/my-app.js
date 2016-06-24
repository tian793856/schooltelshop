// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Framework7.$;

var mySwiper = myApp.swiper('.swiper-container', {
  speed: 400,
  loop:true
});

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true,
  pagination:'.swiper-pagination'
});

setInterval(function(){
    mySwiper.slideNext();
},4000);



$$(document).on('pageInit', '.page[data-page="index"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  myApp.alert('Here comes About page');
});