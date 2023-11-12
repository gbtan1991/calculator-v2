import { useReducer } from "react";

export const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  CHOOSE_OPERATION : 'choose-operation',
  CLEAR : 'clear',
  DELETE_DIGIT : 'delete-digit',
  EVALUATE : 'evaluate'
}


function reducer(state, { type, payload}) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
        if(state.overwrite) {
          return{
            ...state,
            currentOperand: payload.digit
            overwrite: false,
          }
        }
}


const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )


  return (
    <div>
      <div>
        <div>
          {previousOperand} {operation}
        </div>
        <div>{currentOperand}</div>
      </div>

      <div>
        <button>AC</button>
        <button>⌫</button>
        <button>÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>=</button>
      </div>
    </div>
  );
};

export default Calculator;
