import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Sidebar />
        </Container>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
