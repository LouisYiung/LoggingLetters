var numSides = prompt("How many sides are there?");

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides + 1);
}

for (var i = 0; i < 10000; i++) {
    console.log(rollDice(20));
}