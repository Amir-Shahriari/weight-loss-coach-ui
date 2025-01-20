import React from 'react';
import './Modal.css'; // Create a CSS file for styling the modal

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>
                <h2 className="modal-title">{title}</h2>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
