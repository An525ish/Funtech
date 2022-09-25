const icon = document.querySelector('.menu');
const menu = document.querySelector('.hamburger-menu');

icon.addEventListener('click', ()=>{
    const visibility = menu.getAttribute('data-visible');
    if(visibility == "true")
    {
        menu.setAttribute('data-visible', false);
    }
    else if(visibility == "false")
    {
        menu.setAttribute('data-visible', true);
    }
})