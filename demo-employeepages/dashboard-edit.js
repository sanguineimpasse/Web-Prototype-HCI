const editbuttonOne = document.getElementById('edit-button-one');
const editbuttonTwo = document.getElementById('edit-button-two');
const editbuttonThree = document.getElementById('edit-button-three');

let contentTextOne = document.getElementById('content-text-one');
let contentTextTwo = document.getElementById('content-text-two');
let contentTextThree = document.getElementById('content-text-three');

let textareaOne = document.querySelector('.textarea-one');
let textareaTwo = document.querySelector('.textarea-two');
let textareaThree = document.querySelector('.textarea-three');

let buttonOneActivated = false;
editbuttonOne.addEventListener('click', ()=> {
    if(buttonOneActivated){
        buttonOneActivated = false;
        editbuttonOne.innerText = 'Edit'

        contentTextOne.style.display = 'block';
        contentTextOne.innerText = textareaOne.value;
        textareaOne.style.display = 'none';
    }
    else{
        buttonOneActivated = true;
        editbuttonOne.innerText = 'Save'

        //hide the p and show the text area here
        textareaOne.style.display = 'block';
        console.log(contentTextOne.innerText);
        textareaOne.value = contentTextOne.innerText;
        contentTextOne.style.display = 'none';
    }
});

let buttonTwoActivated = false;
editbuttonTwo.addEventListener('click', ()=> {
    if(buttonTwoActivated){
        buttonTwoActivated = false;
        editbuttonTwo.innerText = 'Edit'

        contentTextTwo.style.display = 'block';
        contentTextTwo.innerText = textareaTwo.value;
        textareaTwo.style.display = 'none';
    }
    else{
        buttonTwoActivated = true;
        editbuttonTwo.innerText = 'Save'

        //hide the p and show the text area here
        textareaTwo.style.display = 'block';
        console.log(contentTextTwo.innerText);
        textareaTwo.value = contentTextTwo.innerText;
        contentTextTwo.style.display = 'none';
    }
});

let buttonThreeActivated = false;
editbuttonThree.addEventListener('click', ()=> {
    if(buttonThreeActivated){
        buttonThreeActivated = false;
        editbuttonThree.innerText = 'Edit'

        contentTextThree.style.display = 'block';
        contentTextThree.innerText = textareaThree.value;
        textareaThree.style.display = 'none';
    }
    else{
        buttonThreeActivated = true;
        editbuttonThree.innerText = 'Save'

        //hide the p and show the text area here
        textareaThree.style.display = 'block';
        console.log(contentTextThree.innerText);
        textareaThree.value = contentTextThree.innerText;
        contentTextThree.style.display = 'none';
    }
});

