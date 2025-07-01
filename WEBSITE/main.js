const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () =>{
    container.classList.add('active');
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove('active');
});

function btn() {
    var un = document.forms["form1"]["Uname"].value;
    var pw = document.forms["form1"]["Pass"].value;

    if(un == "kupal" && pw == 123){
        window.location.href="landingpage/landingpage.html";
    }
    else{
        alert("Invalid Username and Password");
        return;
    }

}

function btn2() {
    var un = document.forms["form2"]["Uname"].value;
    var em = document.forms["form2"]["Em"].value;
    var pw = document.forms["form2"]["Pass"].value;

    if(un == "kupal" && em == "kupal@it.com" && pw == 123){
        window.location.href="landingpage/landingpage.html";
    }
    else{
        alert("Invalid Username and Password");
        return;
    }
}

