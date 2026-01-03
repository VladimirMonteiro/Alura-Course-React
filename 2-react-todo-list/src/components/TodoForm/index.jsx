import styles from "./TodoForm.module.css";

import TextInput from "../TextInput";
import Button from "../Button";
const TodoForm = ({ onSubmit }) => {
  return (
    <form action={onSubmit} className={styles.todoForm}>
      <TextInput placeholder="Adicionar novo item"  required name= "description"/>
      <Button>Salvar item</Button>
    </form>
  );
};

export default TodoForm;
