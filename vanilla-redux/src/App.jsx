import { useDispatch, useSelector } from "react-redux";
import { PLUS_ONE, MINUS_ONE, plusOne} from "./redux/modules/Counter";
import { useEffect, useState } from "react";


function App() {

    const [number, setNumber] = useState(0);


//여기에서 store에 접근하여 counter의 값을 읽어오고 싶다.
//use selector

const counter = useSelector((state)=>{
return state.counter
});

useEffect(()=>{
    console.log("number", number)
}, [number])




const dispatch = useDispatch();

// console.log("counter->", counter.number)

    return (
        <>
                <div> 현재 카운트:{counter.number}</div>
                <input type="number" value={number} onChange={(e)=>{
                    setNumber(e.target.value)
                }}></input>
                <button onClick={()=>{
                         dispatch(plusOne())
                         //+1로직 넣어주기
                }}>+</button>
                {/* 아래 형태를 위에처럼 변경함(일부러 놔둠) */}
                             <button onClick={()=>{
                         dispatch({
                            type:MINUS_ONE
                         })
                         //+1로직 넣어주기
                }}>-</button>
        </>

    );
}

export default App