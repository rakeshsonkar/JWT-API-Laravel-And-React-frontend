import React from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { APIURL } from '../components/config';


const Logout = () => {
  const token =JSON.parse(localStorage.getItem("token"));
  axios.post(APIURL+"logout",{ },{headers: {"Authorization" : `Bearer ${token}`}}).then((response) => {
    //console.log(response)
    if(response.data.success === "true"){
        //console.log(response.data.token.original.access_token)
        window.localStorage.clear();
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
        
        
    }

  })










    

   
  //  Swal.fire({
  //   toast: true,
  //   icon: 'success',
  //   title: "Logout successfully",
  //   animation: false,
  //   position: 'top',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer)
  //     toast.addEventListener('mouseleave', Swal.resumeTimer)
  //   }
  // });
  // window.location.href = '/';
  return (
    <div>
      
    </div>
  )
}

export default Logout
