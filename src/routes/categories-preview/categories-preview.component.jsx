import {useContext, Fragment} from "react";
import CategoryPreview from "../../components/category-preview/category-component";
import {CategoriesContext} from "../../context/categories.context";

const CategoriesPreview = () => {
  const {categoriesMap} = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
export default CategoriesPreview;

/*
    return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        );*/
