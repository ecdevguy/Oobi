jQuery($ => {
	const $form = $("#form");
	$form.submit(function(e) {
		e.preventDefault();
		const
			name = $form.find('#name').val(),
			subject = $form.find('#subject input:checked').val(),
			grade = $form.find('#grade input:checked').val(),
			length = $form.find('#length input:checked').val();
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: { "name": name, "subject": subject, "grade": grade, "length": length },
			dataType: 'json',
			success: function (response) {
				var children = document.querySelector('#responses').children;
				for (let i = 0; i < response.data.length; i++) {
					let text = response.data[i];
					let child = children[i];
					child.children[0].innerHTML = text;
				}
			}
		});
		return false;
	});
});