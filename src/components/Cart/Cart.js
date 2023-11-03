import { Modal, Button, Table } from "react-bootstrap";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartElements = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const items = cartElements.map((item) => (
    <CartItem
      key={item.id}
      title={item.title}
      price={item.price}
      imageURL={item.imageUrl}
      quantity={item.quantity}
    />
  ));

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
        <div>Total Rs 230</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={props.hideHandler}>PURCHASE</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
