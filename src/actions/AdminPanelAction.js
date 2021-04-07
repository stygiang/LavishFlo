import {
  CLOSE_ADMIN_SIDE_PANEL,
  OPEN_ADMIN_SIDE_PANEL,
} from "../Types/AdminPanelTypes";

export const OpenAdminSidePanel = () => async (dispatch) => {
  dispatch({ type: OPEN_ADMIN_SIDE_PANEL });
};
export const CloseAdminSidePanel = () => async (dispatch) => {
  dispatch({ type: CLOSE_ADMIN_SIDE_PANEL });
};
