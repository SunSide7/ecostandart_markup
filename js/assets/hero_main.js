function setVizierPos() {

    $('.hero-asc-scaffold .hero-asc-text').height()

    var scaffold = $('.hero-asc-scaffold')[0]

    var title = $('.hero-asc-scaffold-content')[0];
    var style = title.currentStyle || window.getComputedStyle(title);

    console.log('bottom:', style.bottom.replace('px', ''))



    $('.hero-asc-line-h').css('top', $('.hero-asc-scaffold .hero-asc-text-top')[0].clientHeight + scaffold.clientHeight - (title.clientHeight + +style.bottom.replace('px', '')) + 'px');
    $('.hero-asc-line-v').css('left', $('.hero-asc-scaffold .hero-asc-text')[0].clientWidth + +style.marginLeft.replace('px', '') + +style.paddingLeft.replace('px', '') + 44 + 'px');
    $('.hero-asc-line-cross').css('top', $('.hero-asc-scaffold .hero-asc-text-top')[0].clientHeight - ($('.hero-asc-line-cross')[0].clientHeight / 2) + scaffold.clientHeight - (title.clientHeight + +style.bottom.replace('px', '')) + 3 + 'px');
    $('.hero-asc-line-cross').css('left', $('.hero-asc-scaffold .hero-asc-text')[0].clientWidth + +style.marginLeft.replace('px', '') + +style.paddingLeft.replace('px', '') - ($('.hero-asc-line-cross')[0].clientWidth / 2) + 3 + 44 + 'px');



}

function setStartContent() {
    $('.hero-asc-scaffold .hero-asc-title-top').text($('.hero-asc-slide.active .hero-asc-title-top').text())
    $('.hero-asc-scaffold .hero-asc-title').text($('.hero-asc-slide.active .hero-asc-title').text())
    $('.hero-asc-scaffold .hero-asc-subtitle').text($('.hero-asc-slide.active .hero-asc-subtitle').text())

    $('.hero-asc-scaffold').css({'background-image': 'url(' + $('.hero-asc-slide.active img').attr('src') + ')',});

    $('.hero-asc-btn-wrp').empty()
    $('.hero-asc-slide.active button').clone().appendTo('.hero-asc-btn-wrp')

    if ($('.hero-asc-slide.active').hasClass('space-bottom-30')) {
        $('.hero-asc-scaffold').addClass('space-bottom-30')
    } else {
        $('.hero-asc-scaffold').removeClass('space-bottom-30')
    }


    setVizierPos()

}

function setNextContent() {
    if($('.hero-asc-slide.active').hasClass('last')) {
        $('.hero-asc-slide.last').removeClass('active')
        $('.hero-asc-slide.first').addClass('active')
    } else {
        $('.hero-asc-slide.active').next().addClass('active').prev().removeClass('active')
    }

    $('.hero-asc-scaffold .hero-asc-title-top').text($('.hero-asc-slide.active .hero-asc-title-top').text())
    $('.hero-asc-scaffold .hero-asc-title').text($('.hero-asc-slide.active .hero-asc-title').text())
    $('.hero-asc-scaffold .hero-asc-subtitle').text($('.hero-asc-slide.active .hero-asc-subtitle').text())

    $('.hero-asc-scaffold').css({'background-image': 'url(' + $('.hero-asc-slide.active img').attr('src') + ')'});

    $('.hero-asc-btn-wrp').empty()
    $('.hero-asc-slide.active button').clone().appendTo('.hero-asc-btn-wrp')

    if ($('.hero-asc-slide.active').hasClass('space-bottom-30')) {
        $('.hero-asc-scaffold').addClass('space-bottom-30')
    } else {
        $('.hero-asc-scaffold').removeClass('space-bottom-30')
    }

    setVizierPos()
}

function setPrevContent() {
    if($('.hero-asc-slide.active').hasClass('first')) {
        $('.hero-asc-slide.first').removeClass('active')
        $('.hero-asc-slide.last').addClass('active')
    } else {
        $('.hero-asc-slide.active').prev().addClass('active').next().removeClass('active')
    }
    $('.hero-asc-scaffold .hero-asc-title-top').text($('.hero-asc-slide.active .hero-asc-title-top').text())
    $('.hero-asc-scaffold .hero-asc-title').text($('.hero-asc-slide.active .hero-asc-title').text())
    $('.hero-asc-scaffold .hero-asc-subtitle').text($('.hero-asc-slide.active .hero-asc-subtitle').text())

    $('.hero-asc-scaffold').css({'background-image': 'url(' + $('.hero-asc-slide.active img').attr('src') + ')'});

    $('.hero-asc-btn-wrp').empty()
    $('.hero-asc-slide.active button').clone().appendTo('.hero-asc-btn-wrp')

    if ($('.hero-asc-slide.active').hasClass('space-bottom-30')) {
        $('.hero-asc-scaffold').addClass('space-bottom-30')
    } else {
        $('.hero-asc-scaffold').removeClass('space-bottom-30')
    }

    setVizierPos()
}

setStartContent();
setTimeout(function() {
    setVizierPos()
}, 100)

$(window).on('resize', () => {
    setStartContent();
    setTimeout(function() {
        setVizierPos()
    }, 100)
});

$(window).on('wheel', () => {
    if(event.ctrlKey == true) {
        setVizierPos()
        setStartContent();
    }
});

function replaceNavActive() {
    $('.hero-asc-nav').appendTo('.hero-asc-nav-mobile-wrp')
    console.log('mobile')
}
function replaceNavUnactive() {
    $('.hero-asc-nav').appendTo('.hero-asc-nav-desk-wrp')
    console.log('desktop')

}

new MobileDetect(replaceNavActive, replaceNavUnactive, 340, 639.5);



$('body').on('click', '.hero-asc-next', setNextContent)
$('body').on('click', '.hero-asc-prev', setPrevContent)