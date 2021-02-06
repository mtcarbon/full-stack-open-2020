import React from 'react'
import Part from './Part'

const Content = ({course}) => {
    const parts = course.parts
    
    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id}/>)}
        </div>
    )
}

export default Content
