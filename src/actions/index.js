export const TOGGLE_FETCHING = "toggle_fetching";
// Api Buffers For loading
export function toggleFetching(stateToAdjust){
  return{
  type: TOGGLE_FETCHING,
  payload: stateToAdjust
  }
}