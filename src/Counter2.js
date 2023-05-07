import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter2 = () => {

    // const counterStore = useSelector(store => store)
    // const count = counterStore.count

    // const count = useSelector(store=>store.count)
    const dispatch = useDispatch()

    const increase_count = () => {
        dispatch({type: "ADD_COUNT"})
    }

    const decrease_count = () => {
        dispatch({type:"REDUCE_COUNT"})
    }

const gameStore = useSelector(state=> state)
const gameName = gameStore.gameName

const [game,setGame] = useState('')
const [player, setPlayer] = useState('')
const handleChange = e => {
    setGame(e.target.value)
}
const handlePlayer = e => {
    setPlayer(e.target.value)
}

const updateGame = () => {
    dispatch({type: "UPDATE_GAME", payload: game})
}
const updatePlayer = () => {
    dispatch({type: "UPDATE_PLAYER", payload: player})
}



    return (
        <>
            <div style={{ justifyContent: 'center', fontSize: '32px', height: '100vh', display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
               
                {/* Count = {count}
            <button onClick={increase_count}>Add Count</button>
            <button onClick={decrease_count}>Decrease Count</button>
            <button onClick={()=>dispatch({type:"RESET_COUNT"})}>Reset Count</button> */}

            Game Name: <h1>{gameName}</h1>
            <input type={'text'} onChange={handleChange}/>
            <button onClick={updateGame}>Update Game</button>

<br/>
            Player Name: <h2>{gameStore.playerName}</h2>
            <input type={'text'} onChange={handlePlayer}/>

            <button onClick={updatePlayer}>Update Player</button>
            </div>
        </>
    )
}

export default Counter2