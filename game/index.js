import map from './map'

const localStorage = global.localStorage || {}

const MAP_SIZE = 100

class Game {
  static load(){
    const state = 'game' in localStorage
      ? JSON.parse(localStorage.game)
      : initalState()
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

    this.rows = this.state.cells
  }

  mapEachCell(callback){
    const result = []
    Game.forEachCell((y,x) => {
      result.push(callback(this.state.map[y][x]))
    })
    return result
  }
}


const initalState = () => {
  const state = {
    height: MAP_SIZE,
    width: MAP_SIZE,
  }
  state.cells = generateMap(state)
  return state
}

const generateMap = ({height, width}) => {
  const cells = []
  Game.forEachCell({height, width}, (y,x) => {
    if (x === 0) cells[y] = []
    cells[y][x] = {y,x}
  })
  return cells
}


export default Game.load()
