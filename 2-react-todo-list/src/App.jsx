import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import Dialog from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import TodoForm from "./components/TodoForm";
import TodoGroup from "./components/ToDoGroup";

import TodoContext from "./components/TodoProvider/TodoContext";

import { use, useState } from "react";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const { todos, addTodo, toggleTodoCompleted } = use(TodoContext);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const handleFormSubmit = (formData) => {
    addTodo(formData);
    toggleDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            items={todos.filter((t) => !t.completed)}
            heading="Para estudar"
          />
          <TodoGroup
            items={todos.filter((t) => t.completed)}
            heading="Estudados"
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <TodoForm onSubmit={handleFormSubmit} />
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
