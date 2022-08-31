//Tämä ei ole käytössä, talessa mahdollisesti myöhempää viritelmää varten.
import { useState, useEffect } from 'react'

const PageHook = (ref, page, props) => {
  console.log('tuli hookiin', ref, page, props)
  const [ visible, setVisible ] = useState(false)

  useEffect(() => {
    console.log('fire hook')
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {observer.unobserve(ref.current)}
  }, [ref, page])

  if(visible) {
    props.setActivePage(page)
    console.log('vaihdettu', props.activePage)
  }
  return page
}

export default PageHook