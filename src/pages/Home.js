import React from 'react'
import '../styles/Home.css'

import GamesList from '../pages/games/GamesList'
import Scroll from '../components/Scroll'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <div className="home section container">
        <Scroll />
        <GamesList />
        <Scroll/>
        <GamesList />
        <Banner />
      </div>
      <Footer />
    </>
  )
}

export default Home