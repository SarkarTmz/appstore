import React from 'react'
import './Games.css'
// import GamesList from './games/GamesList'

import GameList from '../../hooks/state/games/GameList'

function Games() {
  return (
    <>
      <div className="container">
        {/* <GamesList/> */}
        <GameList />
      </div>
    </>
  )
}

export default Games