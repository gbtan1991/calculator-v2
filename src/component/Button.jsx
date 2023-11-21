

const Button = ( { label, onClick }) => {

    const buttonStyling = label === '±' || label === '%' || label === '⌫' || label === 'AC'
    ? 'text-stone-900 border bg-stone-400 border-stone-500 font-bold w-14 h-14 rounded-full shadow-2xl text-2xl font-mono '
    : label === '+' || label === '-' || label === '*' || label === '÷' ? 'text-stone-100 border bg-orange-400 border-stone-500 font-bold w-14 h-14 rounded-full shadow-2xl text-2xl font-mono ':
    'text-stone-100 border bg-stone-900 border-stone-900 font-bold w-14 h-14 rounded-full shadow-2xl text-2xl font-mono '

    return (
        <div>
        <button className={buttonStyling} onClick={onClick}>
            { label }
        </button>
        </div>
      );
}

export default Button
