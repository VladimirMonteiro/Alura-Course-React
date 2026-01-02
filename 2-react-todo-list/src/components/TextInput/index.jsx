import styles from "./TextInput.module.css";

const TextInput = (props) => {
  return <input {...props} className={styles.textInput} />;
};
export default TextInput;
