import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <p>
                filter name by <input type="text" onChange={props.onchange} value={props.value} />
            </p>
        </div>
    )
}

export default Filter
