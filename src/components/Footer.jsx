import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="footer-logo-d">d</span>
          </div>
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
            <a href="#projects">Projects</a>
            <span>|</span>
            <a href="#publications">Publications</a>
          </nav>
          <nav className="footer-nav">
            <a href="#team">Team</a>
          </nav>
          <p className="footer-contact">WRITE US | Contact | JOIN our Team</p>
        </div>
        <div className="footer-right">
          <p className="footer-address">NYU Langone Health</p>
          <p className="footer-address">550 First Avenue</p>
          <p className="footer-address">New York, NY 10016</p>
          <p className="footer-address">646-501-0000</p>
          <div className="footer-nyu-logo">
            <span>NYU Langone Health</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p> D A N T A S L A B  * 2 0 2 6 *</p>
      </div>
    </footer>
  )
}

export default Footer
