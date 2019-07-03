document.querySelector('#signup-submit').onclick = function(e) {
	e.preventDefault();
	let name = document.querySelector('#signup-name').value;
	let pass = document.querySelector('#signup-pass').value;
	let email = document.querySelector('#signup-email').value;
	let birthday = document.querySelector('#signup-birthday').value;
	let sex = document.querySelectorAll('.sex');
	for (let i = 0; i < sex.length; i++) {
		if (sex[i].checked) {
			sex = sex[i].value;
			break;	
		}
	}
	console.log(sex);

	let dats = {
		'name' : name,
		'pass' : pass,
		'email' : email,
		'birthday' : birthday,
		'sex' : sex
	}

	ajax('core/signup.php', 'POST', signup, dats);

	function signup(lasts) {
		console.log(lasts);
		if (lasts == 2) {
			M.toast({html: 'Введены не все данные'});
		} else if (lasts == 1) {
			M.toast({html: 'Вы успешно зарегистрировались!'});
			modalClose();
			} else {
				M.toast({html: 'Ошибка. Повторите позже'});
				}
	}
}



document.querySelector('#login-submit').onclick = function(e) {
	e.preventDefault();
	let pass = document.querySelector('#login-pass').value;
	let email = document.querySelector('#login-email').value;

	let dats = {
		'pass' : pass,
		'email' : email
	}

	ajax('core/login.php', 'POST', login, dats);

	function login(lasts) {
		console.log(lasts);
		if (lasts == 2) {
			M.toast({html: 'Введены не все данные'});
		} else if (lasts == 0) {
			M.toast({html: 'Пользователь не найден!'});
			} else {
				lasts = JSON.parse(lasts);
				var d = new Date();
				d.setTime(d.getTime() + (24*60*60*1000)); // 1 деньк
				var expires = d.toUTCString();
				document.cookie = `username=${lasts.name}; expires=${expires}; path=/`;
				location.href='cabinet.php';
				}
	}
}

