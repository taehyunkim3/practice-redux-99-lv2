import { useDispatch, useSelector } from "react-redux";



function App() {


//여기에서 store에 접근하여 counter의 값을 읽어오고 싶다.
//use selector

const counter = useSelector((state)=>{
return state.counter
});

const dispatch = useDispatch();

console.log("counter->", counter.number)

    return (
        <>
                <div> 현재 카운트:{counter.number}</div>
                <button onClick={()=>{
                         dispatch({
                            type:"PLUS_ONE"
                         })
                         //+1로직 넣어주기
                }}>+</button>
                             <button onClick={()=>{
                         dispatch({
                            type:"MINUS_ONE"
                         })
                         //+1로직 넣어주기
                }}>-</button>
        </>

    );
}

export default App