import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

import './Contact.css'

const Contact = () => {
  const email = 'niclastdev3@gmail.com'
  const phone = 6197721369

  const copyEmail = () => {
  navigator.clipboard.writeText(email)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText(phone)  
    }

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_qwh6o7f', 'template_65yipgf', e.target, 'Yc35a8mD_GQzyNj0s')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        e.target.reset()
    }

    return (
      <>
      <div id='contact'>
        <h2 className='contact-title'>contact me</h2>
      <div id='contact-container'>
        <div id='cool'> 
          <div className='location-container'> 
            <div className='icon'>
              <MdLocationOn />
            </div>
            <p id='icon-text'>San Diego, CA</p>
          </div>

          <div 
          className='email-container'> 
            <div className='icon'>
              <HiOutlineMailOpen />
            </div>
            <div >
                <p id='icon-text' 
                data-tooltip='Click to Copy' 
                className= 'email-link' 
                onClick={copyEmail}>
                niclastdev3@gmail.com 
                </p>
              </div>
          </div>
     
          <div className='phone-container'> 
            <div className='icon'>
              <FaPhoneAlt />
            </div>
            <p className= 'phone-link'
            data-tooltip='Click to Copy' 
            id='icon-text'
            onClick={copyPhone}>
              619-772-1369 
              </p>
          </div> 
        </div>
      <div id='form-container'>
        <form onSubmit={sendEmail}>
              <input style={{color:'white'}} id='fname' type="text" name="name" placeholder='Full Name'/>
              <div id='side-by-side'>
              <input style={{color:'white'}} id='email' type="text" name="email" placeholder='Email'/>          
              <input style={{color:'white'}} id='phone' type="text" name="phone" placeholder='Phone Number'/>
              </div>
              <textarea id='message' rows="10" placeholder='Enter your message' name="message"></textarea>
              <button id='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
      </>
    )
  }
  
export default Contact