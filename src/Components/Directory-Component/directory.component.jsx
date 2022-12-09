import FirstLineCategory from "../First-Line-Components/first-line.component";
import SecondLineCategory from "../Second-Line-Components/second-line.component";
import "./Categories.Styles.scss";

const Directory = ({ firstLineCategories, secondLineCategories }) => {
  return (
    <div className="categories-container">
      <div className="firstLine-container">
        {firstLineCategories.map((category) => {
          return <FirstLineCategory category={category} key={category.id} />;
        })}
      </div>

      <div className="secondLine-container">
        {secondLineCategories.map((category) => {
          return <SecondLineCategory category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
};

export default Directory;
