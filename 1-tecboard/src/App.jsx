import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CardEvent from "./components/CardEvent";
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

  const [events, setEvents] = useState([
    {
      image:
        "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      theme: themes[0],
      date: new Date(),
      title: "Introdução ao React",
    },
  ]);

  const handleEventSubmit = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <EventForm themes={themes} onSubmit={handleEventSubmit} />
      <section className="container">
        {themes.map((theme) => (
          <section key={theme.id}>
            {events.some((event) => event.theme.id === theme.id) && (
              <Theme key={theme.id} theme={theme} />
            )}
            <div className="events">
              {events
                .filter((event) => event.theme.id === theme.id)
                .map((item, index) => (
                  <CardEvent key={index} event={item} />
                ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}

export default App;
