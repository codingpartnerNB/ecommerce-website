import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Item from './Item';

const StoreItems = () => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const item = productsArr.map((item)=><Item key={item.id} title={item.title} price={item.price} imageURL={item.imageUrl} />);

  const cartHandler = ()=>{

  }

  return (
    <React.Fragment>
      <h2 style={{textAlign: "center"}} className="m-4">Music</h2>
      <Container className="w-50">
        <Row>
            {item}
        </Row>
        <div style={{textAlign: "center"}}>
          <Button variant="secondary" className="p-2 mb-4" onClick={cartHandler}>See the cart</Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default StoreItems;
