import { createStore } from "redux";



const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {  //기본값 지정, action은 reducer에게 말하는것.

  if (action.type === 'add') {
    return count + 1;   // count++ 하면 안됨!!!주의!!
  }

  return count;
}  // reducer 는 데이터를 변경시키는 함수function

const countStore = createStore(countModifier);




countStore.dispatch({ type: 'add' })


console.log(countStore.getState())