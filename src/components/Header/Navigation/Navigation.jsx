import './Navigation.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('home')

  const handleClick = (link) => {
    setActiveLink(link)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="nav">
      <Link 
        to="/" 
        className={isActive('/') ? 'active' : ''}
        onClick={() => handleClick('home')}
      >
        <span className="nav-text">HOME</span>
      </Link>
      <Link 
        to="/projects" 
        className={isActive('/projects') ? 'active' : ''}
        onClick={() => handleClick('projects')}
      >
        <span className="nav-text">PROJECTS</span>
      </Link>
      <Link 
        to="/publications" 
        className={isActive('/publications') ? 'active' : ''}
        onClick={() => handleClick('publications')}
      >
        <span className="nav-text">PUBLICATIONS</span>
      </Link>
      <Link 
        to="/team" 
        className={isActive('/team') ? 'active' : ''}
        onClick={() => handleClick('team')}
      >
        <span className="nav-text">TEAM</span>
      </Link>
    </nav>
  )
}

export default Navigation
