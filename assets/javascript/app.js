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
	var charactersObjects = [luke, maul, yoda, kilo];

	// Array of strings with characters nick names
	var characters = [];


// ========================= FUNCTIONS =========================

	// function to create each box/character in the DOM
	function createCharacter(arg) {

			for ( var i = 0; i < arg.length; i++) {

				// jQuery Object that takes the attributes of each character
				var $character = $('<div id='+arg[i].nickName+'>');
				$character.append('<div class="characterName">'+arg[i].name);
				$character.append(arg[i].image);
				$character.append('<div class="characterHealth">'+arg[i].health);
				$character.attr('class', 'character col-md-3');
				$character.attr('data_nickName', arg[i].nickName);
				$character.attr("data_name", arg[i].name);
				$character.attr('data_attack', arg[i].attack);
				$character.attr('data_health', arg[i].health);

				characters.push(arg[i].nickName);

				$('#characters').append($character);
				// Console log the jquery $character object
				console.log($character);

				}
	}; // CLOSING createCharacter

	function pickYourCharacter() {
		// TODO
		// this function should pick your character and then automaticaly make the other charaters enemies.
		$('.character').on('click', function() {
			$('#characters').empty();
			$('#characters').append('<div class="title">Your Character</div>')

			var $yourCharacter = $(this);
			$yourCharacter.addClass('yourCharacter');
			$yourCharacter.removeClass('col-md-3 character');

			$('#characters').append($yourCharacter);

			$('#characters').append('<div class="title">Pick Your Enemy</div>');

			// TODO
			// Now that we have picked our character, now we need to display the enemies to fight
			// remove the chosen character and then run the createCharacters function again to recreate the 'enemies'

			console.log(characters.indexOf($yourCharacter.attr('data_nickName')))

		});
	}


	// =========================================================a

	// Calling function createCharacters with the parameter characters array
	createCharacter(charactersObjects);
	pickYourCharacter();



	// TODO



}); // CLOSING BRACKET FOR DOCUMENT LOAD

// Create a loop that goes over each one of the objects inside the characters array. This loop should display the puctures of each character.
// How to append each picture in the characters. It's easy to append each picture, now each one of these should have all the attributes neded to start the game

//




