import React from 'react'
import '../styles/Home.css'

import GameList from '../state/games/GameList'
import Scroll from '../components/Scroll'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <div className="home section container">
        <Scroll />
        <GameList />
        <Scroll/>
        <GameList />
        <Banner />
      </div>
      <Footer />
    </>
  )
}

export default Home