import emailjs from '@emailjs/browser'
import {useRef} from "react"
// import Resume from './resume/Frontend Dev Brandon Haupt - SEI Resume.pdf'

function Footer(props) {
    const form = useRef();
  
    // The magic that makes the emailing in React work! 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_5rxy7v7",
          "template_3exua6e",
          form.current,
          "ebPdNm832_b8TG9Qv"
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
          <section className='HireMePlz' id='footer'>
            <h3>Hire Me!</h3>
            <p className='my-email'>LanceBowersJr1434@gmail.com</p>
            <a href='https://docs.google.com/document/d/1GodHBA_SBqsqcz-mkarK2L37OtoGd_MR/edit?usp=sharing&ouid=103595109773147856430&rtpof=true&sd=true' target="_blank" rel="noopener noreferrer">Resume</a><br/>
            <a href='https://www.linkedin.com/in/lanbow/' target="_blank" rel="noopener noreferrer">Linkedin</a><br/>
            <a href='https://github.com/lanbow93' target="_blank" rel="noopener noreferrer">Github</a>
          </section>

          <span className='verticle-line'></span>
          
          <section className="form">
            <h3>Contact Me</h3>
            <form ref={form} onSubmit={sendEmail}>
              <section className='person_name'>
                <input type="text" name="user_name" placeholder='Your Name' required/>
              </section>
              
              <section className='person_email'>
                <input type="email" name="user_email" placeholder='Your Email' required/>
              </section>

              <section className='person_message'>
                <textarea name="message" placeholder='Your Message' required/>
              </section>

              <button type="submit" value="Send">Submit</button>
            </form>
          </section>

        </section>
       
      </footer>
    );
  }
  
  export default Footer;