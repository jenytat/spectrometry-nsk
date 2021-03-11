$(document).ready(function(){
    $('.catalog-menu__submenu, .catalog-menu__hasmenu').click(function(){
        $(this).children('ul').slideToggle(700);
        $(this).toggleClass('active');
    });

    $('.catalog-menu__submenu ul, .catalog-menu__submenu ul ul').click(function(event){
        event.stopPropagation();
    });

    $('.product__big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product__small',
        responsive: [{
            breakpoint: 828,
            settings: {
                arrows: false
            }
        }]
    });

    $('.product__small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product__big',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });
});

