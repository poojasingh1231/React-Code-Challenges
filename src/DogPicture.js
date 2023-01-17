import React, { useEffect, useState } from 'react'

const dogpic = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    return data.message
    
}

const DogPicture = () => {
    
const [image, setImage] = useState("");

useEffect(() => {
    dogpic().then(pic => setImage(pic))   
}, [])

return (
    <div className='dog-pics'>
        <img src={image} alt=""/>
        <button onClick={async(e) => setImage(await dogpic())}>🐶</button>
    </div>
  )
}

export default DogPicture