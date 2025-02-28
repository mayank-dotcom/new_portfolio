"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import './Navbar.css'
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#">
          <span className="brand-text">MM</span>
        </a>

        {/* Mobile Menu Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav"style={{backgroundColor:"transparent"}}>
          <ul className="navbar-nav ms-auto">
            {[ "About", "Skills", "Projects"].map((item) => (
              <li className="nav-item" key={item}>
                <Link className="nav-link" to={item.toLowerCase()} smooth={true} duration={500}>
                  {item}
                </Link>
              </li>
            ))}

            {/* Contact Dropdown */}
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Let's Connect :
              </button>
              {dropdownOpen && (
                <ul className="dropdown-menu show">
                  <li>
                    <a className="dropdown-item" href="https://www.linkedin.com/in/mayank-mishra" target="_blank">
                      <i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/mayank-mishra-475570328/" style={{textDecoration:"none",color:"white"}}>&nbsp;&nbsp;LinkedIn</a> 
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://github.com/mayank-dotcom" target="_blank">
                      <i className="fab fa-github"></i> <a href="https://github.com/mayank-dotcom" style={{textDecoration:"none",color:"white"}}>&nbsp;GitHub</a>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Resume.pdf" download="Mayank_Mishra_Resume.pdf" target="_blank">
                      <i className="fa-solid fa-address-card"></i> <a href="/Resume.pdf" download="Mayank_Mishra_Resume.pdf" style={{textDecoration:"none",color:"white"}}>&nbsp;&nbsp;Resume</a>
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
