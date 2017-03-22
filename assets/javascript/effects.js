$(document).ready(function() {

	console.log('I\'m in the effects.js file');

var $lightSaberSound = $("#lightSaber");

	$(".character > .image").on('mouseenter', function() {
		$lightSaberSound.get(0).play();
	});

	$(".character > .image").on('mouseout', function() {
		$lightSaberSound.get(0).pause();
		$lightSaberSound.get(0).currentTime = 0;
	});

var $enemySaberSound = $('#enemySound');

	$(".enemy > .image").on('mouseenter', function() {
		$enemySaberSound.get(0).play();
	});

	$(".enemy > .image").on('mouseout', function() {
		$enemySaberSound.get(0).pause();
		$enemySaberSound.get(0).currentTime = 0;
	});

});