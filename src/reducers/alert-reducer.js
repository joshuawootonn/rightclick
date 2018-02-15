import {TOGGLE_ALERT} from '../actions/types';

export const alertReducer = (state=true, action) => {  
  switch(action.type){        
    case TOGGLE_ALERT:
      return !state;     
    default:
      return state;
  }
}