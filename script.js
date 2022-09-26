const icon = document.querySelector('.menu');
const menu = document.querySelector('.hamburger-menu');
console.log(menu)

icon.addEventListener('click', ()=>{
    toggleMenu();
})

menu.addEventListener('click', ()=>{
    toggleMenu();
})
function toggleMenu(){
    const visibility = menu.getAttribute('data-visible');
    if(visibility == "true")
    {
        menu.setAttribute('data-visible', false);
    }
    else if(visibility == "false")
    {
        menu.setAttribute('data-visible', true);
    }
}


/////////////////// events //////////////////////////

const slider = document.querySelector('.slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let sliderLength = document.querySelectorAll('.slider img').length;

const circles = document.querySelector('#events .container .circles');


let currentImage = 1;
let timeout;
bubbleUpdate();
var circle = document.getElementById(`${currentImage}`);
circle.classList.add('active');

next.addEventListener('click', ()=>{
    currentImage++;
    clearTimeout(timeout);
    updateImage();
    circle = document.getElementById(`${currentImage}`);
    circle.classList.add('active');
})

prev.addEventListener('click', ()=>{
    currentImage--;
    clearTimeout(timeout);
    updateImage();
    circle = document.getElementById(`${currentImage}`);
    circle.classList.add('active');
})

updateImage();

function updateImage(){
    if(currentImage > sliderLength) currentImage = 1;
    if(currentImage < 0) currentImage = sliderLength
    slider.style.transform = `translateX(-${(currentImage-1)*500}px)`;

    circle.classList.remove('active');
    timeout = setTimeout(() => {
        currentImage++;
        updateImage();
        circle = document.getElementById(`${currentImage}`);
        circle.classList.add('active');
    }, 3000);
}

function bubbleUpdate(){
    let bubble;
    for (let i = 0; i < sliderLength-1; i++) {
        bubble = document.createElement('div');
        bubble.id = i+2;
        bubble.classList.add('circle');
        circles.appendChild(bubble);
    }
}


    


