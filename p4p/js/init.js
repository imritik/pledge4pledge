$(window).on("load", function(e) {
  $('.page').addClass('loaded');
});

$(document).ready(function() {
  // SVG
  svg4everybody();


  // Sidenav
  $('.sidenav__trigger, .sidenav .btn-close').click(function() {
    $('.page').toggleClass('sidenav-on');
  });


  // World Map
  $('.offices__nav a').hover(
  	function() {
  		var officeTarget = $(this).data('city');
  		$('.world__dot--' + officeTarget).addClass('active');
      var officeTarget = $(this).data('city');
      console.log(officeTarget);
      var locationStr="";
      if(officeTarget=="new-delhi"){
        locationStr="Lucideus House<br>Plot no. 15, Okhla Phase III<br>New Delhi 110020";
      }
      else if(officeTarget=="palo-alto"){
        locationStr="Stanford Research Park<br>3260 Hillview Avenue<br>Palo Alto, CA 94304"; 
      }
      else if(officeTarget=="new-york"){
        locationStr="Serving customers across 5 continents around the world.";   
      }
      else if(officeTarget=="boston"){
       locationStr="1 Beacon St<br>Boston, MA 02108";    
      }
      else if(officeTarget=="mumbai"){
       locationStr="Level 7, The Capital Building,<br>Bandra Kurla Complex, Bandra (East)<br>Mumbai, Maharashtra 400051"; 
      }
      else if(officeTarget=="bangalore"){
       locationStr="No. 45/3, Residency Road,<br> Off MG Road, Bangalore<br> Karnataka 560025";     
      }
      $("#address-div").empty().append(locationStr);
  	},
  	function() { $('.world__dot').removeClass('active') }
  );

  // Animations
  AOS.init();


  // Parallax
  $('.bubble').paroller();


  // Scrollspy
  var $root = $('html, body');

  $('.scrollspy a').click(function () {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);

      return false;
  });


  // Carousel
  $('.carousel--culture').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'ease',
    prevArrow:"<button type='button' class='slick-angle slick-arrow--prev'><svg role='img' class='icon icon-angle-left'><use xlink:href='icons/icons.svg#icon-angle-left'></use></svg></button>",
    nextArrow:"<button type='button' class='slick-angle slick-arrow--next'><svg role='img' class='icon icon-angle-right'><use xlink:href='icons/icons.svg#icon-angle-right'></use></svg></button>"
  });


  $('.carousel--video').slick({
    dots: false,
    arrows: false,
    infinite: false,
    draggable: false,
    speed: 1000,
    fade: true,
    cssEase: 'ease'
  });

  $('.thumb').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    var target = $(this).data('carousel');

    $(target).slick('slickGoTo', slideno - 1);
  });


  //Collapse
  $('.vacancies .btn-close').click(function() {
    $(this).parents('.vacancies').collapse('hide');
  });


  //Modal Fix
  $('.modal').on('shown.bs.modal', function () {
    $('html').css('overflow', 'hidden');
  });
  $('.modal').on('hidden.bs.modal', function () {
    $('html').css('overflow', 'auto');
  });


  //Awards
  $('.award-tabs button').click(function() {
    var awardTarget = $(this).data('award');
    $('.award--block').fadeOut().removeClass('show');
    $(awardTarget).fadeIn().addClass('show');

    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });


  //ToTop
  $(".totop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
  $(window).on("scroll load", function() {
    var winH = $(this).height();
    var winScroll = $(this).scrollTop();

    if (winScroll > winH) {
      $('.page').addClass('scrolled');
    } else {
      $('.page').removeClass('scrolled');
    }
  });


  //ScrollTo
  $(".scrollto").click(function() {
    var scrollID = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(scrollID).offset().top
    }, 1000);
  });

});
