import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import mail from '../../assets/images/mail.jpg'
import env from "react-dotenv";


const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(env.SERVICE_ID, env.TEMPLATE_ID, form.current, env.PUBLIC_KEY)
      .then((result) => {
        alert('Your message has been delivered.')
        e.target.reset()
      }, (error) => {
        alert('Something went wrong, message not delivered')
      })
  }

  return (
    <section id='contact'>
      <div className='background'>
      <div className='container'>
        <div className='title'>
          <h2>Contact</h2>
          <hr></hr>
          <p>Get in touch</p>
        </div>
        <div className='contact-wrapper'>
          <div className='decoration'>
            <img src={mail} alt={mail}></img>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail} className='form'>
              <label>NAME:</label>
              <input type='text' name='name' placeholder='Your name' required/>
              <label>EMAIL:</label>
              <input type='email' name='email'placeholder='Email address' required/>
              <label>MESSAGE:</label>
              <textarea name='message' rows='7' placeholder='Type your Message' required></textarea>
              <button type='submit' className='btn'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact