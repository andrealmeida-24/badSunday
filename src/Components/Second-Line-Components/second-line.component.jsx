import { useNavigate } from "react-router-dom";

import "./second-line.styles.scss";

const SecondLineCategory = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(category.route)}
      className="category-container"
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
      </div>
    </div>
  );
};

export default SecondLineCategory;
