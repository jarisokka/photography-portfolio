import { useState, useEffect } from 'react'
import './Landing.css'
import kansi from '../../assets/images/kansi.jpg'


const Landing = () => {
  const [wordNum, setWordNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [time, setTime] = useState(100)

  const textList = ['my World of Photography']

  useEffect(() => {
    let timer = setInterval(() => tick(), time)

    return () => {clearInterval(timer)}
  })

  const tick = () => {
    setTime(100)

    //keep track of the word in textList
    let i = wordNum % textList.length

    //remove or add letters
    let fullText = textList[i]
    let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)

    setText(updateText)

    if(!isDeleting && updateText === fullText) {
      setIsDeleting(true)
      //end of the text, let´s take a break
      setTime(20000)

    } else if (isDeleting && updateText === '') {
      setIsDeleting(false)
      setWordNum(wordNum +1)
      //start of the text, let´s take a break
      setTime(1000)
    }

  }

  return (
    <div id='home'>
      <div className='cover'>
        <img src={kansi} alt='cover_image'/>
      </div>
      <div className='container'>
        <div className='container-title'>
          <div>
            <h1>Welcome to</h1>
          </div>
          <div>
            <h1><span>{text}</span></h1>
          </div>
          <div>
            <hr></hr>
            <a href={'#gallery'}>To my gallery</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing