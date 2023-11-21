

const Screen = ({ currentOperand, previousOperand }) => {
  return (
<div>
    <div className="w-[260px] h-[100px] rounded-xl text-5xl text-stone-100 text-right">
      {previousOperand} 

    </div>
<div className="w-[260px] h-[100px] rounded-xl text-5xl text-stone-100 text-right">
      {currentOperand}

    </div>
    </div>
  )
}

export default Screen
