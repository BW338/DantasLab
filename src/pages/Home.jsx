import Hero from '../components/Hero'
import Research from '../components/Research'
import Quote from '../components/Quote'
import Projects from '../components/Projects'
import About from '../components/About'
import Team from '../components/Team'
import Join from '../components/Join'

function Home() {
  return (
    <>
      <Hero title="Research & Development" />
      <Research />
      <Quote />
      <Projects />
      <About />
      <Team />
      <Join />
    </>
  )
}

export default Home
