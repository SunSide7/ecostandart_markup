$(document).ready(function() {

    function hoverInX3() {
        console.log('hoverInX3')

        $(this).closest('.cards-hovering-img-x3').find('.card-neutral-white').addClass('bg-gradient-safety')
        $(this).closest('.cards-hovering-img-x3').find('.card-neutral-white').addClass('card-icon-bg')
        $(this).closest('.cards-hovering-img-x3').find('.card-neutral-white').removeClass('card-icon-bg-img')

        if($(this).hasClass('card-icon-bg-img')) {
        }
        else {
            $(this).addClass('card-icon-bg-img')
            $(this).removeClass('bg-gradient-safety')
            $(this).removeClass('card-icon-bg')
        }
    }

    function hoverOutX3() {
        console.log('hoverOutX3')

        if($(this).hasClass('card-icon-bg-img')) {
            $(this).removeClass('card-icon-bg-img')
            $(this).addClass('bg-gradient-safety')
            $(this).addClass('card-icon-bg')
        }
    }



    // TARIFFS
    $('.cards-hovering-img-x3 .card-neutral-white').hover(hoverInX3, hoverOutX3)
    $('.cards-hovering-img-x3 .card-neutral-white').click(hoverInX3, hoverOutX3)


    function hoverIn() {
        console.log('hoverIn')

        $(this).closest('.cards-hovering-img-x4').find('.card-neutral-white').addClass('bg-gradient-vertical-primary')
        $(this).closest('.cards-hovering-img-x4').find('.card-neutral-white').addClass('card-icon-bg')
        $(this).closest('.cards-hovering-img-x4').find('.card-neutral-white').removeClass('card-icon-bg-img')
        setTimeout(() => {
            $(this).closest('.cards-hovering-img-x4').find('.card-icon-bg-img p').addClass('active')
        }, 350)

        if($(this).hasClass('card-icon-bg-img')) {
        }
        else {
            $(this).addClass('card-icon-bg-img')
            $(this).removeClass('bg-gradient-vertical-primary')
            $(this).removeClass('card-icon-bg')
        }
    }

    function hoverOut() {
        console.log('hoverOut')

        if($(this).hasClass('card-icon-bg-img')) {
            $(this).removeClass('card-icon-bg-img')
            $(this).addClass('bg-gradient-vertical-primary')
            $(this).addClass('card-icon-bg')
            $(this).find('p').removeClass('active')
        }
    }



    // TARIFFS
    $('.cards-hovering-img-x4 .card-neutral-white').hover(hoverIn, hoverOut)
    $('.cards-hovering-img-x4 .card-neutral-white').click(hoverIn, hoverOut)




    function hoverInTafiffs() {
        $(this).closest('.tariff-cards').find('.tariff-cards-item').removeClass('active')
        $(this).addClass('active')
    }

    function hoverOutTafiffs() {
        if(!$(this).hasClass('default-active')) {
            $(this).closest('.tariff-cards').find('.tariff-cards-item.active').css({'border': '2px solid #f8f8f8'})

            $(this).closest('.tariff-cards').find('.tariff-cards-item.default-active').addClass('active')
            setTimeout(() => {
                $($(this).closest('.tariff-cards').find('.tariff-cards-item')).attr('style', '')
                $(this).closest('.tariff-cards').find('.tariff-cards-item:not(.default-active)').removeClass('active')
            }, 250)
        }
    }


    $('.tariff-cards-item').hover(hoverInTafiffs, hoverOutTafiffs)
    $('.tariff-cards-item').click(hoverInTafiffs, hoverOutTafiffs)




    function setToggle() {
        $(this).hasClass('active')
            && $(event.target).is(':not(.unclickable)')
            && $(event.target).parent().is(':not(.unclickable)')
            && $(event.target).parent().parent().is(':not(.unclickable)')
            && $(event.target).parent().parent().parent().is(':not(.unclickable)')
            ? $(this).removeClass('active')
            : $(this).addClass('active');
    }

    $('body').on('click', '.js-toggler', setToggle)


    function setToggleAccordion() {
        // .js-toggler-tab-panel    - ACCORDION TAB PANEL
        // .js-toggler-tab-slides   - ACCORDION TAB SLIDES
        $(this).closest('.js-toggler-tab-panel').find('.active').removeClass('active')
        $(this).addClass('active')

        $(this).closest('.js-toggler-tab').find('.js-toggler-tab-slides .active').removeClass('active')
        $(this).closest('.js-toggler-tab').find('#' + $(this).data('tab-id')).addClass('active')

    }

    $('body').on('click', '.js-toggler-tab-panel > div', setToggleAccordion)


    function setClose(closeToNodeSelector) {
            $(closeToNodeSelector).removeClass('active')
    }

    $('body').on('click', function() {
        if($(event.target).closest(".dropdown").length === 0) {
            setClose('.dropdown')
        }
    })






    $('.img-slider').owlCarousel({
        // loop:true,
        margin:16,
        nav:true,
        dots: false,
        navText: [
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n',
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
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

    $('.img-slider-x4').owlCarousel({
        // loop:true,
        margin:16,
        nav:true,
        dots: false,
        navText: [
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n',
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
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
                items: 4
            },
            1280: {
                items: 4
            },
            1920: {
                items: 4
            },
        }
    })

    $('.img-slider-x4_2').owlCarousel({
        // loop:true,
        margin:16,
        nav:true,
        dots: false,
        navText: [
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n',
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>',
        ],
        responsive:{
            360: {
                items: 1
            },
            640: {
                items: 1
            },
            960: {
                items: 2
            },
            1280: {
                items: 3
            },
            1920: {
                items: 4
            },
        }
    })

    $('.img-slider-x4_3').owlCarousel({
        // loop:true,
        margin:16,
        nav:true,
        dots: false,
        navText: [
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n',
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
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
                items: 4
            },
            1920: {
                items: 4
            },
        }
    })

    $('.img-slider-x3').owlCarousel({
        // loop:true,
        margin:16,
        nav:true,
        dots: false,
        navText: [
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n',
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>',
        ],
        responsive:{
            360: {
                items: 1,
            },
            640: {
                items: 1,
            },
            960: {
                items: 2,
            },
            1280: {
                items: 3,
            },
            1920: {
                items: 3,
            },
        }
    })

    $('.blog-slider').owlCarousel({
        // loop:true,
        margin:16,
        nav:true,
        dots: false,
        navText: [
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n',
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>',
        ],
        responsive:{
            360: {
                items: 1
            },
            640: {
                items: 1
            },
            960: {
                items: 1
            },
            1280: {
                items: 1
            },
            1920: {
                items: 1
            },
        }
    })





    $('.img-slider-x3').owlCarousel({
        // loop:true,
        margin:16,
        nav:true,
        dots: false,
        navText: [
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n',
            '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>',
        ],
        responsive:{
            360: {
                items: 1
            },
            640: {
                items: 1
            },
            960: {
                items: 2
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
                '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n',
                '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
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


    function setBlogSliderActive() {
        $('.blog-slider').addClass('owl-theme');
        $('.blog-slider').addClass('owl-carousel');
        $('.blog-slider').owlCarousel({
            stagePadding: 200,
            // loop:true,
            // margin:16,
            startPosition: 1,
            nav:true,
            dots: false,
            navText: [
                '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M4.75 0.749999L0.75 5.25L4.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n',
                '<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M0.750001 0.749999L4.75 5.25L0.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
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
        $('#blog-slider-container').addClass('container-fluid')
    }
    function setBlogSliderUnactive() {
        $('.blog-slider').removeClass('owl-theme');
        $('.blog-slider').removeClass('owl-carousel');
        $('.blog-slider').trigger('destroy.owl.carousel');
        $('#blog-slider-container').removeClass('container-fluid')
    }

    new MobileDetect(setBlogSliderActive, setBlogSliderUnactive, 360, 960);






    
    
    




})