import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }
    
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitReservation = event => {
        event.preventDefault()
        const newReservation = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newReservation)
    }
    

    render() {
        return (
            <form>
                <input
                type='text'
                placeholder='Name'
                name='name'
                value={this.state.name}
                onChange={event => this.handleChange(event)}
                />

                <input
                type='text'
                placeholder='Date (mm/dd)'
                name='date'
                value={this.state.date}
                onChange={event => this.handleChange(event)}
                />

                <input
                type='text'
                placeholder='Time'
                name='time'
                value={this.state.time}
                onChange={event => this.handleChange(event)}
                />

                <input
                type='number'
                placeholder='Number of guests'
                name='number'
                value={this.state.numGuests}
                onChange={event => this.handleChange(event)}
                />
                <button className='make-reservation' onClick={event => this.submitReservation(event)}>Make Reservation</button>
            </form>
        )
    }
}
export default Form