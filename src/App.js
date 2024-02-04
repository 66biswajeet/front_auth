import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import Login from "./Components/Login";
import Users from "./Components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
