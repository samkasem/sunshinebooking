import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          className='featuredImage'
          src='https://cdn.getyourguide.com/img/tour/2f96cb110691d5d8.jpeg/146.jpg'
          alt='Dublin'
        />
        <div className='featuredTitles'>
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          className='featuredImage'
          src='https://www.watereducation.org/sites/main/files/imagecache/medium/main-images/truckee_river_in_summer_snc.jpg?1637047272'
          alt='Truckee'
        />
        <div className='featuredTitles'>
          <h1>Truckee</h1>
          <h2>109 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          className='featuredImage'
          src='https://pbs.twimg.com/media/D4bYnpHW0AYJwRY.jpg'
          alt='Argentina'
        />
        <div className='featuredTitles'>
          <h1>Argentina</h1>
          <h2>259 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
