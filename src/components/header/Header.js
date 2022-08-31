import './Header.css'
import logo from '../../assets/images/logo2.png'
import { useEffect, useState } from 'react'

const Header = () => {
  const [ navbarOpen, setNavbarOpen ] = useState(false)
  const [ activePage, setActivePage ] = useState('#home')

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const pages = ['home', 'recent', 'gallery', 'about', 'contact']

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setActivePage(`#${entry.target.getAttribute('id')}`)
        }
      })
    })
    for (let i = 0, len = pages.length; i<len; i++) {
      observer.observe(document.querySelector(`#${pages[i]}`))
    }
  }, [])

  return (
    <header className='container'>
      <div className='container-nav'>
        <div className='navbar-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <nav>
          <div className='navbar'>
            <ul className='navbar-links'>
              {pages.map((item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`}
                    onClick={() => setActivePage(`#${item}`)}
                    className={activePage === `#${item}` ? 'active' : ''}>
                    {item}<div className='underline'></div></a>
                </li>
              ))}
            </ul>
          </div>
          <div className='burger'>
            <div className='mobile-button' onClick={handleToggle}>
              <div className={`line1 ${navbarOpen ? 'toggle' : ''}`}></div>
              <div className={`line2 ${navbarOpen ? 'toggle' : ''}`}></div>
              <div className={`line3 ${navbarOpen ? 'toggle' : ''}`}></div>
            </div>
            <p></p>
            <div className={`mobile-menu ${navbarOpen ? 'showMenu' : ''}`}>
              <ul>
                {pages.map((item) => (
                  <li key={`link-${item}`} onClick={closeMenu}>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </header>
  )
}

export default Header