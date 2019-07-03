let userEmail = getCookie('email');
ajax('core/get_user_data.php', 'POST', getUserData, { "email": userEmail });

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUserData(lasts) {
    lasts = JSON.parse(lasts);
    document.querySelector('#signup-name').value = lasts.name;
    document.querySelector('#signup-pass').value = lasts.password;
    document.querySelector('#signup-birthday').value = lasts.birthday;
    M.updateTextFields();
}

document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let updateData = {
        "email": userEmail,
        "name": document.querySelector('#signup-name').value,
        "pass": document.querySelector('#signup-pass').value,
        "birthday": document.querySelector('#signup-birthday').value,
    };
    ajax('core/update_user_data.php', 'POST', updateUserData, updateData);

}

function updateUserData(lasts) {
    console.log(lasts);
    if (lasts == 1) {
        M.toast({html: 'Все ок, сенпай'});
    }
    else {
        M.toast({html: 'Ошибка обновления'});
    }
}