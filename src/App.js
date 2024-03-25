import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavIndicator from "./components/FavIndicator";
import { Container } from "react-bootstrap";
import Favourites from "./components/Favourites";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <NavBar />
      </Container>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
