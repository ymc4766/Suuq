import { combineReducers } from "redux";
import { productDetailsReducer, productListReducer } from "./productReducers";
import { suuqDetailsReducer, suuqListReducer } from "./suuqReducers";
import { userLoginReducer, userRegisterReducer } from "./userReducers";

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  suuqList: suuqListReducer,
  suuqDetails: suuqDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
