import { useState } from 'react';
import Screen from './Screen.jsx';
import Button from './Button.jsx';

const CalcBody = ( onClick ) => {
    const [currentOperand, setCurrentOperand] = useState('0')
    const [previousOperand, setPreviousOperand] = useState('')
    const [operator, setOperator] = useState(null)
  
    const handleButtonClick = (buttonLabels) => {
      
    }
      
    const buttonLabels = [
      'AC', '⌫', '±', '%',
      '7', '8', '9', '÷',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
    ];
    console.log(buttonLabels);
  return (
    <div className='w-[300px] h-[600px] bg-stone-900 rounded-3xl border border-stone-800 flex flex-col items-center justify-center gap-4'>
      <Screen currentOperand={currentOperand} previousOperand={previousOperand} />
      <div>
        {buttonLabels.map((label) => {<Button key={ label } label={ label } onClick={ handleButtonClick }/>})}
        
      </div>
      
    </div>
  )
}

export default CalcBody
