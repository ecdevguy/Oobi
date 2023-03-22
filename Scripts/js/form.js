// Set variables for form, input, and button elements
const
	$form = $("#form"),
	$inputName = $form.find('#name'),
	$inputSubject = $form.find('#subject'),
	$inputGrade = $form.find('#grade'),
	$inputLength = $form.find('#length'),
	$inputAcceptTerms = $form.find('#acceptTerms'),
	$btnSubmit = $form.find('#submit'),
	$responses = $('#responses'),
	$results = $('#results');
// Used to determine if the form has been submitted initially
let submitted = false;
// When submitt button is clicked
$form.submit(function (e) {
	// Prevent the form from refreshing the page
	e.preventDefault();
	// Remove focus from submit button
	$btnSubmit.blur();
	// Set variables for input values
	let
		name = $inputName.val(),
		subject = $inputSubject.find('input:checked').val(),
		grade = $inputGrade.find('input:checked').val(),
		length = $inputLength.find('input:checked').val();
	// Begin counting errors
	var errors = 0;
	// Check for empty or null $input values ** TURN INTO AN ARRAY FUNCTION **
	if (name == '') {
		$inputName.addClass('error');
		if (!$inputName.parent().has('.error-msg').length)
			$("<p class='error-msg'>" + $inputName.data("error") + "</p>").insertAfter('#name');
		errors++;
	} else {
		$inputName.removeClass('error');
		$inputName.next('.error-msg').remove();
	}
	if (subject == null) {
		$inputSubject.addClass('error');
		if (!$inputSubject.parent().has('.error-msg').length)
			$("<p class='error-msg'>" + $inputSubject.data("error") + "</p>").insertAfter('#subject');
		errors++;
	} else {
		$inputSubject.removeClass('error');
		$inputSubject.next('.error-msg').remove();
	}
	if (grade == null) {
		$inputGrade.addClass('error');
		if (!$inputGrade.parent().has('.error-msg').length)
			$("<p class='error-msg'>" + $inputGrade.data("error") + "</p>").insertAfter('#grade');
		errors++;
	} else {
		$inputGrade.removeClass('error');
		$inputGrade.next('.error-msg').remove();
	}
	if (length == null) {
		$inputLength.addClass('error');
		if (!$inputLength.parent().has('.error-msg').length)
			$("<p class='error-msg'>" + $inputLength.data("error") + "</p>").insertAfter('#length');
		errors++;
	} else {
		$inputLength.removeClass('error');
		$inputLength.next('.error-msg').remove();
	}
	// Check if user agrees to terms and conditions
	if (!$inputAcceptTerms.is(':checked')) {
		if (!$inputAcceptTerms.parent().has('.error-msg').length)
			$("<p class='error-msg checkbox'>" + $inputAcceptTerms.data("error") + "</p>").insertAfter('#acceptTerms + label');
		errors++;
	} else {
		$inputAcceptTerms.next().next('.error-msg').remove();
	}
	// If there are no errors
	if (errors == 0) {
		// Add loading indicator
		$btnSubmit.val("Creating comments...");
		// Request responses from back-end
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: {
				"name": name,
				"subject": subject,
				"grade": grade,
				"length": length
			},
			dataType: 'json',
			// If successful
			success: function (response) {
				console.log('Success!');
				// Add name to results text
				$results.find('.studentName').text(name);
				// Reset the name field
				$inputName.val('');
				// Check for initial submission
				submitted = true;
				$btnSubmit.val($btnSubmit.data('value'));
				// Add responses to cards
				const children = document.querySelector('#responses').children;
				// Set variable to check largest height
				let maxHeight = 0;
				// Loop through all responses
				for (let i = 0; i < response.data.length; i++) {
					let text = response.data[i],
						child = children[i],
						textarea = child.children[0];
					// Set response card text
					textarea.innerHTML = text.trim();
					// Update response card height
					setTimeout(function () {
						textarea.style.height = "1px";
						textarea.style.height = (50 + textarea.scrollHeight) + "px";
						// Check for largest response card height
						if (textarea.scrollHeight > maxHeight)
							maxHeight = textarea.scrollHeight;
					}, 100);
				}
				// Apply largest height to all response cards
				for (let i = 0; i < children.length; i++) {
					let child = children[i],
						textarea = child.children[0];
					setTimeout(function () {
						textarea.style.height = maxHeight + "px";
					}, 100);
				}
				// Show results
				$results.show();
				// Scroll user to response cards
				$('html, body').animate({
					scrollTop: $responses.offset().top
				}, 2000);
				// Move form under results
				$("#try").insertAfter("#results");
				// Show form headline
				$("#try h2.sr-only").removeClass('sr-only');
				// Remove acceptTerms input
				$inputAcceptTerms.parent().remove();
			}
		});
	}
	// Prevent the form from refreshing the page
	return false;
});