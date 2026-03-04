import './TeamCard.css'

function TeamCard({ member }) {
  return (
    <div className="team-card-container">
      <div className="team-card">
        <div className="team-card-top">
          <div className="team-card-photo">
            📷
          </div>
          <div className="team-card-title">
            <h3>{member.name}</h3>
            <div className="team-card-role">
              {Array.isArray(member.role) ? (
                member.role.map((line, index) => (
                  <div key={index}>{line}</div>
                ))
              ) : (
                <div>{member.role}</div>
              )}
            </div>
          </div>
        </div>
        <div className="team-card-bio">
          <p>{member.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
