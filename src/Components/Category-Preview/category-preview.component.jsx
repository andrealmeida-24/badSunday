import ProductCard from "../Product-Card/product-card.component";

import {
  CategoryPreviewComponent_Container,
  CategoryPreview_Title_Link,
  CategoryPreview_Items,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewComponent_Container>
      <h2>
        <CategoryPreview_Title_Link to={`/shop/${title}`}>
          {title}
        </CategoryPreview_Title_Link>
      </h2>
      <CategoryPreview_Items>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryPreview_Items>
    </CategoryPreviewComponent_Container>
  );
};

export default CategoryPreview;
