import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Games from "./pages/Games";
import HomePage from "./pages/HomePage";
import SingleGame from "./pages/SingleGame";
import "./styles/main.scss";

function App() {
  return (
    <Routes>
      <Route path="" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="games" element={<Games />}></Route>
        <Route path="games/:id" element={<SingleGame />}></Route>
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
