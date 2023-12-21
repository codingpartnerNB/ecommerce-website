import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const price = `Rs ${props.price}`;
  const cartCtx = useContext(CartContext);
  const removeFromCartHandler = ()=>{
    cartCtx.removeItem(props.id);
  }
  const cartQuantity = cartCtx.items.find((item)=>item.id === props.id && item );
  // console.log(cartQuantity.quantity);
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
        {/* <input type="number" min="1" max="5" defaultValue={+cartQuantity.quantity} /> */}
        <span style={{width: "40px"}}>{cartQuantity.quantity}</span>
        <Button variant="danger" onClick={removeFromCartHandler}>REMOVE</Button>
      </td>
    </tr>
  );
};

export default CartItem;
