import styles from "./EnterInput.module.css";

function EnterInput(props) {
  return <input {...props} className={styles.enterInput} />;
}

export default EnterInput;
