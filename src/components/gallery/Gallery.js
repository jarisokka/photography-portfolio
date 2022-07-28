import './Gallery.css'
import kansi from '../../assets/images/kansi.jpg'

const Gallery = () => {
  return (
    <section id='gallery'>
      <div className='container'>
        <h2>Gallery</h2>
        <p>Praesent vel felis lectus. Nullam volutpat quam mi, non convallis quam mattis aliquet.</p>
        <div className='gallery-wrapper'>
          <div className='gallery'>
            <div className='gallery-image'>
              <img src={kansi} alt='gallery1'/>
            </div>
            <div className='gallery-title'>
              <h4>Landscapes</h4>
            </div>
            <div className='gallery-desc'>
              <h3>Pictures from Finland</h3>
              <hr className='line'></hr>
              <p>Here are some of my favorite landscape pictures from my home country.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery