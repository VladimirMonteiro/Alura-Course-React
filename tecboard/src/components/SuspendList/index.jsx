import styles from "./SuspendList.module.css";

function SuspendList({ itens, ...rest }) {
  return (
    <select {...rest} className={styles.suspendList} defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default SuspendList;
