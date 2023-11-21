import { useState } from 'react';
import Screen from './Screen.jsx';
import Button from './Button.jsx';

const CalcBody = ( onClick ) => {
    const [currentOperand, setCurrentOperand] = useState('')
    const [previousOperand, setPreviousOperand] = useState('')
    const [operator, setOperator] = useState(null)


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
        default:
        
      }
    };
  
    const handleButtonClick = (buttonLabels) => {
      switch (buttonLabels) {
        case '+':
        case '-':
        case '*':
        case '÷':
            setOperator(buttonLabels);
            setPreviousOperand(currentOperand);
            setCurrentOperand('0');
        break;

        case '=':
          if (operator && previousOperand !== '') {
            const result = calculateResult(parseFloat(previousOperand) , parseFloat(currentOperand))
            setPreviousOperand('');
            setCurrentOperand(result.toString());
            setOperator(null);
          }
        break;

        case 'AC':
          setPreviousOperand('');
          setCurrentOperand('');
          setOperator(null);
        break;

        case '⌫':
          setCurrentOperand(currentOperand.slice(0, -1));
        
          
        break;

        default:
          currentOperand === "0" || operator ? setCurrentOperand(buttonLabels) : setCurrentOperand(currentOperand + buttonLabels);
          
        break;


        
      }
    }
      
    


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
