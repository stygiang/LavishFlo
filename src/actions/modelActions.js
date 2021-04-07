import {
  CLOSE_EDIT_PROJECT_MODAL,
  OPEN_EDIT_PROJECT_MODAL,
} from "../Types/ModelTypes";

export const editProjectOpen = () => async (dispatch) => {
  dispatch({ type: OPEN_EDIT_PROJECT_MODAL });
};
export const editProjectClose = () => async (dispatch) => {
  dispatch({ type: CLOSE_EDIT_PROJECT_MODAL });
};
