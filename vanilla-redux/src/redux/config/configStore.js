//중앙 데이터 관리소(store)를 설정하는 곳

import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
});//여기에 state같은 데이터 다 객체형태로 쏟아넣음

const store = createStore(rootReducers);

export default store