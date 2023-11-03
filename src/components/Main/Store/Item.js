
import { Image, Row, Col,Button } from "react-bootstrap";

const Item = (props)=>{
    const price = `Rs ${props.price}`;
    return(
        <Col>
            <h3>{props.title}</h3> 
            <Image src={props.imageURL} rounded />
            <Row>
                <Col>{price}</Col>
                <Col><Button variant="primary">ADD TO CART</Button></Col>
            </Row>
        </Col>
    );
}

export default Item;