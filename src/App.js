import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Comons/Footer';
import { Home } from './Components/Home';
import Contacts from './Components/Contact/Contacts';
import ProjectDisplay from './Components/Projects/ProjectDisplay';
import { NotFound } from './Components/NotFound';
import Projects from './Components/Projects/Projects';


const App = () => {
  return (
    <div className="App">
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      

      <Footer />
    </Router>
  </div>
  )
}

export default App
