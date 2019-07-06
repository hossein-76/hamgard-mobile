import {combineReducers} from "redux";
import {GroupReducer} from './GroupReducer';
import { UserReducer } from "./UserReducer";

const rootReducer = combineReducers({
    Group : GroupReducer,
    User: UserReducer
});

export default rootReducer; 