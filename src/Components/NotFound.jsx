import React from 'react'
import notfound from "../assets/images/notfound.svg";

function NotFound() {
  return (
    <div className='container'>
        <h3 className='title'>ไม่พบหน้าเว็บ (404 Page Not Found)</h3>
        <img src={notfound} alt="" />
    </div>
  )
}

export default NotFound