import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <img src={props.img} alt={props.drinkname} />
            </div>
            <div className="bottom">
                <h1>{props.drinkname}</h1>
                <p>{props.drinkdescription}</p>
            </div>
        </div>
    )
}

export default Card
