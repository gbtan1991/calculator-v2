import { useState } from 'react';
import CalcBody from './component/CalcBody.jsx';

const Calculator = () => {

  return (
    <div className='h-screen bg-gradient-to-b from-stone-800 to-stone-900 grid place-content-center'>
      <CalcBody />
    </div>
  )
}

export default Calculator
