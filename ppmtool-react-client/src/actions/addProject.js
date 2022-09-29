import axios from "axios";
import {
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_STARTED,
  ADD_PROJECT_SUCCESS,
} from "./types";

export const addProject = (project) => {
  return (dispatch, getState) => {
    dispatch(addProjectStarted());

    axios
      .post(`http://localhost:8080/api/project`, project)
      .then((res) => {
        console.log("data ", res.data);
        dispatch(addProjectSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addProjectFailure(err.message));
      });
  };
};

const addProjectSuccess = (project) => ({
  type: ADD_PROJECT_SUCCESS,
  payload: {
    ...project,
  },
});

const addProjectStarted = () => ({
  type: ADD_PROJECT_STARTED,
});

const addProjectFailure = (error) => ({
  type: ADD_PROJECT_FAILURE,
  payload: {
    error,
  },
});
