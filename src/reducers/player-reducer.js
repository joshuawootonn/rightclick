import * as actions from '../actions/types';
const nameInitialState = {
  loading: false
}
export const playerReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case actions.FETCH_PLAYER:
      return {...state,...action.payload};
    case actions.TOGGLE_PLAYER:
      return {...state, loading: !state.loading};
    default:
      return state
  }
}