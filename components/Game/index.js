import InspectObject from '../InspectObject'
import Map from './Map'
import game from '../../game'

console.log('game', game)

export default (props) => (
  <div className="Game">
    <Map game={game} />
  </div>
)
