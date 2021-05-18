$(function(){
    $('.intro__slider').slick({
        arrows: false,
        dots: true,
    });
});


let iconMenu = document.querySelector('.header__menu-icon');

let headerMenu = document.querySelector('.header__menu-list');

let body = document.querySelector('body');


iconMenu.addEventListener('click', function(){
    // headerMenu.classList.add('header__menu-active');
    headerMenu.classList.toggle('header__menu-active')
    body.classList.toggle('overflow-hidden');
}) 