jQuery($ => {
	const $form = $("#form");
	$form.submit(function(e) {
		e.preventDefault();
		console.log($form.serialize());
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			dataType: 'json',
			success: function (response) {
				if (response[0] == null || response[0] == '') {
					console.log('Data returned null or empty.');
				} else {
					console.log(response);
				}
			}
		});
		return false;
	});
});