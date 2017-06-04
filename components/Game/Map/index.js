import React from 'react'

export default class extends React.Component {
  render(){
    const { game } = this.props

    const rows = game.rows.map((cells, index) =>
      <div className="Game-Map-Row" key={`row-${index}`}>
        {cells.map(cell =>
          <Cell key={`${cell.y}-${cell.x}`} cell={cell} />
        )}
      </div>
    )

    const style = {
      top: '-21px',
      left: '-21px',
    }
    return <div className="Game-Map" style={style}>
      {rows}
    </div>
  }
}


class Cell extends React.Component {

  render(){
    const { cell } = this.props
    const style = {
      top: cell.y * 50,
      left: cell.x * 50,
      height: '50px',
      width: '50px',
    }
    return <div className="Game-Map-Cell" style={style}>
      <span>{cell.y}</span>/
      <span>{cell.x}</span>
    </div>
  }
}
