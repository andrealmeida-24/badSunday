import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../Catgories-Preview/categories-preview.component";
import Category from "../Category/category.component";

import { getCategoriesAndDocuments } from "../../Utilities/Firebase/firebase.utils";
import { setCategoriesMap } from "../../Redux_Store/Categories/category-action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
