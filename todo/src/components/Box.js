import React from 'react'
import Items from './Items'

export default function Box(props) {
  const item = props.data.map(
    (singleData,index)=> {
      
      return <Items removeHandler = {props.removeHandler} key={index} id={index} item={singleData.item} time={singleData.time}/>
    }
  )
  return (
    <div className='p-3'>
        {item}
    </div>
  )
}
