import emailjs from '@emailjs/browser'
import {useRef} from "react"

function Footer(props) {
    const form = useRef();
  
    // The magic that makes the emailing in React work! 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_83y28jn",
          "contact-form",
          form.current,
          "UkQaTRyXQd1QTuR_-"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  
      e.target.reset();
    };

    return( 
      <footer>
        <section className='footer-container'>
          <section className='HireMePlz'>
            <h3>Hire Me!</h3>
            <p className='my-email'>Haupt.brandon@gmail.com</p>
            <a href='https://docs.google.com/document/d/1dMG3dYKZH-3zKhAEL0s9qsO8B0ixIdVg7qP-qZ3yKIo/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a>
          </section>

          <span className='verticle-line'></span>
          
          <section className="form">
            <h3>Contact Me</h3>
            <form ref={form} onSubmit={sendEmail}>
              <section className='person_name'>
                <input type="text" name="user_name" placeholder='Your Name'/>
              </section>
              
              <section className='person_email'>
                <input type="email" name="user_email" placeholder='Your Email'/>
              </section>

              <section className='person_message'>
                <textarea name="message" placeholder='Your Message' />
              </section>

              <button type="submit" value="Send">Submit</button>
            </form>
          </section>

        </section>
       
      </footer>
    );
  }
  
  export default Footer;