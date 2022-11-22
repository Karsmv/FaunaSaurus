import React from 'react'

// import Modal from './Modal.js'

const GalleryItem = ({filteredDino, onClick, ifOpen, onClose}) => {


  return (
    <div className='gallery-item'>
        
        <h2 key={filteredDino.id}  onClick={ onClick } >{filteredDino.name}</h2>

        {/* <Modal 
            className='modal-component' 
            filteredDino={filteredDino} 
            ifOpen={ ifOpen } 
            onClose={ onClose } 
        /> */}

    </div>
  )
}

export default GalleryItem