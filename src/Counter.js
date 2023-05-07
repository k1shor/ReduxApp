import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext'

const Counter = () => {
    const value = useContext(GlobalContext)
    // console.log(name)

    /*
    useState - one of the important react hooks for managing state
    syntax:
        let [stateVariable, function] = useState(initial data)
    
        -statevariable - name of the state variable
        -function - function to update state variable
        -useState - to create a useState variable
        -initial data - starting data
            0-9 : numbers
            '' : strings
            [] : array
            {} : object
    
    data- 500
    increase +10
    decrease -10

    useEffect(function, dependency)
    function -> side effects to be seen
    dependency -> array of states which trigger the function
        [] -> only at the page load
        [var1, var2] -> triggers when var1 and var2 changes/updates
        null -> triggers everytime when any variable changes/updates

    
    */
    let [counter, setCounter] = useState(5)
    let [data, setData] = useState(500)
    const increase = () => {
        setCounter(++counter)
        // console.log(counter)
    }

    useEffect(() => {
        window.alert("value updated")
    })

    return (
        <>
            Name:{value.name}
            <br />
            Address: {value.address}
            <div style={{ justifyContent: 'center', fontSize: '32px', height: '100vh', display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                Counter: {counter}
                <br />
                <button onClick={increase}>Increase Count</button>
                <button onClick={() => {
                    setCounter(--counter)
                }}>Decrease Count</button>
                <button onClick={() => setCounter(0)}>Reset Count</button>
                <br />
                Data: {data}
                <button onClick={() => setData(data + 50)}>Increase data</button>
                <button onClick={() => setData(data - 50)}>Decrease data</button>
                <button onClick={() => setData(500)}>Reset data</button>

            </div>

        </>
    )
}

export default Counter