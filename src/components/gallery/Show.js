import './Show.css'

const Show = ({showGallery, setShowGallery}) => {

  const handleClick = () => {
    console.log('clicked')
    setShowGallery(null)
  }

  return (
    <div className='close' onClick={() => handleClick()}>
      Hello
      <img src={showGallery[0]} alt={showGallery[0]}/>
    </div>
  )
}

export default Show