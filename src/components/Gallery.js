import React from 'react'
import './gallery.css'


import Modal from './Modal'
import GalleryItem from './GalleryItem'

const Gallery = ({ dinosaurs, onClick, ifOpen, onClose }) => {

  

  return (

    <div className='gallery-container'>
        {dinosaurs.filter(dino => dino.diet.includes('Carn')).map(filteredDino => {
          
          const test = () => {
            console.log({filteredDino})
          }

          return (
            <>
            
              <GalleryItem 
                filteredDino={filteredDino} 
                onClick={ onClick } 
                ifOpen={ ifOpen } 
                onClose={ onClose } 
              />
              <Modal 
                className='modal-component' 
                filteredDino={filteredDino} 
                ifOpen={ ifOpen } 
                onClose={ onClose } 
              />
            </>

           
            
            
          )
      })}
    
    </div>
  )
}

export default Gallery