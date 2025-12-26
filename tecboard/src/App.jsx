import "./App.css";
import Banner from "./components/Banner";
import EventForm from "./components/EventForm";
import Theme from "./components/Theme";

function App() {
  const themes = [
    {
      id: 1,
      name: "Frontend",
    },
    {
      id: 2,
      name: "Backend",
    },
    {
      id: 3,
      name: "Fullstack",
    },
    {
      id: 4,
      name: "DevOps",
    },
    {
      id: 5,
      name: "Data Science",
    },
    {
      id: 6,
      name: "Machine Learning",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <EventForm />
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} />
      ))}
    </main>
  );
}

export default App;
