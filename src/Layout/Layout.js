import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="Home">
          HK Resources
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="Learncantonese">
            Learn Cantonese
          </Nav.Link>
          <Nav.Link as={Link} to="Videos">
            Videos
          </Nav.Link>
          <Nav.Link as={Link} to="News">
            News
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
