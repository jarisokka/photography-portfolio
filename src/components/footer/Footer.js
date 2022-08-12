import './Footer.css'
import {BsInstagram, BsFacebook} from 'react-icons/bs'
import {Fa500Px} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='footer-socials'>
        <a href='https://instagram.com' target='_blank' rel="noreferrer"><BsInstagram/></a>
        <a href='https://500px.com' target='_blank' rel="noreferrer"><Fa500Px/></a>
        <a href='https://facebook.com' target='_blank' rel="noreferrer"><BsFacebook/></a>
      </div>
      <div className='copyright'>
        <small>All material &copy; copyright by Jari Sokka. All rights recerved.</small>
      </div>
      <div className='the-end'></div>
    </footer>
  )
}

export default Footer