import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar style={{ backgroundColor: '#c5050c' }} variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          🦡 BadgerClubs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/browse">Browse Clubs</Nav.Link>
          </Nav>
          <Button variant="outline-light" size="sm">Sign In with NetID</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar