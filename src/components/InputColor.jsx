import React, { useContext, useEffect, useState } from 'react'
import { ChromePicker } from 'react-color';
import { InputContext } from '../App';

const InputColor = () => {
    const [color,setColor] = useState ('#054080');
    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    const {inputValue , setInputValue} = useContext(InputContext);
    useEffect(() =>{
      setInputValue({... inputValue, color: color})
    }, [color])

    const handleChange = color => setColor(color.hex);


  return (
    <div>
        <label className='font-semibold text-md'>Cor</label>
        <div className='flex items-center gap-2'>
            <div 
            style={{background:color}} 
            className='w-10 h-8 cursor-pointer border-4' 
            onClick={() => setDisplayColorPicker(!displayColorPicker)}></div>
            <span>{color}</span>
        </div>
        {
            displayColorPicker && <div className='absolute mt-2'><ChromePicker color={color} onChange={handleChange}/></div>
        }
    </div>
  )
}

export default InputColor