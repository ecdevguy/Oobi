// Set variables for form, input, and button elements
const
	$form = $("#form"),
	$inputName = $form.find('#name'),
	$inputSubject = $form.find('#subject'),
	$inputGrade = $form.find('#grade'),
	$inputLength = $form.find('#length'),
	$inputAcceptTerms = $form.find('#acceptTerms'),
	$btnSubmit = $form.find('#submit'),
	$responses = $('#responses');
// Used to determine if the form has been submitted initially
let submitted = false;
// When submitt button is clicked
$form.submit(function (e) {
	// Prevent the form from refreshing the page
	e.preventDefault();
	// Remove focus from submit button
	$btnSubmit.blur();
	// Set variables for $input values
	let
		name = $inputName.val(),
		subject = $inputSubject.find('input:checked').val(),
		grade = $inputGrade.find('input:checked').val(),
		length = $inputLength.find('input:checked').val();
	// Begin counting errors
	var errors = 0;
	// Check for empty or null $input values
	if (name == '') {
		$inputName.addClass('error');
		errors++;
	} else {
		$inputName.removeClass('error');
	}
	if (subject == null) {
		$inputSubject.addClass('error');
		errors++;
	} else {
		$inputSubject.removeClass('error');
	}
	if (grade == null) {
		$inputGrade.addClass('error');
		errors++;
	} else {
		$inputGrade.removeClass('error');
	}
	if (length == null) {
		$inputLength.addClass('error');
		errors++;
	} else {
		$inputLength.removeClass('error');
	}
	// Check if user agrees to terms and conditions
	if (!$inputAcceptTerms.is(':checked')) {
		errors++;
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
				// Scroll user to response cards
				$('html, body').animate({
					scrollTop: $responses.offset().top
				}, 2000);
				// Remove acceptTerms input
				$inputAcceptTerms.parent().remove();
				// Reset the name field
				$inputName.val('');
				// Check for initial submission
				if (!submitted) {
					submitted = true;
					$btnSubmit.val($btnSubmit.data('value'));
					$btnSubmit.removeAttr('data-value');
				}
				// Add responses to cards
				const children = document.querySelector('#responses').children;
				for (let i = 0; i < response.data.length; i++) {
					let text = response.data[i];
					let child = children[i];
					child.children[0].innerHTML = text;
				}
			}
		});
	}
	// Prevent the form from refreshing the page
	return false;
});