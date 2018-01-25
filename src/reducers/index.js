import { combineReducers } from "redux";
import {profileReducer} from "./profile-reducer";
import {reducer as formReducer } from 'redux-form';
import {staticReducer} from './static-reducer';
const rootReducer = combineReducers({ 
  profile: profileReducer,
  static: staticReducer,
  form: formReducer
});
export default rootReducer;