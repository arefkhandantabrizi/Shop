import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { apiCallBegan } from "./api";
// import { createSelector } from "reselect";

const slice = createSlice({
  name: "users",
  initialState: {
    data: {
      _id: "",
      name: "",
      username: "",
      password: "",
      schoolname: "",
      schoolgrade: "",
      gender: "",
    },
    error: "",
    jwt: "",
    submited: false,
  },
  reducers: {
    usersAdded: (users, action) => {
      const {
        name,
        username,
        password,
        schoolname,
        schoolgrade,
        gender,
      } = action.payload;
      users.data.name = name;
      users.data.username = username;
      users.data.password = password;
      users.data.schoolname = schoolname;
      users.data.schoolgrade = schoolgrade;
      users.data.gender = gender;
      users.submited = true;
      users.error = "";
    },
    usersRequestFailed: (users, action) => {
      users.error = action.payload;
    },
    usersLogined: (users, action) => {
      const jwt = action.payload;
      const {
        name,
        username,
        schoolname,
        schoolgrade,
        gender,
        _id,
      } = jwtDecode(jwt);
      users.data.name = name;
      users.data.username = username;
      users.data.schoolname = schoolname;
      users.data.schoolgrade = schoolgrade;
      users.data.gender = gender;
      users.data._id = _id;
      users.submited = true;
      users.error = "";
      users.jwt = jwt;
    },
  },
});
const { usersAdded, usersRequestFailed, usersLogined } = slice.actions;

const url = "/users";
export const addUser = (user) =>
  apiCallBegan({
    url,
    method: "post",
    data: user,
    onSuccess: usersAdded.type,
    onError: usersRequestFailed.type,
  });
export const loginUser = (user) =>
  apiCallBegan({
    url: "/auth",
    method: "post",
    data: user,
    onSuccess: usersLogined.type,
    onError: usersRequestFailed.type,
  });

export default slice.reducer;
