function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ""; 
}

const inputName = document.getElementById("name");
const buttonSave = document.getElementById("save");
const frase = document.getElementById("frase");

const userName = getCookie('userName');
if (userName) {
    inputName.style.display = 'none';
    buttonSave.style.display = 'none';
    frase.textContent = `Bienvenido,  ${(decodeURIComponent(userName))}`;
} else {
    inputName.style.display = 'inline';
    buttonSave.style.display = 'inline';
    buttonSave.addEventListener('click', () =>{
        const nameText = inputName.value.trim();
        if (nameText) {
            setCookie('userName', encodeURIComponent(nameText), 7);
            location.reload();
        }
    });
}