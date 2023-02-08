import React from 'react'
import Items from './Items'

export default function Box(props) {
  const items = props.data.map(
    (singleData,key)=> {
      
      return <Items key={key} items={singleData.item} time={singleData.time}/>
    }
  )
  return (
    <div className='p-3'>
        {items}
    </div>
  )
}
