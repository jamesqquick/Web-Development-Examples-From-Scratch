const menu = document.querySelector('#slide-menu');
console.log(menu);
function openMenu(){
    console.log("opening menu");
    menu.classList.add('open');
}

function closeMenu(){
    console.log("closing menu");
    menu.classList.remove('open');
}