import React from 'react'
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='plist'>
      <div className='plistItem'>
        <img
          className='plistImg'
          src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1'
          alt='hotel'
        />
        <div className='plistTitles'>
          <h1>Hotels</h1>
          <h2>550 hotels</h2>
        </div>
      </div>
      <div className='plistItem'>
        <img
          className='plistImg'
          src='https://cdn.ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg'
          alt='resort'
        />
        <div className='plistTitles'>
          <h1>Resorts</h1>
          <h2>605 Resort</h2>
        </div>
      </div>
      <div className='plistItem'>
        <img
          className='plistImg'
          src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/257276599.jpg?k=846d464626c6f30d8ad8dce3b296e7bd8aae2957b99a401366d23f7ec5e1a28e&o=&hp=1'
          alt='villa'
        />
        <div className='plistTitles'>
          <h1>Villas</h1>
          <h2>201 Villas</h2>
        </div>
      </div>
      <div className='plistItem'>
        <img
          className='plistImg'
          src='https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/72282092.jpg?k=1b4e25074b9f4186fe781d31054849167f0193595a3ef925f625770586d8b985&o='
          alt='apartment'
        />
        <div className='plistTitles'>
          <h1>Apartments</h1>
          <h2>330 Apartments</h2>
        </div>
      </div>
      <div className='plistItem'>
        <img
          className='plistImg'
          src='https://34yijg1h5o3j1dd9j9up6hyb-wpengine.netdna-ssl.com/wp-content/uploads/2022/02/ParadiseCabin_TwoBedroomLuxury_2022_003-1024x683.jpg'
          alt='cabin'
        />
        <div className='plistTitles'>
          <h1>Cabins</h1>
          <h2>89 Cabins</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
