import './assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'
import About from './About.jsx'
import Research from './Research.jsx'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
