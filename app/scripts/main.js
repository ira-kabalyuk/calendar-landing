console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

     $('.slider').slick({
    accessibility: false,
      infinite: true,      
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    });


    $('.post').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });    

    $('.block').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 100
    });

    $('.deg').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated wobble',
        offset: 100
    });

    $('.leftfly').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 100
    });

    $('.rightfly').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 100
    });

    $('.dance').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated swing',
        offset: 100
    });   

    $('.jump').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceIn',
        offset: 100
    });

     $('.twitt').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated shake',
        offset: 100
    });

});


 








