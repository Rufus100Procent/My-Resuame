import Header from './Components/Comons/Header';
import Button from './Components/Comons/Buttons';
import Bio from './Components/About/Bio';
import Skills from './Components/About/Skills';
import Footer from './Components/Comons/Footer';
import React from 'react'
import Project from './Components/Project/Project';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Button/>
      <Bio/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
