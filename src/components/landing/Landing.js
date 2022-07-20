import './Landing.css'
import kansi from '../images/kansi.jpg'

const Landing = () => {
  return (
    <div id='home'>
      <div className='container'>
        <img src={kansi} alt='kansi'/>
        <h1>Landing page, title text over here</h1>
      </div>
    </div>
  )
}

export default Landing