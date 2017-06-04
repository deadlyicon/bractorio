import React from 'react'
import InspectObject from '../../InspectObject'

export default class extends React.Component {
  render(){
    const { game } = this.props
    return <div>
      <InspectObject object={game} />
    </div>
  }
}
