import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
const ADD = "add";  // 자바스크립트가 오타 감지해줌!
const MINUS = "minus";

const countModifier = (count = 0, action) => {  //기본값 지정, action은 reducer에게 말하는것.
    switch (action.type) {
        case ADD:             //switch는 string만 가능함.
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }


}  // reducer 는 데이터를 변경시키는 함수function

const countStore = createStore(countModifier);
// console.log(countStore)
const onChange = () => {
    number.innerText = countStore.getState();
}
countStore.subscribe(onChange);
// countStore.dispatch({ type: 'add' })
const handleMinus = () => {
    countStore.dispatch({ type: 'minus' });
}
add.addEventListener("click", () => { countStore.dispatch({ type: 'add' }) });
minus.addEventListener("click", handleMinus);