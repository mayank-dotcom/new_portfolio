import './about.css'
function About() {
  return (
    <section id="about" className="about-section"style={{width:"50rem",marginLeft:"13rem"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="section-title">About Me</h2>
            <hr />
            <div className="about-content">
              <p className="lead">
              I'm Mayank Mishra, a passionate web developer with a love for creating immersive digital experiences. Just like the vast cosmos, I believe in endless possibilities and continuous exploration in the world of web development.
              </p>
              <div className="stats-container row mt-5">
                <div className="col-md-4">
                  <div className="stat-item">
                    <h3>3+</h3>
                    <p>Months experience as an intern</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-item">
                    <h3>2+</h3>
                    <p>Major projects Completed</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-item">
                    <h3>10+</h3>
                    <p>Technologies known</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

