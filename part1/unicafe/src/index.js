import React, { useState  } from 'react'
import ReactDOM from 'react-dom'

const Line = (props) =>{
    const label = props.label
    const value = props.value

    return (
        <>
            {label} {value}<br />
        </>
    )                        
}

const Button = (props) => {
    const text = props.text
    const handleClick = props.handleClick
    
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Header = (props) => (
        <h1>
            {props.header}
        </h1>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const incGood = () => setGood(good + 1)
    const incNeutral = () => setNeutral(neutral + 1)
    const incBad = () => setBad(bad + 1)

    return (
        <div>
            <Header header='give feedback'/>
            <Button text='good' handleClick={incGood}/>
            <Button text='neutral' handleClick={incNeutral}/>
            <Button text='bad' handleClick={incBad}/>
            <Header header='statistics'/>
            <Line label='good' value={good}/>
            <Line label='neutral' value={neutral}/>
            <Line label='bad' value={bad}/>
        </div>
    )
}
    
ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
