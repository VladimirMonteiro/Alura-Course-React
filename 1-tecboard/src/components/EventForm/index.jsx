import styles from "./EventForm.module.css";

//components
import CampForm from "../CampForm";
import Label from "../Label";
import EnterInput from "../EnterInput";
import Button from "../Button";
import ListSuspend from "../SuspendList";

function EventForm({ themes, onSubmit }) {
  const handleSubmit = (formData) => {
    console.log("Formulário enviado");
    const newEvent = {
      image: formData.get("eventUrl"),
      theme: themes.find((theme) => theme.id == formData.get("theme")),
      date: new Date(formData.get("dateEvent")),
      title: formData.get("eventName"),
    };
    onSubmit(newEvent);
  };

  return (
    <form className={styles.eventForm} action={handleSubmit}>
      <h2>Preencha para criar um evento</h2>
      <div className={styles.camps}>
        <CampForm>
          <Label htmlFor="eventName">Qual o nome do evento?</Label>
          <EnterInput
            type="text"
            name="eventName"
            id="eventName"
            placeholder="Qual o nome do evento?"
          />
        </CampForm>
        <CampForm>
          <Label htmlFor="eventUrl">Qual a URL da foto?</Label>
          <EnterInput
            type="text"
            name="eventUrl"
            id="eventUrl"
            placeholder="https://..."
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
          <ListSuspend id="theme" name="theme" itens={themes} />
        </CampForm>
      </div>
      <div className={styles.actions}>
        <Button>Criar evento</Button>
      </div>
    </form>
  );
}

export default EventForm;
