/**
 * js-file loginScripts.js
 * Methods for template login.tpl.js
 */

/**
 * Method to submit login credentials
 */
function sendLoginData(){
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	if(username.value === ""){
		username.style.backgroundColor = 'red';
	}else if(password.value === ""){
		password.style.backgroundColor = 'red';
	}else
	$.post('content.php?action=verify&username='+encodeURIComponent(username.value)+'&password='+encodeURIComponent(password.value), function(data){
		$('body').html(data);
	});
}
