import './Navigation.css'
import { useState } from 'react'

function Navigation() {
  const [activeLink, setActiveLink] = useState('home')

  const handleClick = (link) => {
    setActiveLink(link)
  }

  return (
    <nav className="nav">
      <a 
        href="#home" 
        className={activeLink === 'home' ? 'active' : ''}
        onClick={() => handleClick('home')}
      >
        <span className="nav-text">HOME</span>
      </a>
      <a 
        href="#publications" 
        className={activeLink === 'publications' ? 'active' : ''}
        onClick={() => handleClick('publications')}
      >
        <span className="nav-text">PUBLICATIONS</span>
      </a>
      <a 
        href="#team" 
        className={activeLink === 'team' ? 'active' : ''}
        onClick={() => handleClick('team')}
      >
        <span className="nav-text">TEAM</span>
      </a>
      <a 
        href="#work" 
        className={activeLink === 'work' ? 'active' : ''}
        onClick={() => handleClick('work')}
      >
        <span className="nav-text">WORK WITH US</span>
      </a>
    </nav>
  )
}

export default Navigation
