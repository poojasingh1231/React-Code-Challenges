import React, { useEffect } from 'react'

const WindowEvent = () => {

    useEffect(() => {
        const doubleClick = () => alert('mouse pressed')
        window.addEventListener('dbclick', doubleClick)
        return () => window.removeEventListener('dblclick', doubleClick)
    }, [])
  return (
    <div>WindowEvent Listerner</div>
  )
}

export default WindowEvent