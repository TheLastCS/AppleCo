
(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right'
					});
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');


	});

})(jQuery);

function newWindow(url) {
	popupWindow = window.open(
		url,
		'popUpWindow','height=800,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}

function closeWindow()
{
	if(false == popupWindow.closed)
	{
		popupWindow.close ();
	}
	else
	{
		alert('That window is already closed. Open the window first and try again!');
	}
}	

function check(form)
{

	if(form.username.value != "Admin" && form.password.value != "Computing")
	{
		alert("Error Username and Password!")
		return false;   
	}
	if(form.username.value != "Admin" && form.password.value == "Computing")
	{
		alert("Error Username")
		return false;
	}
	if(form.username.value == "Admin" && form.password.value != "Computing")
	{
		alert("Error Password")
		return false;
	}
	else (form.username.value == "Admin" && form.password.value == "Computing")
	{
		window.open("AppleCo.html")
		return true;
	}
}
