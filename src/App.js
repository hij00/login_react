import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
