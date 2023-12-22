//Prompt nécéssaire:
const prompt = require("prompt-sync")();

//Les cartes:
const cards = ["EAU", "FEU", "PLANTE"];

//Interface:
const interfaceCardsGame = `
=================================
|                               |
|        CARDS GAME             |
|                               |
|    EAU    FEU    PLANTE       |
|                               |
|    _____   _____   _____      |
|   |     | |     | |     |     |
|   |  1  | |  2  | |  3  |     |
|   |_____| |_____| |_____|     |
|                               |
=================================
`;
console.log(interfaceCardsGame);

//Prendre le nom du joueur, lui donner les consignes:
let playerName = prompt("Bienvenue ! Comment tu t'appelles ? : ");
console.log("Bienvenue " + playerName + "! " + "Tu vas jouer au jeu de cartes : EAU, FEU, PLANTE.");
console.log("Les règles du jeu sont simples : EAU bat le FEU, le FEU bat la PLANTE et la PLANTE bat l'EAU.");
console.log("Tu as 3 cartes à jouer. Il y a 3 manches à gagner. Bonne Chance ! ");

//Les choix du joueur:
const PLAYERChoix = function(cards) {
    console.log("==============================================");
    console.log("---tape 1 pour choisir la carte EAU--- ");
    console.log("---tape 2 pour choisir la carte FEU--- ");
    console.log("---tape 3 pour choisir la carte PLANTE---");
    let choix = +prompt("Ton choix : ");

    if (choix === 1) {
        console.log("Tu as choisi la carte " + cards[0] + ".");
        return cards[0];
    } else if (choix === 2) {
        console.log("Tu as choisi la carte : " + cards[1] + ".");
        return cards[1];
    } else if (choix === 3) {
        console.log("Tu as choisi la carte : " + cards[2] + ".");
        return cards[2];
    } else {
        console.log("Choix invalide. Fais un choix disponible. ");
        return PLAYERChoix(cards);
    }
};

//Les manches:
const game = function(cards) {
    let playerWins = 0;
    let botWins = 0;

    for (let round = 1; round <= 3; round++) {
        console.log("Manche " + round + " :");
        let playerChoice = PLAYERChoix(cards);

        let botChoice = cards[Math.floor(Math.random() * cards.length)];
        console.log("L'ordinateur a choisi : " + botChoice);

        if (playerChoice === botChoice) {
            console.log("C'est une égalité !");
        } else if (
            (playerChoice === cards[0] && botChoice === cards[1]) ||
            (playerChoice === cards[1] && botChoice === cards[2]) ||
            (playerChoice === cards[2] && botChoice === cards[0])
        ) {
            console.log("Vous avez gagné cette manche !");
            playerWins++;
        } else {
            console.log("L'ordinateur a gagné cette manche !");
            botWins++;
        }
    }
//Conditions du fin de partie:
    if (playerWins > botWins) {
        console.log("Félicitations, " + playerName + "! Tu as gagné la partie ! Merci d'avoir joué! Au revoir! ");
    } else if (playerWins < botWins) {
        console.log("GAME OVER, " + playerName + ". L'ordinateur a remporté la partie.");
        askForRematch();
    } else {
        console.log("La partie s'est terminée sur un match nul !");
        askForRematch();
    }
};

//Le Rematch si nul ou le joueur a perdu:
const askForRematch = function() {
    let rematch = prompt("Veux-tu réeessyer ? (Tape O pour recommnecer) : ");
    if (rematch.toUpperCase() === "O") {
        game(cards);
    } else {
        console.log("Merci d'avoir joué ! Au revoir! ");
    }
};

//START GAME:
game(cards);
