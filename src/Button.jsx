import React from 'react'

const Button = ({ value, onClick }) => {
    const  colSpan = value === 'AC' ? 'col-span-2':
    value === '=' ? 'col-span-2'
    
    : 'col-span-1'

  return (
    <button onClick={() => onClick(value)} className={`${colSpan} bg-white `}>
        {value}

    </button>
  )
}

export default Button
