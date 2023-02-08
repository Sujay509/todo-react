import React from 'react'
import{AiOutlinePlus} from "react-icons/ai";
const Input = () => {
  return (
    <div className='p-3 flex justify-around ' >
      <input type="text" placeholder='enter data here' className='p-3 focus:outline-none border w-[90%] border-slate-400' />
      <div className='cursor-pointer w-[50px] h-[50px] bg-red-500 text-3xl text-white rounded-[50%] flex justify-center items-center'>
        <AiOutlinePlus />
      </div>
    </div>
  )
}
export default Input;
