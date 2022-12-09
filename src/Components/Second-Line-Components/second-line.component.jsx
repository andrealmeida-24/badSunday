import "./second-line.styles.scss";

const SecondLineCategory = ({ category }) => {
  return (
    <div className="category-container">
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
