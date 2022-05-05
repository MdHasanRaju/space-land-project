import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
