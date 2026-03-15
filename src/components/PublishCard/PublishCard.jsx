import './PublishCard.css'
import publishDemo from '../../assets/publish-demo.png'
import { useState } from 'react'

function PublishCard({ publication }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className="publish-card" onClick={openModal}>
        <div className="publish-card-header">
          <div className="publish-card-image">
            <img src={publishDemo} alt="Publication" className="publication-image" />
          </div>
          <div className="publish-card-info">
            <h3 className="publish-card-title">{publication.title}</h3>
            <p className="publish-card-meta">Journal: {publication.journal}</p>
            <p className="publish-card-meta">PMID: {publication.pmid}</p>
            <p className="publish-card-meta">DOI: {publication.doi}</p>
          </div>
        </div>
        <div className="publish-card-body">
          <div className="publish-card-authors">
            <p>{publication.authors}</p>
          </div>
          <div className="publish-card-abstract">
            <p>{publication.abstract}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <img src={publishDemo} alt="Publication" className="modal-image" />
              <div className="modal-info">
                <h2 className="modal-title">{publication.title}</h2>
                <p className="modal-meta">Journal: {publication.journal}</p>
                <p className="modal-meta">PMID: {publication.pmid}</p>
                <p className="modal-meta">DOI: {publication.doi}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>Authors</h3>
                <p>{publication.authors}</p>
              </div>
              <div className="modal-section">
                <h3>Abstract</h3>
                <p>{publication.abstract}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PublishCard
