import { Navbar, Container, Nav } from "react-bootstrap";
import styles from './Footer.module.css';

const Footer = ()=>{
    return(
        <footer>
            <Navbar style={{backgroundColor: "#56CCF2"}} className="p-4 ml-5">
                <Container>
                    <Navbar.Brand href="/" style={{color: "white", fontSize: "3rem"}}>The Generics</Navbar.Brand>
                    <Nav>
                        <Nav.Item className="p-2 mx-5" style={{fontSize: "1.6rem"}}>
                            <Nav.Link href="#youtube">
                                <img src="imgIcon/youtube.png" alt="YouTube" className={styles.img} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="p-2 mx-5" style={{fontSize: "1.6rem"}}>
                            <Nav.Link href="#spotify">
                                <img src="imgIcon/spotify.png" alt="Spotify" className={styles.img} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="p-2 mx-5" style={{fontSize: "1.6rem"}}>
                            <Nav.Link href="#facebook">
                                <img src="imgIcon/facebook.png" alt="Facebook" className={styles.img} />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </footer>
    );
}

export default Footer;