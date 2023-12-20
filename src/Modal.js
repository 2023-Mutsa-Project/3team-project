import React from "react";
import './Modal.css';

const Modal = ({ districtName, onClose, isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{districtName}</h2>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
}

export default Modal;