import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export const NavBar = ({handleBack}) =>{
    return(
        <Navbar className='bg-body-tertiary' variant='light' fixed='top'>
            <Container>
                <Navbar.Brand onClick={handleBack} href='#'> CJHL </Navbar.Brand>
                <Nav>
                    <Button> Add new item </Button>
                </Nav>
            </Container>
        </Navbar>
    )
};