import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "An Aged/Autoimmune B-cell Program Defines the Early Transformation of Extranodal Lymphomas",
      journal: "Cancer Discovery",
      pmid: "38264161",
      doi: "10.1158/2159-8290.CD-22-0561",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination, which is associated with inferior clinical outcomes. MYHBL2KO is a hallmark extranodal DLBCL mutation that supports lymphoma proliferation. Yet extranodal lymphomagenesis and the role of MYHBL2KO in this transformation remain mostly unknown.",
      authors: "Leandro Venturutti, Martin A Rivas, Romuald Perez, Mark Lippman, Julia Hanson, Itziar Salaverria, Hina Dalal, Hilka Elisa Alig, Helga Schroeder, Christoph Stein, Matt Teater, Christopher E Chin, Cam Mouden, Gero Knittel, Zef Sickler, Wendy Béguelin, Ari M Melnick, Ulf Klein, Elias Campo, Christian Steidl, David W Scott, Hans Christian Reinhardt, Mathilde Jan S, 2023"
    },
    {
      title: "BTG1 mutation yields supercompetitive B cells primed for malignant transformation",
      journal: "Science",
      pmid: "38264161",
      doi: "10.1158/2159-8290.CD-22-0561",
      abstract: "The negative immune system is a reliable conception, wherein germinal center B cells undergo apoptosis, apparently by positive selection signals. Studying primary human lymphomas and developing mouse models, we show that BTG1 mutations affording fitness during antibody affinity maturation.",
      authors: "Cynthia Metierre, Matt Teater, Jens Hue, Christopher E Chin, Lisa Wang, Leandro Venturutti, Wendy Béguelin, Itziar Salaverria, Elias Campo, Ari M Melnick"
    },
    {
      title: "An Aged/Autoimmune B-cell Program Defines the Early Transformation of Extranodal Lymphomas",
      journal: "Cancer Discovery",
      pmid: "38264161",
      doi: "10.1158/2159-8290.CD-22-0561",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination, which is associated with inferior clinical outcomes.",
      authors: "Leandro Venturutti, Martin A Rivas, Romuald Perez, Mark Lippman, Julia Hanson, Itziar Salaverria, Hina Dalal, Hilka Elisa Alig"
    },
    {
      title: "An Aged/Autoimmune B-cell Program Defines the Early Transformation of Extranodal Lymphomas",
      journal: "Cancer Discovery",
      pmid: "38264161",
      doi: "10.1158/2159-8290.CD-22-0561",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination.",
      authors: "Leandro Venturutti, Martin A Rivas, Romuald Perez, Mark Lippman, Julia Hanson"
    },
    {
      title: "An Aged/Autoimmune B-cell Program Defines the Early Transformation of Extranodal Lymphomas",
      journal: "Cancer Discovery",
      pmid: "38264161",
      doi: "10.1158/2159-8290.CD-22-0561",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination.",
      authors: "Leandro Venturutti, Martin A Rivas, Romuald Perez, Mark Lippman"
    },
    {
      title: "An Aged/Autoimmune B-cell Program Defines the Early Transformation of Extranodal Lymphomas",
      journal: "Cancer Discovery",
      pmid: "38264161",
      doi: "10.1158/2159-8290.CD-22-0561",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination.",
      authors: "Leandro Venturutti, Martin A Rivas, Romuald Perez"
    }
  ]

  return (
    <>
      <Hero title="Projects" />
      <section className="projects-header">
        <h2 className="projects-title">papers & publications</h2>
      </section>
      <section className="projects-content">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  )
}

export default Projects
