// When page loads
$(document).ready(function() {

	// luke object
	var luke = {
		nickName: 'luke',
		name: 'Luke Skywalker',
		health: 100,
		attack: 8,
		image: '<img src="assets/images/Luke.jpg" class="image">'
	};

	// maul object
	var maul = {
		nickName: 'maul',
		name: 'Darth Maul',
		health: 130,
		attack: 5,
		image: '<img src="assets/images/DarthMaul.jpg" class="image">'
	};

	// yoda object
	var yoda = {
		nickName: 'yoda',
		name: 'Master Yoda',
		health: 150,
		attack: 10,
		image: '<img src="assets/images/MasterJoda.jpg" class="image">'
	};

	// kilo object
	var kilo = {
		nickName: 'kilo',
		name: 'Kilo Ren',
		health: 80,
		attack: 7,
		image: '<img src="assets/images/KiloRen.jpg" class="image">'
	};

	// Array of character objects
	var characters = [luke, maul, yoda, kilo];

	// function to create each box/character in the DOM
	function createCharacter(characters) {
		for ( var i = 0; i < characters.length; i++) {

			// jQuery Object that takes the attributes of each character
			var $character = $('<div id='+characters[i].nickName+'>');
			$character.append('<div class="characterName">'+characters[i].name);
			$character.append(characters[i].image);
			$character.append('<div class="characterHealth">'+characters[i].health);
			$character.attr('class', 'character col-md-3');
			$character.attr("data_name", characters[i].name);

			$('#characters').append($character);
			// Console log the jquery $character object
			console.log($character);
		}
	}; // CLOSING createCharacter

	function pickYourCharacter() {

	}

	// Calling function createCharacters with the parameter characters array
	createCharacter(characters);

	$('.character').on('click', function() {
		pickYourCharacter();
	});

}); // CLOSING BRACKET FOR DOCUMENT LOAD

// Create a loop that goes over each one of the objects inside the characters array. This loop should display the puctures of each character.
// How to append each picture in the characters. It's easy to append each picture, now each one of these should have all the attributes neded to start the game

//




