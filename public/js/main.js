$(document).ready(function () {
	$('#applicationsTable').DataTable();
	$('.dataTables_length').addClass('bs-select');
});

$(document).ready(function () {
	$('#athletesTable').DataTable();
	$('.dataTables_length').addClass('bs-select');
});

$(document).ready(function () {
	$('.delete-opportunity').on('click', function (e) {

		const result = confirm('Are you sure you want to delete this opportunity?');
		if (result) {
			$target = $(e.target);
			const ids = String($target.attr('id')).split('||');
			const opportunity_id = ids[0];
			const employer_id = ids[1];

			$.ajax({
				type: 'DELETE',
				url: '/employer/'.concat(employer_id, '/opportunities/edit/', opportunity_id),
				success: function (response) {
					window.location.href = String('/employer/'.concat(employer_id, '/opportunities/open'));
				},
				error: function (err) {
					window.location.href = String('/employer/'.concat(employer_id, '/opportunities/open'));
				}
			});
		}
	});
});

$(document).ready(function () {
	$('.delete-athlete-resource').on('click', function (e) {
		const result = confirm('Are you sure you want to delete this?');
		if (result) {
			$target = $(e.target);
			const ids = String($target.attr('id')).split('||');
			const resource_name = ids[0];
			const resource_id = ids[1];
			const athlete_id = ids[2];

			$.ajax({
				type: 'DELETE',
				url: '/athlete/'.concat(athlete_id, '/', resource_name, '/', resource_id, '/edit'),
				success: function (response) {
					window.location.href = String('/profile/athlete/'.concat(athlete_id));
				},
				error: function (err) {
					window.location.href = String('/profile/athlete/'.concat(athlete_id));
				}
			});
		}
	});
});

$(document).ready(function () {
	$('.apply-opportunity').on('click', function (e) {
		$target = $(e.target);
		const ids = String($target.attr('id')).split('||');
		const opportunityId = ids[0];
		const employerId = ids[1];
		const athleteId = ids[2];
		const postUrl = '/apply/'.concat(opportunityId, '/', employerId, '/', athleteId);

		$.ajax({
			type: 'POST',
			url: postUrl,
			data: {},
			cache: false,
			success: function (response) {
				window.location.href = String('/opportunities/open/success');
			},
			error: function (err) {
				window.location.href = String('/opportunities/open/');
			}
		});
	});
});

$('#applyModalForm').on('show.bs.modal', function (event) {
	const button = $(event.relatedTarget);
	const ids = String(button.data('ids')).split('||');
	const opportunityId = ids[0];
	const employerId = ids[1];
	const athleteId = ids[2];
	const postUrl = '/apply/'.concat(opportunityId, '/', employerId, '/', athleteId);

	$('#submitApplicationForm').attr('action', postUrl);

});

$('#messageAthleteForm').on('show.bs.modal', function (event) {
	const button = $(event.relatedTarget);
	const athleteId = String(button.data('ids'))
	const postUrl = '/employer/message/'.concat(athleteId);

	$('#sendAthleteMessageForm').attr('action', postUrl);

});

$('#signup-btn').click(function () {
	$.ajax({
		url: '/users',
		type: 'POST',
		cache: false,
		data: {
			name: $('#name').val(),
			classYear: $('#classYear').val(),
			weekday: $('#weekday').val(),
			email: $('#email').val(),
			phoneNumber: $('#phoneNumber').val(),
			password: $('#password').val(),
			confirmPassword: $('#confirmPassword').val()
		},
		success: function () {
			$('#error-group').css('display', 'none');
			alert('Your submission was successful');
		},
		error: function (data) {
			$('#error-group').css('display', 'block');
			const errors = JSON.parse(data.responseText);
			const errorsContainer = $('#errors');
			errorsContainer.innerHTML = '';
			let errorsList = '';

			for (let i = 0; i < errors.length; i++) {
				errorsList += '<li>'.concat(errors[i].msg, '</li>');
			}
			errorsContainer.html(errorsList);
		}
	});
});