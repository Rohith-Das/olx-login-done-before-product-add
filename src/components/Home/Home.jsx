import React, { useState } from "react";
import './Home.css'
import Navbar from "../Navbar/Navbar";
import Login from "../login/login";
import Modal from "../modal/modal";
const Home=()=>{

const[iseLoginmodalOpen,setisModalOpen]=useState(false)

const handleLoginClick=()=>{
    setisModalOpen(true)
}
const hanldeCloseLoginModal=()=>{
    setisModalOpen(false)
}
    return(
        <div>
<Navbar onLoginClick={handleLoginClick}/>
<Modal isOpen={iseLoginmodalOpen} onClose={hanldeCloseLoginModal}>
    <Login onClose={hanldeCloseLoginModal}/>
</Modal>
        </div>
    )
}

export default Home