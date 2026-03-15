import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Publications from './pages/Publications'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main className="body-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
