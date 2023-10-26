import Header from './Components/Comons/Header';
import Footer from './Components/Comons/Footer';
import Button from './Components/Comons/Buttons';
import Bio from './Components/About/Bio';
import Skills from './Components/About/Skills';

import React from 'react'
import Project from './Components/Project/Project';

const App = () => {
  return (
    <div>
      <Header/>
      <Footer/>
      <Button/>
      <Bio/>
      <Skills/>
      <Project/>
    </div>
  )
}

export default App
