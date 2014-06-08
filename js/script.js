$(document).ready(function(){
	$.ajax({
		context: this,
		data: {
			type: 'events'
		},
		type: 'GET',
		url: 'functions.php'
	}).done(function(data) {
		$('#looper .looper-inner').append(data);
		$('time').humaneDates();
		$('#looper .looper-inner').find('.item').first().remove();
	}).error(function(data) {
		$('#looper .looper-inner').html('<div class="item"><div class="alert alert-danger">There was an issue loading Github repos for ImDevinC.  Please try again later or visit <a href="http://www.github.com/ImDevinC" target="_blank">Github</a>.</div></div>');
	});
});