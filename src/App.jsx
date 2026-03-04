import Header from './components/Header'
import Hero from './components/Hero'
import Research from './components/Research'
import Quote from './components/Quote/Quote'
import About from './components/About/About'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="body-container">
        <Hero />
        <Research />
        <Quote />
        <About />
        <Team />
        <Footer />
      </main>
    </>
  )
}

export default App
