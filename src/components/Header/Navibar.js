import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

const Navibar = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  const logoutHandler = ()=>{
    authCtx.logout();
    navigate('/login');
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink
            to="/"
            style={{
              padding: "5px",
              color: "darkgray",
              textDecoration: "none",
            }}
          >
            HOME
          </NavLink>
          <NavLink
            to="/store"
            style={{
              padding: "5px",
              color: "darkgray",
              textDecoration: "none",
            }}
          >
            STORE
          </NavLink>
          <NavLink
            to="/aboutus"
            style={{
              padding: "5px",
              color: "darkgray",
              textDecoration: "none",
            }}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contactus"
            style={{
              padding: "5px",
              color: "darkgray",
              textDecoration: "none",
            }}
          >
            CONTACTUS
          </NavLink>
          {!authCtx.isLoggedIn && (
            <NavLink
              to="/login"
              style={{
                padding: "5px",
                color: "darkgray",
                textDecoration: "none",
              }}
            >
              LOGIN
            </NavLink>
          )}
        </Nav>
        {authCtx.isLoggedIn && (
          <Button variant="info" onClick={logoutHandler} style={{marginRight: "10px"}}>
            Logout
          </Button>
        )}
        {authCtx.isLoggedIn && (
          <Button variant="info" onClick={props.showHandler}>
            Cart
          </Button>
        )}
        {authCtx.isLoggedIn && (
          <span style={{ color: "white", marginLeft: "10px" }}>
            {numberOfCartItems}
          </span>
        )}
      </Container>
    </Navbar>
  );
};

export default Navibar;
