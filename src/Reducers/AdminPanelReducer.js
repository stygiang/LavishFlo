import {
  CLOSE_ADMIN_SIDE_PANEL,
  OPEN_ADMIN_SIDE_PANEL,
} from "../Types/AdminPanelTypes";

export const AdminSidePanelReducer = (state = { show: false }, actions) => {
  const { type } = actions;
  switch (type) {
    case OPEN_ADMIN_SIDE_PANEL:
      return { show: true };
    case CLOSE_ADMIN_SIDE_PANEL:
      return { show: false };
    default:
      return state;
  }
};
