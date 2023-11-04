import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Navibar = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.quantity;
  }, 0);
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </Nav>
          <Button variant="info" onClick={props.showHandler}>Cart</Button>
          <span style={{color: "white", marginLeft: '10px'}}>{numberOfCartItems}</span>
        </Container>
      </Navbar>
  );
};

export default Navibar;
