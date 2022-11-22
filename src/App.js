import {useState, useRef} from 'react'
import { Link } from 'react-scroll';

import Modal from "./components/Modal";
import Header from './components/Header'
import Description from "./components/Description";
import Carnivores from './components/Carnivores'
import Herbivores from './components/Herbivores'


import Dinosaurs from './dino-info.json';
import Arrow from './components/img/arrow.png'

function App() {
 
  const [newModalActive, setNewModalActive] = useState(false)

  const [carnivoresArray, setCarnivoresArray] = useState([])
  const [herbivoresArray, setHerbivoresArray] = useState([])



  return (
    <div className="App">
        <Link className="arrowUp" to="header" spy={true} smooth={true} offset={155} duration={500}>
          <img src={Arrow}/>
        </Link>

      <Header/>

      <Description/>
      <Carnivores Dinosaurs={Dinosaurs} onClick={() => setNewModalActive(true)} ifOpen={newModalActive} onClose={() => setNewModalActive(false)}/>
      
      <Herbivores/>
    </div>
  );
}

export default App;
