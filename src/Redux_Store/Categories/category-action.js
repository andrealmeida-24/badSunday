import { createAction } from "../create-actions";
import { CATEGORY_ACTION_TYPES } from "./category-types";

export const setCategoriesMap = (categoryMap) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap);
