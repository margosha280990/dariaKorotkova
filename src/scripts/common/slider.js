const slides = document.querySelectorAll('#slides .slide')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
const controls = document.querySelectorAll('.controls')
const NS = document.querySelectorAll('#slider__next .slider__little-n')
const PR = document.querySelectorAll('#slider__previus .slider__little-p')

let currentSlide = 0
let currN = 0
let currP = 0
// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides[currentSlide].className = 'slide'
    currentSlide = (n+slides.length)%slides.length // остаток от деления
    slides[currentSlide].className = 'slide slider__big showing'
}
function goToNext(n){
    NS[currN].className = 'slider__little-n'
    currN = (n+NS.length)%NS.length
    NS[currN].className = 'slider__little-n showing'
}
function goToPrev(n){
    PR[currP].className = 'slider__little-p'
    currP = (n+PR.length)%PR.length
    PR[currP].className = 'slider__little-p showing'
}

// навешивает обработчики событий на элементы next и previous
function setupListners(){


    next.onclick = function(){
        goToSlide(currentSlide+1)
        goToNext(currN+2)

    }
    previous.onclick = function(){
        goToSlide(currentSlide-1)
        goToPrev(currP-1)
    }
}

// показывает кнопки для навигации
function showButtons(){
    for (var i=0; i<controls.length; i++){
        controls[i].style.display = 'inline-block'

    }
}

// инициализация слайдера
function sliderInit(){
    if (slides.length !== 0){ // если на странице есть нужный html код
        setupListners()
        showButtons()
    }
}


module.exports = sliderInit
