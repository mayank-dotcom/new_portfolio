import { Link } from "react-scroll"

function Hero() {
  return (
    <section id="hero" className="hero-section"style={{left:"4rem"}}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="display-1 text-white mb-4 animate__animated animate__fadeIn">Web Developer</h1>
            <p className="lead text-white mb-5 animate__animated animate__fadeIn animate__delay-1s">
              Crafting Digital Experiences Across the Universe
            </p>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn btn-outline-light btn-lg animate__animated animate__fadeIn animate__delay-2s"
            >
              Explore My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

