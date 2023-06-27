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
      return [{ text: action.text, id: Date.now() }, ...state];         //방향 앞뒤 바꿔서 새거가 앞에 오도록 함.
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))      //자료저장소 추가

const deleteToDo = () => {
  console.log('deleted')
}



const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";  // 초기화
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement('button');

    li.id = toDo.id;
    li.innerText = toDo.text;
    btn.innerText = 'delete';
    btn.addEventListener('click', deleteToDo)

    ul.appendChild(li);
    ul.appendChild(btn);
  })
}

store.subscribe(paintToDos);

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
}




const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit);



//single source of truth
//state를 변경할땐 action을 사용해야하만 함.
//state를 직접 변경하지 않고 new state를 반환해야만 함.