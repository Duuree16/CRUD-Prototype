import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages";
import { RightBar } from "./Components/RightBar";

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
        <RightBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
