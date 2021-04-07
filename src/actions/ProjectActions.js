import { projects } from "../Data/Projects";
import {
  GET_PROJECT_FAIL,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
} from "../Types/ProjectTypes";

export const GetProject = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECT_REQUEST });

    dispatch({ type: GET_PROJECT_SUCCESS, payload: projects });
  } catch (err) {
    dispatch({ type: GET_PROJECT_FAIL, payload: err.message });
  }
};
