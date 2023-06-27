import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO"



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
      const cleaned = state.filter((toDo) => toDo.id !== action.id);  //(DO NOT MUTATE STATE, BUT REPLACE IT. )
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))      //자료저장소 추가

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);   // html에서 가져오는 id가 string일 수 있으므로
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
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);



