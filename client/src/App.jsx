import "./App.css";
import Register from './components/register/Register';
import Welcome from "./components/welcome/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeChoose from "./components/welcome/WelcomeChoose";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/welcome2" element={<WelcomeChoose />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
