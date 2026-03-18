import './Research.css'
import { useLocation, useNavigate } from 'react-router-dom'
import playIcon from '../../assets/play.png'

function Research() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleScrollClick = (e, targetId) => {
    e.preventDefault()

    // Si estamos en la página Home, hacer scroll directo
    if (location.pathname === '/') {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Si estamos en otra página, navegar al Home primero y luego hacer scroll
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

  const handlePublicationsClick = () => {
    navigate('/publications')
    
    // Hacer scroll suave al contenido de publicaciones después de la navegación
    setTimeout(() => {
      const targetElement = document.getElementById('publications-content')
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <section className="research">
      <div className="research-content">
        <div className="research-title">
          <h2>Research</h2>
        </div>
        <div className="research-text">
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
          <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
        <div className="research-sidebar">
          <div className="projects">
            <h3>PROJECTS</h3>
            <ul>
              <li>Nam facilibus eros egestas, volutpat mi ut gravida nunc.</li>
              <li>Donec sagittis feugis ultrices, euismod lacus a.</li>
              <li>Quisque rhoncus leo et neque lobortis.</li>
            </ul>
            <button
              className="view-button"
              onClick={(e) => handleScrollClick(e, 'projects')}
            >
              <span>View projects</span>
              <div className="view-button-icon"></div>
            </button>
          </div>
          <div className="publications">
            <h3>PUBLICATIONS</h3>
            <ul>
              <li>Nam facilibus eros egestas, volutpat mi ut gravida nunc.</li>
              <li>Donec sagittis mauris ultrices, euismod lacus a.</li>
              <li>Quisque rhoncus leo et massa bibendum.</li>
            </ul>
            <button
              className="view-button"
              onClick={handlePublicationsClick}
            >
              <span>View publications</span>
              <div className="view-button-icon"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Research
