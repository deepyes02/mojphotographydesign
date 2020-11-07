const mobileNavCross = document.getElementById('mobileNavCross');
const menu = document.getElementById('menu');
mobileNavCross.addEventListener('click', function(){
menu.classList.toggle('displayBlock');
})

const hamburgerButton = document.getElementById('hamburgerButton');
hamburgerButton.addEventListener('click', function(){
    menu.classList.toggle('displayBlock');
})