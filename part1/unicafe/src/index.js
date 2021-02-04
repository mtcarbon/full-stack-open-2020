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
    const [all, setAll] = useState(0)
    const [avg, setAvg] = useState(0)
    const [prcntPstv, setPrcnt] = useState(0)
    
    const incGood = () => {
        setGood(good + 1)
        dsplyAll()
        dsplyAvg(1)
        dsplyPrcntPstv(1)
    }

    const incNeutral = () => {
        setNeutral(neutral + 1)
        dsplyAll()
        dsplyAvg(0)
        dsplyPrcntPstv(0)
    }

    const incBad = () => {
        setBad(bad + 1)
        dsplyAll()
        dsplyAvg(-1)
        dsplyPrcntPstv(0)
    }
    const dsplyAll = () =>  setAll(good + neutral + bad + 1)
     
    const dsplyAvg = (val) => {
        val = val + good * 1 + bad * -1
        setAvg(val/(all + 1))
    } 

    const dsplyPrcntPstv = (val) => {
        setPrcnt( String( (good + val) / (all + 1) ) + ' %' )
    } 

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
            <Line label='all' value={all}/>
            <Line label='average' value={avg}/>
            <Line label='positve' value={prcntPstv}/>
        </div>
    )
}
    
ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
