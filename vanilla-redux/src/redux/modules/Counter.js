//action value,
export const PLUS_ONE = "PLUS_ONE";
export const MINUS_ONE = "MINUS_ONE";

//action creator : action value를 reutrn하는 함수  app.js
export const plusOne = () => {
    return {
        type: PLUS_ONE,
    }
}
export const minusOne = () => {
    return {
        type: MINUS_ONE,
    }
}



//초기상태값
const initualState = {
    number: 0
};
//const [number, setNumber] = useState(0);


//리듀서: 'state에 변화를 일으키는' 함수
//(1) state를 action의 type에 따라 변경하는 함수

//input에선 state, action 두개 받음요!
//action객체라는 것은 action type을 payload만큼 처리



const counter = (state = initualState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1
            }
        case MINUS_ONE:
            return {
                number: state.number - 1
            }
        default:
            return state;
    }

}

export default counter;