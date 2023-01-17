import React, {useEffect, useState} from 'react'

const StoreScore = () => {
    const [count, setCount] = useState(parseInt(localStorage.getItem('key')) || 0);

    useEffect(() => {
        localStorage.setItem('key', count)
    }, [count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default StoreScore