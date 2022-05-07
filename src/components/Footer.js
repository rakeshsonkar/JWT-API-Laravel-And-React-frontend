import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
   <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          © Scholars4You theme by <a href="#"> Scholars4You </a> 
        </div>
        <div className="col-md-6">
          <div className="text-md-end footer-links d-none d-sm-block">
            {/* <a href="javascript:void(0);">About Us</a>
            <a href="javascript:void(0);">Help</a>
            <a href="javascript:void(0);">Contact Us</a> */}
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
