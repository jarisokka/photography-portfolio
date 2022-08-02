import { useState } from 'react'
import { galleryData } from '../../assets/data/gallery-data'
import Show from './Show'
import './Gallery.css'

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(null)

  const handleClick = (images) => {
    setShowGallery(images)
  }

  return (
    <section id='gallery'>
      <div className='background'>
      <div className='container'>
        <div className='title'>
        <h2>Gallery</h2>
        <hr></hr>
        <p>Praesent vel felis lectus. Nullam volutpat quam mi, non convallis quam mattis aliquet.</p>
        </div>
        <div className='gallery-wrapper'>
        {galleryData.map(({id, coverimage, gategory, title, description, images}) => {
          return (
            <div key={id} className='gallery'>
              <div className='gallery-image'>
                <img src={coverimage} alt={id} onClick={() => handleClick(images)}/>
              </div>
              <div className='gallery-gategory'>
                <h4>{gategory}</h4>
              </div>
              <div className='gallery-desc'>
                <h3>{title}</h3>
                <hr className='line'></hr>
                <p>{description}</p>
              </div>
            </div>
          )
        })}
        </div>
        {showGallery && (<Show showGallery={showGallery} setShowGallery={setShowGallery}/>)}
      </div>
      </div>
    </section>
  )
}

export default Gallery
