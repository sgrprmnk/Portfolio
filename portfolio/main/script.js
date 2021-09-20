
/*******************************
 Script for onScroll sticky navbar
 **********************************/
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        /*****************************
         Script for scroll-up hide/show
         ******************************/
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    /**************************
     Script for Slide-up
     ************************88*/
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        /*  onclick smooth scroll removing */
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        /*onClick smooth Scrol*/
        $('html').css("scrollBehavior", "smooth");
    });

    /*************************
    Script for navbar/toggle menu
    *****************************/
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /****************************
    Script for animation  of typ..text
    **********************************/
    var typed = new Typed(".typing", {
        strings: ["Full Stack Web Developer", " Java Developer", "AI Specialist", " Quantum Computing Specialist", "specialist in Electrical Engineering"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Web Developer", " Java Developer", "AI Specialist", " Quantum Computing Specialist", "specialist in Electrical Engineering"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    /*********************
    Script for owl carousel
    ************************/
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

