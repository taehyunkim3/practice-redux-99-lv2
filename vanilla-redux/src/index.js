import { createStore } from "redux";



const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0) => {
  console.log(state)
  return state;
}  // reducer 는 데이터를 변경시키는 함수function

const countStore = createStore(countModifier);



console.log(countStore)

