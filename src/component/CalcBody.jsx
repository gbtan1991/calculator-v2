import { useState, useEffect } from 'react';
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
        
        case '±':
          setCurrentOperand((prev) => (prev === '0' ? '0' : (parseFloat(prev) * -1).toString()));
          break;

          case '.':
            if (!currentOperand.includes('.')) {
              setCurrentOperand((prev) => (prev === '0' || operator ? '0' : prev) + buttonLabel);
            }
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


    useEffect(() => {
      const handleKeyDown = (event) => {
        const key = event.key;
  
        if (/^[0-9]$/.test(key)) {
          handleButtonClick(key);
        } else {
          switch (key) {
            case '+':
            case '-':
            case '*':
            case '/':
              handleButtonClick(key);
              break;
            case 'Enter':
              event.preventDefault();
              handleButtonClick('=');
              break;
            case 'Backspace':
              handleButtonClick('⌫');
              break;
            case 'Escape':
              handleButtonClick('AC');
              break;
            case '.':
              handleButtonClick('.');
              break;
            default:
              break;
          }
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [handleButtonClick]);


    
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
