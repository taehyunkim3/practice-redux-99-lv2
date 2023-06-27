import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO"
//NEVER MUTATE STATE


const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((e) => e.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))      //자료저장소 추가

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id))
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
    btn.addEventListener('click', dispatchDeleteToDo)

    ul.appendChild(li);
    li.appendChild(btn);
  })
}

store.subscribe(paintToDos);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
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