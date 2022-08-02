import './About.css'
import profile from '../../assets/images/profiili.jpg'

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='title'>
          <h2>About</h2>
          <hr></hr>
          <p>Get to know me</p>
        </div>
        <div className='about-wrapper'>
          <div className='about-desc'>
          <p>I am a Finland based amateur photographer and an entrepreneur.</p>
          <br></br>
          <p>Photography has long been a passion of mine. Since I picked up my first SLR camera, I was hooked and I`ve been learning about capturing light ever since.</p>
          <br></br>
          <p>I love to spend my time out in the woods, attempting to capture that special moment in time. While I love to travel, most of my pictures are from my beautiful home country. There is something truly special about Finnish nature and the quality of light.</p>
          <br></br>
          <p>I have a particular passion for landscape and wildlife photography, but I don`t limit myself  to these categories and will photograph anything interesting that captures my attention.
  As a self-taught photographer, I challenge myself to learn new things and continually strive to improve my talent. I am always seeking out the best lighting conditions and new interesting places. Along with lighting and the environment, I pay close attention to technical settings.</p>
          <br></br>
          <p>I am a Canon user and my current camera is Canon 5D Mark IV. I respect sturdy tipods like Manfrotto 055 and use mostly Canon L series lenses. If you have any queries relating to my work, please don`t hesitate to contact me. I am also open for collaborations and work offers.</p>
          </div>
          <div className='profile'>
            <img src={profile} alt='profile'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About