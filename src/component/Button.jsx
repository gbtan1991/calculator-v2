

const Button = ( { label, onClick }) => {
    return (
        <button className="text-stone-100" onClick={label}>
            {label}
        </button>
      );
}

export default Button
