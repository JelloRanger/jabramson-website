$(document).ready(function() {

	// switch content based on menu button clicked, hide others
	$('#homeBtn').click(function() {
	  $('#home').toggle().siblings().hide();
	  $(this).toggleClass('btnClicked').siblings().removeClass('btnClicked');
	});

	$('#aboutBtn').click(function() {
	  $('#about').toggle().siblings().hide();
	  $(this).toggleClass('btnClicked').siblings().removeClass('btnClicked');
	});

	$('#projectsBtn').click(function() {
	  $('#projects').toggle().siblings().hide();
	  $(this).toggleClass('btnClicked').siblings().removeClass('btnClicked');
	});

	$('#contactBtn').click(function() {
	  $('#contact').toggle().siblings().hide();
	  $(this).toggleClass('btnClicked').siblings().removeClass('btnClicked');
	});

});