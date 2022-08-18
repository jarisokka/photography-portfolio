import { useState } from 'react'
import './Show.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Show = ({ showGallery, setShowGallery }) => {

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
      <div className='show-wrapper'>
        <div className='left-button' onClick={handleToLeft}> <AiOutlineLeft /></div>
        <div className='image-holder'>
          <div className={showGallery[selection].alignment === 'horizontal' ? 'slide-horizontal' : 'slide-vertical'}>
            <img src={showGallery[selection].image} alt={showGallery[selection].id}/>
          </div>
        </div>
        <div className='right-button' onClick={handleToRight}> <AiOutlineRight /></div>
      </div>
      <div className='all-images'>
        {showGallery.map((data, index) => (
          <img style={{ border: selection === index ? '2px solid white' : '' }}
            key={index} src={data.image} alt={data.image}
            onClick={() => setSelection(index)}/>
        ))}
      </div>
    </div>
  )
}

export default Show