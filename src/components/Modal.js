import React from 'react'
import ReactDOM from 'react-dom'
import '../style.css'
import './modal.css';
import {FiX} from 'react-icons/fi'

import { useState } from 'react';

const Modal = ({ filteredDino, ifOpen, onClose}) => {
  

  // const test2 = () => {
  //   console.log(filteredDino)
  // }

    if (!ifOpen) return null
  return ReactDOM.createPortal(

    <>
    <div className='new-modal-container'></div>
    <div className='new-modal'>
      <FiX className='close-icon' onClick={onClose}></FiX>
      <h2 key={filteredDino.name}>{filteredDino.type}</h2>
      <h2 key={filteredDino.name}>{filteredDino.name}</h2>
        
       
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal