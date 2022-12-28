//sample accounts

const aaGene = 'AA-Gene';
const aaGenePass = '12345gene';

const defaultuser = 'defaultuser';
const defaultuserPass = '1234';

function checkSignIn(){
    let username = document.getElementById('username').value;
    document.querySelector('.incorrect-user-warning').style.display = 'none';
    switch(username){
        case aaGene:
            checkPassword();
            break;
        case defaultuser:
            checkPassword();
            break;
        default:
            console.log("user '" + username + "' does not exist!");
            document.querySelector('.incorrect-user-warning').style.display = 'block';
            break;
    }
}

function checkPassword(){
    let password = document.getElementById('password').value;
    switch(password){
        case aaGenePass:
            console.log('correct user account!');
            window.location.href = "demo-employeepages/dashboard.html";
            break;
        case defaultuserPass:
            console.log('correct user account!');
            window.location.href = "dashboard.html";
            break;
        default:
            document.querySelector('.incorrect-password-warning').style.display = 'block';
            console.log('incorrect password!');
            break;
    }
}