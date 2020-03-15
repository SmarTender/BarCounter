import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import React from 'react'
import './Card.scss'

function handleOnClick(drinkIdentifier) {
    axios.post('http://5e6799ee1937020016fedede.mockapi.io/cocktail', {
        id: drinkIdentifier,
    })
    console.log(drinkIdentifier)
}

function Card(props) {
    const drink = props.drink

    return (
        <Grid item xs={12} md={3} sm={6} xl={2} lg={3}>
            <div className="card">
                <div className="top">
                    <div
                        className="drink-image"
                        style={{ backgroundImage: `url(${drink.image})` }}
                        alt={drink.name}
                    ></div>
                </div>
                <div className="bottom">
                    <h1>{drink.name}</h1>

                    <button onClick={() => handleOnClick(props.id)}>Make Drink</button>
                </div>
            </div>
        </Grid>
    )
}

export default Card
