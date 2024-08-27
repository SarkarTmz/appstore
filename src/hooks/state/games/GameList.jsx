import React from 'react'
import { useDatabase } from '../state';

import './GameList.css'

const GameList = () => {
    const { database, setDatabase } = useDatabase();
  return (
    <>
    <div className="gamesList section">
      <div className="games">
         {
            database.map((item) => (
              <div className="games-card" key={item.id}>
                <img src={item.image}/>
                <div className="mini">
                  <p className='games-title'>{item.title}</p>
                  <p className='download'>Download</p>
                  <div className="badge">
                    <p className='badge-a'>Apk</p>
                    <p className='badge-b'>Mod</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default GameList