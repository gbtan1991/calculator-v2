import React, { useState } from "react";
import Button from "./Button.jsx"

const Calculator = () => {

const [prevOperand, setPrevOperand] = useState('');
const [currOperand, setCurrOperand] = useState('');
const [operation, setOperation] = useState(null);




const appendNumber = (number) => {
  if(number === '.' && currOperand.includes('.') ) return;
  setCurrOperand(currOperand + number);
};

const chooseOperation = (selectedOperation) => {
  if (currOperand === '') return;
  if (prevOperand !== '') {
    compute();
  }
  setOperation(selectedOperation);
  setPrevOperand(currOperand);
  setCurrOperand('');
};


const compute = () => {
  let result;
  const prev = parseFloat(prevOperand);
  const curr = parseFloat(currOperand);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '÷':
      result = prev / curr;
      break;
    default:
      return;
  }
    setCurrOperand(result.toString());
    setOperation(null);
    setPrevOperand('');

}

const buttonClick = (value) => {
    let buttonNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let buttonOperands = ['+', '-', '*', '÷'];
    

    if(buttonNumbers.includes(value)) {
      appendNumber(value);
    } else if (buttonOperands.includes(value)) {
      chooseOperation(value);
    } else if (value === 'AC') {

    }


}


  const buttonValues = ['AC', 'DEL', '+', '1', '2', '3', '-', '4', '5', '6', '*', '7', '8', '9','÷', '.', '0', '='];

  return (
    <div className="pt-8 cols">
      {/* OUTPUT */}
      <div className="">
        <div>{prevOperand}</div>
        <div>{currOperand}</div>
      </div>

    <div className="grid grid-cols-4 border">
    {buttonValues.map((value) => (
      <Button key={value} value={value} onClick={buttonClick}/>
    ))}

    </div>
      
      
    </div>
  );
};

export default Calculator;
