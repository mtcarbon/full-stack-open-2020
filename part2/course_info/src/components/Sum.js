const Sum = ({course}) => {
    const parts = course.parts

    return <b>total of {(parts.reduce((a, b) => ({exercises: a.exercises + b.exercises}))).exercises} exercises</b>
}

export default Sum
