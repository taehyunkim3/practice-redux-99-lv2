import { createStore } from "redux";



const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {  //기본값 지정, action은 reducer에게 말하는것.

  console.log(count, action)
  return count;
}  // reducer 는 데이터를 변경시키는 함수function

const countStore = createStore(countModifier);



console.log(countStore)

