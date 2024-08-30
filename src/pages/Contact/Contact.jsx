import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dsvg0ok', 'template_x8zv8ei', form.current, {
        publicKey: 'wbrU7HM66qEs4PtE-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='ctn' >
    <form ref={form} onSubmit={sendEmail}>
          <h1>Contact Us </h1>
          <input type="text" id="firstName" placeholder="First Name" name="sender_Firstname" required />
          <input type="text" id="lastName" placeholder="Last Name" name="sender_Lastname" required />
          <input type="email" id="email" placeholder="Email" name="sender_email" required />
          <input type="text" id="mobile" placeholder="Mobile" name="sender_phone" required />
          <h4>Type Your Message Here...</h4>
          <textarea name="message" required></textarea>
          <input type="submit" value="Send" id="button" />
</form>
</div>
  );
}
