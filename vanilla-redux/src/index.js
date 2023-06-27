// 원래부터 있던 코드
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// 우리가 추가할 코드
import store from "./components/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  //App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.
  <Provider store={store}>
    <App />
  </Provider>
);

