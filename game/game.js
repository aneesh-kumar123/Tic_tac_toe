//my task is to make one class name game
const Board = require('../Board/board.js')
const Player = require('../Player/player.js')
class Game {
  
 
  constructor(players, board, turn) {
    this.players = players
    this.board = board
    this.turn = turn
    this.isActiva = false
    this.status
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
      if(this.isActiva==true)
      {
        
        // throw new Error("Game is already end")
        //return the status of the match
        console.log(this.status)
        return
        

      }
      this.board.validateCellNo(cellNo);
      this.board.isCellEmpty(cellNo);
      let currentPlayer = this.players[this.turn % 2];
      let currentPlayerSymlbol = currentPlayer.getSymbol();
      this.board.markCell(cellNo, currentPlayerSymlbol);
      console.log("now the turn of "+currentPlayer.getName())
     console.log(this.board.displayBoard())

      // checkWinner(this.board)
      this.turn++;
      //now print the player turn
      

      //now check winner if turn >=5
      if (this.turn >= 5) {
        if (this.board.checkWinner()) {
          //console cureent player is winner
          this.isActiva=true
          console.log(currentPlayer.getName() + " is winner")
          // this.status.push(currentPlayer.getName() + " is winner")
          this.status=currentPlayer.getName() + " is winner already restart again"
       
          return

        }
        else if (this.turn === 9) {
          console.log("Match Draw")
          this.isActiva=true
          // this.status.push("match already draw")
          this.status="match is already Draw"
          return
        }

      }
      //validate cell is empty or not
    }
    catch (error) {
      console.log(error)
    }
  }

  //reset the match
  resetGame() {
    this.board.resetBoard();
    this.turn = 0;
    console.log("match got reset")
    this.board.displayBoard();
  }



}
module.exports = Game
