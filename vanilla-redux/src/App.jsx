import { useDispatch, useSelector } from "react-redux";
import { PLUS_ONE, MINUS_ONE, plusOne, plusN, minusN} from "./redux/modules/Counter";
import { useState } from "react";
import Router from "./shared/Router";


function App() {

    const [number, setNumber] = useState(0);


//여기에서 store에 접근하여 counter의 값을 읽어오고 싶다.
//use selector

const counter = useSelector((state)=>{
return state.counter
});






const dispatch = useDispatch();

// console.log("counter->", counter.number)

    return (
<Router/>

    );
}

export default App