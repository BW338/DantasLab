import Header from './components/Header'
import Hero from './components/Hero'
import Research from './components/Research'
import Mission from './components/Quote/Quote'
import About from './components/About'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="body-container">
        <Hero />
        <Research />
        <Mission />
        <About />
        <Team />
        <Footer />
      </main>
    </>
  )
}

export default App
