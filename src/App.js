import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>

        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Natalia Kur</footer>
      </div>
    </div>
  );
}
