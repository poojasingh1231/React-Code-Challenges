import React, { useState } from 'react'

const ThemeToggler = () => {
    const [theme, setTheme] = useState('light');

    const toDark = () => setTheme('dark-mode-button');
    const toLight = () => setTheme('light-mode-button');



  return (
    <div className={`page ${theme}`}>
        <button onClick={toDark}>Dark</button>
        <button onClick={toLight}>Light</button>
    </div>
    // <div className={`page ${theme && 'dark-mode-button'}`}>
    //     <button className='dark-mode-button' onClick={()=>setTheme(true)}>Dark</button>
    //     <button className='light-mode-button' onClick={()=>setTheme(false)}>White</button>
    // </div>
  )
}

export default ThemeToggler