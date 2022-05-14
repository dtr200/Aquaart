import { combineReducers } from "redux";
import payment from './payment';

const rootReducer = combineReducers({
    payment
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;