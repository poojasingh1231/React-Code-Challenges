import React from 'react'

const Color = ({hex, name, setBackgroundColor}) => {
  return (
   <>
   <button className='column' style={{backgroundColor: hex}}
   onClick={() => setBackgroundColor(hex)}>{name}</button>
   </>
  )
}

export default Color