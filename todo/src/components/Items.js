import React from 'react'
import {MdDeleteForever} from "react-icons/md";
import {useState} from 'react'


export default function Items() {
    const [done,setDone] = useState(false);
      return (
    <div onClick={() => setDone(!done)} className={' ${done === true : select-none cursor-pointer w-full border-b-2 p-3 flex justify-between'}>
        {/* leftside timings*/}
        <div>
           <span className='pr-2 text-[15px] text-slate-400'>times</span>
           <span>itemsssss
            </span> 
        </div>
        {/* rifgtside delete button */}
        <div>
            <MdDeleteForever /> 
        </div>
    </div>
  )
}
