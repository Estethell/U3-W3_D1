import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { UseSelector, useSelector } from "react-redux";

const FavIndicator = () => {
  const navigate = useNavigate();
  const favLength = useSelector((state) => {
    return state.list.favourites.length;
  });

  return (
    <div className="ml-auto mt-3 mb-4">
      <Button className="bg-success" onClick={() => navigate("/favourites")}>
        <FaHeart />
        <span className="ms-2">{favLength}</span>
      </Button>
    </div>
  );
};

export default FavIndicator;
