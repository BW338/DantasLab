import './Navigation.css'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState('home')

  const handleClick = (link) => {
    setActiveLink(link)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const handleScrollClick = (e, targetId, linkName) => {
    e.preventDefault()
    
    // Si estamos en la página Home, hacer scroll directo
    if (location.pathname === '/') {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
      setActiveLink(linkName)
    } else {
      // Si estamos en otra página, navegar al Home primero y luego hacer scroll
      setActiveLink(linkName)
      navigate('/')
      
      // Esperar a que la navegación se complete y luego hacer scroll
      setTimeout(() => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
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
      <a 
        href="#projects"
        className={activeLink === 'projects' ? 'active' : ''}
        onClick={(e) => handleScrollClick(e, 'projects', 'projects')}
      >
        <span className="nav-text">PROJECTS</span>
      </a>
      <Link 
        to="/publications" 
        className={isActive('/publications') ? 'active' : ''}
        onClick={() => handleClick('publications')}
      >
        <span className="nav-text">PUBLICATIONS</span>
      </Link>
      <a 
        href="#team"
        className={activeLink === 'team' ? 'active' : ''}
        onClick={(e) => handleScrollClick(e, 'team', 'team')}
      >
        <span className="nav-text">TEAM</span>
      </a>
      <a 
        href="#about"
        className={activeLink === 'about' ? 'active' : ''}
        onClick={(e) => handleScrollClick(e, 'about', 'about')}
      >
        <span className="nav-text">ABOUT US</span>
      </a>
      <a 
        href="#work-with-us"
        className={activeLink === 'work-with-us' ? 'active' : ''}
        onClick={(e) => handleScrollClick(e, 'work-with-us', 'work-with-us')}
      >
        <span className="nav-text">WORK WITH US</span>
      </a>
    </nav>
  )
}

export default Navigation
