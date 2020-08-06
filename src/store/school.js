import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "schools",
  initialState: {
    list: [],
    selectedSchool: "",
    loading: false,
  },

  reducers: {
    schoolsSelected: (school, action) => {
      school.selectedSchool = action.payload.selectedSchool;
    },

    gradeSelected: (school, action) => {
      school.selectedGrade.push(action.payload.gradeSelected);
    },

    schoolsRequested: (schools, action) => {
      schools.loading = true;
    },
    schoolsAdded: (schools, action) => {
      schools.list.push(action.payload);
    },
    schoolsReceived: (schools, action) => {
      schools.list = action.payload;
      schools.loading = false;
    },
    schoolsRequestFailed: (schools, action) => {
      schools.loading = false;
    },
    schoolRemoved: (schools, action) => {
      const index = schools.list.findIndex(
        (schools) => schools.id === action.payload.id
      );
      schools.list.splice(index, 1);
    },
  },
});
export const {
  schoolsSelected,
  gradeSelected,
  // schoolRemoved,
  schoolsRequestFailed,
  schoolsReceived,
  schoolsAdded,
  schoolsRequested,
} = slice.actions;

const url = "/schools";

export const loadSchools = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: schoolsRequested.type,
      onSuccess: schoolsReceived.type,
      onError: schoolsRequestFailed.type,
    })
  );
};

export const addSchool = (school) =>
  apiCallBegan({
    url,
    method: "post",
    data: school,
    onSuccess: schoolsAdded.type,
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

export default slice.reducer;
