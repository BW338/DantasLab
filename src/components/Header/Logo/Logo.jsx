import './Logo.css'
import logoDL from '../../../assets/logo-dl.png'

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoDL} alt="Dantas Lab Logo" className="logo-dl-image" />
    </div>
  )
}

export default Logo
