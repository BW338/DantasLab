import Hero from '../components/Hero'
import Research from '../components/Research'
import Quote from '../components/Quote'
import About from '../components/About'
import Team from '../components/Team'

function Home() {
  return (
    <>
      <Hero title="Research & Development" />
      <Research />
      <Quote />
      <About />
      <Team />
    </>
  )
}

export default Home
