import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_FAIL,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  SAVE_PROJECT_FAIL,
  SAVE_PROJECT_REQUEST,
  SAVE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
} from "../Types/ProjectTypes";

const initailState = { loading: true };

export const ProjectsReducer = (state = initailState, actions) => {
  const { payload, type } = actions;
  switch (type) {
    case GET_PROJECTS_REQUEST:
      return { projects: {}, loading: true };
    case GET_PROJECTS_SUCCESS:
      return { projects: payload, loading: false };
    case GET_PROJECTS_FAIL:
      return { projects: {}, loading: false, error: payload };
    default:
      return state;
  }
};
export const ProjectReducer = (state = { loading: true }, actions) => {
  const { payload, type } = actions;
  switch (type) {
    case GET_PROJECT_REQUEST:
    case UPDATE_PROJECT_REQUEST:
    case SAVE_PROJECT_REQUEST:
      return { project: {}, loading: true };
    case GET_PROJECT_SUCCESS:
    case UPDATE_PROJECT_SUCCESS:
    case SAVE_PROJECT_SUCCESS:
      return { project: payload, loading: false };
    case GET_PROJECT_FAIL:
    case UPDATE_PROJECT_FAIL:
    case SAVE_PROJECT_FAIL:
      return { project: {}, loading: false, error: payload };
    default:
      return state;
  }
};
