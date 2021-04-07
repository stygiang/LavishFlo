import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ProjectReducer, ProjectsReducer } from "./Reducers/ProjectsReducer";
import { EditProjectReducer } from "./Reducers/ModelesReducer";
import { AdminSidePanelReducer } from "./Reducers/AdminPanelReducer";

const reducer = combineReducers({
  projectsList: ProjectsReducer,
  singleProject: ProjectReducer,
  editProjectModel: EditProjectReducer,
  adminSidePanel: AdminSidePanelReducer,
});

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;
// const shippingAddresFromStorage = localStorage.getItem("shippingAddress")
//   ? JSON.parse(localStorage.getItem("shippingAddress"))
//   : null;

const initialStae = {
  //   cart: {
  //     cartItems: cartItemsFromStorage,
  //     shippingAddress: shippingAddresFromStorage,
  //   },
  //   userLogin: { userInfo: userInfoFromStorage },
};
const middileware = [thunk];
const store = createStore(
  reducer,
  initialStae,
  composeWithDevTools(applyMiddleware(...middileware)),
);
export default store;
