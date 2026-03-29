import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Portfolio/NavBar'
import Home from './Portfolio/Home'
import About from './Portfolio/About'
import Projects from './Portfolio/Projects'
import Resume from './Portfolio/Resume'
import Contact from './Portfolio/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App