import { Modal, Button, Table } from "react-bootstrap";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

//   const cartElements = [
//     {
//       id: 1,
//       title: "Colors",
//       price: 100,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//       quantity: 2,
//     },
//     {
//       id: 2,
//       title: "Black and white Colors",
//       price: 50,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//       quantity: 3,
//     },
//     {
//       id: 3,
//       title: "Yellow and Black Colors",
//       price: 70,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//       quantity: 1,
//     },
//   ];

  const totalAmount = `Rs ${cartCtx.totalAmount || 0}`;

  const items = cartCtx.items && cartCtx.items.length > 0 ? (cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      imageURL={item.imageUrl}
      quantity={item.quantity}
    />
  ))) : (
    <tr>
      <td colSpan="3">Cart is empty.</td>
    </tr>
  );

  return (
    <Modal show={props.show}>
      <Modal.Header closeButton onHide={props.hideHandler}>
        <Modal.Title>CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </Table>
        <div style={{fontWeight: "bold"}}>Total {totalAmount}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" style={{fontWeight: "bold", color: "white"}} onClick={props.hideHandler}>PURCHASE</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
