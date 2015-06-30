$(document).ready(function() {

	$('#homeBtn').click(function() {
	  $('#home').toggle('slow').siblings().hide();
	  $(this).toggleClass('btnClicked').siblings().removeClass('btnClicked');
	});

	$('#aboutBtn').click(function() {
	  $('#about').toggle('slow').siblings().hide();
	  $(this).toggleClass('btnClicked').siblings().removeClass('btnClicked');
	});

	$('#projectsBtn').click(function() {
	  $('#projects').toggle('slow').siblings().hide();
	  $(this).toggleClass('btnClicked').siblings().removeClass('btnClicked');
	});

	$('#contactBtn').click(function() {
	  $('#contact').toggle('slow').siblings().hide();
	  $(this).toggleClass('btnClicked').siblings().removeClass('btnClicked');
	});

});