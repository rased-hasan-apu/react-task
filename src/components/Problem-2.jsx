import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Contact from './Contact';
const Problem2 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [allcontact,setAllcontact]=useState([]);
    const [search,setSearch]=useState([]);
    useEffect(()=>{
        fetch(`https://contact.mediusware.com/api/contacts`)
        .then(res=>res.json())
        .then(data=>{
            setAllcontact(data.results);
            console.log(data);
        })
    },[]);
    useEffect(()=>{
        fetch(`https://contact.mediusware.com/api/contacts/?search=1`)
        .then(res=>res.json())
        .then(data=>{
            setSearch(data.results);
            console.log(data);
        })
    },[]);

    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            All Contact
          </Button>
          <Button className='' variant="primary" onClick={handleShow}>
            Us Contact
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>All Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" onChange={''} />
                <ul>
                  {
                    allcontact?.map(contact=><Contact key={contact.id} contact={contact}>
                         
                         
                    </Contact>)
                  }
                </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>
        </>
      );
};

export default Problem2;