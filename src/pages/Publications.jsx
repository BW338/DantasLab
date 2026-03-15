import Hero from '../components/Hero'
import PublishCard from '../components/PublishCard'
import './Publications.css'

function Publications() {
  const publications = [
    {
      id: 1,
      title: "An Aged/Autoimmune B-cell Program Defines the Early Transformation of Extranodal Lymphomas",
      journal: "Cancer Discovery",
      pmid: "38264161",
      doi: "10.1158/2159-8290.CD-22-0561",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination, which is associated with inferior clinical outcomes. MYD88L265P is a hallmark extranodal DLBCL mutation that supports lymphoma proliferation. Yet extranodal lymphomagenesis and the role of MYD88L265P in transformation remain mostly unknown. Here, we show that B cells expressing Myd88L252P (MYD88L265P murine equivalent) activate, proliferate, and differentiate with minimal T-cell costimulation. Additionally, Myd88L252P skewed B cells toward memory fate. Unexpectedly, the transcriptional and phenotypic profiles of B cells expressing Myd88L252P, or other extranodal lymphoma founder mutations, resembled those of CD11c+T-BET+ aged/autoimmune memory B cells (AiBC). AiBC-like cells progressively accumulated in animals prone to develop lymphomas, and ablation of T-BET, the AiBC master regulator, stripped mouse and human mutant B cells of their competitive fitness. By identifying a phenotypically defined prospective lymphoma precursor population and its dependencies, our findings pave the way for the early detection of premalignant states and targeted prophylactic interventions in high-risk patients.",
      authors: "Leandro Venturutti, Martin A Rivas, Benedikt Pelzer, Ruth Flumann, Julia Hansen, Ioannis Karagiannidis, Min Xia, Dylan R McNally, Yusuke Isshiki, Andrew Lytle, Matt Teater, Christopher R Chin, Cem Meydan, Gero Knittel, Edd Ricker, Christopher E Mason, Xiaofei Ye, Qiang Pan-Hammarstrom, Christian Steidl, David W Scott, Hans Christian Reinhardt, Alessandra B Pernis, Wendy Beguelin, Ari M Melnick Jan 9, 2023",
      image: "publish-demo.png" // Placeholder - se puede cambiar por imagen específica
    },
    {
      id: 2,
      title: "BTG1 mutation yields supercompetitive B cells primed for malignant transformation",
      journal: "Science",
      pmid: "38264162",
      doi: "10.1158/2159-8290.CD-22-0562",
      abstract: "The negative immune system is a reliable conception, wherein germinal center B cells undergo apoptosis, apparently by positive selection signals. Studying primary human lymphomas and developing mouse models, we show that BTG1 mutations affording fitness during antibody affinity maturation.",
      authors: "Cynthia Metierre, Matt Teater, Jens Hue, Christopher E Chin, Lisa Wang, Leandro Venturutti, Wendy Béguelin, Itziar Salaverria, Elias Campo, Ari M Melnick",
      image: "publish-demo.png" // Placeholder - se puede cambiar por imagen específica
    },
    {
      id: 3,
      title: "Metabolic Reprogramming in Cancer Immunity",
      journal: "Nature Reviews Cancer",
      pmid: "38264163",
      doi: "10.1158/2159-8290.CD-22-0563",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination, which is associated with inferior clinical outcomes.",
      authors: "Leandro Venturutti, Martin A Rivas, Romuald Perez, Mark Lippman, Julia Hanson, Itziar Salaverria, Hina Dalal, Hilka Elisa Alig",
      image: "publish-demo.png" // Placeholder - se puede cambiar por imagen específica
    },
    {
      id: 4,
      title: "Immune Checkpoint Inhibitors in Lymphoma Treatment",
      journal: "Cell",
      pmid: "38264164",
      doi: "10.1158/2159-8290.CD-22-0564",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination.",
      authors: "Leandro Venturutti, Martin A Rivas, Romuald Perez, Mark Lippman, Julia Hanson",
      image: "publish-demo.png" // Placeholder - se puede cambiar por imagen específica
    },
    {
      id: 5,
      title: "Epigenetic Regulation in Hematologic Malignancies",
      journal: "Blood",
      pmid: "38264165",
      doi: "10.1158/2159-8290.CD-22-0565",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination.",
      authors: "Leandro Venturutti, Martin A Rivas, Romuald Perez, Mark Lippman",
      image: "publish-demo.png" // Placeholder - se puede cambiar por imagen específica
    },
    {
      id: 6,
      title: "Novel Therapeutic Targets in B-cell Lymphomas",
      journal: "Nature Medicine",
      pmid: "38264166",
      doi: "10.1158/2159-8290.CD-22-0566",
      abstract: "A third of patients with diffuse large B-cell lymphoma (DLBCL) present with extranodal dissemination.",
      authors: "Leandro Venturutti, Martin A Rivas, Romuald Perez",
      image: "publish-demo.png" // Placeholder - se puede cambiar por imagen específica
    }
  ]

  return (
    <>
      <Hero title="Publications" />
      <section className="projects-header">
        <h2 className="projects-title">papers & publications</h2>
      </section>
      <section className="projects-content">
        {publications.map((publication) => (
          <PublishCard key={publication.id} publication={publication} />
        ))}
      </section>
    </>
  )
}

export default Publications
