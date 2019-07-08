import {combineReducers} from "redux";
import {GroupReducer} from './GroupReducer';
import { UserReducer } from "./UserReducer";
import {PollReducer} from './PollReducer';

const rootReducer = combineReducers({
    Group : GroupReducer,
    User: UserReducer,
    Poll: PollReducer
});

export default rootReducer; 