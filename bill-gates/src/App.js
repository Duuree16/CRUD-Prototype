import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Home>
          <Routes>
            <Route />
          </Routes>
        </Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
