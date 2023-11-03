import { Container, Nav, Navbar } from "react-bootstrap";

const Navibar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{display: "fixed"}}>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navibar;
