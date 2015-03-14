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
	}).error(function(data) {
		$('#looper .looper-inner').html('<div class="item"><div class="alert alert-danger">There was an issue loading Github repos for ImDevinC.  Please try again later or visit <a href="http://www.github.com/ImDevinC" target="_blank">Github</a>.</div></div>');
	});

	var $looper = $('#looper');
	$looper.on('shown', function(e) {
		$item = $looper.find('.item.active');
		
		if (!$item.hasClass('loading-placeholder')) {
			$looper.find('.loading-placeholder').remove();
			console.log('remoe it');
			$looper.off();
		}

		console.log('test');
	});
});