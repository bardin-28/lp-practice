// SLIDER
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
})
const allLinks = document.querySelectorAll('a');
allLinks.forEach((e, i) => {
    e.onclick = () => {
        alert('Не-а. Не работает клик. Нету макета!')
    }
})