// src/components/Modal.jsx
import { useEffect } from "react";

function Modal({ isOpen, onClose, onConfirm, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <div style={{ marginTop: "10px" }}>
          <button type="button" onClick={onConfirm}>
            Confirmar
          </button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
