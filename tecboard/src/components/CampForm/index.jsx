import styles from "./CampForm.module.css";

function CampForm({ children }) {
  return <fieldset className={styles.campForm}>{children}</fieldset>;
}

export default CampForm;
