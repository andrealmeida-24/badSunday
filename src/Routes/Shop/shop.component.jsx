import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import CategoriesPreview from "../Catgories-Preview/categories-preview.component";
import Category from "../Category/category.component";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
