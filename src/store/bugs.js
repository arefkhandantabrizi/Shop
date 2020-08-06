// import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    sidebar: {
      activeClass: "",
      routeto: "/order-jacket",
      class1: "side-nav__item side-nav__item--active",
      class2: "side-nav__item",
      class3: "side-nav__item",
      class4: "side-nav__item",
    },
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },

    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },

    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },

    bugAssignToUser: (bugs, action) => {
      const { id: bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
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

    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    bugRemoved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list.splice(index, 1);
    },
  },
});
export const {
  bugAssignToUser,
  bugAdded,
  bugRemoved,
  bugResolved,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creator

const url = "/bugs";

export const loadBugs = () => (dispatch, getState) => {
  // const { lastFetch } = getState().entities.bugs;

  // const diffInMinute = moment().diff(moment(lastFetch), "minute");

  // if (diffInMinute < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

export const addBug = (bug) =>
  apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
  });

export const resolveBug = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "patch",
    data: { resolved: true },
    onSuccess: bugResolved.type,
  });

export const assignBugToUser = (bugId, userId) =>
  apiCallBegan({
    url: url + "/" + bugId,
    method: "patch",
    data: { userId },
    onSuccess: bugAssignToUser.type,
  });

// Selectors
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs.list,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs.list,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
