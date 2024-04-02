import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { films } from "./data";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h1>Films</h1>
        <ul>
          <Card title={films[0].title} description={films[0].description} />
          <Card {...films[1]} />
          <Card {...films[2]} />
        </ul>
      </main>
    </div>
  );
}

export default App;
