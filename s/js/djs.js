function dds(time, url, id) {
	$('.urlb').on('click', function() {
		$(location).attr('href', url);
	});
	$('.' + id + '').text(time);
	$('#1').addClass('icon-s' + time);
	var sjs = setInterval(djs, 1000);
	function djs() {
		$('#1').removeClass('icon-s' + time)
		time--;
		if (time <= 0) {
			clearInterval(sjs);
			$(location).attr('href', url);
		};
		$('.djs').text(time);
		$('#1').addClass('icon-s' + time)
	}
};
