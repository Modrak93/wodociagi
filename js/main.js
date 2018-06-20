(function($) {
  "use strict"; // Start of use strict

    $(document).ready(function () {
        $("#myModal").modal();
    });
    
      // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 70) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

    
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


    
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })




/*--
	Smooth Scroll
-----------------------------------*/
    $('[data-scroll]').on('click', function (e) {
	    e.preventDefault();
	    var link = this;
	    $.smoothScroll({
            speed: 1000,
            scrollTarget: link.hash,
            offset: -90
	    });
    });
/*--
	Scroll Up
-----------------------------------*/
    $.scrollUp({
	    easingType: 'linear',
	    scrollSpeed: 900,
	    animation: 'fade',
	    scrollText: '<i class="zmdi zmdi-chevron-up"></i>'
    });
 

})(jQuery);	// End of use strict


    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

(function () {
    "use strict"; // Start of use strict  
      
    $(".main-slider").slick({
        infinite: true,
        dots: true,
        accessibility: false,
        arrows: true,
        easing: 'ease-in',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToScroll: 3,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 770,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }
        ] 
    });
                                

}());

//------------- Scroll to top

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

//------------- Kontrast


function kontrast() {
    var x = document.getElementById("UL1");
    var y = x.getElementsByClassName("kontrast-menu-item");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "#555555";
        y[i].style.color = "yellow";
        
    };
    
    var x = document.getElementById("mainNews");
    var y = x.getElementsByClassName("kontrast-menu-item");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "#555555";
        y[i].style.color = "yellow";
        
    };
    
    document.getElementById('kontrastHeader').style.background = "black";
    document.getElementById('kontrastHeader').style.color = "yellow";
    document.getElementById('kontrastHeaderTitle').style.color = "yellow";
    document.getElementById('UL1').style.color = "black";
    document.getElementById('NL1').style.color = "yellow";
    document.getElementById('NL2').style.color = "yellow";
    document.getElementById('NL3').style.color = "yellow";
    document.getElementById('NL4').style.color = "yellow";
    document.getElementById('NL5').style.color = "yellow";
    document.getElementById('kontrastSec1').style.backgroundColor = "#566068";
    document.getElementById('kontrastSec1Title').style.color = "yellow";
    document.getElementById('kontrastSec1Content').style.color="yellow";
    document.getElementById('kontrastSec1Opis1').style.color = "yellow";
    document.getElementById('kontrastSec1Opis2').style.color = "yellow";
    document.getElementById('kontrastSec1Opis3').style.color = "yellow";
    document.getElementById('kontrastSec1Opis4').style.color = "yellow";
    document.getElementById('kontrastSec1Opis5').style.color = "yellow";
    document.getElementById('kontrastSec1Opis6').style.color = "yellow";
    document.getElementById('kontrastCremaPol1').style.fill = "#566068";
    document.getElementById('kontrastBluePol1').style.fill = "black";
    document.getElementById('kontrastSec2').style.backgroundColor = "black";
    document.getElementById('kontrastSec2Title').style.color = "yellow";
    document.getElementById('kontrastFooter').style.backgroundColor = "#566068";
    document.getElementById('kontrastFooter').style.color = "yellow";
    
}



function normal() {
    
    var x = document.getElementById("UL1");
    var y = x.getElementsByClassName("kontrast-menu-item");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "#ffffff";
        y[i].style.color = "#0C74BB";
        
    };
    
    var x = document.getElementById("mainNews");
    var y = x.getElementsByClassName("kontrast-menu-item");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "#ffffff";
        y[i].style.color = "#566068";
        
    };
    
    document.getElementById('kontrastHeader').style.background = "linear-gradient(180.08388834344362deg, rgba(255, 255, 255,1) 15.388052681091251%,rgba(254, 254, 254,1) 15.388052681091251%,rgba(189, 220, 233,1) 79.64016933207901%)";
    document.getElementById('kontrastHeader').style.color = "#566068";
    document.getElementById('kontrastHeaderTitle').style.color = "#0C74BB";
    document.getElementById('NL1').style.color = "#566068";
    document.getElementById('NL2').style.color = "#566068";
    document.getElementById('NL3').style.color = "#566068";
    document.getElementById('NL4').style.color = "#566068";
    document.getElementById('NL5').style.color = "#566068";
    document.getElementById('kontrastSec1').style.backgroundColor = "#ECE9E2";
    document.getElementById('kontrastSec1Title').style.color = "#566068";
    document.getElementById('kontrastSec1Content').style.color="#566068";
    document.getElementById('kontrastSec1Opis1').style.color = "#566068";
    document.getElementById('kontrastSec1Opis2').style.color = "#566068";
    document.getElementById('kontrastSec1Opis3').style.color = "#566068";
    document.getElementById('kontrastSec1Opis4').style.color = "#566068";
    document.getElementById('kontrastSec1Opis5').style.color = "#566068";
    document.getElementById('kontrastSec1Opis6').style.color = "#566068";
    document.getElementById('kontrastCremaPol1').style.fill = "#ECE9E2";
    document.getElementById('kontrastBluePol1').style.fill = "#cadbe7";
    document.getElementById('kontrastSec2').style.backgroundColor = "#cadbe7";
    document.getElementById('kontrastSec2Title').style.color = "#566068";
    document.getElementById('kontrastFooter').style.backgroundColor = "#0C74BB";
    document.getElementById('kontrastFooter').style.color = "#ffffff";
    
}

    function biggerFont() {
        document.body.style.fontSize = "24px";
        }

    function normalFont() {
        document.body.style.fontSize = "16px";
        }

    function smallerFont() {
        document.body.style.fontSize = "10px";
        }