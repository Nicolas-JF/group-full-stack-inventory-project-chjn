import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
export const NavBar = ({handleBack, setShowModal, setIsAdding}) =>{
    const handleAdd = () =>{
        setShowModal(true);
        setIsAdding(true);
    }
    return(
        <Navbar className='bg-body-tertiary' variant='light' fixed='top'>
            <Container>
                <Navbar.Brand onClick={handleBack} href='#'> CJHL </Navbar.Brand>
                <Nav>
                    <Button onClick={handleAdd}> <i className="bi bi-plus-circle"></i> Add new item </Button>
                </Nav>
            </Container>
        </Navbar>
    )
};