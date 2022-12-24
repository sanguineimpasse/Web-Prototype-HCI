const hideButton = document.getElementById("hide-nav");
const classNavExtension = document.querySelector(".navbar-extension");
const navToggler = document.getElementById('nav-toggler');

let navShown = false;
let isNavLocked = false;

//navigation-extension scripts
function showNav(){
    if(!navShown){
        classNavExtension.style.display = 'block';
        navShown = true;
    }
}

function hideNav(){
    classNavExtension.style.display = 'none';
    navShown = false;
}

function lockNav(){
    if(isNavLocked){
        isNavLocked = false;
    }
    else{
        isNavLocked = true;
    }
}

//nav button listeners
navToggler.addEventListener('mouseover', ()=> {
    if(!isNavLocked){
        hideNav();
        navShown = false;
    }
});

hideButton.addEventListener('mouseover', ()=> {
    showNav();
    navShown = true;
});

hideButton.addEventListener('mousedown', ()=> {
    lockNav();
});

