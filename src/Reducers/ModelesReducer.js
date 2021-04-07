import {
  CLOSE_EDIT_PROJECT_MODAL,
  OPEN_EDIT_PROJECT_MODAL,
} from "../Types/ModelTypes";

export const EditProjectReducer = (state = { show: false }, actions) => {
  const { type } = actions;
  switch (type) {
    case OPEN_EDIT_PROJECT_MODAL:
      return { show: true };
    case CLOSE_EDIT_PROJECT_MODAL:
      return { show: false };

    default:
      return state;
  }
};
