

const Screen = ({ currentOperand, previousOperand }) => {
  return (
<div>
    <div className="w-[260px] h-[50px] rounded-xl text-3xl/none text-stone-100 text-right">
      {previousOperand} 

    </div>
    <div className="w-[260px] h-[80px] rounded-xl text-5xl/none text-stone-100 text-right">
      {currentOperand}

    </div>
    </div>
  )
}

export default Screen
