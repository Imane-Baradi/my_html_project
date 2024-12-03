
window.onload = function() {
    if (!getCookie("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "block";
    }
}

function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; 
}
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';'); 
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length); 
        }
    }
    return null; 
}

function acceptCookies() {
    setCookie("cookiesAccepted", "true", 365); 
    document.getElementById("cookie-banner").style.display = "none"; 
}

function declineCookies() {
    deleteCookie("cookiesAccepted");
    document.getElementById("cookie-banner").style.display = "none"; 
}


function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; 
}

document.getElementById("switch-to-register").addEventListener('click',(event)=>{
    event.preventDefault();
    document.querySelector(".wrapper").classList.add("hidden")
})
document.getElementById("switch-to-login").addEventListener('click',(event)=>{
    event.preventDefault();
    document.querySelector(".wrapper").classList.remove("hidden")
})
const name = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();
