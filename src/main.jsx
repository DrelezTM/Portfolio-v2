import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Redirect from './components/Redirect.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename='/'>
      <Routes>
        <Route path='/:sosmed' element={<Redirect />} />
        <Route path='*' element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
