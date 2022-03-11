const playerName = prompt('Quel est ton nom ?');
const random = parseInt(Math.floor(Math.random()*100+1));
let playerNumber = parseInt(prompt('Quel est ton nombre ?'));
while (playerNumber > 100 || playerNumber < 0) {
    playerNumber = parseInt(prompt('Quel est ton nombre ? On a dit entre 0 et 100 ! BOULET !'))
}

console.log(playerName);
console.log(playerNumber);

while (playerNumber !== random) {
    if (random < playerNumber) {
        console.log(`it's less`);
        playerNumber = parseInt(prompt(`it's less, Quel est ton nombre ?`))
    }
    if (random > playerNumber) {
        console.log(`it's more`);
        playerNumber = parseInt(prompt(`it's more, Quel est ton nombre ?`))
    }
}

alert('Vous avez trouvé :' + random);
