import React from 'react'

export default class extends React.Component {
  render(){
    const { game } = this.props

    const cellSize = 50

    // const rows = game.rows.map((cells, index) =>
    //   <div
    //     className="Game-Map-Row"
    //     key={`row-${index}`}
    //   >
    //     {cells.map(cell =>
    //       <Cell
    //         key={`${cell.y}-${cell.x}`}
    //         cell={cell}
    //         size={cellSize}
    //       />
    //     )}
    //   </div>
    // )

    const style = {
      height: window.innerHeight+'px',
      width: window.innerWidth+'px',
      // top: ((game.state.y * cellSize) * -1)+'px',
      // left: ((game.state.x * cellSize) * -1)+'px',
    }

    const cells = game.mapEachCell(cell =>
      <Cell
        key={`${cell.y}-${cell.x}`}
        cell={cell}
        size={cellSize}
      />
    )
    return <div className="Game-Map" style={style}>
      {cells}
    </div>
  }
}


class Cell extends React.Component {

  render(){
    const { cell, size } = this.props
    const style = {
      top: cell.y * size,
      left: cell.x * size,
      height: '50px',
      width: '50px',
    }
    return <div className="Game-Map-Cell" style={style}>
      <div>{cell.y} /</div>
      <div>{cell.x}</div>
    </div>
  }
}
