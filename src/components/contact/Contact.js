import './Contact.css'
import mail from '../../assets/images/mail.jpg'

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    alert('You have submitted the form.')
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
            <form onSubmit={handleSubmit} className='form'>
              <label>NAME:</label>
              <input type='text' name='name' placeholder='Your name'/>
              <label>EMAIL:</label>
              <input type='email' name='email'placeholder='Email address'/>
              <label>MESSAGE:</label>
              <textarea name='message' rows='7' placeholder='Type your Message'></textarea>
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