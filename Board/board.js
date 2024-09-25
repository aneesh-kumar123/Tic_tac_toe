
const Cell=require('../cells/cells.js')
class Board {
  constructor(cells) {
    this.cells = cells;
  }

  //factory function for board which take nothing
  static newBoard() {
    let cells =[]
    for (let i = 0; i < 9; i++) {
      cells.push(Cell.newCells())
    }
    
    return new Board(cells)


    
  }
  //display board in pattern wise like | |
  displayBoard() {
    let board = ''
    for (let i = 0; i < 9; i++) {
      board += this.cells[i].getSymbol()
      if ((i + 1) % 3 === 0) {
        board += '\n'
      } else {
        board += ' | '
      }
    }
    return board
  }
  



    


  validateCellNo(cellNo)
  {
    //try catch
    try {
      if (typeof cellNo !== 'number') {
        throw new Error('Cell number should be a number')
      }
      if (cellNo < 0 || cellNo > 8) {
        throw new Error('Cell number should be between 0 and 8')
      }
      
    }
    catch (err) {
      throw err
    }
  }

  isCellEmpty(cellNo)
  {
    this.cells[cellNo].isEmpty()
  }

  markCell(cellNo , symbol){
    this.cells[cellNo].markPlayerSymbol(symbol);
  }

  checkWinner()
  {
    if(this.cells[0].getSymbol()==this.cells[1].getSymbol() && this.cells[1].getSymbol()==this.cells[2].getSymbol() && this.cells[0].getSymbol()!=="E")
    {
      return true
    }
    else if(this.cells[3].getSymbol()==this.cells[4].getSymbol() && this.cells[4].getSymbol()==this.cells[5].getSymbol() && this.cells[3].getSymbol()!=="E")
    {
      return true
    }
    else if(this.cells[6].getSymbol()==this.cells[7].getSymbol() && this.cells[7].getSymbol()==this.cells[8].getSymbol() && this.cells[6].getSymbol()!=="E")
    {
      return true
    }
    else if(this.cells[0].getSymbol()==this.cells[3].getSymbol() && this.cells[3].getSymbol()==this.cells[6].getSymbol() && this.cells[0].getSymbol()!=="E")
    {
      return true
    }
    else if(this.cells[1].getSymbol()==this.cells[4].getSymbol() && this.cells[4].getSymbol()==this.cells[7].getSymbol() && this.cells[1].getSymbol()!=="E")
    {
      return true
    }
    else if(this.cells[2].getSymbol()==this.cells[5].getSymbol() && this.cells[5].getSymbol()==this.cells[8].getSymbol() && this.cells[2].getSymbol()!=="E")
    {
      return true
    }
    else if(this.cells[0].getSymbol()==this.cells[4].getSymbol() && this.cells[4].getSymbol()==this.cells[8].getSymbol() && this.cells[0].getSymbol()!=="E")
    {
      return true
    }
    else if(this.cells[2].getSymbol()==this.cells[4].getSymbol() && this.cells[4].getSymbol()==this.cells[6].getSymbol() && this.cells[2].getSymbol()!=="E")
    {
      return true
    }
    else
    {
      return false
    }
   
  }

  resetBoard()
  {
    for(let i=0;i<9;i++)
    {
      this.cells[i].resetCell()
    }
    
  }

 
}

module.exports=Board