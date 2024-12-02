import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './formModal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { InputGroup } from 'react-bootstrap';
import apiURL from '../api'

export const FormModal = ({ showModal, setShowModal, selectedItem, isAdding, setIsAdding,fetchItem, fetchItems}) =>{

    useEffect(()=>{
        if(showModal){
            setFormData({
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

    // Form data state
    const [formData, setFormData]= useState({
        id: null,
        name: "",
        image: "",
        price: 0,
        category: "",
        description: ""
    })



    // Function to capture form entries and capture them into the formData state

    function handleFormData (event) {
      event && setFormData({
        ...formData, 
        [event.target.name]: event.target.value
        })
        console.log(formData)
    }

    // Function to handle adding an Item
    async function handleForm (event) {            
            // Sending the response 
            event.preventDefault()
            if(event.target.name == "save") {
                if(window.confirm('Are you sure you want to add this item?')){
                    try {
                        const req = await fetch("http://localhost:3000/api/items",{
                            method: 'POST',
                            body: JSON.stringify(formData),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        const res = await req.json();
            
                        // Reset State
                        setFormData({
                            id: null,
                            name: "",
                            image: "",
                            price: 0,
                            category: "",
                            description: ""
                        })
            
                        // If successful refetch our items and close the modal 
                        await fetchItems()
                        setShowModal(false)
                        setIsAdding(false)
                    }
                    catch(err){
                        console.log("Could not add entry")
                    }
                }        
            }
           else if(event.target.name == "edit") {
            if(window.confirm('Are you sure you want to edit this item?')){
                    try {
                        const req = await fetch(`http://localhost:3000/api/items//${formData.id}`, {
                            method: 'PUT',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(formData)
                        });
                        const res = await req.json();
                        // Refetch data with edits
            
            
                        setFormData({
                            id: null,
                            name: "",
                            image: "",
                            price: 0,
                            category: "",
                            description: ""
                        })
            
                        // If successful refetch our items and close the modal 
                        await fetchItem(formData.id)
                        setShowModal(false)
                        setIsAdding(false)
                    }
            
                    catch (err) {
                        console.log("Could not create entry")
                    }
                }
            }
        }

      
    

useEffect(() =>{
handleFormData()
fetchItems()
}, [])



// Each form element where we are getting information has a name and value reference to a formData property
// For each input, its value for the name property will match to that of the propety in formData
// THe value of the targeted element will then be the value of the matching key in formData eah time an event is triggered
    return(
        <>
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title> {isAdding ? 'Add new item' : 'Edit Item'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={event => handleForm(e, formData)}>
                        <Form.Group className='mb-3 display'>
                            <img src={formData.image} className='display-image' alt='No Image Found'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formImage">
                            <Form.Label> Image </Form.Label>
                            <Form.Control name= "image" type='file' onChange={(e)=>setFormElements({...formData, image: URL.createObjectURL(e.target.files[0])})}/>
                            <Form.Text> Upload an Image </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Label> Name </Form.Label>
                            <Form.Control name ="name" type='text' value={formData.name} onChange={handleFormData}/>
                            <Form.Text> Name of item </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formPrice'>
                            <Form.Label> Price </Form.Label>
                            <InputGroup className='mb-3'>
                            <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control name = "price" type='number' value={formData.price} onChange={handleFormData}/>
                            </InputGroup>
                            <Form.Text> Price per unit of item </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formCategory'>
                            <Form.Label> Category </Form.Label>
                            <Form.Control name = "category" type='text' value={formData.category} onChange={handleFormData}/>
                            <Form.Text> Category of item </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formDescription'>
                            <Form.Label> Description </Form.Label>
                            <Form.Control name="description" as='textarea' value={formData.description} onChange={handleFormData}/>
                            <Form.Text> Item Description </Form.Text>
                        </Form.Group>
                    </Form>                                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}> <i className="bi bi-x"></i>Close </Button>

                    {/* Conditionally render the buttons and depending on the value conditionally trigger the fetch reosonse in the form handler */}
                    {isAdding ? 
                 <Button name = "save" variant='success' onClick={handleForm}> <i className="bi bi-check-lg"></i>Save </Button>

                : 
                <Button name = "edit" variant='success' onClick={handleForm}> <i className="bi bi-check-lg"></i>Edit </Button>

                }
                </Modal.Footer>
            </Modal>
        </>
    )
}