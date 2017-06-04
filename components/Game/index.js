import InspectObject from '../InspectObject'
import Map from './Map'
import game from '../../game'

console.log('game', game)

const serverRender = !('window' in global)

export default class extends React.Component {

  constructor(){
    super()
    this.state = {}
    // setTimeout(() => this.forceUpdate(), 1000)
  }

  componentDidMount(){
    // this.forceUpdate()
  }

  render() {
    const map = serverRender
      ? <span>Loading…</span>
      : <Map game={game} />
    return <div className="Game">
      {map}
    </div>
  }
}
