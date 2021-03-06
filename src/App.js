import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Characters from "./components/Home/Characters/Characters";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import SlicedCharacters from "./components/Home/SlicedCharacters/SlicedCharacters";
import CharacterDetails from "./components/Home/CharacterDetails/CharacterDetails";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/Authentication/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route
          path="/character/:characterId"
          element={
            <RequireAuth>
              <CharacterDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <RequireAuth>
              <Contact />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
