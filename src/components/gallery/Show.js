import { useState } from 'react'
import './Show.css'
import {AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Show = ({showGallery, setShowGallery}) => {

  const [ selection, setSelection ] = useState(0)

  const handleToRight = () => {
    setSelection(selection === (showGallery.length - 1) ? 0 : selection + 1)
  }

  const handleToLeft = () => {
    setSelection(selection === 0 ? (showGallery.length - 1) : selection - 1)
  }

  const handleClick = (event) => {
    if (event.target.classList.contains('close')) {
      setShowGallery(null)
    }
  }

  return (
    <div className='display close' onClick={handleClick}>
      <div className='close close-button'> X</div>
      <div className='image-holder'>
        <div className='left-button' onClick={handleToLeft}> <AiOutlineLeft /></div>
        <img src={showGallery[selection]} alt={selection}/>
        <div className='right-button' onClick={handleToRight}> <AiOutlineRight /></div>       
      </div>
      <div className='all-images'>
        {showGallery.map((image, index) => (
          <img style={{border: selection === index ? '2px solid white' : ''}}
          key={index} src={image} alt={image}
          onClick={() => setSelection(index)}/>
        ))}
      </div>
    </div>
  )
}

export default Show