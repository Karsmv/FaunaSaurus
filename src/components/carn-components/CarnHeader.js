import React from 'react'
import '../../style.css'

const CarnHeader = () => {
  return (

    <div className='carnHeader-container'>

      <div className='carnHeader'>
        <div className='carnHeader-caption medium-shadow'>
            <h1>Carnivores</h1>
        </div>
        
        <div className='carnHeader-img-container'>
          <img className='image-component skeleton' src={require("../img/rex-carnHeader.png")} alt="" />
        </div>
        
      </div>
      <div className='carnHeader-content'>
        
        </div>

    </div>
  )
}

export default CarnHeader