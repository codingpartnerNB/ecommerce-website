import { useParams } from "react-router-dom";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const Product = () => {
  const productsArr = [
    {
      id: "colors",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      review: "I recommended this to my brother"
    },
    {
      id: "black-white",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      review: "Good"
    },
    {
      id: "yellow-black",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      review: "Good to buy 😍"
    },
    {
      id: "blue",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      review: "It is wonderful color."
    },
  ];
  const cartCtx = useContext(CartContext);
  const params = useParams();
  const data = productsArr.filter((val) => params.productId === val.id);

  const addToCartHandler = ()=>{
    cartCtx.addItem({
      id: data[0].id,
      title: data[0].title,
      price: data[0].price,
      imageUrl: data[0].imageUrl,
      quantity: 1
    });
  }

  return (
    <Container style={{width: "50vw", margin: "5rem auto"}}>
        <Row>
            <Col>
                <Image src={data[0].imageUrl} style={{float: "left"}} rounded />
            </Col>
            <Col>
                <h2>{data[0].title}</h2>
                <p>Price: Rs. {data[0].price}</p>
                <h4>Review</h4>
                <p>{data[0].review}</p>
                <Button variant="primary" style={{margin: "10px"}} onClick={addToCartHandler}>Add To Cart</Button>
                <Button variant="info" style={{margin: "10px"}}>Buy Now</Button>
            </Col>
        </Row>
    </Container>
  );
};

export default Product;
