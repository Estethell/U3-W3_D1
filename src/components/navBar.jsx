import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import FavIndicator from "./FavIndicator";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className=" d-flex justify-content-between ">
          <Link className="link" to="/">
            Home
          </Link>

          <Link className="link" to="/favourites">
            Favourites List
          </Link>

          <FavIndicator />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
