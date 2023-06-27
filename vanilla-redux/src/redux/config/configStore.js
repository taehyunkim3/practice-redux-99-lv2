//중앙 데이터 관리소(store)를 설정하는 곳

import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/Counter";
import users from "../modules/users";

const rootReducer = combineReducers({
    counter, users,
});//여기에 state같은 데이터 다 객체형태로 쏟아넣음 (counter:counter -> counter로 생략)

const store = createStore(rootReducer);

export default store 