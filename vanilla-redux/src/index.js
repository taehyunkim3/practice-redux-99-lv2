import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO"
//NEVER MUTATE STATE

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:

      return [...state, { text: action.text, id: Date.now() }];         //ES6 spread, push를 새 array로 반환하는 방법으로 바꾼것.
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))      //자료저장소 추가


const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);



//single source of truth
//state를 변경할땐 action을 사용해야하만 함.
//state를 직접 변경하지 않고 new state를 반환해야만 함.