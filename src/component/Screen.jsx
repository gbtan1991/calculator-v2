const Screen = ({ currentOperand, previousOperand, operator }) => {
  return (
    <div className="flex flex-col items-end">
      <div className="w-[260px] h-[50px] rounded-xl text-3xl/none text-stone-100 text-right">
        {previousOperand}
      </div>
      <div className="flex items-end">
        <div className="w-[10px] h-[80px] rounded-xl text-3xl/none text-stone-100 text-right">{operator}</div>
        <div className="w-[260px] h-[80px] rounded-xl text-5xl/none text-stone-100 text-right">
          {currentOperand}
        </div>
      </div>
    </div>
  );
};

export default Screen;
