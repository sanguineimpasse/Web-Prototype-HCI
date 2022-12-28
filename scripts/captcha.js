window.addEventListener('load', ()=>{
    generateCaptcha();
    setCaptcha();
});

document.querySelector(".captcha-refresh").addEventListener("click", ()=> {
    generateCaptcha();
    setCaptcha();
});

let captchaValue = "";
const fonts = ["cursive", "sans-serif", "serif", "monospace"];

function generateCaptcha(){
    let value = btoa(Math.random()*1000000000);
    value = value.substr(0,5+Math.random()*5);
    captchaValue = value;
}

function setCaptcha(){
    let html = captchaValue.split("").map((char)=>{
        const rotate = -20 + Math.trunc(Math.random()*30);
        const font = Math.trunc(Math.random()*fonts.length);
        return `<span 
                        style="transform:rotate(${rotate}deg); 
                        font-family:${fonts[font]}
                   ">${char}</span>`;
    }).join("");
    document.querySelector(".captcha .preview").innerHTML = html;
}

function checkCaptcha(){
    let userInputCaptcha = document.getElementById("captcha-form").value;

    console.log('the user input was ' + userInputCaptcha);
    console.log('the captcha text was "' + captchaValue + '"');

    if(captchaValue === userInputCaptcha){
        console.log('THE USER PASSED THE VIBE CHECK');
        window.location.href = "dashboard.html";
    }
    else if(captchaValue !== userInputCaptcha){
        console.log('THE USER DID NOT PASS THE VIBE CHECK');
        alert('Please redo the captcha.');
        generateCaptcha();
        setCaptcha();
    }
}

function handle(enterKey){
        console.log('enter key pressed!');
        if(enterKey.keyCode === 13){
            enterKey.preventDefault(); // Ensure it is only this code that runs
			checkCaptcha();
        }
    }

/* 
//OLD METHOD
(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    

    function generateCaptcha(){
        let value = btoa(Math.random()*1000000000);
        value = value.substr(0,5+Math.random()*5);
        captchaValue = value;
    }

    function setCaptcha(){
        let html = captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span 
                            style="transform:rotate(${rotate}deg); 
                            font-family:${fonts[font]}
                    ">${char}</span>`;
        }).join("");
            document.querySelector(".captcha .preview").innerHTML = html;
    }
    
    function initCaptcha(){
        document.querySelector(".captcha-refresh").addEventListener("click", ()=> {
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();

    
})();

const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    
function generateCaptcha(){
    let value = btoa(Math.random()*1000000000);
    value = value.substr(0,5+Math.random()*5);
    captchaValue = value;
} 
*/
