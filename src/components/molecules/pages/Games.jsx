import React from 'react'
import '../styles/Games.css'
// import GamesList from './games/GamesList'

import GameList from '../../../state/games/GameList'

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