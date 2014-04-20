

// Smooth Scroll

// $(function() {
//   $('a.menu-icon[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

// // Bootstrap scrollspy initialize

// $('body').scrollspy({ target: 'nav' });
// $('[data-spy="scroll"]').each(function () {
//   var $spy = $(this).scrollspy('refresh')
// });

$(function(){
   if ($('nav').hasClass('expanded')) {
      $('#showLeftPush').addClass('button-expanded');
      $('.cbp-spmenu-push').addClass('cbp-spmenu-push-toright');
      $('.cbp-spmenu-push').removeClass('cbp-spmenu-push-toright');
      $('.menu-item').addClass('divider');
      // $('li').removeClass('desktop');
   }
});

// enable different divider states depending on media queries
$(function(){
   if ($(".cbp-spmenu-push").css("float") == "none" ){
      $('li').addClass('desktop');
   }
});

$(function(){
   if ($(".cbp-spmenu-push").css("float") == "left" ){
      $('li').removeClass('desktop');
   }
});

$( window ).resize(function() {
  if ($(".cbp-spmenu-push").css("float") == "left" ){
      $('li').removeClass('desktop');
   }
});

$( window ).resize(function() {
  if ($(".cbp-spmenu-push").css("float") == "none" ){
      $('li').addClass('desktop');
      $('.cbp-spmenu-push').removeClass('cbp-spmenu-push-toright');
      $('nav').removeClass('expanded');
      $('li').removeClass('divider');
   }
});

// click actions on mobile expand button

$('.separator').click(function() {
  $('#showLeftPush').removeClass('button-expanded');
  $('.cbp-spmenu-push').removeClass('cbp-spmenu-push-toright');
  $('nav').removeClass('expanded');
});

$('.menu-item').click(function() {
  $(this).removeClass('active');
});

$('#showLeftPush').click(function() {
  $('.menu-item').toggleClass('divider');
  $(this).toggleClass('button-expanded');
  $('.cbp-spmenu-left').toggleClass('expanded');
  $('.cbp-spmenu-push').toggleClass('cbp-spmenu-push-toright');
});

$('.menu-icon').click(function() {
  $(this).parent().toggleClass('active');
}); 



/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );


  var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    menuRight = document.getElementById( 'cbp-spmenu-s2' ),
    menuTop = document.getElementById( 'cbp-spmenu-s3' ),
    menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
    showLeft = document.getElementById( 'showLeft' ),
    showRight = document.getElementById( 'showRight' ),
    showTop = document.getElementById( 'showTop' ),
    showBottom = document.getElementById( 'showBottom' ),
    showLeftPush = document.getElementById( 'showLeftPush' ),
    left = document.getElementById( 'left' ),
    showRightPush = document.getElementById( 'showRightPush' ),
    body = document.body;


  showLeftPush.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'cbp-spmenu-push-toright' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeftPush' );
  };


  function disableOther( button ) {
    if( button !== 'showLeft' ) {
      classie.toggle( showLeft, 'disabled' );
    }
    if( button !== 'left' ) {
      classie.toggle( left, 'disabled' );
    }
    if( button !== 'showRight' ) {
      classie.toggle( showRight, 'disabled' );
    }
    if( button !== 'showTop' ) {
      classie.toggle( showTop, 'disabled' );
    }
    if( button !== 'showBottom' ) {
      classie.toggle( showBottom, 'disabled' );
    }
    if( button !== 'showLeftPush' ) {
      classie.toggle( showLeftPush, 'disabled' );
    }
    if( button !== 'showRightPush' ) {
      classie.toggle( showRightPush, 'disabled' );
    }
  }

// $('.gallery').magnificPopup({
//   delegate: 'a',
//   type: 'image',
//   gallery: {
//     enabled:true
//   }
//   removalDelay: 500, //delay removal by X to allow out-animation
//   callbacks: {
//     beforeOpen: function() {
//       // just a hack that adds mfp-anim class to markup 
//        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
//        this.st.mainClass = this.st.el.attr('data-effect');
//     }
//   },
//   closeOnContentClick: true,
//   midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
// });

// $('.gallery').each(function() { // the containers for all your galleries
//     $(this).magnificPopup({
//         delegate: '.gallery-item', // the selector for gallery item
//         type: 'image',
//         gallery: {
//           enabled:true,
//           preload: [0,2]
//         },
//         image: {
//             cursor: '',
//             titleSrc: 'data-title'
//         }
//     });
// }); 

// var data = [
//   {
//     username: "Brad Frost", // Key "username" means that Magnific Popup will look for an element with class "mfp-username" in markup and will replace its inner HTML with the value.
//     userWebsite_href: 'http://www.bradfrostweb.com', // Key "userWebsite_href" means that Magnific Popup will look for an element with class "mfp-userWebsite" and will change its "href" attribute. Instead of ending "href" you may put any other attribute.
//     userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1561258552/brad_frost_bigger.png', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
//     userLocation: 'Pittsburgh, PA'
//   },
  
//   {
//     username: "Paul Irish",
//     userWebsite_href: 'http://paulirish.com',
//     userAvatarUrl_img: 'https://si0.twimg.com/profile_images/2910976341/7d972c32f3882f715ff84a67685e6acf_bigger.jpeg',
//     userLocation: 'San Francisco'

//   },
  
//   {
//     username: "Chris Coyier",
//     userWebsite_href: 'http://css-tricks.com',
//     userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1668225011/Gravatar2_bigger.png',
//     userLocation: 'Palo Alto, California'
//   }
// ];

// initalize popup
$('button').magnificPopup({ 
  key: 'my-popup', 
  items: data,
  type: 'inline',
  inline: {
    // Define markup. Class names should match key names.
    markup: '<div class="white-popup"><div class="mfp-close"></div>'+
              '<a class="mfp-userWebsite">'+
                '<div class="mfp-userAvatarUrl"></div>'+
                '<h2 class="mfp-username"></h2>'+
              '</a>'+
              '<div class="mfp-userLocation"></div>'+
            '</div>'
  },
  gallery: {
    enabled: true 
  },
  callbacks: {
    markupParse: function(template, values, item) {
      // optionally apply your own logic - modify "template" element based on data in "values"
      // console.log('Parsing:', template, values, item);
    }
  }
});




$( ".gallery-item" ).first().removeClass( "hidden" );

// $('.gallery-item').click(function() {
//   $('.gallery-item').removeClass('hidden');
// });


// slick carousel

// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });