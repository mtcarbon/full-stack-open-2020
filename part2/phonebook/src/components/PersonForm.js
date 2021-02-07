import React from 'react'

const PersonForm = (props) => {
    return (
        <form>
            <div>
                name: <input onChange={props.nameChangeHandler} value={props.name}/> <br />
                number: <input onChange={props.numberChangeHandler} value={props.number}/>
            </div>
            <div>
                <button type="submit" onClick={props.submitHandler}>add</button>
            </div>
        </form>
    )
}

export default PersonForm
