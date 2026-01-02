import styles from "./Dialog.module.css";
import { useEffect, useRef } from "react";

const Dialog = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    isOpen ? openDialog() : closeDialog();
  }, [isOpen]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>
          {" "}
          Close{" "}
        </button>
        <p>Modal content</p>
      </dialog>
    </>
  );
};

export default Dialog;
