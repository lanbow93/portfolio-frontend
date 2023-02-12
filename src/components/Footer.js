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
        <section className='HireMePlz'>
          
        </section>
        <section className="form">
        <h4>Message Me</h4>
          <form ref={form} onSubmit={sendEmail}>
            <section className='person_name'>
              <input type="text" name="user_name" placeholder='Name'/>
            </section>
            
            <section className='person_email'>
              <input type="email" name="user_email" placeholder='Email'/>
            </section>

            <section className='person_message'>
              <textarea name="message" placeholder='Message' />
            </section>

            <input type="submit" value="Send" />
          </form>

        </section>
      </footer>
    );
  }
  
  export default Footer;