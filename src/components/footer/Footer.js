import './Footer.css'
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { Fa500Px } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='footer-socials'>
        <a href='https://instagram.com/jarisokka' target='_blank' rel="noreferrer"><BsInstagram/></a>
        <a href='https://500px.com/jarisokka' target='_blank' rel="noreferrer"><Fa500Px/></a>
        <a href='https://facebook.com/jarisokka' target='_blank' rel="noreferrer"><BsFacebook/></a>
        <a href='https://www.youtube.com/channel/UCrfBdIqXUqPBF2tdBc3cURA' target='_blank' rel="noreferrer"><BsYoutube/></a>
      </div>
      <div className='copyright'>
        <small>This page uses only necessary cookies. These cookies do not store any personal information.</small>
        <br></br>
        <small>All material &copy; copyright by Jari Sokka. All rights recerved.</small>
      </div>
      <div className='the-end'></div>
    </footer>
  )
}

export default Footer