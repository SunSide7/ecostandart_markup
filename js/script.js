$(document).ready(function() {

    $('.img-slider').owlCarousel({
        // loop:true,
        margin:16,
        nav:true,
        dots: false,
        navText: [
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke="#3A434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n',
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke="#3A434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>',
        ],
        responsive:{
            360: {
                items: 1
            },
            640: {
                items: 2
            },
            960: {
                items: 3
            },
            1280: {
                items: 3
            },
            1920: {
                items: 3
            },
        }
    })


    function setCardsSliderActive() {
        $('.cards-slider').addClass('owl-theme');
        $('.cards-slider').addClass('owl-carousel');
        $('.cards-slider').owlCarousel({
            stagePadding: 200,
            // loop:true,
            margin:16,
            startPosition: 1,
            nav:true,
            dots: false,
            navText: [
                '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke="#3A434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n',
                '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke="#3A434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>',
            ],
            responsive:{
                0:{
                    items:1,
                    stagePadding: 150,
                },
                960: {
                    items:1,
                    stagePadding: 200,
                },
            }
        })
        $('#cards-slider-container').addClass('container-fluid')
    }
    function setCardsSliderUnactive() {
        $('.cards-slider').removeClass('owl-theme');
        $('.cards-slider').removeClass('owl-carousel');
        $('.cards-slider').trigger('destroy.owl.carousel');
        $('#cards-slider-container').removeClass('container-fluid')
    }

    new MobileDetect(setCardsSliderActive, setCardsSliderUnactive, 640, 1279.5);

})