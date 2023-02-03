import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../../Components/Product-Card/product-card.component";

import {
  CategoryComponent_Container,
  CategoryComponent_Products_Container,
} from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <CategoryComponent_Container>
      <h1>{`All ${category}`}</h1>
      <CategoryComponent_Products_Container>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryComponent_Products_Container>
    </CategoryComponent_Container>
  );
};

export default Category;
