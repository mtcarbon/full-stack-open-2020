import React, {useState} from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'

const App = () => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas', number: '040-1234567'}]) 
    const [newName, setNewName] = useState('enter name...')
    const [newNumber, setNewNumber] = useState('enter number...')
    const [newFilter, setNewFilter] = useState('')

    const updateName = (event) => {
        setNewName(event.target.value)
        
    }

    const updateNumber = (event) => {
        setNewNumber(event.target.value)
        
    }

    const addPerson = (event) => {
        event.preventDefault() 

        const person = {name: newName, number: newNumber}

        !(isDuplicate(person.name)) ? setPersons(persons.concat(person)) : window.alert(`${newName} was already added to the phonebook`)

        setNewName('')
        setNewNumber('')
    }

    const filter = (event) => {
       setNewFilter(event.target.value) 
    }

    const isDuplicate = (name) => persons.some((person) => person.name === name)

    return (
        <div>
            <h2>Phonebook</h2>
                <Filter onchange={filter} value={newFilter}/>
            <h2>Add</h2>
                <PersonForm nameChangeHandler={updateName} name={newName} numberChangeHandler={updateNumber} number={newNumber} submitHandler={addPerson}/>
            <h2>Numbers</h2>
            <Persons persons={persons} filter={newFilter}/>
        </div>
    )
}

export default App
