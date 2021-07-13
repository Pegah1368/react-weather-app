import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer>
          <a
            href="https://fervent-albattani-67c43b.netlify.app/"
            target="blank"
            rel="noreferrer"
          >
            Open source{" "}
          </a>
          Coded by Pegah Bozorgmanesh
        </footer>
      </div>
    </div>
  );
}
