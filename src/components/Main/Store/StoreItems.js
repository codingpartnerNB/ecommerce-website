import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from './Item';

const StoreItems = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const item = productsArr.map((item)=><Item title={item.title} price={item.price} imageURL={item.imageUrl} />);

  return (
    <React.Fragment>
      <h1>Music</h1>
      <Container>
        <Row>
            {item}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default StoreItems;
