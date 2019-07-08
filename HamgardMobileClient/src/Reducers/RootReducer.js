import {combineReducers} from "redux";
import {GroupReducer} from './GroupReducer';
import { UserReducer } from "./UserReducer";
import {PollReducer} from './PollReducer';
import {EventReducer} from './EventReducer';

const rootReducer = combineReducers({
    Group : GroupReducer,
    User: UserReducer,
    Poll: PollReducer,
    Event: EventReducer
});

export default rootReducer; 