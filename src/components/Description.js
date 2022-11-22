import React from 'react'
import "../style.css"
import "./description.css"
import {Parallax} from 'react-parallax'
import TrexFossil from './img/1884823.jpg'
import TrexHunting from './img/first-parallax3.jpg'

const Description = () => {
  return (
    <div className='description-component-container' id="description">      
         <Parallax className='parallax-one large-shadow' blur={0} bgImage={TrexFossil} bgImageAlt="the cat" strength={120}>
       
       <div className='parallax-one content' style={{ height: '100vh'}}>
         <h1 className='description-heading'>DINOSAURS</h1>
         
       </div>
      
   </Parallax>

   <div className='description-info section-one'/>

   <Parallax className='parallax-two large-shadow' blur={0} bgImage={TrexHunting} bgImageAlt="the cat" strength={120}>
     
     <div className='' style={{ height: '100vh' }} />
   </Parallax>

   <div className='description-info section-two' >
   </div>
    </div>
  )
}

export default Description