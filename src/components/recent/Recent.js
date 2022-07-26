import { useState, useEffect } from 'react'
import './Recent.css'
import kuva1 from '../../assets/images/recent/test1.jpg'
import kuva2 from '../../assets/images/recent/test2.jpg'
import kuva3 from '../../assets/images/recent/test3.jpg'

const Recent = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [kuva1, kuva2, kuva3]

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
  }
  
  useEffect(() => {
    let runSlides = setInterval(() => nextSlide(), 5000)
 
    return () => {clearInterval(runSlides)}
  })

  return (
    <section id='recent'>
      <div className='container'>
        <h2>Recent</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu metus sed sem malesuada aliquam ac nec risus. Proin id odio nec ligula bibendum consequat. In est elit, tristique non mauris tempor, finibus fringilla mi. Pellentesque blandit ac mauris eu volutpat. In lobortis nisl vel congue facilisis. Pellentesque ultricies turpis leo, et consectetur massa dictum non. Vivamus mattis commodo elit, in hendrerit dolor mattis sit amet. Sed iaculis diam a rhoncus volutpat. Integer vel varius augue. Maecenas sollicitudin, est in finibus semper, justo enim malesuada lectus, at dictum nibh enim et urna. Fusce pulvinar enim id arcu varius dignissim. Praesent vel felis lectus. Nullam volutpat quam mi, non convallis quam mattis aliquet.</p>
          <div className='recent'>
            {slides.map((kuva, index) => {
              return (
                <div className={index === currentSlide ? 'current' : 'slide'} key={index}>
                  {index === currentSlide && (
                    <div>
                      <img src={kuva} alt={kuva}/>
                    </div>
                  )}
                </div>
              )
            }
            )}
          </div>
        </div>
    </section>
  )
}

export default Recent