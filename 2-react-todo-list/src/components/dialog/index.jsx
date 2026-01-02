import { IconClose } from "../icons";
import styles from "./Dialog.module.css";
import { useEffect, useRef } from "react";

const Dialog = ({ isOpen, onClose, children }) => {
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
      <dialog ref={dialogRef} className={styles.dialog}>
        <div className={styles.btnCloseWrapper}>
          <button autoFocus onClick={onClose} className={styles.btnClose}>
            <IconClose />
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </dialog>
    </>
  );
};

export default Dialog;
