import styles from "./EventForm.module.css";

//components
import CampForm from "../CampForm";
import Label from "../Label";
import EnterInput from "../EnterInput";
import Button from "../Button";
import ListSuspend from "../SuspendList";

function EventForm() {
  return (
    <form className={styles.eventForm}>
      <h2>Preencha para criar um evento</h2>
      <div className={styles.camps}>
        <CampForm>
          <Label htmlFor="eventName">Qual o nome do evento?</Label>
          <EnterInput
            type="text"
            name="eventname"
            id="eventName"
            placeholder="Qual o nome do evento?"
          />
        </CampForm>
        <CampForm>
          <Label htmlFor="dateEvent">Data do event</Label>
          <EnterInput
            type="date"
            name="dateEvent"
            id="dateEvent"
            placeholder="Qual o nome do evento?"
          />
        </CampForm>
        <CampForm>
          <Label htmlFor="dateEvent">Tema do evento</Label>
          <ListSuspend />
        </CampForm>
      </div>
      <div className={styles.actions}>
        <Button>Criar evento</Button>
      </div>
    </form>
  );
}

export default EventForm;
