import { Col, Row, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Favourites = ({ fav = [] }) => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => {
    return state.list.favourites;
  });

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favList.map((list, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                className="mx-5"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_TO_LIST",
                    payload: fav._id,
                  });
                }}
              >
                <FaTrash />
              </Button>
              <Link to={`/${list.company_name}`}>{list.company_name}</Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;
