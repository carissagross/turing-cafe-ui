import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = ({reservations}) => {
    const reservationCards = reservations.map(res => {
        console.log(reservations)
        return (
            <Card
            name={res.name}
            date={res.date}
            time={res.time}
            number={res.number}
            id={res.id}
            key={res.id}
            />
        )
    })
    return (
        <div className='reservation-card-container'>
            {reservationCards}
        </div>
    )
}
export default Reservations