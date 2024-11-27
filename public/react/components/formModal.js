import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
export const FormModal = ({showModal, setShowModal, selectedItem, isAdding, setIsAdding}) =>{

    const [formElements, setFormElements] = useState({
            name: '',
            image: '',
            price: 0,
            category: '',
            description: ''
    });

    useEffect(()=>{
        if(showModal){
            setFormElements({
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
                    <form className='form-modal'>
                        <div className='form-element'>
                            <label htmlFor='img'> Upload Image </label>
                            <input type='file' name='img' accept='image/*' value=''/>
                        </div>
                        <div className='form-element'>
                            <label htmlFor='price'> Item Price </label>
                            <input type='number' name='price' value={formElements.price}/>
                        </div>
                        <div className='form-element'>
                            <label htmlFor='category'> Item Category </label>
                            <input type='text' name='category' value={formElements.category}/>    
                        </div>
                        <div className='form-element'>
                            <label htmlFor='description'> Item Description </label>
                            <textarea name='description' value={formElements.description}> </textarea>
                        </div>
                    </form>                                       
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}> <i className="bi bi-x"></i>Close </Button>
                    <Button variant='success'> <i className="bi bi-check-lg"></i>Save </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}