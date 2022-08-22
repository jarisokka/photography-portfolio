import './About.css'
import profile from '../../assets/images/profiili.jpg'
import insta from '../../assets/images/instagrid.jpg'
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { Fa500Px } from 'react-icons/fa'

const About = () => {

  const textOriginal = 'FOLLOW - ME - ON - INSTAGRAM -'

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
            <p>If you have any queries relating to my work, please don`t hesitate to contact me. I am also open for collaborations and work offers.</p>
          </div>
          <div className='bg-styling'></div>
          <div className='profile'>
            <img src={profile} alt='profile'/>
          </div>
          <div className='social'>
            <a href='https://instagram.com/jarisokka' target='_blank' rel="noreferrer"><BsInstagram/></a>
            <a href='https://500px.com/jarisokka' target='_blank' rel="noreferrer"><Fa500Px/></a>
            <a href='https://facebook.com/jarisokka' target='_blank' rel="noreferrer"><BsFacebook/></a>
            <a href='https://www.youtube.com/channel/UCrfBdIqXUqPBF2tdBc3cURA' target='_blank' rel="noreferrer"><BsYoutube/></a>
          </div>
        </div>
      </div>
      <div className='instagram'>
        {<img src={insta} alt='instagram'/>}
        <div className='instagram_btn style_btn'>
          <p>
            {textOriginal.split('').map((char, index) =>
              <span style={{ transform: 'rotate(' + index * 12 + 'deg)' }} key={index}>
                {char}
              </span>
            )}
          </p>
          <a href='https://instagram.com' target='_blank' rel="noreferrer"><BsInstagram/></a>
        </div>
      </div>
    </section>
  )
}

export default About