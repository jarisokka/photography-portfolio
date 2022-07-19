import './Header.css'
import logo from '../images/logo.png'

const Header = () => {

  const pages = ['home', 'recent', 'gallery', 'about', 'contact'];

  return (
    <header div className='container'>
      <div className='navbar-logo'>
          <img src={logo} alt='logo'/>
      </div>
      <nav>
        <ul>
          {pages.map((item) => (
            <li key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header