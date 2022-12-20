const hideButton = document.getElementById("hide-nav");
const classNavExtension = document.querySelector(".navbar-extension");
const navToggler = document.getElementById('nav-toggler');
const navShowIcon = document.getElementById('nav-show-icon');

let navShown = false;
let isNavButtonShow = false;

//nav button functions
function changeIcon(){
    if(isNavButtonShow){
        hideNavIcon();
    }
    else{
        showNavIcon();
    }
}

function showNavIcon(){
    navShowIcon.src = 'icons/back.png';
    isNavButtonShow = true;
}

function hideNavIcon(){
    navShowIcon.src = 'icons/next.png';
    isNavButtonShow = false;
}

//navigation-extension scripts
function showNav(){
    if(!navShown){
        classNavExtension.style.display = 'block';
        showNavIcon();
        navShown = true;
    }
}

function hideNav(){
    classNavExtension.style.display = 'none';
    hideNavIcon();
    navShown = false;
}

function toggleNav(){
    if(navShown){
        //hide the nav bar
        classNavExtension.style.display = 'none';
        changeIcon();
        navShown = false;
    }else{
        //show the nav bar
        classNavExtension.style.display = "block"
        changeIcon();
        navShown = true;
    }
}

//nav button listeners
navToggler.addEventListener('mouseover', ()=> {
    hideNav();
    navShown = false;
});

hideButton.addEventListener('mouseover', ()=> {
    showNav();
    navShown = true;
});

hideButton.addEventListener('mousedown', ()=> {
    toggleNav();
});

