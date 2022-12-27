const editButton = document.querySelector('.edit-button');
const saveButton = document.querySelector('.save-button');
const usernameTextbox = document.querySelector('.username-textbox');
const passwordTextbox = document.getElementById('password-textbox');
const editImageIcon = document.querySelector('.edit-icon');

let isEditEnabled = false;
let passwordValue = '1234';
let usernameDisplayText = document.getElementById('username');
let passwordDisplayText = document.getElementById('password');
//usernameDisplayText.innerText

editButton.addEventListener('click', ()=> {
    toggleEditMode();
});
saveButton.addEventListener('click', ()=> {
    toggleEditMode();
});

editImageIcon.addEventListener('click', ()=> {

});

function toggleEditMode(){
    if(isEditEnabled){
        hideEditOptions();
        isEditEnabled = false;
    }
    else if(!isEditEnabled){
        showEditOptions();
        isEditEnabled = true;
    }
}

function showEditOptions(){
    saveButton.style.display = 'block';
    editButton.style.display = 'none';

    usernameDisplayText.style.display = 'none';
    usernameTextbox.style.display = 'block';
    usernameTextbox.value = usernameDisplayText.innerText;

    passwordDisplayText.style.display = 'none'
    passwordTextbox.style.display = 'block'
    passwordTextbox.value = passwordValue;

    editImageIcon.style.display = 'block'
}

function hideEditOptions(){
    saveButton.style.display = 'none';
    editButton.style.display = 'block';

    usernameDisplayText.innerText = usernameTextbox.value;
    usernameDisplayText.style.display = 'block';
    usernameTextbox.style.display = 'none';

    passwordValue = passwordTextbox.value;
    let passwordAsterisks = passwordValue;
    passwordTextbox.style.display = 'none'
    passwordDisplayText.style.display = 'block'
    passwordDisplayText.innerText = countAsterisks(passwordAsterisks);

    editImageIcon.style.display = 'none'
}

function countAsterisks(text){
    var number = text.length
    let passwordAsterisks = '';
    for(i = 0; i < number; i++){
        passwordAsterisks = passwordAsterisks + '*';
    }
    return passwordAsterisks;
}

function logOut(){
    window.location.href = "index.html";
}