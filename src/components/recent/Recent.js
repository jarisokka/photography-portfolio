import { useState, useEffect } from 'react'
import './Recent.css'
import { sliderData } from '../../assets/data/slider-data'


const Recent = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1)
  }
  
  useEffect(() => {
    let runSlides = setInterval(() => nextSlide(), 5000)
 
    return () => {clearInterval(runSlides)}
  })

  return (
    <section id='recent'>
      <div className='container'>
        <div className='title'>
          <h2>Recent</h2>
          <hr></hr>
          <p>Here are some of my recent pictures</p>
        </div>
        <div className='recent-wrapper'>
          <div className='styiling'></div>       
          <div className='recent'>
              {sliderData.map((data, index) => {
                return (
                  <div className={index === currentSlide ? 'current' : 'slide'} key={index}>
                    {index === currentSlide && (
                      <div>
                        <div className='image-container'>
                          <div className={data.alignment === 'horizontal' ? 'horizontal' : 'vertical'}>
                            <img src={data.image} alt={data.id}/>
                          </div>
                        </div>
                        <div className='details'>
                          <h3>{data.title}</h3>
                          <p>Settings: {data.settings}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recent