document.querySelector('#out').onclick = function(e) {
	var x = document.cookie;
	var d = new Date();
	d.setTime(d.getTime() - (10*60*1000)); // 10 min
	var expires = d.toUTCString();
	document.cookie = `${x}; expires=${expires}; path=/`;
	location.reload();
}