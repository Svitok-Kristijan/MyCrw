import "./category.style.scss";
import ProductCard from "../../components/product-card/product-card.component";
import {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {CategoriesContext} from "../../context/categories.context";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/category/categories.selector";

const Category = () => {
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h1 className="category-title">{category.toUpperCase()}</h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
