import React from 'react'
import './Card.scss'

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <div
                    className="drink-image"
                    style={{ backgroundImage: `url(${props.drink.image})` }}
                    alt={props.name}
                ></div>
            </div>
            <div className="bottom">
                <h1>{props.drink.name}</h1>
            </div>
        </div>
    )
}

export default Card
