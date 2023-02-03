import { createAction } from "../create-actions";
import { USER_ACTION_TYPES } from "../User/user.types";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
