import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'
import { getReservations } from '../apiCalls.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = async() => {
    try {
      const result = await getReservations()

      if(!result.ok) {
        console.log(result.status)
        throw new Error('Error!')
      }

      const data = await result.json()
      this.setState({reservations: data})
    } catch (error) {
      this.setState({
        error: "There was an error fetching your reservations"
      })
    }
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }


  render() {
    console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
        <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
