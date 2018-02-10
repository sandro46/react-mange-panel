import React, { Component } from 'react';
import {connect} from 'react-redux'
// {this.props.cars.map((car) => <li key={car.id}>{car.model}</li>)}
class CarList extends Component {
  showList() {
    return ( this.props.cars.map((car) => {
      return (<li key={car.id}>{car.model}</li>)
    }))
  }
  render() {
    return (
      <ul>
        {this.showList()}
      </ul>
    )
  }
}

export default connect((state) => { return { cars: state.cars } })(CarList)
