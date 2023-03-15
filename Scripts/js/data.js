jQuery($ => {
	const $form = $("#form");
	// Used to determine if the form has been submitted initially
	let submitted = false;
	// When submitt button is clicked
	$form.submit(function (e) {
		// Prevent the form from refreshing the page
		e.preventDefault();
		// Remove focus from submit button
		$('#submit').blur();
		// Set variables for input values
		const
			name = $form.find('#name').val(),
			subject = $form.find('#subject input:checked').val(),
			grade = $form.find('#grade input:checked').val(),
			length = $form.find('#length input:checked').val();
		// Request responses from back-end
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: { "name": name, "subject": subject, "grade": grade, "length": length },
			dataType: 'json',
			success: function (response) {
				submitted = true;
				// Reset name field
				$('#name').val('');
				// Check for initial submission
				if (submitted) {
					$('#submit').val($('#submit').data('value'));
					$('#submit').removeAttr('data-value');
				}
				// Add responses to cards
				var children = document.querySelector('#responses').children;
				for (let i = 0; i < response.data.length; i++) {
					let text = response.data[i];
					let child = children[i];
					child.children[0].innerHTML = text;
				}
			}
		});
		// Prevent the form from refreshing the page
		return false;
	});
});