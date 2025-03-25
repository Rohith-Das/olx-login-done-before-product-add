import React, { Children } from "react";
import './modal.css'

const modal=({isOpen,onClose,children})=>{
    if(!isOpen) return null

    return(
        <div>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="modal-close-btn" 
                    onClick={onClose}
                    >
                      &times;

                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default modal