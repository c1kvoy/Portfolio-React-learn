import { useState } from 'react';
import './App.css';
import Name from "./components/Name";

function App() {
  let [page, setPage] = useState("main");
  return (
    <div className="App">
      <button className="mainButton" onClick={() => setPage("main")}>Mainpage</button>
      {page === "main" && <Name />}
    </div>
  );
}

export default App;