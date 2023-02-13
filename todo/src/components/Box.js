import React from 'react'
import Items from './Items'

export default function Box(props) {
  const item = props.data.map(
    (singleData,key)=> {
      
      return <Items key={key} item={singleData.item} time={singleData.time}/>
    }
  )
  return (
    <div className='p-3'>
        {item}
    </div>
  )
}
