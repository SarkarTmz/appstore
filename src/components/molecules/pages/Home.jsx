import React from 'react'
import '../styles/Home.css'

import GameList from '../../../state/games/GameList'
import Scroll from '../../Scroll'
import Banner from '../../Banner'
import Footer from '../../Footer'
import Dropdown from '../../Dropdown'

function Home() {

  return (
    <>
      <div className="home section container">
        <Scroll />
        <GameList />
        <Scroll/>
        <GameList />
        <Banner />
        <Dropdown/>
      </div>
      <Footer />
    </>
  )
}

export default Home