const Game=require('./game/game.js')
let g1=Game.newGame("aneesh","manish")


g1.playGame(4);
g1.playGame(2);
g1.playGame(1);
g1.playGame(7);
g1.playGame(5);
g1.playGame(3);
g1.playGame(6);
g1.playGame(8);
g1.playGame(0);






// console.log(g1)
//use strigyfy to print
console.log("start")

console.log(JSON.stringify(g1,null,2))

