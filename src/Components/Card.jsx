import React from 'react'
import './Card.scss'

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <div
                    className="drink-image"
                    style={{ backgroundImage: `url(${props.img})` }}
                    alt={props.drinkname}
                ></div>
            </div>
            <div className="bottom">
                <h1>{props.drinkname}</h1>
                <p>{props.drinkdescription}</p>
            </div>
        </div>
    )
}

export default Card
