// import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
// import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "bugs",
  initialState: {
    sidebar: {
      activeClass: "",
      routeto: "/order-jacket",
      class1: "side-nav__item side-nav__item--active",
      class2: "side-nav__item",
      class3: "side-nav__item",
      class4: "side-nav__item",
    },
    btnClass: "btn--inactive registration__btn",
  },
  reducers: {
    btnClassChanged: (bugs, action) => {
      bugs.btnClass = action.payload.btnClass;
    },

    bugAdded: (bugs, action) => {
      const {
        activeClass,
        routeto,
        class1,
        class2,
        class3,
        class4,
      } = action.payload;
      bugs.sidebar.activename = activeClass;
      bugs.sidebar.routeto = routeto;
      bugs.sidebar.class1 = class1;
      bugs.sidebar.class2 = class2;
      bugs.sidebar.class3 = class3;
      bugs.sidebar.class4 = class4;
    },
  },
});
export const { bugAdded, btnClassChanged } = slice.actions;
export default slice.reducer;
