export const TOGGLE_LOADING = "toggle_loading";
// Api Buffers For loading
export function toggleLoading(stateToAdjust){
  return{
  type: TOGGLE_LOADING,
  payload: stateToAdjust
  }
}