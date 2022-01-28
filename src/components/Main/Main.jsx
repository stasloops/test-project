import React from 'react';
import './Main.scss'

const Main = () => {
  const maps = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
  <main className='main'>
    {
    maps.map((item, id) => (
      <div className='line' key={`${item}_${id}`}></div>
    ))
    }
  </main>
  )
}

export default Main;
