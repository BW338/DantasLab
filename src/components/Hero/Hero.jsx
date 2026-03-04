import './Hero.css'

function Hero({ title = "Research & Development" }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default Hero
