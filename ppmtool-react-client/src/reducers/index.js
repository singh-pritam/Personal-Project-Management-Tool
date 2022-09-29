import {
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_STARTED,
  ADD_PROJECT_SUCCESS,
} from "../actions/types";
import store from "../store";

const initialState = {
  loading: false,
  projects: [],
  error: null,
};

export const projectReducer = (state = initialState, action) => {
  //console.log("reducer action: ", action);
  switch (action.type) {
    case ADD_PROJECT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
        error: null,
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
