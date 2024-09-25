//my task is to make one class name game
const Board = require('../Board/board.js')
const Player = require('../Player/player.js')
class Game {
 
  constructor(players, board, turn) {
    this.players = players
    this.board = board
    this.turn = turn
  }


  //factory function take 2 paramert player 1 and player 2
  static newGame(player1Name, player2Name) {
   
    try {
      //validate player 1 and player 2
      if (player1Name === player2Name) {
        throw new Error("player 1 and player 2 cannot be same")
      }
      let board = Board.newBoard();
      let turn = 0;
      let player1 = Player.newPlayer(player1Name, "X")
      let player2 = Player.newPlayer(player2Name, "O")
      let players = [player1, player2]

      return new Game(players, board, turn);

    }
    catch (error) {
      console.log(error)
    }





  }

  playGame(cellNo) {
    try {
      //validate cellno
      this.board.validateCellNo(cellNo);
      this.board.isCellEmpty(cellNo);
      let currentPlayer = this.players[this.turn % 2];
      let currentPlayerSymlbol = currentPlayer.getSymbol();
      this.board.markCell(cellNo, currentPlayerSymlbol);
     console.log(this.board.displayBoard())

      // checkWinner(this.board)
      this.turn++;

      //now check winner if turn >=5
      if (this.turn >= 5) {
        if (this.board.checkWinner()) {
          //console cureent player is winner
          console.log(currentPlayer.getName() + " is winner")
          return

        }
        else if (this.turn === 9) {
          console.log("Match Draw")
          return
        }

      }
      //validate cell is empty or not
    }
    catch (error) {
      console.log(error)
    }
  }



}
module.exports = Game
