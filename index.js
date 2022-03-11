//Ask for the player name and the number
const playerName = prompt('Quel est ton nom ?');
const random = parseInt(Math.floor(Math.random()*100+1));
let playerNumber = parseInt(prompt('Quel est ton nombre ?'));

//Add a loop to make sure the number is beetween 0 and 100
while (playerNumber > 100 || playerNumber < 0) {
    playerNumber = parseInt(prompt('Quel est ton nombre ? On a dit entre 0 et 100 ! BOULET !'))
}

//Add a loop and condition to indicate to the player if it's less or more
while (playerNumber !== random) {
    if (random < playerNumber) {
        playerNumber = parseInt(prompt(`it's less, Quel est ton nombre ?`))
    }
    if (random > playerNumber) {
        playerNumber = parseInt(prompt(`it's more, Quel est ton nombre ?`))
    }
}

//Add a winning message
alert('Vous avez trouvé : ${random}');
