import React,{useState} from 'react'
import  { APIURL } from "../components/config";
import {Form,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios';
import "../pages/Login.css";
const Login = () => {
    // console.log(APIURL);
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg,setError] = useState('');
    let navigate = useNavigate();
     const submitForm = () => {
    if (username === " " || password === "") {
      setError("Fields are required");
      return;
    }
    axios.post(APIURL+"login", {
        email: username,
        password: password,       
      }).then((response) => {
        //console.log(response)
        if(response.data.success === "true"){
            setError("");
            //console.log(response.data.token.original.access_token)
            localStorage.setItem("isLoggedIn", true);
             localStorage.setItem("token",JSON.stringify(response.data.token.original.access_token));
             localStorage.setItem("user", JSON.stringify(response.data.token.original.user));
              navigate("/");
              window.location.reload();
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
            setError( response.error);
            
        }

      }).catch((error) => {
        setError("");
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx


          if(error.response.status==401){
           // alert(error.response.data.error)
            Swal.fire({
              toast: true,
              icon: 'error',
              title: error.response.data.error,
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
            
          }
          if(error.response.status==422){
            Swal.fire({
              toast: true,
              icon: 'error',
              title: error.response.data.password[0],
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
          }
          //setError( error.response.data.password[0]);
          // console.log(error.response.data.error);
          // console.log(error.response.status);
          //console.log(error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the 
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
     // console.log(error.config);
    });
  };



  return (
    <div className='bodyclass'>
      <div className="login-div">  
    <div className="row">  
     <div className="logo-login"></div>  
    </div>  
    <div className="row center">  
     <h5>Login</h5>  
     <p className="text-danger">{errMsg}</p>
    </div>  
    <div className="row">  
     <div className="input-field col s12">  
      <input id="email_input" type="email" onChange={(e)=>{setUsername(e.target.value)}} className="validate" />  
      <label for="email_input">Email</label>  
     </div>  
    </div>  
    <div className="row">  
     <div className="input-field col s12">  
      <input id="password_input" type="password" onChange={(e)=>{setPassword(e.target.value)}} className="validate" />  
      <label for="password_input">Password</label>  
      <div>  
       <a href="#"><b>Forgot Password</b></a>  
      </div>  
     </div> 
     <div className="row"></div>  
     <div className="row">  
      
      <div className="col s12 text-center">  
       <button className="waves-effect waves-light btn btn-center" onClick={submitForm} >Login</button>  
      </div>  
     </div>  
    </div>  
   </div>  
        {/* <div className="container">
        <div className="row">
  <div className="col-75">
    <div className="FormsectoinCard">
        <Form onSubmit={(e)=>e.preventDefault()}>
        <p className="text-danger">{errMsg}</p>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{setUsername(e.target.value)}} />
      
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
    </Form.Group>
    
    <Button variant="primary" onClick={submitForm}  type="submit">
      Submit
    </Button>
  </Form>
  </div>
  </div>
  </div>
  </div> */}
  </div>
  )
}

export default Login