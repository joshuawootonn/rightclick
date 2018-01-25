import { combineReducers } from "redux";
import {profileReducer} from "./profile-reducer";
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ 
  profile: profileReducer,
  form: formReducer
});
export default rootReducer;