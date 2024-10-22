//your JS code here. If required.

const submitButton = document.getElementById('submit');
const checkbox = document.getElementById('checkbox');
const userName = document.getElementById('username');
const password = document.getElementById('password');
const existingButton= document.getElementById('existing');
submitButton.addEventListener('click',()=>{
event.preventDefault();
	if(checkbox.checked)
	{
		if(localStorage.getItem('username') && localStorage.getItem('password'))
		{
		    existingButton.disabled = false;
			existingButton.style.display = 'inline';
			existingButton.textContent = "Login as existing user";
		}
		else{
		localStorage.setItem('username',userName.value);
		localStorage.setItem('password',password.value);
			alert(`Logged in as ${userName.value}`)
		}
	}
	else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		alert(`Logged in as ${userName.value}`)
	}
});

existingButton.addEventListener('click',()=>{
	alert("Login as existing user")
})











