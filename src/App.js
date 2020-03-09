import React from 'react'
import './App.css'
import Card from './Components/Card'
import DrinkList from './DrinkList'

function drinkMapping(drink, index) {
    const response = []
    for (let [index, drink] of Object.entries(DrinkList)) {
        response.push(<Card key={index} img={drink.image} drinkname={drink.name} />)
    }
    return response
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>SmarTender 2.0 is in progress...</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>

                {drinkMapping()}
            </header>
        </div>
    )
}

export default App
