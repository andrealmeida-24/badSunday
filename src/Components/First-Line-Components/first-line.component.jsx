import "./first-line.styles.scss";

const FirstLineCategory = ({ category }) => {
  return (
    <div className="category-container-firstLine">
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

export default FirstLineCategory;
