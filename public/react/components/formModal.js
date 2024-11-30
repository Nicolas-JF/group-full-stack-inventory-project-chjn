import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './formModal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { InputGroup } from 'react-bootstrap';
export const FormModal = ({showModal, setShowModal, selectedItem, isAdding, setIsAdding}) =>{

    const [formElements, setFormElements] = useState({
            id: 0,
            name: '',
            image: '',
            price: 0,
            category: '',
            description: ''
    });

    useEffect(()=>{
        if(showModal){
            setFormElements({
                id: selectedItem.id,
                name: selectedItem.name,
                image: selectedItem.image,
                price: selectedItem.price,
                category: selectedItem.category,
                description: selectedItem.description
            });
        }
    }, [showModal, selectedItem]);
    const handleClose = () =>{
        setShowModal(false);
        setIsAdding(false);
    }

    return(
        <>
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title> {isAdding ? 'Add new item' : 'Edit Item'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3 display'>
                            <img src={formElements.image} className='display-image' alt='No Image Found'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formImage">
                            <Form.Label> Image </Form.Label>
                            <Form.Control type='file' onChange={(e)=>setFormElements({...formElements, image: URL.createObjectURL(e.target.files[0])})}/>
                            <Form.Text> Upload an Image </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Label> Name </Form.Label>
                            <Form.Control type='text' value={formElements.name} onChange={(e)=>setFormElements({...formElements, name})}/>
                            <Form.Text> Name of item </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formPrice'>
                            <Form.Label> Price </Form.Label>
                            <InputGroup className='mb-3'>
                            <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control type='number' value={formElements.price} onChange={(e)=>setFormElements({...formElements, price : e.target.value})}/>
                            </InputGroup>
                            <Form.Text> Price per unit of item </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formCategory'>
                            <Form.Label> Category </Form.Label>
                            <Form.Control type='text' value={formElements.category} onChange={(e)=>setFormElements({...formElements, category: e.target.value})}/>
                            <Form.Text> Category of item </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formDescription'>
                            <Form.Label> Description </Form.Label>
                            <Form.Control as='textarea' value={formElements.description} onChange={(e)=>setFormElements({...formElements, description: e.target.value})}/>
                            <Form.Text> Item Description </Form.Text>
                        </Form.Group>
                    </Form>                                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}> <i className="bi bi-x"></i>Close </Button>
                    <Button variant='success'> <i className="bi bi-check-lg"></i>Save </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}