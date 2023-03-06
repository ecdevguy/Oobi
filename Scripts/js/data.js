var form = document.getElementById('form');
form.onsubmit = function (event) {
	event.preventDefault();
	const request = new XMLHttpRequest(),
		data = new FormData(form),
		json = JSON.stringify(Object.fromEntries(data));
	request.open('POST', '/Controller/Index');
	request.setRequestHeader("Content-Type", "charset=UTF-8");
	request.send(data);
	request.onreadystatechange = function () {
		// If AJAX success
		if (request.readyState == XMLHttpRequest.DONE) {
			form.reset();
			console.log('Form submission success!');
		}
	}
	// Dont submit the form
	return false; 
}