import React from 'react'
import Items from './Items'

export default function Box(props) {
  const items = props.data.map(
    ()=> {
      return <Items/>
    }
  )
  return (
    <div className='p-3'>
        {items}
    </div>
  )
}
