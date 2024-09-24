//make class of player
class Player {
  //in constructor it take name and symbol
  #symbol
  constructor(name, symbol) {
    this.name = name;
    this.#symbol = symbol;
  }
  getSymbol()
  {
    return this.#symbol
  }
  getName()
  {
    return this.name
  }


  //factory function for newplayer
  static newPlayer(name, symbol) {
    //try catch
    try {
      //validate name and symbol
      if (name === "" || symbol === "") {
        throw new Error("Name and symbol cannot be empty");
      }
      //check name string or not
      if (typeof name !== "string") {
        throw new Error("Name must be a string");
      }
      //check symbol string or not
      if (typeof symbol !== "string") {
        throw new Error("Symbol must be a string");
      }
      //check symbol is X or O 
      // if (symbol !== "X" || symbol !== "O") {
      //   throw new Error("Symbol must be X or O");
      // }
      //now call constructor
      return new Player(name, symbol);

      
    }
    catch(error)
    {
      console.log(error)
    }

    
  }
}

module.exports=Player