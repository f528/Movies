
/***===progress-bar======= */
let scrollPrecentage = () => {
    let scrollProgress = document.getElementById('progress');
    let progressValue = document.getElementById('progress-value');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#e70634  ${scrollValue}%,  #2b3f38  ${scrollValue}%)`;


}
window.onscroll = scrollPrecentage;
window.onload = scrollPrecentage;


var swiper = new Swiper(".mySwiper", {


    lazy: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,

    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

/**menu-btn-fixed-when-scroll----------- */
$(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
        $('.navigation').addClass('fix-icon');
    }
    else {
        $('.navigation').removeClass('fix-icon');
    }
});

// popup-open---===============================================================
$(document).on('click', '.play-btn a', function () {
    $('.play').addClass('active-popup');

});
// popup-close---============================================================
$(document).on('click', '.close-movie', function () {
    $('.play').removeClass('active-popup');

})

//=======auto-play-whene-popup-open============================>
$('.play-btn a').click(function () {
    $('#m-movie')[0].play();
 
});
//==Close-video-where-popup-close======================================>
$('.close-movie').click(function () {
    $('#m-movie')[0].pause();

});

