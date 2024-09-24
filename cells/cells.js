//create cells class
class Cell {
  //constructor just take symbol
  constructor(symbol) {
    this.symbol = symbol;
  }

  //factory function with name newcells
  getSymbol()
  {
    return this.symbol;
  }
  static newCells() {
    return new Cell('E');
  }


  // function to checkisempty
  isEmpty() {
    return this.symbol === 'E';
  }

  markPlayerSymbol(symbol)
  {
    this.symbol = symbol

  }
}

module.exports = Cell;