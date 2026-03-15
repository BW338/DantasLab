import './Projects.css'
import { useRef, useState, useEffect } from 'react'

function Projects() {
  const scrollLeftRef = useRef(null)
  const scrollRightRef = useRef(null)
  const [showLeftArrows, setShowLeftArrows] = useState(false)
  const [showRightArrows, setShowRightArrows] = useState(false)

  const checkScrollable = (ref, setShowArrows) => {
    if (ref.current) {
      const element = ref.current
      const isScrollable = element.scrollHeight > element.clientHeight
      setShowArrows(isScrollable)
    }
  }

  useEffect(() => {
    // Verificar si el contenido es scrolleable después del render
    const timer = setTimeout(() => {
      checkScrollable(scrollLeftRef, setShowLeftArrows)
      checkScrollable(scrollRightRef, setShowRightArrows)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy(0, direction * 50)
    }
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-title-container">
          <h2>PROJECTS</h2>
        </div>
        <div className="project-card-left">
          <div className="project-top-left">
            <div className="project-image-left">
              {/* Placeholder para imagen izquierda */}
            </div>
            <div className="project-text-left">
              <div className="project-title-left">
                <h3>Targeting resistance to p53 reactivation in high-grade glioma</h3>
              </div>
              <div className="project-description-left">
                <p>Besides Smc3, other cohesin subunits and CTCF –cohesin's partner in crime in folding the genome– seem to have an essential role during these processes, making this an active research area in our lab.</p>
              </div>
            </div>
          </div>
          <div className="project-bottom-left">
            <div className="project-long-text-left" ref={scrollLeftRef}>
              <p>Glioblastoma (GBM) and Diffuse Midline Glioma (DMG) are highly aggressive and universally fatal cancers of the brain, affecting both children and adults. The majority of high-grade gliomas carry a wild-type and functional version of the tumor suppressor gene TP53, making them susceptible to drugs that induce p53 signaling (i.e. p53 reactivators).</p>
              
              <p>One of our focus areas is optimizing the use of p53 reactivating molecules in HGG patients, for which our research has shown patient survival benefits (Rendo et al. Science Translational Medicine 2025). Although many TP53 wild-type HGGs initially respond to p53 reactivation strategies, resistance frequently emerges over time.</p>
              
              <p>Interestingly, we observe that –in brain tumors– treatment resistance does not exclusively occur due to the acquisition of genetic mutations but is rather accompanied by adaptive changes in cellular transcriptional state.</p>
              
              {/* <p>Our research aims to characterize the transcriptional and epigenetic programs that drive resistance to p53 reactivation in HGGs, with a particular focus on the role of differentiation-associated pathways. Using CRISPR-based tools, single-cell multiomics, and lineage tracing, we are investigating how cell state dynamics influence treatment outcomes and identifying potential targets to overcome or prevent therapeutic resistance.</p> */}
            </div>
            <div className="scroll-arrows" style={{ display: showLeftArrows ? 'flex' : 'none' }}>
              <button className="scroll-arrow scroll-up" onClick={() => handleScroll(scrollLeftRef, -1)}>↑</button>
              <button className="scroll-arrow scroll-down" onClick={() => handleScroll(scrollLeftRef, 1)}>↓</button>
            </div>
          </div>
        </div>
        <div className="project-card-right">
          <div className="project-top-right">
            <div className="project-image-right">
              {/* Placeholder para imagen derecha */}
            </div>
            <div className="project-text-right">
              <div className="project-title-right">
                <h3>Targeting resistance to p53 reactivation in high-grade glioma</h3>
              </div>
              <div className="project-description-right">
                <p>Besides Smc3, other cohesin subunits and CTCF –cohesin's partner in crime in folding the genome– seem to have an essential role during these processes, making this an active research area in our lab.</p>
              </div>
            </div>
          </div>
          <div className="project-bottom-right">
            <div className="project-long-text-right" ref={scrollRightRef}>
              <p>Glioblastoma (GBM) and Diffuse Midline Glioma (DMG) are highly aggressive and universally fatal cancers of the brain, affecting both children and adults. The majority of high-grade gliomas carry a wild-type and functional version of the tumor suppressor gene TP53, making them susceptible to drugs that induce p53 signaling (i.e. p53 reactivators).</p>
              
              <p>One of our focus areas is optimizing the use of p53 reactivating molecules in HGG patients, for which our research has shown patient survival benefits (Rendo et al. Science Translational Medicine 2025). Although many TP53 wild-type HGGs initially respond to p53 reactivation strategies, resistance frequently emerges over time.</p>
              
              <p>Interestingly, we observe that –in brain tumors– treatment resistance does not exclusively occur due to the acquisition of genetic mutations but is rather accompanied by adaptive changes in cellular transcriptional state.</p>
              
              <p>Our research aims to characterize the transcriptional and epigenetic programs that drive resistance to p53 reactivation in HGGs, with a particular focus on the role of differentiation-associated pathways. Using CRISPR-based tools, single-cell multiomics, and lineage tracing, we are investigating how cell state dynamics influence treatment outcomes and identifying potential targets to overcome or prevent therapeutic resistance.</p>
            </div>
            <div className="scroll-arrows" style={{ display: showRightArrows ? 'flex' : 'none' }}>
              <button className="scroll-arrow scroll-up" onClick={() => handleScroll(scrollRightRef, -1)}>↑</button>
              <button className="scroll-arrow scroll-down" onClick={() => handleScroll(scrollRightRef, 1)}>↓</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects