import React from 'react'
import './maillist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Subscribe to save time</h1>
      <h2 className='mailDesc'>Sign up to get latest deals</h2>
      <div className='mailInputContainer'>
        <input type='text' placeholder='Your email' />
        <button>
          <FontAwesomeIcon icon={faPaperPlane} className='icon' />
        </button>
      </div>
    </div>
  )
}

export default MailList
