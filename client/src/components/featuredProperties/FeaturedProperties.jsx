import React from 'react'
import './featuredproperties.css'

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/85884197.jpg?k=8adf1e42fef95a1095d4d27d308eab5e780f8ea17387ffcccf7ff0cc6aea6d98&o=&hp=1'
          alt='hotel'
        />
        <span className='fpName'>Mahali Mzuri</span>
        <span className='fpCity'>Masai Mara, Kenya</span>
        <span className='fpPrice'>Starting from 120$</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://secureservercdn.net/198.71.233.213/728.92a.myftpupload.com/wp-content/uploads/2020/01/cr-arenal-nay-tent1.jpg?time=1659993724'
          alt='hotel'
        />
        <span className='fpName'>Nayara Tented Camp</span>
        <span className='fpCity'>Costa Rica</span>
        <span className='fpPrice'>Starting from 140$</span>
        <div className='fpRating'>
          <button>9.2</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://www.re-thinkingthefuture.com/wp-content/uploads/2019/11/2676-Opposite-House-By-Atelier-RZLBD-6-1024x683.jpg'
          alt='hotel'
        />
        <span className='fpName'>The Opposite House</span>
        <span className='fpCity'>Beijing</span>
        <span className='fpPrice'>Starting from 99$</span>
        <div className='fpRating'>
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://www.travelforsenses.com/wp-content/uploads/2020/10/Capella-Bangkok-Riverfront-Premier-IV.jpg'
          alt='hotel'
        />
        <span className='fpName'>Capella</span>
        <span className='fpCity'>Bangkok</span>
        <span className='fpPrice'>Starting from 105$</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
