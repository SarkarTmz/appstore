import React from 'react'
import '../styles/Games.css'
import GamesList from './games/GamesList'

function Games() {
  return (
    <>
      <div className="container">
        <GamesList/>
      </div>
    </>
  )
}

export default Games