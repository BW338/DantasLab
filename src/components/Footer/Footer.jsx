import './Footer.css'
import nyuLogo from '../../assets/nyu-logo.png'
import dLogo from '../../assets/d.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={dLogo} alt="Dantas Lab Logo" className="footer-logo-d-image" />
        </div>
        <div className="footer-center">
          <nav className="footer-nav">
            <a href="#home">HOME</a>
            <span>|</span>
            <a href="#about">About Us</a>
            <span>|</span>
            <a href="#mission">Mission</a>
            <span>|</span>
            <a href="#research">Research</a>
          </nav>
          <nav className="footer-nav">
            <a href="#projects">PROJECTS</a>
            <span>|</span>
            <a href="#publications">PUBLICATIONS</a>
          </nav>
          <nav className="footer-nav">
            <a href="#team">TEAM</a>
          </nav>
          <p className="footer-contact">WORK WITH US > Contact | Join Our Team</p>
        </div>
        <div className="footer-right">
          <div className="footer-address-group">
            <p className="footer-address">NYU Langone Health</p>
            <p className="footer-address">550 First Avenue</p>
            <p className="footer-address">New York, NY 10016</p>
            <p className="footer-address">646-929-7870</p>
          </div>
        </div>
        <div className="footer-nyu-logo">
          <img src={nyuLogo} alt="NYU Langone Health" className="nyu-logo-image" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>D A N T A S L A B    * 2 0 2 6 *</p>
      </div>
    </footer>
  )
}

export default Footer
