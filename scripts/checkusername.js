const pnotAllowed = document.querySelector('.not-allowed');

document.getElementById('username').addEventListener('input', ()=> {
    checkValidity();
});

function checkValidity(){
    let usernameInput = document.getElementById('username').value;
    console.log(usernameInput);
    let firstTwo = usernameInput.substring(0, 2);
    let lower = firstTwo.toLowerCase();
    if(lower == 'aa'){
        pnotAllowed.style.display = 'block';
    }
    else{
        pnotAllowed.style.display = 'none';
    }
}