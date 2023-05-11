import React from 'react'
import './Home.css'
import { Nav , Navbar , Container  } from 'react-bootstrap'


const Home = () => {


  return (
    <>
      <div className="clip">
        <Navbar expand="lg">
          <Container>
            <div className="col-lg-4">
              <Navbar.Brand href="#home">
                <img
                  src="./images/coretech.png"
                  alt="logo"
                  className="navLogo mt-3"
                />
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="text-center navItems">
                <Nav.Link href="#home" className="p-3">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="p-3">
                  About
                </Nav.Link>
                <Nav.Link href="#link" className="p-3">
                  Services
                </Nav.Link>
                <Nav.Link href="#link" className="p-3 mx-3">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* bg image */}

        <div className="head">
          <h1 className="text">
            The Best Web and Sofware <br></br> Providing Company
          </h1>
          <p className="paratext">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim odio
            repellendus a architecto dolor quam delectus molestias, dolore hic
            ullam?
          </p>

          <center>
          <button className="button"><span>Contact Now </span></button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Home