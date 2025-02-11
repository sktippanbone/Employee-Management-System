import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Careers from "./pages/Careers.jsx";
import Insights from "./pages/Insights.jsx";
import Employee from "./pages/Employee.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
  );
}

export default App;
