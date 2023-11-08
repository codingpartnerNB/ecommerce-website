import { Row, Col, Button } from 'react-bootstrap';

const HomeItem = (props)=>{
    return(
        <Row style={{borderBottom: "black solid 1px"}} className="pb-2 mt-2">
            <Col>{props.date}</Col>
            <Col style={{color: "#777"}}>{props.title}</Col>
            <Col  style={{color: "#777"}} xs={5}>{props.desc}</Col>
            <Col><Button variant="info" style={{color: "white", fontWeight: "bold"}}>BUY TICKETS</Button></Col>
        </Row>
    );
}

export default HomeItem;