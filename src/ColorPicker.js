import React, { useState } from 'react'
import Color from './Color';

const colors = [{
    hex: '#91A6FF',
    name: 'Cornflower Blue'
  },
  {
    hex: '#FF88DC',
    name: 'Persian Pink'
  },
  {
    hex: '#80FF72',
    name: 'Screamin Green'
  },
  {
    hex: '#FF5154',
    name: 'Tart Orange'
  }]
  

const ColorPicker = () => {
    const [ backgroundColor, setBackgroundColor] = useState('');
    return (
        <div className="page" style={{backgroundColor}}>
            {
              colors.map(temp => (
                <Color key={temp.hex} hex={temp.hex} name={temp.name} setBackgroundColor= {setBackgroundColor}/>
              ))
            }
            
        </div>
    )
}

export default ColorPicker

