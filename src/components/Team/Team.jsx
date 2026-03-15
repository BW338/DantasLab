import './Team.css'
import TeamCard from './TeamCard'
import { useState, useRef } from 'react'

function Team() {
  const scrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const members = [
    {
      name: 'EZEQUIEL C.DANTAS',
      role: ['DANTASLAB', 'PRINCIPAL INVESTIGATOR', 'MD/PHD'],
      bio: 'Ezequiel is a physician and scientist with a PhD in Immunology. He is studying the effects of dietary interventions on the immune system using mouse models and human samples. Cancer is another example where diet can influence immunity so Ezequiel is studying the crosstalk among tumor cells, the immune system, and the regulators of systemic metabolism that ultimately lead to the wasting syndrome called cachexia. This research has also sparked his interest in finding and validating early biomarkers for cachexia and lung cancer.'
    },
    {
      name: 'Jeshua Kim',
      role: ['DANTASLAB DIRECTOR', 'MD/PHD'],
      bio: 'Jezhua is a physician and scientist with a PhD in Immunology. He is studying the effects of dietary interventions on the immune system using mouse models and human samples. Cancer is another example where diet can influence immunity so Ezequiel is studying the crosstalk among tumor cells, the immune system, and the regulators of systemic metabolism that ultimately lead to the wasting syndrome called cachexia. This research has also sparked his interest in finding and validating early biomarkers for cachexia and lung cancer.'
    },
    {
      name: 'Omar Abdallah',
      role: ['DANTASLAB DIRECTOR', 'MD/PHD'],
      bio: 'Omar is a physician and scientist with a PhD in Immunology. He is studying the effects of dietary interventions on the immune system using mouse models and human samples. Cancer is another example where diet can influence immunity so Ezequiel is studying the crosstalk among tumor cells, the immune system, and the regulators of systemic metabolism that ultimately lead to the wasting syndrome called cachexia. This research has also sparked his interest in finding and validating early biomarkers for cachexia and lung cancer.'
    },
    {
      name: 'Guido Amadio',
      role: ['OWNER', 'MD/PHD'],
      bio: 'Guido is a physician and scientist with a PhD in Immunology. He is studying the effects of dietary interventions on the immune system using mouse models and human samples. Cancer is another example where diet can influence immunity so Ezequiel is studying the crosstalk among tumor cells, the immune system, and the regulators of systemic metabolism that ultimately lead to the wasting syndrome called cachexia. This research has also sparked his interest in finding and validating early biomarkers for cachexia and lung cancer.'
    }
  ]

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = 493 // card width (473.33) + gap (20)
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount
      
      // Smooth scroll with constant speed
      const startScroll = container.scrollLeft
      const distance = targetScroll - startScroll
      const duration = 600 // milliseconds
      let startTime = null

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        
        // Linear easing for constant speed
        container.scrollLeft = startScroll + distance * progress

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0)
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      )
    }
  }

  return (
    <section className="team" id="team">
      <div className="team-header">
        <h2>TEAM</h2>
        <p>We are building a multidisciplinary team committed to excellence in research and innovation. Our director leads the vision as we continue expanding our scientific capabilities.</p>
      </div>
      <div className="team-cards-wrapper">
        {showLeftArrow && (
          <button className="carousel-arrow carousel-arrow-left" onClick={() => scroll('left')}>
            ‹
          </button>
        )}
        <div className="team-cards" ref={scrollRef} onScroll={handleScroll}>
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
        {showRightArrow && (
          <button className="carousel-arrow carousel-arrow-right" onClick={() => scroll('right')}>
            ›
          </button>
        )}
      </div>
    </section>
  )
}

export default Team
