

const Button = ( { label, onClick }) => {
    return (
        <div>
        <button className="text-stone-100 border border-stone-700 bg-stone-800 w-14 h-14 rounded-full" onClick={onClick}>
            { label }
        </button>
        </div>
      );
}

export default Button
