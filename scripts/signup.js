document.getElementById('registerl').addEventListener('click', ()=>{
    printInputs();
});

function printInputs(){
    let username = document.getElementById('username').value;
    let bday = document.getElementById('bday').value;
    let password = document.getElementById('password').value; //ITS JUST A PROTOTYPE!!! IT DOESN'T HAVE TO BE SECURE OKAY??? SHUT THE F UP CONSCIENCE!
    let location = document.getElementById('location').value;

    console.log("username: " + username);
    console.log("bday: " + bday);
    console.log("password: " + password);
    console.log("location: " + location);
}