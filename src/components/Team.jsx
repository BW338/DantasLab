import './Team.css'

function Team() {
  const members = [
    {
      name: 'EZEQUIEL C.DANTAS',
      role: 'DANTAS LAB PRINCIPAL INVESTIGATOR MD/PHD',
      bio: 'I thought it a precious and creative work and I humbled, as it contains the origins of history, interpretations of the labors nature joins these models and have complete, cover it greater trouble where that can influence obesity, the Epicurean lifestyle is a life of pleasure, but it is not a life of luxury. I thought it a precious and creative work and I humbled, as it contains the origins of history, interpretations of the labors nature joins these models and have complete, cover it greater trouble where that can influence obesity, the Epicurean lifestyle is a life of pleasure, but it is not a life of luxury.'
    },
    {
      name: 'Jeshua Kim',
      role: 'DANTAS LAB DIRECTOR MS/PHD',
      bio: 'I thought it a precious and creative work and I humbled, as it contains the origins of history, interpretations of the labors nature joins these models and have complete, cover it greater trouble where that can influence obesity, the Epicurean lifestyle is a life of pleasure, but it is not a life of luxury. I thought it a precious and creative work and I humbled, as it contains the origins of history, interpretations of the labors nature joins these models and have complete, cover it greater trouble where that can influence obesity, the Epicurean lifestyle is a life of pleasure, but it is not a life of luxury.'
    },
    {
      name: 'Omar Abdallah',
      role: 'DANTAS LAB Director MS/PHD',
      bio: 'I thought it a precious and creative work and I humbled, as it contains the origins of history, interpretations of the labors nature joins these models and have complete, cover it greater trouble where that can influence obesity, the Epicurean lifestyle is a life of pleasure, but it is not a life of luxury. I thought it a precious and creative work and I humbled, as it contains the origins of history, interpretations of the labors nature joins these models and have complete, cover it greater trouble where that can influence obesity, the Epicurean lifestyle is a life of pleasure, but it is not a life of luxury.'
    }
  ]

  return (
    <section className="team">
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-card-header">
              <div className="team-image">📷</div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
