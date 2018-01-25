import * as actions from "../actions/types";
const initialState = {
  loading: false
};
export const staticReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_VERSION_LOCAL:
      return {
        ...state,
        version: action.payload.data,
        error: null,
        loading: false
      };
    case actions.GET_VERSION_REQUEST:
      return {
        ...state,
        version: null,
        error: null,
        loading: true
      };
    case actions.GET_VERSION_SUCCESS:
      localStorage.setItem("riot_versions", JSON.stringify(action.payload));
      return {
        ...state,
        version: action.payload.data,
        error: null,
        loading: true
      };
    case actions.GET_VERSION_FAILURE:
      return {
        ...state,
        version: null,
        error: "Failed retreiving player data",
        loading: false
      };
    
    default:
      return state;
  }
};
