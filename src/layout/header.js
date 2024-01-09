import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return ( 
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Artfii</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-Categories">
              <NavDropdown.Item href="#action/mandala-art">Mandala Art</NavDropdown.Item>
              <NavDropdown.Item href="#action/architecture-art">
                Architecture Art
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/doodling-art">Doodling Art</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/photography">
              Photography
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header