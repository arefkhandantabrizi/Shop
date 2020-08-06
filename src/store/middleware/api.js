import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const {
    jwt,
    url,
    method,
    data,
    onStart,
    onSuccess,
    onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    if (jwt) axios.defaults.headers.common["x-auth-token"] = jwt;

    const response = await axios.request({
      baseURL: "http://localhost:3900/api",
      url,
      method,
      data,
    });
    //General
    dispatch(actions.apiCallSuccess(response.data));
    //Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    if (error.response) {
      //General
      dispatch(actions.apiCallFailed(error.response.data));
      //Specific
      if (onError) dispatch({ type: onError, payload: error.response.data });
    } else {
      dispatch(actions.apiCallFailed(error.message));
      //Specific
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  }
};

export default api;
