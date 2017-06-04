import map from './map'

const localStorage = global.localStorage || {}

class Game {

  static initalState() {
    const state = {
      height: 101,
      width: 101,
      y: 51,
      x: 51,
    }
    state.cells = []
    Game.forEachCell(state, (y,x) => {
      if (x === 0) state.cells[y] = []
      state.cells[y][x] = {y,x}
    })
    return state
  }

  static load(){
    const state = 'game' in localStorage
      ? JSON.parse(localStorage.game)
      : this.initalState()
    return new Game(state)
  }

  static forEachCell({height, width}, callback) {
    height--
    width--
    let x = 0, y = 0
    while (x <= width && y <= height) {
      callback(y, x)
      if (x === width) { x = 0; y++} else {x++}
    }
  }

  constructor(state){
    this.state = state
  }

  mapEachCell(callback){
    const result = []
    Game.forEachCell(this.state, (y,x) => {
      result.push(callback(this.state.cells[y][x]))
    })
    return result
  }
}

export default Game.load()
