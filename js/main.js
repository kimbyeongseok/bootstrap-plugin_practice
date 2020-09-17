$(document).ready(function () {
  //intro main slide carousel
  $("#intro-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    items: 1,
    autoplayTimeout: 4000,
    animateOut: "fadeOut",
  });

  //initiate wow framewrok
  //https://animate.style/
  new WOW().init();
  //Clients carousel using owl carousel library
  $(".clients-carousel").owlCarousel({
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
      900: {
        items: 6,
      },
    },
    autoplay: true,
    loop: true,
    autoplayTimeout: 2000,
    dots: true,
  });

  //portfolio section image filter by isotope
  var $grid = $(".portfolio-container").isotope({
    // options
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
    stagger: 30,
  });
  // filter items on button click
  $("#portfolio-filters li").on("click", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    $("#portfolio-filters li").removeClass("filter-active");
    $(this).addClass("filter-active");
  });
  //portfolio lightbox effect by venobox library
  $(".venobox").venobox({
    framewidth: "600px", // default: ''
    frameheight: "500px", // default: ''
    bgcolor: "#5dff5e", // default: '#fff'
    titleattr: "data-title", // default: 'title'
    numeratio: true, // default: false
    infinigall: true, // default: false
    spinner: "rotating-plane",
  });

  //team carousel using owl carousel library
  $(".testimonial-carousel").owlCarousel({
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000,
    dots: true,
  });

  // header sticky function
  //**using library
  $("#header").sticky({
    topSpacing: 0,
    zIndex: "10",
  });
  //**using jquery coding
  // var stickyheader = function () {
  //   var headTop = $("#header").offset().top;
  //   $(window).scroll(function () {
  //     var scroll = $(window).scrollTop();
  //     if (scroll >= headTop) {
  //       $("#header").addClass("sticky");
  //     } else {
  //       $("#header").removeClass("sticky");
  //     }
  //   });
  // };
  // stickyheader();
  $(".nav-menu li").on("click", function (event) {
    event.preventDefault();
    var target = $(this).find("a").attr("href");
    var offsetTop = $(target).offset().top;
    var headHeight = $("#header").outerHeight() - 1;
    $("html,body")
      .stop()
      .animate({ scrollTop: offsetTop - headHeight }, 800);
    // var hash = this.hash;
    // if (this.hash !== "") {
    //   event.preventDefault();
    //   $("html, body").animate(
    //     {
    //       scrollTop: $(hash).offset().top - 84,
    //     },
    //     800,
    //     function () {
    //       window.location.hash = hash;
    //     }
    //   );
    // } // End if
  });
  //scroll up to top by click "back-to-top" button
  var backToTop = function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $(".back-to-top").fadeIn();
      } else {
        $(".back-to-top").fadeOut();
      }
    });
    $(".back-to-top").click(function () {
      $("html,body").stop().animate({ scrollTop: 0 }, 800);
    });
  };
  backToTop();

  var activateMenu = function () {
    var sections = $("section");
    var nav = $(".nav-menu");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      sections.each(function () {
        var headHeight = $("#header").outerHeight() - 1;
        var top = $(this).offset().top - headHeight;
        var bottom = top + $(this).height();
        var now_section = $(this).attr("id");
        // var aTag = nav.find("a").attr("id");
        if (scroll >= top && scroll < bottom) {
          nav.find("li").removeClass("menu-active");
          nav
            .find("a[href='#" + now_section + "']")
            .parent("li")
            .addClass("menu-active");
        }
        if (scroll < 400) {
          $(".nav-menu li:first-child").addClass("menu-active");
        }
      });
    });
  };
  activateMenu();

  // mobile nav function
  $(".mobile-nav").on("click", function (e) {
    e.preventDefault();

    //Check this block is open or not..
    if (!$(this).prev().hasClass("open")) {
      $("#nav-menu-container").slideDown(400);
      $("#nav-menu-container").addClass("open");
      $(this).find("i").removeClass().addClass("fa fa-times");
    } else if ($(this).prev().hasClass("open")) {
      $("#nav-menu-container").removeClass("open");
      $("#nav-menu-container").slideUp(400);
      $(this).find("i").removeClass().addClass("fa fa-bars");
    }
  });
});
