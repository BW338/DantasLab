import './Research.css'

function Research() {
  return (
    <section className="research">
      <div className="research-content">
        <div className="research-title">
          <h2>Research</h2>
        </div>
        <div className="research-text">
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
          <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
        <div className="research-sidebar">
          <div className="projects">
            <h3>PROJECTS</h3>
            <ul>
              <li>Nam facilibus eros egestas, volutpat mi ut gravida nunc.</li>
              <li>Donec sagittis feugis ultrices, euismod lacus a.</li>
              <li>Quisque rhoncus leo et neque lobortis.</li>
            </ul>
            <button className="view-button">
              <span>VIEW PROJECTS</span>
            </button>
          </div>
          <div className="publications">
            <h3>PUBLICATIONS</h3>
            <ul>
              <li>Nam facilibus eros egestas, volutpat mi ut gravida nunc.</li>
              <li>Donec sagittis mauris ultrices, euismod lacus a.</li>
              <li>Quisque rhoncus leo et massa bibendum.</li>
            </ul>
            <button className="view-button">
              <span>VIEW PUBS</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
