var logo = $('header .bt');
var grids = $('header .grids');
var con = $('.content');
var service = $('.service-section');
var Works = $('.Works');
var news = $('.news-section');
var section = $('.categories-section');
var footer = $('.footer-section');
var go = $('.go-top');


function GoTop() {
    $("html,body").animate({
        scrollTop: 0
    }, 800);
}

function xl() {
    $('.breadcrumb').slideToggle();
}

document.body.onpageshow = function() {
    logo.addClass("fdsx");
    grids.addClass("sxzy");
}
document.body.onscroll = function() {
    if (window.pageYOffset < con.offset().top - window.innerHeight ) {

        go.fadeOut();
    }
    if (window.pageYOffset > con.offset().top - window.innerHeight ) {
        con.addClass("sxzy");
        go.fadeIn();
    }
    if (window.pageYOffset > service.offset().top - window.innerHeight ) {
        service.addClass("sxzy");
    }
    if (window.pageYOffset > Works.offset().top - window.innerHeight) {
        Works.addClass("fdsx");
    }
    if (window.pageYOffset > news.offset().top - window.innerHeight ) {
        news.addClass("sxzy");
    }
    if (window.pageYOffset > section.offset().top - window.innerHeight ) {
        section.addClass("sxzy");
    }
    if (window.pageYOffset > footer.offset().top - window.innerHeight ) {
        footer.addClass("sxzy");
    }
}