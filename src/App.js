import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <footer>
          This project was coded by Pegah Bozorgmanesh and is
          <a
            href="https://github.com/Pegah1368/react-weather-app"
            target="blank"
            rel="noreferrer"
          >
            {""} open sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
