import React,{useState,useEffect} from 'react'
import Login from './pages/Login';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Logout from './components/Logout';
import Footer  from './components/Footer';
import jwt_decode from "jwt-decode";

import {
  Routes,
  Route
} from "react-router-dom";
import MyAccount from './pages/MyAccount';

function App() {
  const [token, setToken] = useState();
  let result = false;
  if(token){
    let decodedToken = jwt_decode(token);
    //console.log("Decoded Token", decodedToken);
    let currentDate = new Date();
  
    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      console.log("Token expired.");
    } else {
      console.log("Valid token");   
      result = true;
    }
  }
// var isExpired = false;
// var decodedToken=jwt_decode(token, {complete: true});
// var dateNow = new Date();
// if(decodedToken.exp < dateNow.getTime())
//     isExpired = true;

  useEffect(()=> {
    //logic for getting a local storage value
    const data = JSON.parse(localStorage.getItem("token"))
    setToken(data)
  },[])
  if(result){
    <Logout/>
  }
  if(!token) {
    
    return <Login />
  }
  
  return (
     <>
     <Header />
     <Sidebar />
     
     <div className="content-page">
     <Routes>
       <Route path="/dashboard" element={<Dashboard />}></Route>
       <Route path="/" element={<Dashboard />}></Route>
       <Route path='/account' element={<MyAccount />} ></Route>
       <Route path="/logout" element={<Logout/>}></Route>
       </Routes>
       <Footer />
       </div>
     
   </>
  );
}

export default App;
