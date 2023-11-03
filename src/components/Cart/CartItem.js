import { Button, Card } from "react-bootstrap";

const CartItem = (props) => {
  const price = `Rs ${props.price}`;
  return (
    <tr>
      <td>
        <Card style={{ width: "10rem", textAlign: "center"}}>
          <Card.Body>
            <Card.Img variant="top" src={props.imageURL} />
            <Card.Title style={{fontSize: "1.2rem"}}>{props.title}</Card.Title>
          </Card.Body>
        </Card>
      </td>
      <td style={{textAlign: "center"}}>{price}</td>
      <td style={{display: "flex", justifyContent: "space-evenly"}}>
        <input type="number" min="1" max="5" defaultValue={props.quantity} />
        <Button variant="danger">REMOVE</Button>
      </td>
    </tr>
  );
};

export default CartItem;
