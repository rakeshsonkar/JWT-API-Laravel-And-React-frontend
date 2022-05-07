import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Col,Form, Button,Modal,Row} from "react-bootstrap"
import { APIURL,profile } from '../components/config';
import Swal from 'sweetalert2';
import "./MyAccount.css";
const MyAccount = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const user=JSON.parse(localStorage.getItem("user"));
  const [validated, setValidated] = useState(false);
 // console.log(token)
  const [modalShow, setModalShow] = React.useState(false);
  
  useEffect(()=>{
    axios.get(APIURL+"user-profile",{headers: {"Authorization" : `Bearer ${token}`}}).then((response) => {
  // console.log(response.data);
   localStorage.setItem("user", JSON.stringify(response.data));
    })
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
      setValidated(true);
      let formData = new FormData(event.target); 
      axios.post(APIURL+"update-Profile",formData,{headers: {"Authorization" : `Bearer ${token}`}}).then((response) => {
        //console.log(response.data.message)
        if(response.data.success === "true"){
          setModalShow(false);
            //console.log(response.data.token.original.access_token)
            Swal.fire({
                toast: true,
                icon: 'success',
                title: response.data.message,
                animation: false,
                position: 'top',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              });  
        }else{
            //errMsg: response.data.message
            console.log(response.success)
            
            
        }
    
      })
    }
    



  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Profile</li>
                </ol>
              </div>
              <h4 className="page-title">Profile </h4>
              <div className="row  text-center " style={{ margin: "0px 20%" }}>
                <div className="col-lg-8 col-xl-8 text-center">
                  <div className="card ">
                    <div className="card-body">
                      <img src={user.image===null?"../assets/images/users/user-1.jpg":profile+user.image} className="rounded-circle avatar-lg img-thumbnail" alt="profile-image" />
                      <h4 className="mb-0">{user.name}</h4>
                      <p className="text-muted">{user.role == null ? "@FullStack Developer" : user.role}</p>
                      <div className="text-center mt-3">
                        <h4 className="font-13 text-uppercase">About Me :</h4>
                        <p className="text-muted font-13 mb-3">
                          {user.aboutme == null ? `Hi I'm ${user.name},has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.` :user.aboutme}

                        </p>
                        <p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ms-2">{user.name}</span></p>
                        <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ms-2">{user.mobile == null ? "(123) 123 1234" : user.mobile}</span></p>
                        <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ms-2">{user.email}</span></p>
                        <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ms-2">{user.location == null ? "India" : user.location}</span></p>
                      </div>
                      <button className='btn btn-primary mt-3' onClick={() => setModalShow(true)}>Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
          >
            <Modal.Header closeButton onClick={() => setModalShow(false)} >
              <Modal.Title id="contained-modal-title-vcenter">
                Profile Change
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={user.email} required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="Full Name" name="name" defaultValue={user.name} required />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Mobile</Form.Label>
      <Form.Control type="text" placeholder="Enter Mobile" name='mobile' defaultValue={user.mobile}  required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Role</Form.Label>
      <Form.Control type="text" placeholder="role" name="role" defaultValue={user.role} required />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Location</Form.Label>
    <Form.Control placeholder="Enter Address" name="address" defaultValue={user.address} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>About me</Form.Label>
    <Form.Control as="textarea" rows={5} name="aboutme" defaultValue={user.aboutme} required/>
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>profile image</Form.Label>
    <Form.Control type="file" name="image"/>
  </Form.Group>
  <input type="hidden" name='id' defaultValue={user.id} />
  <Button variant="primary text-center" type="submit">
   Update
  </Button>
</Form>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalShow(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default MyAccount