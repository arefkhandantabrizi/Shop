import { combineReducers } from "redux";
import bugReducer from "./bugs";
import schoolReducer from "./school";
import userReducer from "./users";
import orderReducer from "./order";
import invoiceReducer from "./invoice";

export default combineReducers({
  bugs: bugReducer,
  schools: schoolReducer,
  users: userReducer,
  orders: orderReducer,
  invoices: invoiceReducer,
});
