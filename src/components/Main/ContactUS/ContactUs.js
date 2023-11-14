import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const ContactUS = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const nameChangeHandler = (event)=>{
        setName(event.target.value);
    }
    const emailChangeHandler = (event)=>{
        setEmail(event.target.value);
    }
    const phoneChangeHandler = (event)=>{
        setPhone(event.target.value);
    }

    const submitHandler = ()=>{
        const data = {
            name: name,
            email: email,
            phoneno: phone
        }
        props.contactForm(data);
        setName('');
        setEmail('');
        setPhone('');
    }
  return (
    <div>
        <h2 style={{margin: "2rem auto", textAlign: "center"}}>Contact Us</h2>
        <Container style={{marginTop: "3rem", marginBottom: "7rem"}}>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control type="text" id="name" onChange={nameChangeHandler} value={name} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email ID</Form.Label>
                <Form.Control type="email" id="email" onChange={emailChangeHandler} value={email} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor='phone'>Phone Number</Form.Label>
                <Form.Control type="text" id="phone" onChange={phoneChangeHandler} maxLength="10" value={phone} />
            </Form.Group>
            <Button variant='info' onClick={submitHandler}>Submit</Button>
            </Form>
        </Container>
    </div>
  );
};

export default ContactUS;
