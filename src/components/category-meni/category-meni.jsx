import "./directory.scss";
import DirectoryItem from "../category-item/directory-items.components";

const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
