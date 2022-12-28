window.addEventListener('load', ()=> {
    setTimeout(showDone, 4000);
});

const title = document.getElementById('title');

function showDone(){
    title.innerText = 'Done!'
    setTimeout(goHomepage, 1500);
}

function goHomepage(){
    window.location.href = "../dashboard.html";
}
