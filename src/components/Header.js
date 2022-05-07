import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Icon from '@mdi/react';
import {Modal,Button} from "react-bootstrap";
import { profile } from './config';

const Header = () => {
  const user =JSON.parse(localStorage.getItem("user"));
  
  return (
    <>
   <div className="navbar-custom">
  <div className="container-fluid">
    <ul className="list-unstyled topnav-menu float-end mb-0">
      <li className="dropdown notification-list topbar-dropdown">
        <a className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
          <img src={user.image===null?"../assets/images/users/user-1.jpg":profile+user.image} alt="user-image" className="rounded-circle" />
          <span className="pro-user-name ms-1">
            {user.name} <i className="mdi mdi-chevron-down" /> 
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
          {/* item*/}
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow m-0">Welcome !</h6>
          </div>
          {/* item*/}
          <Link to="/account" className="dropdown-item notify-item">
            <i className="fe-user" />
            <span>My Account</span>
          </Link>
          {/* item*/}
          <Link to="/setting" className="dropdown-item notify-item">
            <i className="fe-settings" />
            <span>Settings</span>
          </Link>
          <div className="dropdown-divider" />
          {/* item*/}
          <Link  to="/logout" className="dropdown-item notify-item">
            <i className="fe-log-out" />
            <span>Logout</span>
          </Link>
        </div>
      </li>
     
    </ul>
    {/* LOGO */}
    <div className="logo-box">
      <a href="/" className="logo logo-dark text-center">
        <span className="logo-sm">
          <img src="../assets/images/logo-sm.png" alt height={22} />
          {/* <span class="logo-lg-text-light">UBold</span> */}
        </span>
        <span className="logo-lg">
          <img src="../assets/images/logo-dark.png" alt height={20} />
          {/* <span class="logo-lg-text-light">U</span> */}
        </span>
      </a>
      <a href="/" className="logo logo-light text-center">
        <span className="logo-sm">
          <img src="../assets/images/logo-sm.png" alt height={22} />
        </span>
        <span className="logo-lg">
          <img src="../assets/images/logo-light.png" alt height={20} />
        </span>
      </a>
    </div>
    <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
      <li>
        <button className="button-menu-mobile waves-effect waves-light">
          <i className="fe-menu" />
        </button>
      </li>
      <li>
       
      </li>   
    </ul>
    <div className="clearfix" />
  </div>
</div>

    </>
  )
}

export default Header
