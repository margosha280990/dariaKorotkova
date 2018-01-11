const slider = require('./common/slider')
const $ = require('jquery') // если будет нужен

slider() // инициализируем слайдер

$('.hamburger').on('click', function(){
    $('.nav').toggle()
})

$('.nav__close').on('click', function(){
    $('.nav').css('display','none')
})

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner')
    $spinner.fadeOut()
    $preloader.delay(350).fadeOut('slow')
})

$('.buttonit__button').click(function(){
    $('#flip-toggle').toggleClass('hover')
    $('.buttonit__button').addClass('disp')
    $('.user').addClass('disp')
})

$('.arrow-down').click(function(){
    $('html, body').animate({scrollTop: $('header').height()+ 50 },'slow')

})

$(function() {
    $('#block-subtitle').html($('.showing').data('parameter'))
    $('.next').click(function(){
        var k = $('.showing').data('parameter')
        $('#block-subtitle').html(k)
    })
})

$(function() {
    $('#slider__but').attr('href',$('.showing').data('link'))
    $('.next').click(function(){
        var k = $('.showing').data('link')
        $('#slider__but').attr('href',k)
    })
})


$(function() {
    $('#slider__but').attr('href',$('.showing').data('link'))
    $('.prev').click(function(){
        var k = $('.showing').data('link')
        $('#slider__but').attr('href',k)
    })
})

$(function() {
    $('#block-subtitle').html($('.showing').data('parameter'))
    $('.prev').click(function(){
        var k = $('.showing').data('parameter')
        $('#block-subtitle').html(k)
    })
})

var lastId,
    topMenu = $('#top-menu'),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find('a'),
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr('href'))
        if (item.length) {
            return item
        }
    })

menuItems.click(function(e) {
    var href = $(this).attr('href'),
        offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300)
    e.preventDefault()
})

$(window).scroll(function() {
    var fromTop = $(this).scrollTop() + topMenuHeight
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this
    })

    cur = cur[cur.length - 1]
    var id = cur && cur.length ? cur[0].id : ''

    if (lastId !== id) {
        lastId = id
        menuItems
    .parent().removeClass('active')
    .end().filter('[href=\'#' + id + '\']').parent().addClass('active')
    }
})


