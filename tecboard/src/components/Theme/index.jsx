import styles from "./Theme.module.css";

function Theme({ theme }) {
  return <h3 className={styles.titleTheme}>{theme.name}</h3>;
}

export default Theme;
