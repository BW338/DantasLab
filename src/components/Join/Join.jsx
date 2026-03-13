import './Join.css'
import mailIcon from '../../assets/mail.png'

function Join() {
  const handleEmailClick = (e) => {
    // Agregar un fallback discreto si el mailto no funciona
    setTimeout(() => {
      // Si el usuario sigue en la página después de 3 segundos,
      // probablemente el mailto no funcionó
      if (document.hasFocus()) {
        if (navigator.clipboard) {
          navigator.clipboard.writeText('dantasezequiel1@gmail.com').then(() => {
            // Mostrar una notificación discreta en lugar de alert
            console.log('Email copiado al portapapeles como fallback')
          }).catch(() => {
            console.log('Fallback: Email disponible para copiar manualmente')
          })
        }
      }
    }, 3000)
  }

  return (
    <section className="join-section">
      <div className="join-container">
        <div className="join-content">
          <h2>Join our team</h2>
        </div>
        <div className="join-secondary">
          <p>Contact us at this email by introducing yourself and attaching your CV. We look forward to meeting you.</p>
        </div>
        <div className="join-third">
          <img src={mailIcon} alt="Mail icon" className="mail-icon" />
          <a 
            href="mailto:dantasezequiel1@gmail.com" 
            className="email-link"
            onClick={handleEmailClick}
            title="Enviar email a dantasezequiel1@gmail.com"
          >
            dantasezequiel1@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Join