import styles from "./CardEvent.module.css";

export default function CardEvent({ event }) {
  return (
    <div className={styles.cardEvent}>
      <img src={event.image} alt={event.title} />
      <div className={styles.eventInfo}>
        <p className={styles.tag}>{event.theme.name}</p>
        <p className={styles.date}>{event.date.toLocaleDateString("pt-BR")}</p>
        <h4 className={styles.title}>{event.title}</h4>
      </div>
    </div>
  );
}
