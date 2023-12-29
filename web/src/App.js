import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./helper/routes";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={routes.homePage} element={<HomePage />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.blog} element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
