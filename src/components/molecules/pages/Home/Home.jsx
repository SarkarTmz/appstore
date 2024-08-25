import React from 'react'
import '../styles/Home.css'

import GameList from '../../../../state/games/GameList'
import Scroll from '../../ee/Scroll'
import Banner from '../../../atoms/Banner'
import Footer from '../../ee/Footer'
import Dropdown from '../../../atoms/Dropdown'

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