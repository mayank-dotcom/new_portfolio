import "./Projects.css"
function Projects() {
  const projects = [
    {
      title: "Niyojaka",
      description: "Generates and mails smart replies automatically — saving time and boosting productivity.",
      image: "/niyojaka.png?height=300&width=400",
      tech: <>
        <i className="fa-brands fa-html5" id="ic" style={{marginRight: '8px'}}></i>
        <i className="fa-brands fa-css3-alt" id="ic" style={{marginRight: '8px'}}></i>
        <i className="fa-brands fa-js" id="ic" style={{marginRight: '8px'}}></i>
        <i className="fa-brands fa-bootstrap" id="ic" style={{marginRight: '8px'}}></i>
        <i className="fa-brands fa-react" id="ic" style={{marginRight: '8px'}}></i>
        <i className="fa-brands fa-node" id="ic" style={{marginRight: '8px'}}></i>
        <i className="fa-solid fa-server" id="ic" style={{marginRight: '8px'}}></i>
        {/* Next.js icon as image */}
        <img src="/nextjs.webp" alt="Next.js" style={{height: '34px', width: '34px', display: 'inline-block', verticalAlign: 'middle', marginRight: '8px', filter: 'invert(1)'}} />
        {/* Langchain icon fallback: chatbot */}
        <i className="fa-solid fa-robot" id="ic" style={{marginRight: '8px'}}></i>
      </>,
      link: "https://gmailbot-dun.vercel.app/",
    },
    {
      title: "NARAD",
      description: "A full-stack news website that uses AI to give an approx percentage of authenticity of a news",
      image: "/news.png?height=300&width=400",
      tech:<i className="fa-brands fa-html5"id="ic"> <i className="fa-brands fa-css3-alt"></i> <i class="fa-brands fa-js"id="ic"></i> <i class="fa-brands fa-bootstrap"id="ic"></i> <i>Ex - <i class="fa-brands fa-node-js"id="ic"></i></i> <i class="fa-brands fa-react" id="ic"></i> <i class="fa-brands fa-node"id="ic"></i> <i class="fa-solid fa-server"id="ic"></i></i>,
      link: "https://www.narad.net.in/",
    },
    {
      title: "Traveller",
      description: "A hotel and destination booking system  ",
      image: "/traveller.png?height=300&width=400",
      tech:<i className="fa-brands fa-html5"id="ic"> <i className="fa-brands fa-css3-alt"></i> <i class="fa-brands fa-js"id="ic"></i> <i>Ex - <i class="fa-brands fa-node-js"id="ic"></i></i> <i class="fa-brands fa-node"id="ic"></i> <i class="fa-brands fa-bootstrap"id="ic"></i> <i class="fa-solid fa-server"id="ic"></i></i>,
      link: "https://traveller-web.onrender.com/home",
    },
  ]

  return (
    <section id="projects" className="projects-section"style={{left:"4rem"}}>
      <div className="container">
        <h2 className="section-title text-center">Featured Projects</h2>
        <hr />
        <div className="row" id="projectdiv">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="img-fluid" />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p id="tech">{project.tech}</p>
                  <a href={project.link} className="btn btn-outline-light">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
