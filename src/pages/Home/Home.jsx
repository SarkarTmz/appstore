import React from 'react'
import './Home.css'

import GameList from '../../hooks/state/games/GameList'
import Scroll from '../../components/molecules/Scroll/Scroll'
import Banner from '../../components/atoms/Banner/Banner'
import Footer from '../../components/molecules/Footer/Footer'
import Dropdown from '../../components/atoms/Dropdown/Dropdown'

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