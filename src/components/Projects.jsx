function Projects() {
  const projects = [
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
    {
      title: "Comming Soon!",
      description: "Comming Soon!",
      image: "/image.png?height=300&width=400",
      tech:"comming soon !",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="projects-section"style={{left:"4rem"}}>
      <div className="container">
        <h2 className="section-title text-center">Featured Projects</h2>
        <hr />
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="img-fluid" />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>{project.tech}</p>
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

