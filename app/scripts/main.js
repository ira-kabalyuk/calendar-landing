console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

     $('.slider').slick({
    accessibility: false,
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1024,
            settings: {        
            arrows: false,
            dots: false,
          }
        }
      ]
    });


    $('.post').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });    

    $('.block').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 100
    });

    $('').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated wobble',
        offset: 100
    });

    $('.in-field').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 100
    });

    $('.field').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 100
    });  

    $(".input-head").click(function() {        
        $(".input-list").toggleClass("in-visible");
    });

    

    $('#fullpage').fullpage({       

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,        
    });

});


 








