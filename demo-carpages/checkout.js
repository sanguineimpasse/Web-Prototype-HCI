const driverinfoContainer = document.querySelector('.left-side-column');
const nextpageContainer = document.querySelector('.important-information-container');
const termsCheckbox = document.getElementById('agree-terms');

document.querySelector('.next-button').addEventListener('click', ()=> {
    showNextPage();
});

document.querySelector('.cancel-button').addEventListener('click', ()=> {
    history.back();
});

function showNextPage(){
    console.log('show next page activated!!1!!!');
    driverinfoContainer.style.display = 'none';
    document.querySelector('.cancel-button').style.display = 'none';
    document.querySelector('.next-button').style.display = 'none';
    document.querySelector('.contents-title').innerText = 'Almost there...';

    document.querySelector('.booknow-button').style.display = 'block';
    nextpageContainer.style.display = 'block';
}

const accepttermsWarning = document.querySelector('.accept-terms-warning');
const accepttermsLineSpace = document.getElementById('accept-terms-br');

document.querySelector('.booknow-button').addEventListener('click', ()=> {
    if(termsCheckbox.checked){
        //proceed to the next page
        window.location.href = "payment-process.html";
    }
    else{
        //display "you must accept terms and conditions here"
        accepttermsWarning.style.display = 'block';
        accepttermsLineSpace.style.display = 'none';
    }
});