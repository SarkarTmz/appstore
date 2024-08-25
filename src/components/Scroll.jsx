import React from 'react'
import '../styles/component/Scroll.css'

import img1 from '../images/game-img/coc.png'
import img2 from '../images/app-img/kinemaster.png'
import img3 from '../images/game-img/subway-surfers.avif'
import img4 from '../images/game-img/ludo-king.jpg'
import img5 from '../images/game-img/plant-vs-zombie.png'
import img6 from '../images/app-img/capcut.png'
import img7 from '../images/game-img/pokemon-go.png'
import img8 from '../images/app-img/truecaller.png'
import img9 from '../images/game-img/among-us.jpg'
import img10 from '../images/game-img/minecraft.webp'


function Scroll() {
  const img = [
    {
      id : 1,
      image : img1,
      title: 'Class of Clans',
      link : 'link',
    },
    {
      id : 2,
      image : img2,
      title: 'Kinemaster',
      link : 'link',
    },
    {
      id : 3,
      image : img3,
      title: 'Subway Surfers',
      link : 'link',
    },
    {
      id : 4,
      image : img4,
      title: 'Ludo King',
      link : 'link',
    },
    {
      id : 5,
      image : img5,
      title: 'Plant VS Zombie',
      link : 'link',
    },
    {
      id : 6,
      image : img6,
      title: 'Capcut',
      link : 'link',
    },
    {
      id : 7,
      image : img7,
      title: 'Pokemon Go',
      link : 'link',
    },
    {
      id : 8,
      image : img8,
      title: 'Truecaller',
      link : 'link',
    },
    {
      id : 9,
      image : img9,
      title: 'Among US',
      link : 'link',
    },
    {
      id : 10,
      image : img10,
      title: 'Minecraft',
      link : 'link',
    },
  ]
  return (
    <>
        <div className="scroll section">
        {
            img.map((item) => (
              <div className="scroll-card" key={item.id}>
                <img src={item.image}/>
                <p className='title'>{item.title}</p>
              </div>
            ))
          }
        </div>
    </>
  )
}

export default Scroll