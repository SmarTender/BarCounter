import Grid from '@material-ui/core/Grid'
import React, { Component } from 'react'
import './App.css'
import Card from './Components/Card'

// function drinkMapping() {
//     const response = []
//     for (let [index, drink] of Object.entries(DrinkList)) {
//         response.push(<Card key={index} img={drink.image} drinkname={drink.name} />)
//     }
//     return response
// } -- for of megoldás

function drinkMapping([index, drink]) {
    return <Card key={index} id={index} drink={drink} />
}

class App extends Component {
    state = {
        drinks: [],
    }

    componentDidMount() {
        fetch('https://5e6799ee1937020016fedede.mockapi.io/drink-list')
            .then(res => res.json())
            .then(data => {
                this.setState({ drinks: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>SmarTender 2.0 is in progress...</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    <Grid container>{Object.entries(this.state.drinks).map(drinkMapping)}</Grid>
                </header>
            </div>
        )
    }
}

export default App
