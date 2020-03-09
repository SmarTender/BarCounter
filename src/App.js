import React from 'react'
import './App.css'
import Card from './Components/Card'
import DrinkList from './DrinkList'

// function drinkMapping() {
//     const response = []
//     for (let [index, drink] of Object.entries(DrinkList)) {
//         response.push(<Card key={index} img={drink.image} drinkname={drink.name} />)
//     }
//     return response
// } -- for of megoldás

function drinkMappingTwo([index, drink]) {
    return <Card key={index} img={drink.image} drinkname={drink.name} />
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>SmarTender 2.0 is in progress...</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>

                {Object.entries(DrinkList).map(drinkMappingTwo)}
            </header>
        </div>
    )
}

export default App
