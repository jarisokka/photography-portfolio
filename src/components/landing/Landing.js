import './Landing.css'
import kansi from '../images/kansi.jpg'

const Landing = () => {
  return (
    <section id='home'>
      <div className='container'>
        <img src={kansi} alt='kansi'/>
        <h1>Landing page, title text over here</h1>
      </div>
    </section>
  )
}

export default Landing