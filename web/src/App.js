import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./helper/routes";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Routes>
        <Route path={routes.homePage} element={<HomePage />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes> */}
      <Blog />
    </div>
  );
}

export default App;
