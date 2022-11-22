import React from 'react'
import  '../style.css'
import './carnivores.css'
import CarnHeader from './carn-components/CarnHeader'
import Gallery from './Gallery'

const Carnivores = ({Dinosaurs, onClick, ifOpen, onClose}) => {
  return (
    <div className='carn-component-container' id="carnivores">
      <CarnHeader/>
      
      <Gallery 
        dinosaurs={Dinosaurs} 
        onClick={ onClick } 
        ifOpen={ ifOpen } 
        onClose={ onClose }
      />
     
    </div>
  )
}

export default Carnivores