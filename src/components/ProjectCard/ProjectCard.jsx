import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-card-image">
          📄
        </div>
        <div className="project-card-info">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-meta">Journal: {project.journal}</p>
          <p className="project-card-meta">PMID: {project.pmid}</p>
          <p className="project-card-meta">DOI: {project.doi}</p>
        </div>
      </div>
      <div className="project-card-body">
        <div className="project-card-section">
          <p>{project.abstract}</p>
        </div>
        <div className="project-card-section">
          <p>{project.authors}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
