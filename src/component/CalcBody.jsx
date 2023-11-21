import { useState } from 'react';
import Screen from './Screen.jsx';
import Button from './Button.jsx';

const CalcBody = ( onClick ) => {
    const [currentOperand, setCurrentOperand] = useState('0')
    const [previousOperand, setPreviousOperand] = useState('')
    const [operator, setOperator] = useState(null)

    const handleButtonClick = (buttonLabel) => {
      switch (buttonLabel) {
        case '+':
        case '-':
        case '*':
        case '÷':
        case '%':
          setOperator(buttonLabel);
          setPreviousOperand(currentOperand);
          setCurrentOperand('0');
          break;
    
        case '=':
          if (operator && previousOperand !== '') {
            setPreviousOperand('');
            setCurrentOperand(
              calculateResult(parseFloat(previousOperand), parseFloat(currentOperand), operator).toString()
            );
            setOperator(null);
          }
          break;
    
        case 'AC':
          setPreviousOperand('');
          setCurrentOperand('0');
          setOperator(null);
          break;
    
        case '⌫':
          setCurrentOperand((prev) => prev.slice(0, -1) || '0');
          break;
    
        default:
          setCurrentOperand((prev) => (prev === '0' || operator ? buttonLabel : prev + buttonLabel));
          break;
      }
    };
    
    const calculateResult = (prev, current, op) => {
      switch (op) {
        case '+':
          return prev + current;
        case '-':
          return prev - current;
        case '*':
          return prev * current;
        case '÷':
          return prev / current;
        case '%':
          return prev % current;
        default:
          return current;
      }
    };
    
    const buttonLabels = [
      '±', '%', '⌫','AC', 
      '7', '8', '9', '÷',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
    ];
    
  return (
    <div className='w-[300px] h-[600px] bg-stone-900 rounded-3xl border border-stone-800 flex flex-col items-center justify-center gap-4'>
      <Screen currentOperand={currentOperand} previousOperand={previousOperand} />
      <div className="grid grid-cols-4 gap-3">
      {buttonLabels.map((label) => (
          <Button key={label} label={label} onClick={() => handleButtonClick(label)} />
        ))}
        
      </div>
      
    </div>
  )
}

export default CalcBody
