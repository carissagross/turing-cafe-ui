import React from 'react'
import './Card.css'

const Card = ({name, date, time, number, id}) => {
    return (
        <div className='card'>
            <h5>{name}</h5>
            <p>{date}</p>
            <p>{time}</p>
            <p><b>Number of guests:</b> {number}</p>
            <button className='cancel-button'>cancel</button>
        </div>
    )
}
export default Card