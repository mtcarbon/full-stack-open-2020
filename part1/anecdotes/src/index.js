import React, { useState  } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.text}</h1>
    )
} 

const Button = (props) => {
    return (
        <button onClick={props.clickHandler}>{props.label}</button>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = 
        useState(
            () => {
                const array = new Array(anecdotes.length)
                return array.fill(0);
            }
        )
    const [popular, setPopular] = useState(-1)
    
    const rndmAncdt = () => {
        setSelected(Math.trunc(Math.random() * 6))
    }

    const vote = () => {
        const copy = [...points]

        setPoints(
            () => {
                copy[selected] += 1 

                return copy
            }
        )
        
        setPopular(
            () => {
                return copy.indexOf(Math.max(...copy))
            }
        )

    }

    return (
        <div>
            <Header text="Anecdote of the day"/>
            <p>{props.anecdotes[selected]}</p>
            <p>has {points[selected]} votes</p>
            <Button label="vote" clickHandler={vote}/>
            <Button label="next anecdote" clickHandler={rndmAncdt}/>
            <Header text="Anecdote with the most votes"/>
            <p>{props.anecdotes[popular]}</p>
        </div>
    )
}

const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
