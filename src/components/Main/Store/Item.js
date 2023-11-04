// import { Image, Row, Col, Button } from "react-bootstrap";

import { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import CartContext from "../../../store/cart-context";

const Item = (props) => {
  const price = `Rs ${props.price}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = ()=>{
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageURL,
      quantity: 1
    });
  }
  return (
    <Col className="mb-5">
      <Card style={{ width: "18rem" }} className="p-3">
        <Card.Img variant="top" src={props.imageURL} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Button variant="primary" onClick={addToCartHandler}>ADD TO CART</Button>
        </Card.Body>
      </Card>
      {/* <h3>{props.title}</h3>
      <Image className="m-4" src={props.imageURL} rounded />
      <Row>
        <Col>{price}</Col>
        <Col>
          <Button variant="primary">ADD TO CART</Button>
        </Col>
      </Row> */}
    </Col>
  );
};

export default Item;
